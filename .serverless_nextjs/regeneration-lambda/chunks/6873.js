"use strict";
exports.id = 6873;
exports.ids = [6873,5669];
exports.modules = {

/***/ 45669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a9": () => (/* binding */ s3FileUrl),
/* harmony export */   "ZG": () => (/* binding */ ayoojonApi),
/* harmony export */   "XI": () => (/* binding */ APP_TITLE),
/* harmony export */   "PB": () => (/* binding */ APP_DESCRIPTION),
/* harmony export */   "ni": () => (/* binding */ APP_IMAGE_URL),
/* harmony export */   "nX": () => (/* binding */ APP_FACEBOOK_URL),
/* harmony export */   "jQ": () => (/* binding */ APP_LINKEDIN_URL)
/* harmony export */ });
/* unused harmony exports config, lambdaAPI, localServer, prodServer, server */
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
const server = prodServer; // export const server = process.env.NODE_ENV === 'development' ? localServer : prodServer;

const ayoojonApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: server // withCredentials: true,

});
const APP_TITLE = 'Ayoojon';
const APP_DESCRIPTION = 'We organize everything.';
const APP_IMAGE_URL = '/resources/ayoojon_transparent.png';
const APP_FACEBOOK_URL = 'https://www.facebook.com/AyoojonKoro/';
const APP_LINKEDIN_URL = 'https://www.linkedin.com/company/ayoojon';

/***/ })

};
;