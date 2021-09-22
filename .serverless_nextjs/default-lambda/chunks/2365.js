"use strict";
exports.id = 2365;
exports.ids = [2365,6873,8615,7178,5669];
exports.modules = {

/***/ 41223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shared_GmailLoginButton)
});

// EXTERNAL MODULE: ./node_modules/react-google-login/dist/google-login.js
var google_login = __webpack_require__(93645);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45669);
// EXTERNAL MODULE: ./src/components/shared/icons/index.tsx
var icons = __webpack_require__(78628);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(88615);
// EXTERNAL MODULE: ./src/components/shared/hooks/redux.ts
var redux = __webpack_require__(86869);
// EXTERNAL MODULE: ./src/stores/UserReducer.ts
var UserReducer = __webpack_require__(58974);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-toastify/cjs/react-toastify.min.js
var react_toastify_min = __webpack_require__(863);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/shared/Toaster.tsx



react_toastify_min/* toast.configure */.Am.configure({
  autoClose: 3000,
  draggable: true,
  hideProgressBar: true
});
const customToast = (msg = 'Toast message', type = 'default') => {
  const bgColor = {
    default: 'bg-white',
    warning: 'bg-orange-500',
    danger: 'bg-red-600',
    success: 'bg-green-500'
  };
  return (0,react_toastify_min/* toast */.Am)(() => /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "h-full flex items-center",
    children: /*#__PURE__*/jsx_runtime.jsx("span", {
      className: `${type === 'default' ? 'text-black' : 'text-white'} font-medium`,
      children: msg
    })
  }), {
    className: `${bgColor[type]} mb-1 last:mb-0`,
    bodyClassName: 'm-0'
  });
};
;// CONCATENATED MODULE: ./src/components/shared/GmailLoginButton.tsx











const GmailLoginButton = () => {
  const router = (0,next_router.useRouter)();
  const dispatch = (0,redux/* useAppDispatch */.T)(); // TODO: redirect login
  // const { from } = (location.state as {
  //   from: {
  //     pathname: string;
  //   };
  // }) || { from: { pathname: '/home' } };

  const onSuccess = async res => {
    res = res;

    try {
      const headers = await (0,utils/* tokenConfig */.Y2)('WITHOUT-AUTH');
      const response = await config/* ayoojonApi.post */.ZG.post('accounts/oauth/google', {
        idToken: res.tokenId
      }, headers);
      dispatch((0,UserReducer/* loginUser */.pH)(response.data.account));
      (0,utils/* setAccessToken */.M8)(response.data.accessToken);
      (0,utils/* setRefreshToken */.zI)(response.data.refreshToken);
      customToast('Successfully login with Gmail.', 'success');
      router.replace('/');
    } catch (error) {
      customToast('Something went wrong.', 'danger');
    }
  };

  const onFailure = res => {
    res = res;
  };

  const {
    signIn
  } = (0,google_login.useGoogleLogin)({
    onSuccess,
    onFailure,
    clientId: config/* config.GMAIL_CLIENT_ID */.vc.GMAIL_CLIENT_ID,
    isSignedIn: false,
    cookiePolicy: 'single_host_origin'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
    onClick: signIn,
    className: "flex border w-full py-2 px-5 mt-5 rounded-full shadow",
    children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
      name: "google",
      className: "h-8"
    }), /*#__PURE__*/jsx_runtime.jsx("p", {
      className: "flex-1 text-xl",
      children: "Sign in with Google"
    })]
  });
};

/* harmony default export */ const shared_GmailLoginButton = (GmailLoginButton);

/***/ }),

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
/* harmony export */   "vc": () => (/* binding */ config),
/* harmony export */   "a9": () => (/* binding */ s3FileUrl),
/* harmony export */   "ZG": () => (/* binding */ ayoojonApi),
/* harmony export */   "XI": () => (/* binding */ APP_TITLE),
/* harmony export */   "PB": () => (/* binding */ APP_DESCRIPTION),
/* harmony export */   "ni": () => (/* binding */ APP_IMAGE_URL),
/* harmony export */   "nX": () => (/* binding */ APP_FACEBOOK_URL),
/* harmony export */   "jQ": () => (/* binding */ APP_LINKEDIN_URL)
/* harmony export */ });
/* unused harmony exports lambdaAPI, localServer, prodServer, server */
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

/***/ }),

/***/ 88615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TJ": () => (/* binding */ lowercaseRegex),
/* harmony export */   "hg": () => (/* binding */ uppercaseRegex),
/* harmony export */   "dF": () => (/* binding */ numericRegex),
/* harmony export */   "qr": () => (/* binding */ specialCharRegex),
/* harmony export */   "HN": () => (/* binding */ emailRegex),
/* harmony export */   "M8": () => (/* binding */ setAccessToken),
/* harmony export */   "zI": () => (/* binding */ setRefreshToken),
/* harmony export */   "Y2": () => (/* binding */ tokenConfig)
/* harmony export */ });
/* unused harmony exports contactNoRegex, passwordRegex, time24HourRegex, dateFormatRegex, removeAccessToken, getAccessToken, removeRefreshToken, getRefreshToken, isTokenExpired, isAuthenticate, time24To12, truncateString, taxPrice, eventTypesName, typeOfEvent, generateQueryString, createMarkup, currencyFormat, customDelay, isCompleted, weekCapitalize, serviceNames */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46489);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialCharRegex = /(?=.*[!@#$%^&*,.;:'"_=+?`~<>()|/-])/;
const emailRegex = /^([a-z\d._-]+)@([a-z\d_-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
const contactNoRegex = /^(\+88)?01[1-9][0-9]{8}$/;
const passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w!@#$%^&*,.;:'"_=+?`~<>()|/-]+$/;
const time24HourRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const dateFormatRegex = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/; // access token

const setAccessToken = token => {
  window.localStorage.setItem('access-token', token);
};
const removeAccessToken = () => {
  window.localStorage.removeItem('access-token');
};
const getAccessToken = () => {
  let accessToken = null;

  if ( true && window.localStorage.getItem('access-token')) {
    accessToken = window.localStorage.getItem('access-token');
  } else {
    removeAccessToken();
  }

  return accessToken;
}; // refresh token

const setRefreshToken = token => {
  window.localStorage.setItem('refresh-token', token);
};
const removeRefreshToken = () => {
  window.localStorage.removeItem('refresh-token');
};
const getRefreshToken = () => {
  let refreshToken = null;

  if ( true && window.localStorage.getItem('refresh-token')) {
    refreshToken = window.localStorage.getItem('refresh-token');
  } else {
    removeRefreshToken();
  }

  return refreshToken;
}; // token expiry check

const isTokenExpired = token => {
  try {
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);

    if (decoded.exp > Date.now() / 1000) {
      return false;
    } else return true;
  } catch (err) {
    return true;
  }
};
const tokenConfig = async authType => {
  if (authType === 'WITH-AUTH') {
    const at = getAccessToken();

    if (at !== null && !isTokenExpired(at)) {
      return {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${at}`
        }
      };
    } else {
      // let response: any = await getNewAccessTokenWithRefreshToken();
      return {
        headers: {
          'Content-type': 'application/json' // Authorization: `Bearer ${response.data.accessToken}`,

        }
      };
    }
  } else {
    return {
      headers: {
        'Content-type': 'application/json'
      }
    };
  }
};
const isAuthenticate = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (!accessToken || !refreshToken) {
    return false;
  }

  try {
    const {
      exp
    } = decode(refreshToken);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
};
const time24To12 = time24 => {
  let ts = time24;
  let H = +ts.substr(0, 2);
  let h = H % 12 || 12; // leading 0 at the left for 1 digit hours

  h = h < 10 ? '0' + h : h;
  const am_pm = H < 12 ? ' AM' : ' PM';
  ts = h + ts.substr(2, 3) + am_pm;
  return ts;
};
const truncateString = (string, maxLength) => {
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength).trim()}...`;
}; // TODO: refactor it for percentage calculation

const taxPrice = {
  conventionHall: 5000,
  event: 10
};
const eventTypesName = {
  appearance: 'Appearance',
  attraction: 'Attraction',
  classOrTrainingOrWorkshop: 'Class / Training / Workshop',
  conference: 'Conference',
  festivalOrFair: 'Festival / Fair',
  concertOrPerformance: 'Concert / Performance',
  meetingOrNetworkingEvent: 'Meeting / Networking Event',
  partyOrSocialGathering: 'Party / Social Gathering',
  tournament: 'Tournament',
  seminarOrTail: 'Seminar / Talk',
  rally: 'Rally',
  gameOrCompetition: 'Game / Competition'
};
const typeOfEvent = {
  personal: [{
    value: 'weddingAndEngagement',
    name: 'Wedding And Engagement'
  }, {
    value: 'travelShoot',
    name: 'Travel Shoot'
  }, {
    value: 'kidsParty',
    name: 'Kids Party'
  }, {
    value: 'partyGathering',
    name: 'Party Gathering'
  }, {
    value: 'pet',
    name: 'Pet'
  }, {
    value: 'graduation',
    name: 'Graduation'
  }, {
    value: 'couplePhotoshoot',
    name: 'Couple Photoshoot'
  }, {
    value: 'otherLifeEvent',
    name: 'Other Life Event'
  }, {
    value: 'portraits',
    name: 'Portraits'
  }, {
    value: 'babyPhotoshoot',
    name: 'Baby Photoshoot'
  }, {
    value: 'others',
    name: 'Others'
  }],
  business: [{
    value: 'workshop',
    name: 'Workshop'
  }, {
    value: 'seminar',
    name: 'Seminar'
  }, {
    value: 'concert',
    name: 'Concert'
  }, {
    value: 'reunion',
    name: 'Reunion'
  }, {
    value: 'party',
    name: 'Party'
  }, {
    value: 'conferences',
    name: 'Conferences'
  }, {
    value: 'awardsAndCompetitions',
    name: 'Awards and competitions'
  }, {
    value: 'festivals',
    name: 'Festivals'
  }, {
    value: 'tradeShowsAndExpos',
    name: 'Trade shows and expos'
  }, {
    value: 'others',
    name: 'Others'
  }]
};
const generateQueryString = data => {
  let queryString = '';

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];

      if (value || typeof value === 'number') {
        if (queryString.length === 0) {
          queryString += `${key}=${value}`;
        } else {
          queryString += `&${key}=${value}`;
        }
      }
    }
  }

  return queryString;
};
const createMarkup = data => {
  return {
    __html: data
  };
};
const currencyFormat = (c, toFixed = 0) => c.toFixed(toFixed).replace(/\d(?=(\d{3})+\.)/g, '$&,');
const customDelay = t => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t);
  });
};
const isCompleted = (status, checkedFor) => {
  const statusList = ['pending', 'reserved', 'paid', 'completed'];

  if (statusList.indexOf(status) !== -1 && statusList.indexOf(checkedFor) <= statusList.indexOf(status)) {
    return true;
  }

  return false;
};
const weekCapitalize = data => {
  const obj = Object.keys(data).filter(k => data[k] === true);
  const newobj = obj.map(a => {
    const data = a.charAt(0).toUpperCase() + a.substr(1);
    const newValue = data.slice(0, 3);
    return newValue;
  });
  return newobj;
};
const serviceNames = {
  venue: 'Convention Hall',
  'event-management': 'Event Management',
  photographer: 'Photographer',
  caterings: 'Caterings',
  flowers: 'Flowers',
  music: 'Music',
  'invitation-card': 'Invitation Card',
  lightening: 'Lightening',
  videographer: 'Videographer',
  honeymoon: 'Honeymoon'
};

/***/ })

};
;