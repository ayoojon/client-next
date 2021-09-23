"use strict";
exports.id = 8628;
exports.ids = [8628];
exports.modules = {

/***/ 78628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AyoojonLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23393);
/* harmony import */ var _NavbarOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80802);
/* harmony import */ var _NavbarClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66636);
/* harmony import */ var _ArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89735);
/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94202);
/* harmony import */ var _CheckCircleOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3239);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67576);
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19954);
/* harmony import */ var _Remove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98988);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30627);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15636);
/* harmony import */ var _Bookings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92332);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45675);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60731);
/* harmony import */ var _KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48296);
/* harmony import */ var _KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53932);
/* harmony import */ var _AlarmClock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15701);
/* harmony import */ var _ThumbUp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98307);
/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16044);
/* harmony import */ var _AssignmentDone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(89741);
/* harmony import */ var _DoneAll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(12861);
/* harmony import */ var _Compass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56416);
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95163);
/* harmony import */ var _Google__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2319);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























const Icon = props => {
  switch (props.name) {
    case 'ayoojon-logo':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_AyoojonLogo__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread({}, props));

    case 'keyboard-arrow-left':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, _objectSpread({}, props));

    case 'keyboard-arrow-right':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, _objectSpread({}, props));

    case 'navbar-open':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_NavbarOpen__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, props));

    case 'navbar-close':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_NavbarClose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _objectSpread({}, props));

    case 'arrow-right':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_ArrowRight__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, _objectSpread({}, props));

    case 'star':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Star__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, _objectSpread({}, props));

    case 'check-circle-outline':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, _objectSpread({}, props));

    case 'user-avatar':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_UserAvatar__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _objectSpread({}, props));

    case 'add':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Add__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, _objectSpread({}, props));

    case 'remove':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Remove__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, _objectSpread({}, props));

    case 'dashboard':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Dashboard__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread({}, props));

    case 'request':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Request__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, _objectSpread({}, props));

    case 'bookings':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Bookings__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, _objectSpread({}, props));

    case 'service':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Service__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, _objectSpread({}, props));

    case 'settings':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Settings__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, _objectSpread({}, props));

    case 'alarm-clock':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_AlarmClock__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, _objectSpread({}, props));

    case 'thumb-up':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_ThumbUp__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, _objectSpread({}, props));

    case 'payment':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Payment__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, _objectSpread({}, props));

    case 'assignment-done':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_AssignmentDone__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, _objectSpread({}, props));

    case 'compass':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Compass__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, _objectSpread({}, props));

    case 'done-all':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_DoneAll__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, _objectSpread({}, props));

    case 'users':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Users__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, _objectSpread({}, props));

    case 'google':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_Google__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, _objectSpread({}, props));

    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("span", {
        children: ["no icon found with name: ", props.name]
      });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ })

};
;