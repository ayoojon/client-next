/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 45669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vc": () => (/* binding */ config),
/* harmony export */   "a9": () => (/* binding */ s3FileUrl),
/* harmony export */   "fw": () => (/* binding */ server),
/* harmony export */   "XI": () => (/* binding */ APP_TITLE),
/* harmony export */   "PB": () => (/* binding */ APP_DESCRIPTION),
/* harmony export */   "ni": () => (/* binding */ APP_IMAGE_URL),
/* harmony export */   "nX": () => (/* binding */ APP_FACEBOOK_URL),
/* harmony export */   "jQ": () => (/* binding */ APP_LINKEDIN_URL)
/* harmony export */ });
/* unused harmony exports lambdaAPI, localServer, prodServer, ayoojonApi */
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

/***/ 44625:
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
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(50594);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(7772);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45669);
// EXTERNAL MODULE: ./node_modules/jwt-decode/lib/index.js
var lib = __webpack_require__(46489);
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
    const decoded = decode(token);

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
// EXTERNAL MODULE: ./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.cjs.production.min.js
var reactgooglemapsapi_cjs_production_min = __webpack_require__(73827);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/shared/Map.tsx







const Map = ({
  latitude,
  longitude
}) => {
  const center = {
    lat: latitude,
    lng: longitude
  };
  const {
    isLoaded,
    loadError
  } = (0,reactgooglemapsapi_cjs_production_min/* useLoadScript */.Db)({
    googleMapsApiKey: config/* config.MAP_KEY */.vc.MAP_KEY
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [loadError && /*#__PURE__*/jsx_runtime.jsx("p", {
      children: loadError
    }), isLoaded ? /*#__PURE__*/jsx_runtime.jsx(reactgooglemapsapi_cjs_production_min/* GoogleMap */.b6, {
      center: center,
      zoom: 14,
      mapContainerClassName: "h-full",
      children: /*#__PURE__*/jsx_runtime.jsx(reactgooglemapsapi_cjs_production_min/* Marker */.Jx, {
        icon: {
          url: '/event.svg',
          origin: new window.google.maps.Point(0, 0),
          scaledSize: new window.google.maps.Size(50, 50)
        },
        position: center
      })
    }) : /*#__PURE__*/jsx_runtime.jsx("h1", {
      children: "No Map Found"
    })]
  });
};

/* harmony default export */ const shared_Map = (Map);
;// CONCATENATED MODULE: ./src/components/shared/Accordion.tsx




const AyoojonAccordion = ({
  title,
  body
}) => {
  const ref = (0,react.useRef)(null);
  const {
    0: selected,
    1: setSelected
  } = (0,react.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    onClick: () => setSelected(v => !v),
    className: "cursor-pointer group border-2 rounded-lg shadow mb-4",
    children: [/*#__PURE__*/jsx_runtime.jsx("details", {
      children: /*#__PURE__*/jsx_runtime.jsx("summary", {
        className: "font-semibold text-lg py-4 px-4",
        children: title
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      ref: ref,
      className: "relative overflow-hidden transition-all duration-500",
      style: {
        maxHeight: selected && ref.current ? ref.current.scrollHeight : 0
      },
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "ml-8 mb-4",
        children: body
      })
    })]
  });
};

/* harmony default export */ const Accordion = (AyoojonAccordion);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./src/utils/next.ts
var next = __webpack_require__(30607);
// EXTERNAL MODULE: ./src/components/shared/SEO.tsx
var SEO = __webpack_require__(54576);
;// CONCATENATED MODULE: ./src/pages/events/[url]/index.tsx

















const EventPage = ({
  event,
  tickets,
  isJoined
}) => {
  var _event$seo, _event$venueLocation, _event$venueLocation2, _event$price;

  const router = (0,next_router.useRouter)();
  const {
    0: showPrice,
    1: setShowPrice
  } = (0,react.useState)(false);

  const handleOnClickBuyTicket = async () => {
    setShowPrice(false);
  };

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "mb-2",
    children: [/*#__PURE__*/jsx_runtime.jsx(SEO/* default */.Z, {
      siteTitle: event.name,
      description: (_event$seo = event.seo) !== null && _event$seo !== void 0 && _event$seo.description ? event.seo.description.length > 100 ? event.seo.description.substr(0, 100) : event.seo.description : 'Ayoojon Event',
      image: `${config/* s3FileUrl */.a9}${event.coverImage}`
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "max-w-6xl mx-auto px-6 my-8",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "relative rounded-md shadow-md overflow-hidden border",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
          src: `${event.coverImage}`,
          alt: `${event.name}`,
          layout: "responsive",
          className: "object-cover",
          width: 900,
          height: 400,
          priority: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "py-6 border-b border-gray-300 last:border-0 md:flex md:justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
            className: "font-medium text-xl sm:text-3xl",
            children: event.name
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-gray-600",
            children: event.hostingType === 'venue' ? event.venueAddress : event.hostingType
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "mt-3 md:mt-0 flex justify-between",
          children: showPrice ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "w-64",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                className: "font-medium text-xl mb-3",
                children: "Pricing"
              }), /*#__PURE__*/jsx_runtime.jsx(node.IconButton, {
                color: "primary",
                "aria-label": "hide price",
                component: "span",
                onClick: () => setShowPrice(false),
                children: /*#__PURE__*/jsx_runtime.jsx(Close/* default */.Z, {
                  color: "error"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex justify-between my-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                children: "Ticket Price"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: [event.price || 0, " BDT"]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex justify-between my-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                children: "Quantity"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                children: "1"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex justify-between my-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                children: "Tax"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: [event.price ? event.price : 0, " BDT"]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex justify-between my-2 font-medium text-primary",
              children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                children: "Total"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: [event.price || 0, " BDT"]
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("button", {
              className: "w-full text-white font-medium bg-primary border-2 border-primary rounded-md py-1 focus:outline-none",
              onClick: handleOnClickBuyTicket,
              children: "Buy Ticket"
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/jsx_runtime.jsx("button", {
              className: "text-primary font-medium py-1 w-20 m-1 focus:outline-none hover:bg-gray-100",
              children: "Share"
            }), isJoined && /*#__PURE__*/jsx_runtime.jsx("button", {
              className: "cursor-not-allowed text-primary font-medium bg-teal-100 border-2 border-primary rounded-md py-1 w-32 m-1 focus:outline-none",
              children: "Joined"
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "grid grid-cols-2 gap-6 my-6",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "col-span-2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "pb-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Event Details"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "grid md:grid-cols-3",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "md:col-span-2",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex flex-wrap sm:mb-3",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "w-48 mb-2",
                    children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                      className: "font-medium text-primary mb-2",
                      children: "Starts In"
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      children: time24To12(event.startingTime)
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      children: moment_default()(event.startingDate).format('Do MMMM, YYYY')
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "w-48 mb-2 ",
                    children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                      className: "font-medium text-primary mb-2",
                      children: "Ends In"
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      children: time24To12(event.endingTime)
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      children: moment_default()(event.endingDate).format('Do MMMM, YYYY')
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex flex-wrap",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "w-48 mb-2",
                    children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                      className: "font-medium text-primary",
                      children: "Ticket Price"
                    }), /*#__PURE__*/jsx_runtime.jsx("p", {
                      children: event.ticketType === 'paid' && event.price ? `${event.price} BDT` : /*#__PURE__*/jsx_runtime.jsx("span", {
                        className: "text-green-500 font-semibold",
                        children: "FREE"
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "w-48 mb-2 ",
                    children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
                      className: "font-medium text-primary",
                      children: "Guest Limit"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                      children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                        children: event.quantity
                      }), event.members > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "text-sm font-medium italic text-gray-500 ml-3",
                        children: [event.quantity - event.members, " left!!"]
                      })]
                    })]
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "md:col-span-1",
                children: isJoined && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "bg-gray-300 p-4 rounded",
                  children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                    children: "Ticket Information"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                    children: ["You have ", /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: "mr-1 ",
                      children: tickets.length
                    }), "Ticket"]
                  }), tickets.slice(0, 1).map(({
                    slug,
                    customerDetail
                  }) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "my-3 text-teal-900",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                      children: ["Name: ", customerDetail.name]
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                      children: ["Number: ", customerDetail.contactNo]
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                      children: ["Email: ", customerDetail.email]
                    })]
                  }, slug)), /*#__PURE__*/jsx_runtime.jsx(node.Link, {
                    href: "/user/tickets",
                    children: /*#__PURE__*/jsx_runtime.jsx("button", {
                      className: "text-white font-normal bg-primary rounded-md px-2 py-1",
                      children: "See More"
                    })
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Description"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              dangerouslySetInnerHTML: createMarkup(event.description)
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Terms And Conditions"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: event.termsConditions.length > 0 ? /*#__PURE__*/jsx_runtime.jsx("div", {
                dangerouslySetInnerHTML: createMarkup(event.termsConditions)
              }) : 'N/A'
            })]
          }), event.hostingType === 'venue' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "Location on Google Map"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "h-[320px] border relative",
              children: /*#__PURE__*/jsx_runtime.jsx(shared_Map, {
                latitude: parseFloat(event === null || event === void 0 ? void 0 : (_event$venueLocation = event.venueLocation) === null || _event$venueLocation === void 0 ? void 0 : _event$venueLocation.coordinates[1]),
                longitude: parseFloat(event === null || event === void 0 ? void 0 : (_event$venueLocation2 = event.venueLocation) === null || _event$venueLocation2 === void 0 ? void 0 : _event$venueLocation2.coordinates[0])
              })
            })]
          }) : '', /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "py-6 border-b border-gray-300 last:border-0",
            children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
              className: "font-medium text-xl mb-3",
              children: "FAQ"
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: event.faq.length > 0 ? event.faq.map(faq => /*#__PURE__*/jsx_runtime.jsx(Accordion, {
                title: faq.question,
                body: faq.answer
              }, faq._id)) : 'N/A'
            })]
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "sticky bottom-0 left-0 right-0 py-3 border-t border-gray-400 bg-white",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "max-w-6xl mx-auto px-6 flex justify-between items-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-primary font-medium text-lg",
            children: event.ticketType === 'paid' ? `${(_event$price = event.price) === null || _event$price === void 0 ? void 0 : _event$price.toFixed(2)} BDT` : 'FREE'
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-gray-600 text-md ml-2",
            children: "/ Ticket"
          })]
        }), event.quantity - event.members === 0 ? /*#__PURE__*/jsx_runtime.jsx(node.Link, {
          href: `/events/${event.url}/buy`,
          children: /*#__PURE__*/jsx_runtime.jsx("button", {
            disabled: true,
            className: "cursor-not-allowed text-white font-medium bg-customGray-450 rounded-md py-4 px-16",
            children: "Sold Out"
          })
        }) : /*#__PURE__*/jsx_runtime.jsx(node.Link, {
          href: `/events/${event.url}/book`,
          children: /*#__PURE__*/jsx_runtime.jsx("button", {
            className: "text-white font-medium bg-primary rounded-md py-4 px-16",
            children: "Get Ticket"
          })
        })]
      })
    })]
  });
};

async function getStaticPaths() {
  try {
    const {
      data
    } = await axios_default().get(`${config/* server */.fw}events`);
    const events = data.data.map(event => ({
      params: {
        url: event.url
      }
    }));
    return {
      paths: events,
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
    } = await axios_default().get(`${config/* server */.fw}events/url/${params.url}`);

    if (!data) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        event: data.event,
        tickets: data.tickets,
        isJoined: data.isJoined
      },
      revalidate: 60
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
/* harmony default export */ const _url_ = (EventPage);

/***/ }),

/***/ 56712:
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

      const compMod = __webpack_require__(44625)

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
        page: "/events/[url]",
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [6486,9008,4491,2540,381,1672,6994,8628,8974,4576], () => (__webpack_require__(56712)))
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
/******/ 			5418: 1
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
/******/ 			__webpack_require__.e(1672);
/******/ 			__webpack_require__.e(6994);
/******/ 			__webpack_require__.e(8628);
/******/ 			__webpack_require__.e(8974);
/******/ 			__webpack_require__.e(4576);
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