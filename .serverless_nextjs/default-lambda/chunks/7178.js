"use strict";
exports.id = 7178;
exports.ids = [7178];
exports.modules = {

/***/ 28885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ InputHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const InputHeader = ({
  label,
  className = '',
  marginBottom = true
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
    className: `font-semibold leading-7${marginBottom ? 'mb-1' : ''} ${className} `,
    children: label
  });
};

/***/ }),

/***/ 45669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a9": () => (/* binding */ s3FileUrl),
/* harmony export */   "ZG": () => (/* binding */ ayoojonApi),
/* harmony export */   "XI": () => (/* binding */ APP_TITLE)
/* harmony export */ });
/* unused harmony exports config, lambdaAPI, localServer, prodServer, server, APP_DESCRIPTION, APP_IMAGE_URL, APP_FACEBOOK_URL, APP_LINKEDIN_URL */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const config = {
  MAP_KEY: "AIzaSyCpL2DpvIHSnMLaeaxg5k4R7szgjrcBFxQ",
  GMAIL_CLIENT_ID: "77285414059-mmhfavaqcau3afa6m6nmih1ghjcq4pvf.apps.googleusercontent.com"
};
const s3FileUrl = 'https://ayoojon-files.s3.ap-south-1.amazonaws.com/';
const lambdaAPI = 'https://wpfl5av581.execute-api.ap-south-1.amazonaws.com/dev/';
const localServer = 'http://localhost:4040/api/v1/';
const prodServer = 'https://api.ayoojon.com/api/v1/';
const server =  false ? 0 : prodServer;
const ayoojonApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: server // withCredentials: true,

});
const APP_TITLE = 'Ayoojon';
const APP_DESCRIPTION = 'We organize everything.';
const APP_IMAGE_URL = 'https://ayoojon.com/resources/ayoojon_transparent.png';
const APP_FACEBOOK_URL = 'https://www.facebook.com/AyoojonKoro/';
const APP_LINKEDIN_URL = 'https://www.linkedin.com/company/ayoojon';

/***/ })

};
;