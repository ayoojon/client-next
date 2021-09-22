"use strict";
exports.id = 9402;
exports.ids = [9402];
exports.modules = {

/***/ 46489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var base64_url_decode = __webpack_require__(84491);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ 18146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(value);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

/***/ }),

/***/ 45669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a9": () => (/* binding */ s3FileUrl),
/* harmony export */   "fw": () => (/* binding */ server),
/* harmony export */   "ZG": () => (/* binding */ ayoojonApi),
/* harmony export */   "XI": () => (/* binding */ APP_TITLE),
/* harmony export */   "PB": () => (/* binding */ APP_DESCRIPTION),
/* harmony export */   "ni": () => (/* binding */ APP_IMAGE_URL),
/* harmony export */   "nX": () => (/* binding */ APP_FACEBOOK_URL),
/* harmony export */   "jQ": () => (/* binding */ APP_LINKEDIN_URL)
/* harmony export */ });
/* unused harmony exports config, lambdaAPI, localServer, prodServer */
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