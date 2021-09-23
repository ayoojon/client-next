"use strict";
exports.id = 8974;
exports.ids = [8974];
exports.modules = {

/***/ 58974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TX": () => (/* binding */ logoutUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports userReducer, loginUser, signupUser, updateUser, updateAvatar */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Define a type for the slice state

// Define the initial state using that type
const initialState = {
  user:  false ? 0 : undefined
};
const userReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'userReducer',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      window.localStorage.setItem('ayoojon-user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    signupUser: (state, action) => {
      window.localStorage.setItem('ayoojon-user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutUser: state => {
      window.localStorage.removeItem('ayoojon-user');
      state.user = undefined;
    },
    updateUser: (state, action) => {
      const user = _objectSpread(_objectSpread({}, state.user), action.payload);

      window.localStorage.setItem('ayoojon-user', JSON.stringify(user));
      state.user = _objectSpread(_objectSpread({}, state.user), action.payload);
    },
    updateAvatar: (state, action) => {
      const user = _objectSpread(_objectSpread({}, state.user), action.payload);

      window.localStorage.setItem('ayoojon-user', JSON.stringify(user));
      state.user = _objectSpread(_objectSpread({}, state.user), action.payload);
    }
  }
}); // Action creators are generated for each case reducer function

const {
  loginUser,
  signupUser,
  logoutUser,
  updateUser,
  updateAvatar
} = userReducer.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer.reducer);

/***/ })

};
;