/**
 *
 * TomoWallet - My Wallet Page - Saga
 *
 */
// ===== IMPORTS =====
// Modules
import { call, put, takeLatest } from "redux-saga/effects";
import _get from "lodash.get";
import _map from "lodash.map";
import _isEmpty from "lodash.isempty";
// Utilities & Constants
import request from "../../utils/request";
import { getNetwork, setPrivacyInfo, getLastUTXO, bnToDecimals, checkSpentUTXO } from "../../utils";
import {
  LOAD_TOKEN_OPTIONS,
  LOAD_TRANSACTION_DATA,
  LOAD_COIN_DATA,
  SCAN_PRIVACY_DATA,
  SCAN_PRIVACY_TRANSACTION
} from "./constants";
import { API } from "../../constants";
import {
  loadTokenOptionsSuccess,
  loadTransactionDataSuccess,
  updateSendTokenErrors,
  loadCoinDataSuccess,
  loadCoinDataFailed,
  scanPrivacyDataSuccess,
  scanPrivacyDataFailed,
  scanPrivacyTransactionSuccess,
  scanPrivacyTransactionFailed,
} from "./actions";
import { toggleLoading } from "../Global/actions";
// ===================

// ===== SAGA =====
export function* loadTokens(actionData) {
  try {
    yield put(toggleLoading(true));
    const { params } = actionData;
    const apiBase = _get(API, [getNetwork()], "");
    const response = yield call(
      request,
      `${apiBase.GET_TOKENS}?holder=${params.address}`
    );

    if (response) {
      yield put(loadTokenOptionsSuccess(response));
      yield put(toggleLoading(false));
    }
  } catch {
    yield put(toggleLoading(false));
    yield put(
      updateSendTokenErrors({
        tokenTable: "Cannot load token list!"
      })
    );
  }
}

export function* loadTransaction(actionData) {
  try {
    yield put(toggleLoading(true));
    const { params } = actionData;
    const apiBase = _get(API, [getNetwork()], "");
    const walletTransactions = yield call(
      request,
      `${apiBase.WALLET_GET_TRANSACTIONS}?address=${params.address}&page=${params.page}&limit=5`
    );

    if (!_isEmpty(walletTransactions)) {
      var updatedItems = walletTransactions.map(e => {
        return {
          tokenType: e.symbol,
          txHash: e.hash,
          createdTime: e.timestamp,
          type: e.type,
          from: e.from,
          to: e.to,
          amount: e.amount
        };
      });

      yield put(
        loadTransactionDataSuccess({
          items: updatedItems,
          currentPage: params.page,
          total: 500,
          pages: 10,
          address: params.address
        })
      );
    }
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleLoading(false));
    yield put(
      updateSendTokenErrors({
        transactionTable: "Cannot load transaction list!"
      })
    );
  }
}

export function* loadCoin() {
  try {
    const response = yield call(
      request,
      "https://widgets.coinmarketcap.com/v2/ticker/2570/?ref=widget&convert=USD"
    );
    if (response.data) {
      yield put(loadCoinDataSuccess(response.data));
    } else {
      yield put(loadCoinDataFailed("Cannot load TomoChain coin data."));
    }
  } catch (error) {
    yield put(loadCoinDataFailed(error.message));
  }
}

export function* scanPrivacy(actionData) {
  try {
    yield put(toggleLoading(true));
      const wallet = _get(actionData, ['wallet', 'privacy', 'privacyWallet'], {})
      const address = _get(actionData, ['wallet', 'address'], '')
      const response = yield call([wallet, wallet.scan]);

      if (response) {
          const utxos = wallet.utxos
          const checkedUTXO = yield checkSpentUTXO(wallet, utxos)
          const newUTXO = []
          for (let i = 0; i < checkedUTXO.length; i++) {
            if (!checkedUTXO[i]) {
              newUTXO.push(utxos[i])
            }
          }
          wallet.updateUTXOs(newUTXO)
          response.balance = wallet.balance.toString(10);
          response.mainBalance = _get(actionData, ['wallet', 'balance'], 0)
          yield put(scanPrivacyDataSuccess(response));
          setPrivacyInfo({ address, ...wallet.state() });
          yield put(toggleLoading(false));
      }
  } catch (error) {
    yield put(toggleLoading(false));
    yield put(scanPrivacyDataFailed(error))
  }
}

export function* scanPrivacyTransaction(actionData) {
  try {
    yield put(toggleLoading(true));
    const wallet = _get(actionData, ['wallet', 'privacy', 'privacyWallet'], {});
    const privacyAddress = _get(actionData, ['wallet', 'privacy', 'privacyAddress', 'pubAddr'], '');
    const address = _get(actionData, ['wallet', 'address'], '')
    const lastUTXO = getLastUTXO(wallet).txID

    let last30Txs = []
    for (let i = lastUTXO - 48; i <=lastUTXO; i++) {
      last30Txs.push(i)
    }
    last30Txs = last30Txs.sort((a, b) => b - a)
    const response = yield call([wallet, wallet.getTxs], last30Txs);
    const result = []
    for (let i = 0; i < response.length; i++) {
      const data = _map(response[i][1], byte => byte.substr(2, 2)).join('');
      const owner = yield call([wallet, wallet.checkTxOwnership], response[i][0], Buffer.from(data, 'hex'))
      
      if (owner) {
        result.push({
          createdTime: parseInt(owner.createdAt),
          from: owner.receiver === privacyAddress ? address : privacyAddress,
          to: owner.receiver,
          amount: bnToDecimals(owner.amount, 9)
        })
      }
    }
    yield put(scanPrivacyTransactionSuccess({
      items: result,
      currentPage: 1,
      total: 500,
      pages: 1,
      address: privacyAddress
    }))

    /// store txindex
    yield put(toggleLoading(false));
  } catch (error) {
    yield put(toggleLoading(false));
    yield put(scanPrivacyTransactionFailed(error));
  }
}

function* rootSaga() {
  yield takeLatest(LOAD_TOKEN_OPTIONS, loadTokens);
  yield takeLatest(LOAD_TRANSACTION_DATA, loadTransaction);
  yield takeLatest(LOAD_COIN_DATA, loadCoin);
  yield takeLatest(SCAN_PRIVACY_DATA, scanPrivacy);
  yield takeLatest(SCAN_PRIVACY_TRANSACTION, scanPrivacyTransaction);
}
// ================

export default rootSaga;
