/**
 *
 * TomoWallet - Utility - Blockchain supported methods
 *
 */
// ===== IMPORTS =====
// Modules
import Web3 from 'web3';
import HDWalletProvider from 'truffle-hdwallet-provider';
import { isEqual as _isEqual } from 'lodash';
// Utilities & Constants
import { ENUM } from '../constants';
import trc20 from '../contractABIs/trc20.json';
import trc21 from '../contractABIs/trc21.json';
// ===================

// ===== METHODS =====
/**
 * mnemonicToPrivateKey
 *
 * Get private key from mnemonic and RPC server's HD path
 * @param {String} mnemonic A string of 12 words
 * @param {Object} serverConfig Current RPC server configurations
 */
const mnemonicToPrivateKey = (mnemonic = '', serverConfig = {}) => {
  const web3 = generateWeb3(mnemonic, serverConfig);
  if (web3) {
    const pkInBytes =
      web3.currentProvider.wallets[web3.currentProvider.addresses[0]]._privKey;

    return web3.utils.bytesToHex(pkInBytes);
  }
  return '';
};

/**
 * generateWeb3
 *
 * Create a new Web3 object with provided mnemonic & RPC server configurations
 * @param {String} mnemonic A string of 12 words
 * @param {Object} serverConfig Current RPC server configurations
 * @param {function} callback Action to handle error cases
 */
const generateWeb3 = (
  mnemonic = '',
  serverConfig = {},
  callback = () => {},
) => {
  const { host, hdPath } = serverConfig;
  let provider;
  try {
    provider = new HDWalletProvider(mnemonic, host, 0, 1, true, hdPath);
    return new Web3(provider);
  } catch (error) {
    callback(error);
    return null;
  }
};

/**
 * getWalletInfo
 *
 * Retrieve some wallet's basic information from a Web3 object
 */
const getWalletInfo = web3 => {
  if (web3) {
    const address = web3.currentProvider.addresses[0];
    return Promise.all([web3.eth.getBalance(address)]).then(([balance]) => ({
      address,
      balance: Number(web3.utils.fromWei(balance)),
    }));
  }
  return null;
};

/**
 * decryptWalletInfo
 *
 * Decrypt current encrypted wallet info by password
 * @param {Web3} web3 A Web3 object with supported APIs
 * @param {Wallet} rawInfo Encrypted Wallet object
 */
const decryptWalletInfo = (web3, rawInfo) => {
  if (web3 && rawInfo) {
    return web3.eth.accounts.wallet.decrypt(
      rawInfo,
      process.env.REACT_APP_WALLET_ENCRYPT_PASSWORD,
    );
  }
  return null;
};

/**
 * estimateTRC20Gas
 *
 * Retrieve gas price for the specific transaction
 * @param {Web3} web3 A Web3 object with supported APIs
 * @param {Object} txData A transaction object (including from, to, value, ...)
 */
const estimateTRC20Gas = (web3, txData) => {
  return web3.eth.estimateGas(txData);
};

/**
 * sendToken
 *
 * Execute token transfer contract
 * @param {Web3} web3 A Web3 object with supported APIs
 * @param {*} contractData An object which contains contract data
 */
const sendToken = (web3, contractData) => {
  const { amount, contractAddress, decimals, from, to, type } = contractData;

  const contract = new web3.eth.Contract(
    _isEqual(type, ENUM.TOKEN_TYPE.TRC21) ? trc21 : trc20,
    contractAddress,
  );
  const weiAmount = web3.utils
    .toBN(amount)
    .mul(web3.utils.toBN(10 ** decimals))
    .toString();
  if (_isEqual(type, ENUM.TOKEN_TYPE.TRC21)) {
    return contract.methods
      .estimateFee(weiAmount)
      .call({ from, to })
      .then(gasPrice => {
        return contract.methods
          .transfer(to, weiAmount)
          .send({ from, gasPrice });
      });
  } else {
    return estimateTRC20Gas(web3, { from, to, value: weiAmount }).then(
      gasPrice => {
        console.warn('sendToken - transfer', gasPrice, contractData, weiAmount);

        return contract.methods
          .transfer(to, weiAmount)
          .send({ from, to: contractAddress, gasPrice, gasLimit: '50000' })
          .then(hash => console.log(hash))
          .catch(ex => {
            console.log(ex);
          });
      },
    );
  }
};
// ===================

export {
  decryptWalletInfo,
  estimateTRC20Gas,
  generateWeb3,
  getWalletInfo,
  mnemonicToPrivateKey,
  sendToken,
};
