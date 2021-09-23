/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ 62670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _url_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45669);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./src/components/shared/icons/index.tsx
var icons = __webpack_require__(78628);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./src/utils/next.ts
var next = __webpack_require__(30607);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/services/album/AlbumView.tsx





 // import { SingleAlbumView } from './SingleAlbumView';



const AlbumView = ({
  data
}) => {
  const router = (0,next_router.useRouter)();
  const {
    url
  } = router.query; // const [isAlbumModalOpen, setAlbumModalState] = useState(false);
  // const [albumModalData, setAlbumModalData] = useState({});
  // const params = useParams<ParamTypes>();
  // const history = useHistory();
  // const dataHandeler = (data: any) => {
  //   setAlbumModalData({ data });
  //   setAlbumModalState(true);
  // };

  const createMarkup = data => {
    return {
      __html: data
    };
  }; // const toggleDataModal = () => setAlbumModalState(!isAlbumModalOpen);


  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "flex flex-wrap mx-2",
    children: data.map((photo, index) =>
    /*#__PURE__*/
    // eslint-disable-next-line @next/next/link-passhref
    jsx_runtime.jsx(next_link.default, {
      href: `/services/${url}/albums/${photo._id}`,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        className: "mb-2 w-56 cursor-pointer  rounded-b-md border-2 rounded-lg mx-2 mb-4 relative" // onClick={() => {
        //   // dataHandeler(photo);
        //   // Router.push(`/services/${params.serviceURL}/albums/${photo._id}`);
        //   Router.push(`/services/${url}/albums/${photo._id}`);
        // }}
        ,
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "h-40 w-full overflow-hidden rounded-md",
          children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
            className: "inline-block w-full h-full object-cover",
            src: photo.photos[0],
            alt: "location",
            width: "560",
            height: "400"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "p-2",
          children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
            className: "font-semibold text-xl pb-2",
            children: photo.title
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            dangerouslySetInnerHTML: createMarkup(photo.description)
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "bg-yellow-300 text-xs font-medium rounded-full p-1 absolute top-0 right-0 mt-1 mr-1",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [photo.photos.length, " image "]
          })
        })]
      })
    }, index))
  });
};
;// CONCATENATED MODULE: ./src/components/services/Amenities/AmenitiesListView.tsx



const AmenitiesListView = ({
  amenities
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "flex flex-wrap -mx-2",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "ml-2",
      children: amenities.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "mb-4",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "flex flex-col",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "",
              children: /*#__PURE__*/jsx_runtime.jsx("h6", {
                className: "font-normal text-base mb-2",
                children: item.title
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "flex flex-row",
          children: item.options.map((obj, index) => /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex mx-2",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "text-sm bg-gray-200 text-gray-700 rounded-2xl\t px-2 py-1 ",
              children: [" ", obj.title]
            })
          }, index))
        })]
      }, index))
    })
  });
};
;// CONCATENATED MODULE: ./src/components/shared/skeletons/ReviewPage.tsx



const SkeletonReviewPage = ({
  isSmall = false,
  className = '',
  style = {}
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: ` ${className}`,
    style: style,
    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
      className: "rounded-full bg-gray-200 h-12 w-12"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "flex-1 space-y-4 py-1",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "h-4 bg-gray-200 rounded w-3/4"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "space-y-2",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "h-4 bg-gray-200 rounded"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "h-4 bg-gray-200 rounded w-5/6"
        })]
      })]
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./src/components/Pagination.tsx
var Pagination = __webpack_require__(51843);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/services/review/ServiceReview.tsx












const fetchServiceReview = async (Id, page) => {
  const response = await config/* ayoojonApi.get */.ZG.get(`reviews/service/${Id}?pageNumber=${page}`);
  return {
    reviews: response.data.data,
    pagination: response.data.pagination
  };
};

const ServiceReview = ({
  serviceId
}) => {
  const {
    0: page,
    1: setPage
  } = (0,react.useState)(1);
  const {
    data,
    isLoading
  } = (0,lib.useQuery)(['service-rewiew', serviceId], () => fetchServiceReview(serviceId, page), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "",
    children: [data && data.reviews.length > 0 ? data.reviews.map((review, index) => {
      var _review$booking, _review$booking$accou;

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex items-start mb-4",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "flex-shrink-0",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "inline-block relative",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "relative w-16 h-16 rounded-full overflow-hidden",
              children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
                className: "absolute top-0 left-0 w-full h-full object-cover",
                src: review !== null && review !== void 0 && (_review$booking = review.booking) !== null && _review$booking !== void 0 && (_review$booking$accou = _review$booking.account) !== null && _review$booking$accou !== void 0 && _review$booking$accou.avatar ? review.booking.account.avatar : '/resources/user-avatar.jpg',
                alt: "user-img",
                width: "100%",
                height: "100%"
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "ml-6",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex items-baseline",
            children: review.booking ? /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "text-gray-600 font-bold",
              children: review.booking.account.name
            }) : /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "text-gray-600 font-bold",
              children: "name"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex items-baseline",
            children: review.booking ? /*#__PURE__*/jsx_runtime.jsx("small", {
              className: "text-sm font-medium",
              children: moment_default()(new Date(review.createdAt)).format('DD-MM-YYYY')
            }) : /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "text-gray-600 font-bold",
              children: "no date"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex items-center mt-1",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
                name: "star",
                className: `h-5 fill-current mx-1 ${1 <= review.rating ? 'text-primary' : 'text-gray-400'}`
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
                name: "star",
                className: `h-5 fill-current mx-1 ${2 <= review.rating ? 'text-primary' : 'text-gray-400'}`
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
                name: "star",
                className: `h-5 fill-current mx-1 ${3 <= review.rating ? 'text-primary' : 'text-gray-400'}`
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
                name: "star",
                className: `h-5 fill-current mx-1 ${4 <= review.rating ? 'text-primary' : 'text-gray-400'}`
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
                name: "star",
                className: `h-5 fill-current mx-1 ${5 <= review.rating ? 'text-primary' : 'text-gray-400'}`
              })
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "mt-2",
            children: /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "mt-1",
              children: review.text
            })
          })]
        })]
      }, index);
    }) : isLoading ? /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "grid gap-x-3 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      children: /*#__PURE__*/jsx_runtime.jsx(SkeletonReviewPage, {
        className: "animate-pulse"
      })
    }) : /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "my-3",
      children: /*#__PURE__*/jsx_runtime.jsx("p", {
        children: "There is No Review"
      })
    }), data && data.pagination && data.pagination.totalPage > 1 && /*#__PURE__*/jsx_runtime.jsx(Pagination/* default */.Z, {
      pagination: data.pagination,
      handler: setPage
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(53456);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/jwt-decode/lib/index.js
var jwt_decode_lib = __webpack_require__(46489);
var jwt_decode_lib_default = /*#__PURE__*/__webpack_require__.n(jwt_decode_lib);
;// CONCATENATED MODULE: ./src/utils/index.ts

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
    const decoded = jwt_decode_lib_default()(token);

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
;// CONCATENATED MODULE: ./src/components/services/location/LocationModal.tsx








const LocationModal = ({
  isVisible,
  setVisible,
  data
}) => {
  const location = data.data;
  return /*#__PURE__*/jsx_runtime.jsx((Dialog_default()), {
    open: isVisible,
    onClose: setVisible,
    fullWidth: true,
    maxWidth: 'md',
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "font-semibold text-gray-800",
            children: location.title
          }), /*#__PURE__*/jsx_runtime.jsx("button", {
            type: "button",
            onClick: setVisible,
            children: /*#__PURE__*/jsx_runtime.jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col px-6 py-4 bg-white rounded-bl-lg rounded-br-lg",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "h-64 overflow-hidden rounded-md",
            children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
              className: "inline-block w-full h-full object-cover",
              src: location.photos[0],
              alt: "location",
              width: "800",
              height: "640"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex flex-wrap my-3 border-b mb-2",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mr-14",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium mb-1",
                  children: "Guest Capacity"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "text-customGray-550",
                  children: location.capacity
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium mb-1",
                  children: "Space Size"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: " flex flex-wrap items-end",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-customGray-550 mr-2",
                    children: location.size.amount
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "text-customGray-550 text-sm",
                    children: location.size.unit
                  })]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex flex-wrap pb-3 border-b",
              children: location.sessions.map(p => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mr-8 p-2",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("small", {
                  className: "font-medium text-base text-primary",
                  children: [time24To12(p.startTime), ' - ', time24To12(p.endTime)]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                    className: "text-base uppercase",
                    children: [p.price.amount, " ", p.price.currency]
                  }), ' ', /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "text-customGray-550",
                    children: "/ Day"
                  })]
                })]
              }, p._id))
            })]
          })]
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/services/location/LocationView.tsx


 // import { SingleViewLocation } from './SingleViewLocation';





const LocationView = ({
  data
}) => {
  // const [isLocationModalOpen, setLocationModalState] = useState(false);
  const {
    0: locationModalData,
    1: setLocationModalData
  } = (0,react.useState)({});
  const {
    0: isVisible,
    1: setVisible
  } = (0,react.useState)(false);

  const handleClose = () => {
    setVisible(false);
  };

  const dataHandeler = data => {
    setLocationModalData({
      data
    }); // setLocationModalState(true);

    setVisible(true);
  }; // const toggleDataModal = () => setLocationModalState(!isLocationModalOpen);


  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "flex flex-wrap -mx-2",
    children: [data.map((location, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w-56 cursor-pointer rounded-b-md border-2 rounded-lg mx-2 mb-4 transition duration-300 ease-in-out hover:shadow-xl",
      onClick: () => {
        dataHandeler(location);
      },
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "h-40 w-full overflow-hidden rounded-md",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
          className: "inline-block w-full h-full object-cover",
          src: location.photos[0],
          alt: "location",
          width: "560",
          height: "400"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "p-2",
        children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
          className: "font-semibold text-xl pb-2",
          children: location.title
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "font-semibold text-primary",
            children: [Math.min(...location.sessions.map(item => item.price.amount)), " -", ' ', Math.max(...location.sessions.map(item => item.price.amount)), " BDT"]
          }), ' ', /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "text-sm text-customGray-550",
            children: "/ Day"
          })]
        })]
      })]
    }, index)), Object.keys(locationModalData).length !== 0 && /*#__PURE__*/jsx_runtime.jsx(LocationModal, {
      isVisible: isVisible,
      setVisible: handleClose,
      data: locationModalData
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(7772);
;// CONCATENATED MODULE: ./src/components/services/product/ProductModal.tsx

 // import { DialogActions, DialogTitle } from '@mui/material';






const ProductModal = ({
  isVisible,
  setVisible,
  data
}) => {
  const product = data.data;
  return /*#__PURE__*/jsx_runtime.jsx((Dialog_default()), {
    open: isVisible,
    onClose: setVisible,
    fullWidth: true,
    maxWidth: 'md',
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "font-semibold text-gray-800",
            children: product.title
          }), /*#__PURE__*/jsx_runtime.jsx("button", {
            type: "button",
            onClick: setVisible,
            children: /*#__PURE__*/jsx_runtime.jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col px-6 py-4 bg-white rounded-bl-lg rounded-br-lg",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "h-64 overflow-hidden rounded-md",
            children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
              className: "inline-block w-full h-full object-cover",
              src: product.image,
              alt: "product",
              width: "800",
              height: "640"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex flex-wrap pb-3 border-b"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "p-2 uppercase",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: "font-semibold text-primary",
                children: [product.price.amount, " ", product.price.currency]
              }), ' ']
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex flex-wrap my-3 border-t ",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mr-14",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium mb-1",
                  children: "Description"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "text-customGray-550",
                  children: product.description
                })]
              })
            })]
          })]
        })]
      })
    })
  });
};
// EXTERNAL MODULE: ./src/components/services/product/TabPanel.tsx
var TabPanel = __webpack_require__(5775);
;// CONCATENATED MODULE: ./src/components/services/product/ProductView.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { SingleViewProduct } from './SingleViewProduct';







function a11yProps(index) {
  return {
    id: `simple-tab-${index}`
  };
}

const ProductView = ({
  data
}) => {
  // const [isProductModalOpen, setProductModalState] = useState(false);
  const {
    0: productModalData,
    1: setProductModalData
  } = (0,react.useState)({});
  const {
    0: value,
    1: setValue
  } = (0,react.useState)(0);
  const {
    0: isVisible,
    1: setVisible
  } = (0,react.useState)(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dataHandeler = data => {
    setProductModalData({
      data
    }); // setProductModalState(true);

    setVisible(true);
  }; // const toggleDataModal = () => setProductModalState(!isProductModalOpen);


  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "flex flex-wrap -mx-2",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime.jsx(node.Tabs, {
        value: value,
        onChange: handleChange,
        indicatorColor: "primary",
        textColor: "primary",
        variant: "scrollable",
        scrollButtons: "auto",
        "aria-label": "scrollable auto tab",
        children: data.categories.map((product, index) => /*#__PURE__*/jsx_runtime.jsx(node.Tab, _objectSpread(_objectSpread({
          label: product.title
        }, a11yProps(index)), {}, {
          style: {
            textTransform: 'none',
            outline: ' none '
          }
        }), index))
      }), data.categories.map((product, index) => {
        return /*#__PURE__*/jsx_runtime.jsx(TabPanel/* TabPanel */.x, {
          value: value,
          index: index,
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex",
            children: product.items.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "w-56 cursor-pointer rounded-b-md mx-2 border mb-4 transition duration-300 ease-in-out hover:shadow-xl relative",
              onClick: () => {
                dataHandeler(item);
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                className: "h-40 w-full overflow-hidden rounded-md",
                children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                  loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
                  className: "inline-block w-full h-full object-cover",
                  src: item.image,
                  alt: "product",
                  width: "560",
                  height: "400"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "p-2",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-semibold text-xl pb-2",
                  children: item.title
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "ml-1",
                  children: /*#__PURE__*/jsx_runtime.jsx("p", {
                    children: item.description
                  })
                })]
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "bg-yellow-400 text-xs uppercase font-bold rounded-full p-1 absolute top-0 right-0 mt-1 mr-1",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  children: [item.price.currency, " ", item.price.amount, ' ']
                })
              })]
            }, index))
          })
        }, index);
      })]
    }), Object.keys(productModalData).length !== 0 && /*#__PURE__*/jsx_runtime.jsx(ProductModal, {
      isVisible: isVisible,
      setVisible: handleClose,
      data: productModalData
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/services/packages/PackageModal.tsx







const PackageModal = ({
  isVisible,
  setVisible,
  data
}) => {
  const item = data.data;

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  return /*#__PURE__*/jsx_runtime.jsx((Dialog_default()), {
    open: isVisible,
    onClose: setVisible,
    fullWidth: true,
    maxWidth: 'md',
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "font-semibold text-gray-800",
            children: item.title
          }), /*#__PURE__*/jsx_runtime.jsx("button", {
            type: "button",
            onClick: setVisible,
            children: /*#__PURE__*/jsx_runtime.jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col px-6 py-4 bg-white rounded-bl-lg rounded-br-lg",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "h-64 overflow-hidden rounded-md",
            children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
              className: "inline-block w-full h-full object-cover",
              src: item.image,
              alt: "package",
              width: "800",
              height: "640"
            }), ' ']
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex flex-wrap p-4 border-b border-t",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: "font-semibold text-lg text-primary uppercase",
                children: [item.price.amount, " ", item.price.currency]
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex flex-wrap my-3",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mr-14",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium mb-1",
                  children: "Description"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "text-customGray-550 ml-2",
                  dangerouslySetInnerHTML: createMarkup(item.description)
                })]
              })
            })]
          })]
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/services/packages/PackageView.tsx


 // import { SingleViewPakage } from './SingleViewPakage';





const PackageView = ({
  data
}) => {
  // const [isPakageModalOpen, setPakageModalState] = useState(false);
  const {
    0: pakageModalData,
    1: setPakageModalData
  } = (0,react.useState)({});
  const {
    0: isVisible,
    1: setVisible
  } = (0,react.useState)(false);

  const handleClose = () => {
    setVisible(false);
  };

  const dataHandeler = data => {
    setPakageModalData({
      data
    }); // setPakageModalState(true);

    setVisible(true);
  }; // const toggleDataModal = () => setPakageModalState(!isPakageModalOpen);


  const createMarkup = data => {
    return {
      __html: data
    };
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "flex flex-wrap -mx-2",
    children: [data.map((item, index) =>
    /*#__PURE__*/
    // <div
    //   key={index}
    //   className=" h-12 w-12 border-2 rounded-md	 cursor-pointer rounded-b-md mx-2 mb-4 transition duration-300 ease-in-out hover:shadow-xl"
    // >
    //   <div className="flex justify-between mb-5">
    //     <span className="font-semibold text-lg text-primary">
    //       {item.price.amount} {item.price.currency}
    //     </span>
    //   </div>
    // </div>
    (0,jsx_runtime.jsxs)("div", {
      className: " h-80 flex flex-col justify-between w-64  p-4  mb-2 bg-white border-2 border-gray-200 rounded-xl\t lg:mx-4 mx-2 ",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex-shrink-0",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex justify-between mb-5",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: " flex flex-col",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: "font-normal text-base text-primary uppercase",
              children: [item.price.amount, " ", item.price.currency]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "font-medium text-primary",
              children: item.title
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
              className: "rounded-full mx-auto",
              src: item.image,
              alt: "package",
              width: "70",
              height: "70"
            })
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          dangerouslySetInnerHTML: createMarkup(item.description)
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "flex justify-end mt-24",
        children: /*#__PURE__*/jsx_runtime.jsx("button", {
          className: "text-primary",
          onClick: () => {
            dataHandeler(item);
          },
          children: "View Details"
        })
      })]
    }, index)), Object.keys(pakageModalData).length !== 0 && /*#__PURE__*/jsx_runtime.jsx(PackageModal, {
      isVisible: isVisible,
      setVisible: handleClose,
      data: pakageModalData
    })]
  });
};
// EXTERNAL MODULE: ./src/components/shared/BreakpointHook/Context.tsx
var Context = __webpack_require__(2702);
// EXTERNAL MODULE: ./src/components/shared/ReactDates/index.tsx
var ReactDates = __webpack_require__(38108);
// EXTERNAL MODULE: ./node_modules/react-dates/index.js
var react_dates = __webpack_require__(76141);
// EXTERNAL MODULE: ./node_modules/react-dates/initialize.js
var initialize = __webpack_require__(6063);
// EXTERNAL MODULE: ./src/components/shared/Toaster.tsx
var Toaster = __webpack_require__(49190);
// EXTERNAL MODULE: ./src/components/shared/hooks/redux.ts
var redux = __webpack_require__(86869);
;// CONCATENATED MODULE: ./src/components/services/BookingLocationBottomBar.tsx


















const calculateServicePrice = service => {
  if (service) {
    if (service.type === 'venue') {
      if (service.pricing.location.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
            name: "star",
            className: "h-3 fill-current text-primary"
          }), /*#__PURE__*/jsx_runtime.jsx("small", {
            className: "ml-1 font-semibold text-customGray-550",
            children: service.avgRating.toFixed(1)
          })]
        });
      } else if (service.pricing.location.length === 1) {
        return /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
              name: "star",
              className: "h-3 fill-current text-primary"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "ml-1 font-medium text-sm",
              children: service.avgRating.toFixed(1)
            })]
          })
        });
      }

      let minValue = Infinity;
      let maxValue = -Infinity;
      const currency = service.pricing.location[0].sessions[0].price.currency;

      for (const location of service.pricing.location) {
        for (const session of location.sessions) {
          if (session.price.amount < minValue) minValue = session.price.amount;
          if (session.price.amount > maxValue) maxValue = session.price.amount;
        }
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-bold text-primary text-lg",
            children: `${currencyFormat(minValue)} - ${currencyFormat(maxValue)} ${currency}`
          }), ' ', /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-medium text-sm text-customGray-550",
            children: "/ Day"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
            name: "star",
            className: "h-3 fill-current text-primary"
          }), /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "ml-1 font-medium text-sm",
            children: service.avgRating.toFixed(1)
          })]
        })]
      });
    }
  }
};

const fetchBlockDays = async serviceId => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await config/* ayoojonApi.get */.ZG.get(`services/${serviceId}/blockdays`, headers);
  return response.data.data;
};

const BookingLocationBottomBar = ({
  service
}) => {
  const {
    isLogin
  } = (0,redux/* useAppSelector */.C)(state => {
    return {
      isLogin: !!state.userReducer.user
    };
  });
  const matchPoints = (0,Context/* useBreakpointFromContext */.C)();
  const {
    0: isBookingModalOpen,
    1: setBookingModalOpen
  } = (0,react.useState)(false);
  const {
    0: selectedDate,
    1: setSelectedDate
  } = (0,react.useState)(null);
  const {
    0: isFocused,
    1: setFocused
  } = (0,react.useState)(false); // const [blockedDates] = useState([moment()]);

  const {
    0: selectedSpace,
    1: setSelectedSpace
  } = (0,react.useState)();
  const {
    0: selectedPricing,
    1: setSelectedPricing
  } = (0,react.useState)();
  const {
    0: blockDate,
    1: setBlockDate
  } = (0,react.useState)([]);
  const {
    0: plainDate,
    1: setPlainDate
  } = (0,react.useState)([]);
  const {
    data
  } = (0,lib.useQuery)(['service-block-days', service._id], () => fetchBlockDays(service._id), {
    refetchOnWindowFocus: false,
    enabled: !!service._id
  });
  (0,react.useEffect)(() => {
    if (data) {
      let newDate = [];
      data.map(item => {
        const p = moment_default()(item.date).format('DD-MM-YYYY');
        newDate.push(p);
        return p;
      });
      setPlainDate([...newDate]);
    }
  }, [data]);
  const HIGHLIGHTED_DATES = [moment_default()().add(4, 'days'), moment_default()().add(7, 'days')];

  const handleProceedToBooking = () => {
    if (selectedDate && selectedSpace && selectedPricing) {
      const values = {
        date: selectedDate.format('DD-MM-YYYY'),
        spaceId: selectedSpace._id,
        pricingId: selectedPricing._id
      };

      if (!isLogin) {
        (0,Toaster/* customToast */.X)('Please login first', 'danger');
        next_router.default.push(`/signin?redirectUrl=/services/${service.url}/booking?date=${values.date}&spaceId=${values.spaceId}&pricingId=${values.pricingId}`);
      } else {
        next_router.default.push(`/services/${service.url}/booking?date=${values.date}&locationId=${values.spaceId}&pricingId=${values.pricingId}`);
      }
    }
  };

  const onDateChange = date => {
    setSelectedDate(date); // TODO: Filter space with previous booking

    setSelectedSpace(undefined);
    setSelectedPricing(undefined);
  };

  const handleCheckAvailability = () => {
    setBookingModalOpen(!isBookingModalOpen);
    setFocused(!isFocused);
  };

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "sticky bottom-0 w-full bg-white border-t",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "max-w-6xl mx-auto px-6 flex justify-between items-center px-3 sm:px-6 py-4 relative",
      children: [isBookingModalOpen && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          className: "fixed inset-0 h-full w-full bg-black sm:bg-transparent opacity-50 cursor-default" // onClick={() => setBookingModalOpen(false)}
          ,
          tabIndex: -1
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "absolute booking_modal-width sm:mb-16 bg-white border right-0 bottom-0 rounded-t-lg sm:rounded-b-lg shadow-xl z-10 flex flex-col",
          style: {
            height: '75vh'
          },
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "text-primary px-5 py-1 font-medium cursor-pointer",
              onClick: () => setBookingModalOpen(false),
              children: "close"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "overflow-auto px-4 flex-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium text-lg mb-2",
                  children: "CHECK-IN"
                }), /*#__PURE__*/jsx_runtime.jsx(react_dates.SingleDatePicker, {
                  id: "single_booking_date",
                  date: selectedDate,
                  onDateChange: onDateChange,
                  focused: isFocused,
                  onFocusChange: ({
                    focused
                  }) => {
                    setFocused(focused);
                  },
                  orientation: "horizontal",
                  placeholder: "Date",
                  showClearDate: true,
                  showDefaultInputIcon: true,
                  small: false,
                  hideKeyboardShortcutsPanel: false,
                  daySize: (0,ReactDates/* getDaySize */.I8)(matchPoints),
                  numberOfMonths: 1 // isDayBlocked={(day) =>
                  //   weekCapitalize(service.weekDays).includes(day.format('ddd')) ? true : false
                  // }
                  ,
                  isDayBlocked: day => plainDate.includes(day.format('DD-MM-YYYY')) ? true : weekCapitalize(service.weekDays).includes(day.format('ddd')) // isDayBlocked={(day) => blockDate.some((blockDate) => isSameDay(day, blockDate))}
                  // isDayHighlighted={(day) =>
                  //   HIGHLIGHTED_DATES.some((highlightedDay) => isSameDay(day, highlightedDay))
                  // }
                  // isDayHighlighted={(day) => highlightDate.some((highlightedDay) => isSameDay(day, highlightedDay))}
                  ,
                  navPrev: /*#__PURE__*/jsx_runtime.jsx(ReactDates/* NavPrevIcon */.QI, {}),
                  navNext: /*#__PURE__*/jsx_runtime.jsx(ReactDates/* NavNextIcon */.To, {}),
                  renderCalendarInfo: () => /*#__PURE__*/jsx_runtime.jsx(ReactDates/* CalenderInfoPanel */.nG, {}),
                  readOnly: true,
                  displayFormat: "DD-MM-YYYY"
                })]
              }), selectedDate && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                    className: "font-medium text-lg",
                    children: "Location"
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "flex flex-wrap -mx-2",
                    children: service.pricing.location.map((place, index) => /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: `transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${selectedSpace && selectedSpace._id === place._id ? 'bg-primary text-white' : ''}`,
                      onClick: () => setSelectedSpace(place),
                      children: /*#__PURE__*/jsx_runtime.jsx("h6", {
                        className: "font-medium",
                        children: truncateString(place.title, 23)
                      })
                    }, index))
                  })]
                }), selectedSpace && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                    className: "font-medium text-lg mb-2",
                    children: "Select Time"
                  }), /*#__PURE__*/jsx_runtime.jsx(node.RadioGroup, {
                    name: "type",
                    value: selectedPricing ? selectedPricing._id : '' // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //
                    // }}
                    ,
                    children: selectedSpace && selectedSpace.sessions.map((session, index) => /*#__PURE__*/jsx_runtime.jsx(node.FormControlLabel, {
                      className: "mb-2",
                      value: session._id,
                      control: /*#__PURE__*/jsx_runtime.jsx(node.Radio, {
                        color: "primary"
                      }),
                      onClick: () => setSelectedPricing(session),
                      label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("small", {
                          children: [time24To12(session.startTime), ' - ', time24To12(session.endTime)]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
                          className: "font-semibold text-primary",
                          children: [session.price.amount, " ", session.price.currency.toUpperCase()]
                        })]
                      })
                    }, index))
                  })]
                })]
              })]
            })
          }), selectedDate && selectedSpace && selectedPricing && /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-4",
            children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
              fullWidth: true,
              variant: "contained",
              color: "primary",
              onClick: handleProceedToBooking,
              children: /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "font-sans font-semibold",
                children: "Proceed To Booking"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between items-center px-3 sm:px-6 py-2 border-t shadow-top sm:hidden",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              children: calculateServicePrice(service)
            }), /*#__PURE__*/jsx_runtime.jsx(node.Button, {
              variant: "contained",
              color: "primary",
              onClick: handleCheckAvailability,
              children: /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "font-sans font-semibold",
                children: "Check Availability"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        children: calculateServicePrice(service)
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
          variant: "contained",
          color: "primary",
          onClick: handleCheckAvailability,
          children: /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-sans font-semibold",
            children: "Check Availability"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const services_BookingLocationBottomBar = (BookingLocationBottomBar);
;// CONCATENATED MODULE: ./src/components/services/BookingPackageBottomBar.tsx


















const BookingPackageBottomBar_calculateServicePrice = service => {
  if (service) {
    if (['event-management', 'photographer', 'music', 'lightening', 'invitation-card', 'videographer', 'honeymoon'].includes(service.type)) {
      if (service.pricing.location.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
            name: "star",
            className: "h-3 fill-current text-primary"
          }), /*#__PURE__*/jsx_runtime.jsx("small", {
            className: "ml-1 font-semibold text-customGray-550",
            children: service.avgRating.toFixed(1)
          })]
        });
      } else if (service.pricing.location.length === 1) {
        return /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
              name: "star",
              className: "h-3 fill-current text-primary"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "ml-1 font-medium text-sm",
              children: service.avgRating.toFixed(1)
            })]
          })
        });
      }

      let minValue = Infinity;
      let maxValue = -Infinity;
      const currency = service.pricing.location[0].sessions[0].price.currency;

      for (const location of service.pricing.location) {
        for (const session of location.sessions) {
          if (session.price.amount < minValue) minValue = session.price.amount;
          if (session.price.amount > maxValue) maxValue = session.price.amount;
        }
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-bold text-primary text-lg",
            children: `${currencyFormat(minValue)} - ${currencyFormat(maxValue)} ${currency}`
          }), ' ', /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-medium text-sm text-customGray-550",
            children: "/ Day"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
            name: "star",
            className: "h-3 fill-current text-primary"
          }), /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "ml-1 font-medium text-sm",
            children: service.avgRating.toFixed(1)
          })]
        })]
      });
    }
  }
};

const BookingPackageBottomBar_fetchBlockDays = async serviceId => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await config/* ayoojonApi.get */.ZG.get(`services/${serviceId}/blockdays`, headers);
  return response.data.data;
};

const BookingPackageBottomBar = ({
  service
}) => {
  const {
    isLogin
  } = (0,redux/* useAppSelector */.C)(state => {
    return {
      isLogin: !!state.userReducer.user
    };
  });
  const matchPoints = (0,Context/* useBreakpointFromContext */.C)();
  const {
    0: isBookingModalOpen,
    1: setBookingModalOpen
  } = (0,react.useState)(false);
  const {
    0: selectedDate,
    1: setSelectedDate
  } = (0,react.useState)(null);
  const {
    0: isFocused,
    1: setFocused
  } = (0,react.useState)(false); // const [blockedDates] = useState([moment()]);

  const {
    0: selectedPackage,
    1: setSelectedPackage
  } = (0,react.useState)();
  const {
    0: plainDate,
    1: setPlainDate
  } = (0,react.useState)([]);
  const {
    data
  } = (0,lib.useQuery)(['service-block-days', service._id], () => BookingPackageBottomBar_fetchBlockDays(service._id), {
    refetchOnWindowFocus: false,
    enabled: !!service._id
  });
  (0,react.useEffect)(() => {
    if (data) {
      let newDate = [];
      data.map(item => {
        const p = moment_default()(item.date).format('DD-MM-YYYY');
        newDate.push(p);
        return p;
      });
      setPlainDate([...newDate]);
    }
  }, [data]);

  const handleProceedToBooking = () => {
    if (selectedDate && selectedPackage) {
      const values = {
        date: selectedDate.format('DD-MM-YYYY'),
        packageId: selectedPackage._id
      };

      if (!isLogin) {
        (0,Toaster/* customToast */.X)('Please login first', 'danger');
        next_router.default.push(`/signin?redirectUrl=/services/${service.url}/booking?date=${values.date}&packageId=${values.packageId}`);
      } else {
        next_router.default.push(`/services/${service.url}/booking?date=${values.date}&packageId=${values.packageId}`);
      }
    }
  };

  const onDateChange = date => {
    setSelectedDate(date); // TODO: Filter package with previous booking

    setSelectedPackage(undefined);
  };

  const handleCheckAvailability = () => {
    setBookingModalOpen(!isBookingModalOpen);
    setFocused(!isFocused);
  };

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "sticky bottom-0 w-full bg-white border-t",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "max-w-6xl mx-auto px-6 flex justify-between items-center px-3 sm:px-6 py-4 relative",
      children: [isBookingModalOpen && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          className: "fixed inset-0 h-full w-full bg-black sm:bg-transparent opacity-50 cursor-default" // onClick={() => setBookingModalOpen(false)}
          ,
          tabIndex: -1
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "absolute booking_modal-width sm:mb-16 bg-white border right-0 bottom-0 rounded-t-lg sm:rounded-b-lg shadow-xl z-10 flex flex-col",
          style: {
            height: '75vh'
          },
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "text-primary px-5 py-1 font-medium cursor-pointer",
              onClick: () => setBookingModalOpen(false),
              children: "close"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "overflow-auto px-4 flex-1",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium text-lg mb-2",
                  children: "CHECK-IN"
                }), /*#__PURE__*/jsx_runtime.jsx(react_dates.SingleDatePicker, {
                  id: "single_booking_date",
                  date: selectedDate,
                  onDateChange: onDateChange,
                  focused: isFocused,
                  onFocusChange: ({
                    focused
                  }) => {
                    setFocused(focused);
                  },
                  orientation: "horizontal",
                  placeholder: "Date",
                  showClearDate: true,
                  showDefaultInputIcon: true,
                  small: false,
                  hideKeyboardShortcutsPanel: false,
                  daySize: (0,ReactDates/* getDaySize */.I8)(matchPoints),
                  numberOfMonths: 1 // isDayBlocked={(day) => blockedDates.some((blockedDay) => isSameDay(day, blockedDay))}
                  ,
                  isDayBlocked: day => plainDate.includes(day.format('DD-MM-YYYY')) ? true : weekCapitalize(service.weekDays).includes(day.format('ddd')),
                  navPrev: /*#__PURE__*/jsx_runtime.jsx(ReactDates/* NavPrevIcon */.QI, {}),
                  navNext: /*#__PURE__*/jsx_runtime.jsx(ReactDates/* NavNextIcon */.To, {}),
                  renderCalendarInfo: () => /*#__PURE__*/jsx_runtime.jsx(ReactDates/* CalenderInfoPanel */.nG, {}),
                  readOnly: true,
                  displayFormat: "DD-MM-YYYY"
                })]
              }), selectedDate && /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                    className: "font-medium text-lg",
                    children: "Packages"
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "flex flex-wrap -mx-2",
                    children: service.pricing.package.map((place, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: `transition duration-300 ease-in-out border border-customGray-450 py-2 px-4 hover:bg-primary hover:text-white m-2 cursor-pointer ${selectedPackage && selectedPackage._id === place._id ? 'bg-primary text-white' : ''}`,
                      onClick: () => setSelectedPackage(place),
                      children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                        className: "font-medium",
                        children: truncateString(place.title, 23)
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                        children: [place.price.amount, " ", place.price.currency.toUpperCase()]
                      })]
                    }, index))
                  })]
                })
              })]
            })
          }), selectedDate && selectedPackage && /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-4",
            children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
              fullWidth: true,
              variant: "contained",
              color: "primary",
              onClick: handleProceedToBooking,
              children: /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "font-sans font-semibold",
                children: "Proceed To Booking"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between items-center px-3 sm:px-6 py-2 border-t shadow-top sm:hidden",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              children: BookingPackageBottomBar_calculateServicePrice(service)
            }), /*#__PURE__*/jsx_runtime.jsx(node.Button, {
              variant: "contained",
              color: "primary",
              onClick: handleCheckAvailability,
              children: /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "font-sans font-semibold",
                children: "Check Availability"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        children: BookingPackageBottomBar_calculateServicePrice(service)
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
          variant: "contained",
          color: "primary",
          onClick: handleCheckAvailability,
          children: /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-sans font-semibold",
            children: "Check Availability"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const services_BookingPackageBottomBar = (BookingPackageBottomBar);
;// CONCATENATED MODULE: ./src/components/services/BookingProductBottomBar.tsx

















const BookingProductBottomBar_fetchBlockDays = async serviceId => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await config/* ayoojonApi.get */.ZG.get(`services/${serviceId}/blockdays`, headers);
  return response.data.data;
};

const BookingProductBottomBar = ({
  service
}) => {
  const router = (0,next_router.useRouter)();
  const {
    isLogin
  } = (0,redux/* useAppSelector */.C)(state => {
    return {
      isLogin: !!state.userReducer.user
    };
  });
  const matchPoints = (0,Context/* useBreakpointFromContext */.C)();
  const {
    0: isBookingModalOpen,
    1: setBookingModalOpen
  } = (0,react.useState)(false);
  const {
    0: selectedDate,
    1: setSelectedDate
  } = (0,react.useState)(null);
  const {
    0: isFocused,
    1: setFocused
  } = (0,react.useState)(false); // const [blockedDates] = useState([moment()]);

  const {
    0: plainDate,
    1: setPlainDate
  } = (0,react.useState)([]);
  const {
    data
  } = (0,lib.useQuery)(['service-block-days', service._id], () => BookingProductBottomBar_fetchBlockDays(service._id), {
    refetchOnWindowFocus: false,
    enabled: !!service._id
  });
  (0,react.useEffect)(() => {
    if (data) {
      let newDate = [];
      data.map(item => {
        const p = moment_default()(item.date).format('DD-MM-YYYY');
        newDate.push(p);
        return p;
      });
      setPlainDate([...newDate]);
    }
  }, [data]);

  const handleProceedToBooking = () => {
    if (selectedDate) {
      const values = {
        date: selectedDate.format('DD-MM-YYYY')
      };

      if (!isLogin) {
        (0,Toaster/* customToast */.X)('Please login first', 'danger');
        router.push(`/signin?redirectUrl=/services/${service.url}/booking?date=${values.date}&categoryId=${values.spaceId}&itemId=${values.pricingId}`);
      } else {
        router.push(`/services/${service.url}/booking?date=${values.date}`);
      }
    }
  };

  const onDateChange = date => {
    setSelectedDate(date);
  };

  const handleCheckAvailability = () => {
    setBookingModalOpen(!isBookingModalOpen);
    setFocused(!isFocused);
  };

  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "sticky bottom-0 w-full bg-white border-t",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "max-w-6xl mx-auto px-6 flex justify-end items-center px-3 sm:px-6 py-4 relative",
      children: [isBookingModalOpen && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          className: "fixed inset-0 h-full w-full bg-black sm:bg-transparent opacity-50 cursor-default" // onClick={() => setBookingModalOpen(false)}
          ,
          tabIndex: -1
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "absolute booking_modal-width sm:mb-16 bg-white border right-0 bottom-0 rounded-t-lg sm:rounded-b-lg shadow-xl z-10 flex flex-col",
          style: {
            height: '75vh'
          },
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "text-primary px-5 py-1 font-medium cursor-pointer",
              onClick: () => setBookingModalOpen(false),
              children: "close"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "overflow-auto px-4 flex-1",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                  className: "font-medium text-lg mb-2",
                  children: "CHECK-IN"
                }), /*#__PURE__*/jsx_runtime.jsx(react_dates.SingleDatePicker, {
                  id: "single_booking_date",
                  date: selectedDate,
                  onDateChange: onDateChange,
                  focused: isFocused,
                  onFocusChange: ({
                    focused
                  }) => {
                    setFocused(focused);
                  },
                  orientation: "horizontal",
                  placeholder: "Date",
                  showClearDate: true,
                  showDefaultInputIcon: true,
                  small: false,
                  hideKeyboardShortcutsPanel: false,
                  daySize: (0,ReactDates/* getDaySize */.I8)(matchPoints),
                  numberOfMonths: 1 // isDayBlocked={(day) => blockedDates.some((blockedDay) => isSameDay(day, blockedDay))}
                  ,
                  isDayBlocked: day => plainDate.includes(day.format('DD-MM-YYYY')) ? true : weekCapitalize(service.weekDays).includes(day.format('ddd')),
                  navPrev: /*#__PURE__*/jsx_runtime.jsx(ReactDates/* NavPrevIcon */.QI, {}),
                  navNext: /*#__PURE__*/jsx_runtime.jsx(ReactDates/* NavNextIcon */.To, {}),
                  renderCalendarInfo: () => /*#__PURE__*/jsx_runtime.jsx(ReactDates/* CalenderInfoPanel */.nG, {}),
                  readOnly: true,
                  displayFormat: "DD-MM-YYYY"
                })]
              })
            })
          }), selectedDate && /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-4",
            children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
              fullWidth: true,
              variant: "contained",
              color: "primary",
              onClick: handleProceedToBooking,
              children: /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "font-sans font-semibold",
                children: "Proceed To Booking"
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex justify-between items-center px-3 sm:px-6 py-2 border-t shadow-top sm:hidden",
            children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
              variant: "contained",
              color: "primary",
              onClick: handleCheckAvailability,
              children: /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "font-sans font-semibold",
                children: "Check Availability"
              })
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        children: /*#__PURE__*/jsx_runtime.jsx(node.Button, {
          variant: "contained",
          color: "primary",
          onClick: handleCheckAvailability,
          children: /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "font-sans font-semibold",
            children: "Check Availability"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const services_BookingProductBottomBar = (BookingProductBottomBar);
// EXTERNAL MODULE: ./src/components/shared/SEO.tsx
var SEO = __webpack_require__(54576);
;// CONCATENATED MODULE: ./src/pages/services/[url]/index.tsx
























const ServicePage = ({
  service
}) => {
  var _service$seo;

  const router = (0,next_router.useRouter)();

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(SEO/* default */.Z, {
      siteTitle: service.name,
      description: (_service$seo = service.seo) !== null && _service$seo !== void 0 && _service$seo.description ? service.seo.description.length > 100 ? service.seo.description.substr(0, 100) : service.seo.description : 'Ayoojon Service',
      image: `${config/* s3FileUrl */.a9}${service.coverImage}`
    }), service ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Helmet/* Helmet */.ql, {
        children: /*#__PURE__*/jsx_runtime.jsx("title", {
          children: `${service.name} | ${config/* APP_TITLE */.XI}`
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "my-4",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "max-w-6xl mx-auto px-6 my-8",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "aspect-w-9 aspect-h-3",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "overflow-hidden border rounded-md shadow-md",
              children: /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "h-full w-full" // style={{
                //   backgroundSize: 'cover',
                //   backgroundImage: `url(${s3FileUrl + service.coverImage})`,
                // }}
                ,
                children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                  loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
                  src: `${service.coverImage}`,
                  alt: `${service.name}`,
                  layout: "responsive",
                  className: "object-cover",
                  width: 900,
                  height: 400,
                  priority: true
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex items-baseline",
              children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                className: "font-medium text-xl sm:text-3xl",
                children: service.name
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex items-center ml-4",
                children: [/*#__PURE__*/jsx_runtime.jsx(icons/* default */.Z, {
                  name: "star",
                  className: "h-4 sm:h-6 fill-current text-primary"
                }), /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "ml-1 font-medium sm:text-lg",
                  children: service.avgRating.toFixed(1)
                })]
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              children: service.location.address
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              children: service.location.city
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              children: service.location.country
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Description"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              dangerouslySetInnerHTML: createMarkup(service.placeDescription)
            })]
          }), service.type === 'venue' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Location"
            }), /*#__PURE__*/jsx_runtime.jsx(LocationView, {
              data: service.pricing.location
            })]
          }), (service.type === 'flowers' || service.type === 'caterings') && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Product"
            }), /*#__PURE__*/jsx_runtime.jsx(ProductView, {
              data: service.pricing.product
            })]
          }), ['event-management', 'photographer', 'music', 'lightening', 'invitation-card', 'videographer', 'honeymoon'].includes(service.type) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Packege"
            }), /*#__PURE__*/jsx_runtime.jsx(PackageView, {
              data: service.pricing.package
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Albums"
            }), service.albums.length > 0 ? /*#__PURE__*/jsx_runtime.jsx(AlbumView, {
              data: service.albums
            }) : /*#__PURE__*/jsx_runtime.jsx("p", {
              children: "No albums found"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Amenities"
            }), /*#__PURE__*/jsx_runtime.jsx(AmenitiesListView, {
              amenities: service.amenities
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Terms And Conditions"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              dangerouslySetInnerHTML: createMarkup(service.termsConditions)
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Reviews"
            }), /*#__PURE__*/jsx_runtime.jsx(ServiceReview, {
              serviceId: service._id
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Context/* BreakpointProvider */.q, {
        queries: ReactDates/* breakpointsQueries */.Az,
        children: [service.type === 'venue' && /*#__PURE__*/jsx_runtime.jsx(services_BookingLocationBottomBar, {
          service: service
        }), ['event-management', 'photographer', 'music', 'lightening', 'invitation-card', 'videographer', 'honeymoon'].includes(service.type) && /*#__PURE__*/jsx_runtime.jsx(services_BookingPackageBottomBar, {
          service: service
        }), ['flowers', 'caterings'].includes(service.type) && /*#__PURE__*/jsx_runtime.jsx(services_BookingProductBottomBar, {
          service: service
        })]
      })]
    }) : /*#__PURE__*/jsx_runtime.jsx("div", {
      children: "No service found"
    })]
  });
};

async function getStaticPaths() {
  try {
    const {
      data
    } = await axios_default().get(`${config/* server */.fw}services`);
    const services = data.data.map(service => ({
      params: {
        url: service.url
      }
    }));
    return {
      paths: services,
      fallback: true
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true
    };
  }
}
const getStaticProps = async ({
  params
}) => {
  try {
    const {
      data
    } = await axios_default().get(`${config/* server */.fw}services/url/${params.url}`);

    if (!data) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        service: data.service
      },
      revalidate: 60
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
/* harmony default export */ const _url_ = (ServicePage);

/***/ }),

/***/ 56237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"NEXT_PUBLIC_GOOGLE_KEY=AIzaSyCpL2DpvIHSnMLaeaxg5k4R7szgjrcBFxQ\r\nNEXT_PUBLIC_GMAIL_CLIENT_ID=77285414059-mmhfavaqcau3afa6m6nmih1ghjcq4pvf.apps.googleusercontent.com"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(37485)

      const appMod = __webpack_require__(2767)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(62670)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/services/[url]",
        buildId: "IFoXU0SyNHi4yjJgJP0a0",
        escapedBuildId: "IFoXU0SyNHi4yjJgJP0a0",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"749061376033ac0cec8ab8066a08c8c5",previewModeSigningKey:"dcd0bf057f570a618dde018d3a10faaf75476cb776c10156d7494a37bc8d23f4",previewModeEncryptionKey:"1ca9f08f0663d58500c58fe6f9982efb21ced308845b2a3baa2f3feac6cd47ea"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 64293:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 45532:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 57211:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 33700:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 71191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 33867:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 78835:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [6486,9008,4491,2540,381,482,4753,863,7517,5482,1441,6994,8974,4576,1843,4572], () => (__webpack_require__(56237)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			9213: 1,
/******/ 			8628: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(6486);
/******/ 			__webpack_require__.e(9008);
/******/ 			__webpack_require__.e(4491);
/******/ 			__webpack_require__.e(2540);
/******/ 			__webpack_require__.e(381);
/******/ 			__webpack_require__.e(482);
/******/ 			__webpack_require__.e(4753);
/******/ 			__webpack_require__.e(863);
/******/ 			__webpack_require__.e(7517);
/******/ 			__webpack_require__.e(5482);
/******/ 			__webpack_require__.e(1441);
/******/ 			__webpack_require__.e(6994);
/******/ 			__webpack_require__.e(8974);
/******/ 			__webpack_require__.e(4576);
/******/ 			__webpack_require__.e(1843);
/******/ 			__webpack_require__.e(4572);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;