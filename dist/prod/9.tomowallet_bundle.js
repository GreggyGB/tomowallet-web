(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{910:function(e,t,n){e.exports=n.p+"69f1aac0414a89e03b114438d4ed352c.png"},969:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),c=n(31),l=n(28),u=n(63),f=n(42),s=n(10),p=n.n(s),m=n(79),E=n.n(m),y=n(872),b=n(897),d=n(851),O=n(906),_=n(907),T=n(866),h=n(908),S=n(909),P=n(848),C=n(849),v=n(74),g=n(44),N=n(84),R=n(17),w="TOMOWALLET/CREATE_NEW_WALLET/ADD_WORD",A="TOMOWALLET/CREATE_NEW_WALLET/CLEAR_COMPARISON",I="TOMOWALLET/CREATE_NEW_WALLET/REMOVE_WORD",j="TOMOWALLET/CREATE_NEW_WALLET/RESET_STATE",W="TOMOWALLET/CREATE_NEW_WALLET/SET_FORM_STATES",M="TOMOWALLET/CREATE_NEW_WALLET/SET_PRIVATE_KEY",L="TOMOWALLET/CREATE_NEW_WALLET/SHUFFLE_MNEMONIC",V="TOMOWALLET/CREATE_NEW_WALLET/STORE_MNEMONIC",k="TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_CONFIRMATION_POPUP",F="TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VIEW_POPUP",K="TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VISIBLE",U="TOMOWALLET/CREATE_NEW_WALLET/UPDATE_ERRORS",Y=1,D=2,x=3,H=4,G=n(5),B=n(354),z=n.n(B);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=Q(t).call(this,e))||"object"!==J(r)&&"function"!=typeof r?q(o):r).handleRedirect=n.handleRedirect.bind(q(n)),n.handlePrepareMnemonic=n.handlePrepareMnemonic.bind(q(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleRedirect",value:function(e){this.props.history.push(e)}},{key:"handlePrepareMnemonic",value:function(){var e=this.props,t=e.storeMnemonic,n=e.rpcServer,o=e.setPrivateKey,r=e.setFormState;new Promise(function(e){var r=Object(b.generateMnemonic)();t(r),o(Object(R.v)(r,n)),e()}).then(function(){r(D)})}},{key:"render",value:function(){var e=this,t=this.props.intl.formatMessage;return r.a.createElement(d.a,null,r.a.createElement(O.a,null,r.a.createElement(v.n,null,t(G.d.WARNING_HEADER_TITLE)),r.a.createElement(_.a,null,"".concat(t(G.d.WARNING_HEADER_ALTERNATIVE_TEXT)," "),r.a.createElement(v.t,{role:"presentation",onClick:function(){return e.handleRedirect(G.e.IMPORT_WALLET)},className:"d-inline-block"},t(G.d.WARNING_HEADER_ALTERNATIVE_LINK)))),r.a.createElement(v.z,null,r.a.createElement(T.a,{src:z.a,alt:t(G.d.WARNING_IMAGE_ALT)})),r.a.createElement(h.a,null,r.a.createElement(v.o,null,t(G.d.WARNING_CONTENT_TITLE)),r.a.createElement(_.a,null,t(G.d.WARNING_CONTENT_DESCRIPTION)),r.a.createElement(_.a,null,r.a.createElement(v.s,null,t(G.d.WARNING_CONTENT_DESCRIPTION_DANGER)))),r.a.createElement(S.a,null,r.a.createElement(P.a,null,r.a.createElement(C.a,{size:6},r.a.createElement(v.h,{onClick:function(){return e.handleRedirect(G.e.LOGIN)}},t(G.d.COMMON_BUTTON_BACK))),r.a.createElement(C.a,{size:6},r.a.createElement(v.h,{btnYellow:!0,onClick:this.handlePrepareMnemonic},t(G.d.WARNING_BUTTON_NEXT_TO_RECOVERY_PHRASE))))))}}])&&X(n.prototype,a),i&&X(n,i),t}();$.propTypes={intl:i.a.object,history:i.a.object,rpcServer:i.a.object,setFormState:i.a.func,setPrivateKey:i.a.func,storeMnemonic:i.a.func},$.defaultProps={intl:{},history:{},rpcServer:{},setFormState:function(){},setPrivateKey:function(){},storeMnemonic:function(){}};var ee=Object(c.d)(g.c,u.f,N.d)($),te=n(871),ne=n(241);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var le=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=ae(t).call(this,e))||"object"!==oe(r)&&"function"!=typeof r?ie(o):r).handleConvertMnemonic=n.handleConvertMnemonic.bind(ie(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleConvertMnemonic",value:function(){return this.props.mnemonic.split(" ")}},{key:"render",value:function(){var e=this.props,t=e.intl.formatMessage,n=e.setFormState,o=e.toggleConfirmationPopup,a=e.toggleKeyViewPopup,i=this.handleConvertMnemonic();return r.a.createElement(d.a,null,r.a.createElement(O.a,null,r.a.createElement(v.n,null,t(G.d.RECOVERY_PHRASE_TITLE))),r.a.createElement(h.a,null,r.a.createElement(v.o,null,t(G.d.RECOVERY_PHRASE_NOTIFICATION_TITLE)),r.a.createElement(_.a,null,t(G.d.RECOVERY_PHRASE_NOTIFICATION_DESCRIPTION)),r.a.createElement(ne.a,{className:"mb-4 mt-4 box-border",mnemonic:i}),r.a.createElement(P.a,{noGutters:!0},r.a.createElement(C.a,null,r.a.createElement(v.w,{href:"#"},r.a.createElement(te.a,{icon:["far","save"],className:"mr-2"}),t(G.d.RECOVERY_PHRASE_BUTTON_SAVE))),r.a.createElement(C.a,{className:"text-right"},r.a.createElement(v.t,{role:"presentation",onClick:function(){return a(!0)}},t(G.d.RECOVERY_PHRASE_BUTTON_VIEW_PRIVATE_KEY),r.a.createElement(te.a,{icon:"arrow-right",className:"ml-2"}))))),r.a.createElement(S.a,null,r.a.createElement(P.a,null,r.a.createElement(C.a,{size:6},r.a.createElement(v.h,{onClick:function(){return n(Y)}},t(G.d.COMMON_BUTTON_BACK))),r.a.createElement(C.a,{size:6},r.a.createElement(v.h,{btnYellow:!0,onClick:function(){return o(!0)}},t(G.d.RECOVERY_PHRASE_BUTTON_CONFIRMATION))))))}}])&&re(n.prototype,a),i&&re(n,i),t}();le.propTypes={intl:i.a.object,mnemonic:i.a.string,setFormState:i.a.func,toggleConfirmationPopup:i.a.func,toggleKeyViewPopup:i.a.func},le.defaultProps={intl:{},mnemonic:"",setFormState:function(){},toggleConfirmationPopup:function(){},toggleKeyViewPopup:function(){}};var ue=Object(g.c)(le),fe=n(854),se=n(855);function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ee(e){return(Ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var de=function(e){var t=e.removeWord,n=e.wordList,o=e.wordIdx;return p()(n,[o],"")&&r.a.createElement("div",{role:"presentation",onClick:function(){return t(o)},className:"d-inline-block phrase-word"},r.a.createElement("span",{className:"pr-1"},p()(n,[o],"")),r.a.createElement(te.a,{icon:"times-circle"}))},Oe=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=Ee(t).call(this,e))||"object"!==pe(r)&&"function"!=typeof r?ye(o):r).state={shuffledMnemonic:[],wordNumber:12},n.handleShuffleMnemonic=n.handleShuffleMnemonic.bind(ye(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"componentDidMount",value:function(){this.handleShuffleMnemonic()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.clearComparison;(0,e.updateErrors)([]),t()}},{key:"handleShuffleMnemonic",value:function(){var e=this.props.mnemonic;this.setState({shuffledMnemonic:Object(R.F)(p()(e,"origin","").split(" "))})}},{key:"render",value:function(){var e=this.props,t=e.addWord,n=e.errors,o=e.intl.formatMessage,a=e.mnemonic,i=e.removeWord,c=e.setFormState,l=e.verifyMnemonic,u=this.state,f=u.shuffledMnemonic,s=u.wordNumber;return r.a.createElement(d.a,null,r.a.createElement(O.a,null,r.a.createElement(v.n,null,o(G.d.VERIFICATION_TITLE)),r.a.createElement(_.a,null,o(G.d.VERIFICATION_DESCRIPTION))),r.a.createElement(h.a,null,r.a.createElement(fe.a,null,n.map(function(e,t){return r.a.createElement(se.a,{key:"error_".concat(t+1)},r.a.createElement(v.s,{key:"error_".concat(t+1)},"* ".concat(e)))})),r.a.createElement(ne.a,{getCellProps:{wordList:p()(a,"compare",[]),removeWord:i},mnemonic:p()(a,"compare",[]),WordCell:de}),r.a.createElement(P.a,{className:"mt-4"},f.map(function(e,n){return r.a.createElement(C.a,{key:"word_button_".concat(n+1),xs:6,md:4,className:"py-2"},r.a.createElement(v.f,{onClick:function(){return t(e)},disabled:p()(a,"compare",[]).includes(e)},e))}))),r.a.createElement(S.a,null,r.a.createElement(P.a,null,r.a.createElement(C.a,{size:6},r.a.createElement(v.h,{onClick:function(){return c(D)}},o(G.d.COMMON_BUTTON_BACK))),r.a.createElement(C.a,{size:6},r.a.createElement(v.h,{btnYellow:!0,onClick:l,disabled:p()(a,"compare",[]).length!==s},o(G.d.VERIFICATION_BUTTON_VERIFY))))))}}])&&me(n.prototype,a),i&&me(n,i),t}();Oe.propTypes={addWord:i.a.func,clearComparison:i.a.func,errors:i.a.arrayOf(i.a.string),intl:i.a.object,mnemonic:i.a.object,removeWord:i.a.func,setFormState:i.a.func,updateErrors:i.a.func,verifyMnemonic:i.a.func},Oe.defaultProps={addWord:function(){},clearComparison:function(){},errors:[],intl:{},mnemonic:{},removeWord:function(){},setFormState:function(){},updateErrors:function(){},verifyMnemonic:function(){}};var _e=Object(c.d)(g.c)(Oe);function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ve=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=Se(t).call(this,e))||"object"!==Te(r)&&"function"!=typeof r?Pe(o):r).handleConfirmSuccess=n.handleConfirmSuccess.bind(Pe(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleConfirmSuccess",value:function(){var e=this.props,t=e.confirmSuccess,n=e.history;t(),n.push(G.e.MY_WALLET)}},{key:"render",value:function(){var e=this.props.intl.formatMessage;return r.a.createElement(v.e,{className:"text-center word-break"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",{className:"font-icon-checkmark-outline"})),r.a.createElement(v.x,null,e(G.d.SUCCESS_NOTIFICATION_CONTENT_TITLE))),r.a.createElement("div",{className:"my-4"},e(G.d.SUCCESS_NOTIFICATION_CONTENT_DESCRIPTION)),r.a.createElement(P.a,null,r.a.createElement(C.a,{xs:3}),r.a.createElement(C.a,{xs:6},r.a.createElement(v.h,{btnYellow:!0,onClick:this.handleConfirmSuccess},e(G.d.SUCCESS_NOTIFICATION_BUTTON_ACCESS_WALLET))),r.a.createElement(C.a,{xs:3})))}}])&&he(n.prototype,a),i&&he(n,i),t}();ve.propTypes={confirmSuccess:i.a.func,history:i.a.object,intl:i.a.object},ve.defaultProps={confirmSuccess:function(){},history:{},intl:{}};var ge=Object(c.d)(u.f,g.c)(ve),Ne=n(139),Re=n(910),we=n.n(Re);function Ae(e){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function We(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Me(e,t){return(Me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Le=function(e){var t=e.formatMessage;return r.a.createElement("div",{className:"text-center"},r.a.createElement(v.d,null,r.a.createElement(T.a,{className:"w-80",src:we.a,alt:t(G.d.RECOVERY_PHRASE_POPUP_CONFIRMATION_IMAGE_ALT)})),r.a.createElement("div",{className:"mt-3"},t(G.d.RECOVERY_PHRASE_POPUP_CONFIRMATION_CONTENT)))},Ve=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=je(t).call(this,e))||"object"!==Ae(r)&&"function"!=typeof r?We(o):r).handleClosePopup=n.handleClosePopup.bind(We(n)),n.handleNext=n.handleNext.bind(We(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Me(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleClosePopup",value:function(){(0,this.props.togglePopup)(!1)}},{key:"handleNext",value:function(){var e=this.props,t=e.setFormState;(0,e.togglePopup)(!1),t(x)}},{key:"render",value:function(){var e=this.props,t=e.confirmation,n=e.intl.formatMessage;return r.a.createElement(Ne.a,{isOpen:t.isOpen,toggle:this.handleClosePopup,title:n(G.d.RECOVERY_PHRASE_POPUP_CONFIRMATION_HEADER),Content:Le,getContentProps:{formatMessage:n},button:{primary:{action:this.handleNext,btnYellow:!0,label:n(G.d.COMMON_BUTTON_NEXT)},secondary:{action:this.handleClosePopup,label:n(G.d.COMMON_BUTTON_BACK)}}})}}])&&Ie(n.prototype,a),i&&Ie(n,i),t}();Ve.propTypes={confirmation:i.a.object,intl:i.a.object,setFormState:i.a.func,togglePopup:i.a.func},Ve.defaultProps={confirmation:{},intl:{},setFormState:function(){},togglePopup:function(){}};var ke=Object(g.c)(Ve),Fe=n(380),Ke=n.n(Fe);function Ue(e){return(Ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ye(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function De(e){return(De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ge=function(e){var t=e.formatMessage,n=e.keyView,o=e.toggleKeyVisibile;return r.a.createElement("div",{className:"padding"},r.a.createElement(v.o,null,t(G.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_TITLE)),r.a.createElement(_.a,null,t(G.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_TEXT)),r.a.createElement(v.d,null,p()(n,"isPKVisible")?r.a.createElement(Ke.a,{value:p()(n,"key")}):r.a.createElement("div",{role:"presentation",onClick:function(){return o(!0)},className:"p-5 border rounded"},t(G.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_QRCODE_ALT))),r.a.createElement("div",{className:"text-break mt-3"},p()(n,"key")))},Be=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=De(t).call(this,e))||"object"!==Ue(r)&&"function"!=typeof r?xe(o):r).handleClosePopup=n.handleClosePopup.bind(xe(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleClosePopup",value:function(){var e=this.props,t=e.togglePopup,n=e.toggleKeyVisibile;t(!1),n(!1)}},{key:"render",value:function(){var e=this.props,t=e.intl.formatMessage,n=e.keyView,o=e.toggleKeyVisibile;return r.a.createElement(Ne.a,{isOpen:p()(n,"isOpen",!1),toggle:this.handleClosePopup,title:t(G.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_HEADER),Content:Ge,getContentProps:{formatMessage:t,keyView:n,toggleKeyVisibile:o},button:{primary:{btnYellow:!0,label:t(G.d.COMMON_BUTTON_SAVE)},secondary:{action:this.handleClosePopup,label:t(G.d.COMMON_BUTTON_BACK)}}})}}])&&Ye(n.prototype,a),i&&Ye(n,i),t}();Be.propTypes={intl:i.a.object,keyView:i.a.object},Be.defaultProps={intl:{},keyView:{}};var ze=Object(g.c)(Be),Je=n(175),Xe=function(e){return p()(e,["walletCreation"],Object(Je.a)({}))},Qe=Object(R.d)(Xe,function(e){return e.toJS().confirmation}),qe=Object(R.d)(Xe,function(e){return e.toJS().errors}),Ze=Object(R.d)(Xe,function(e){return e.toJS().formState}),$e=Object(R.d)(Xe,function(e){return e.toJS().keyView}),et=Object(R.d)(Xe,function(e){return e.toJS().mnemonic}),tt=Object(Je.a)({confirmation:{isOpen:!1},errors:[],formState:Y,keyView:{isOpen:!1,key:"",isPKVisible:!1},mnemonic:{origin:"",compare:[]}}),nt=n(43);function ot(e){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function at(e){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function it(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ct(e,t){return(ct=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var lt=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=at(t).call(this,e))||"object"!==ot(r)&&"function"!=typeof r?it(o):r).state={storeData:{}},n.handleStoreWalletData=n.handleStoreWalletData.bind(it(n)),n.handleVerifyMnemonic=n.handleVerifyMnemonic.bind(it(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ct(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"componentWillUnmount",value:function(){(0,this.props.onResetState)()}},{key:"handleStoreWalletData",value:function(){var e=this.props,t=e.onStoreWallet,n=e.updateWeb3,o=this.state.storeData;t(p()(o,"walletInfo")),n(p()(o,"web3")),Object(R.E)(p()(o,"web3Info"))}},{key:"handleVerifyMnemonic",value:function(){var e=this,t=this.props,n=t.intl.formatMessage,o=t.mnemonic,r=t.onClearComparison,a=t.onSetFormState,i=t.onUpdateErrors,c=t.rpcServer,l=t.toggleLoading,u=p()(o,"origin");if(E()(u,p()(o,"compare",[]).join(" "))){l(!0);var f=Object(R.j)(u,c);Object(R.p)(f).then(function(t){e.setState({storeData:{walletInfo:t,web3:f,web3Info:{loginType:G.b.LOGIN_TYPE.PRIVATE_KEY,recoveryPhrase:u,address:t.address}}})}).then(function(){l(!1),a(H)})}else l(!1),i([n(G.d.VERIFICATION_ERROR_VERIFY_FAILED)]),r()}},{key:"render",value:function(){var e=this.props,t=e.confirmation,n=e.errors,a=e.formState,i=e.intl.formatMessage,c=e.keyView,l=e.mnemonic,u=e.onAddWord,f=e.onClearComparison,s=e.onRemoveWord,m=e.onSetFormState,E=e.onSetPrivateKey,b=e.onStoreMnemonic,d=e.onToggleConfirmationPopup,O=e.onToggleKeyViewPopup,_=e.onToggleKeyVisible,T=e.onUpdateErrors;return r.a.createElement(o.Fragment,null,r.a.createElement(y.Helmet,null,r.a.createElement("title",null,i(G.d.CREATE_WALLET_TITLE))),r.a.createElement(v.i,null,a===Y&&r.a.createElement(ee,{setFormState:m,setPrivateKey:E,storeMnemonic:b})||a===D&&r.a.createElement(ue,{mnemonic:p()(l,"origin"),setFormState:m,toggleKeyViewPopup:O,toggleConfirmationPopup:d})||a===x&&r.a.createElement(_e,{addWord:u,clearComparison:f,errors:n,mnemonic:l,removeWord:s,setFormState:m,updateErrors:T,verifyMnemonic:this.handleVerifyMnemonic})||a===H&&r.a.createElement(ge,{confirmSuccess:this.handleStoreWalletData}),r.a.createElement(ke,{confirmation:t,setFormState:m,togglePopup:d}),r.a.createElement(ze,{keyView:c,toggleKeyVisibile:_,togglePopup:O})))}}])&&rt(n.prototype,a),i&&rt(n,i),t}();lt.propTypes={confirmation:i.a.object,errors:i.a.arrayOf(i.a.string),formState:i.a.number,history:i.a.object,intl:i.a.object,keyView:i.a.object,mnemonic:i.a.shape({origin:i.a.string,compare:i.a.arrayOf(i.a.string)}),onAddWord:i.a.func,onClearComparison:i.a.func,onRemoveWord:i.a.func,onResetState:i.a.func,onSetFormState:i.a.func,onSetPrivateKey:i.a.func,onStoreMnemonic:i.a.func,onStoreWallet:i.a.func,onToggleConfirmationPopup:i.a.func,onToggleKeyViewPopup:i.a.func,onToggleKeyVisible:i.a.func,onUpdateErrors:i.a.func,rpcServer:i.a.object,toggleLoading:i.a.func,updateWeb3:i.a.func},lt.defaultProps={history:{},intl:{},confirmation:{},errors:[],formState:0,keyView:{},mnemonic:{origin:"",compare:[]},onAddWord:function(){},onClearComparison:function(){},onRemoveWord:function(){},onResetState:function(){},onSetFormState:function(){},onSetPrivateKey:function(){},onStoreMnemonic:function(){},onStoreWallet:function(){},onToggleConfirmationPopup:function(){},onToggleKeyViewPopup:function(){},onToggleKeyVisible:function(){},onUpdateErrors:function(){},rpcServer:{},toggleLoading:function(){},updateWeb3:function(){}};var ut=Object(l.c)(function(){return Object(f.b)({confirmation:Qe,errors:qe,formState:Ze,keyView:$e,mnemonic:et})},function(e){return{onAddWord:function(t){return e(function(e){return{type:w,word:e}}(t))},onClearComparison:function(){return e({type:A})},onRemoveWord:function(t){return e(function(e){return{type:I,index:e}}(t))},onResetState:function(){return e({type:j})},onSetFormState:function(t){return e(function(e){return{type:W,newState:e}}(t))},onSetPrivateKey:function(t){return e(function(e){return{type:M,key:e}}(t))},onStoreMnemonic:function(t){return e(function(e){return{type:V,mnemonic:e}}(t))},onStoreWallet:function(t){return e(Object(nt.d)(t))},onToggleConfirmationPopup:function(t){return e(function(e){return{type:k,bool:e}}(t))},onToggleKeyViewPopup:function(t){return e(function(e){return{type:F,bool:e}}(t))},onToggleKeyVisible:function(t){return e(function(e){return{type:K,bool:e}}(t))},onUpdateErrors:function(t){return e(function(e){return{type:U,errors:e}}(t))}}}),ft=Object(R.s)({key:"walletCreation",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return e.updateIn(["mnemonic","compare"],function(e){return e.concat(t.word)});case A:return e.setIn(["mnemonic","compare"],[]);case I:return e.updateIn(["mnemonic","compare"],function(e){return e.filter(function(e,n){return n!==t.index})});case j:return tt;case W:return e.set("formState",t.newState);case M:return e.setIn(["keyView","key"],t.key);case L:var n=Object(R.F)(e.getIn(["mnemonic","origin"]).split(" "));return e.setIn(["mnemonic","shuffled"],n);case V:return e.setIn(["mnemonic","origin"],t.mnemonic);case k:return e.setIn(["confirmation","isOpen"],t.bool);case F:return e.setIn(["keyView","isOpen"],t.bool);case K:return e.setIn(["keyView","isPKVisible"],t.bool);case U:return e.set("errors",t.errors);default:return e}}});t.default=Object(c.d)(ut,ft,g.c,N.d,u.f,R.H)(lt)}}]);