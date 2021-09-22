/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 80255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ events),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(7772);
// EXTERNAL MODULE: ./node_modules/@mui/styles/node/index.js
var styles_node = __webpack_require__(67659);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/jwt-decode/lib/index.js
var jwt_decode_lib = __webpack_require__(46489);
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
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45669);
// EXTERNAL MODULE: ./src/utils/next.ts
var next = __webpack_require__(30607);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/Cards/EventCard.tsx








const EventCard = ({
  event
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime.jsx("div", {
      className: "aspect-ratio--16x9",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "aspect-ratio__inner-wrapper overflow-hidden border rounded-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          loader: (0,next/* imgLoader */.B)(config/* s3FileUrl */.a9),
          src: event.coverImage,
          alt: "Picture of the author",
          width: "1600",
          height: "900",
          layout: "responsive"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "py-2",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          className: "font-medium text-lg",
          children: event.name
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "ml-1 font-medium text-gray-600 text-xs",
          children: moment_default()(event.startingDate).format('Do MMM, YYYY')
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
          className: "italic text-gray-600 font-medium text-xs",
          children: eventTypesName[event.type]
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "capitalize text-primary font-semibold text-sm ml-1",
          children: event.ticketType
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("p", {
        className: "font-medium text-gray-600 text-xs",
        children: event.hostingType === 'venue' ? event.venueAddress : event.hostingType
      })]
    })]
  });
};
// EXTERNAL MODULE: ./src/components/shared/hooks/useDebounce.tsx
var useDebounce = __webpack_require__(18146);
// EXTERNAL MODULE: ./src/components/Pagination.tsx
var Pagination = __webpack_require__(51843);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Backdrop/index.js
var Backdrop = __webpack_require__(57990);
var Backdrop_default = /*#__PURE__*/__webpack_require__.n(Backdrop);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CircularProgress/index.js
var CircularProgress = __webpack_require__(93674);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress);
;// CONCATENATED MODULE: ./src/components/shared/Backdrop.tsx




const useStyles = (0,styles_node.makeStyles)(theme => (0,styles_node.createStyles)({
  backdrop: {
    zIndex: 99,
    color: '#fff'
  }
}));

const Backdrop_Backdrop = ({
  open
}) => {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime.jsx((Backdrop_default()), {
    className: classes.backdrop,
    open: open,
    children: /*#__PURE__*/jsx_runtime.jsx((CircularProgress_default()), {
      color: "inherit"
    })
  });
};

/* harmony default export */ const shared_Backdrop = (Backdrop_Backdrop);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(53456);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(31626);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogContent/index.js
var DialogContent = __webpack_require__(45845);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogTitle/index.js
var DialogTitle = __webpack_require__(17155);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(86096);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
;// CONCATENATED MODULE: ./src/components/event/FilterEvents.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const FilterEvents = ({
  isVisible,
  setVisible,
  searchQuery,
  setSearchQuery
}) => {
  const handleClose = () => {
    setVisible(false);
  };

  const reset = () => {
    setSearchQuery({
      name: '',
      hostingType: '',
      eventType: ''
    });
    setVisible(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)((Dialog_default()), {
    fullWidth: true,
    maxWidth: 'md',
    open: isVisible,
    onClose: setVisible,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description",
    children: [/*#__PURE__*/jsx_runtime.jsx((DialogTitle_default()), {
      id: "scroll-dialog-title",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "border-b",
        children: "Filters"
      })
    }), /*#__PURE__*/jsx_runtime.jsx((DialogContent_default()), {
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        id: "scroll-dialog-description",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "my-3",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "my-3",
            children: /*#__PURE__*/jsx_runtime.jsx(node.OutlinedInput, {
              fullWidth: true,
              color: "primary",
              type: "text",
              name: "name",
              placeholder: "Enter Name" // labelWidth={0}
              ,
              className: "w-full my-2 sm:my-0",
              onChange: event => setSearchQuery(_objectSpread(_objectSpread({}, searchQuery), {}, {
                name: event.target.value
              }))
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "my-3",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(node.FormControl, {
              color: "primary",
              variant: "outlined",
              className: "w-1/2 sm:w-full",
              children: [/*#__PURE__*/jsx_runtime.jsx(node.InputLabel, {
                id: "pageSize-select-outlined-label",
                children: "Type"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(node.Select, {
                labelId: "type-select-outlined-label",
                id: "type-select-outlined-label",
                name: "type",
                value: searchQuery.eventType,
                label: "type",
                onChange: event => setSearchQuery(_objectSpread(_objectSpread({}, searchQuery), {}, {
                  eventType: event.target.value
                })),
                children: [/*#__PURE__*/jsx_runtime.jsx(node.MenuItem, {
                  value: "",
                  disabled: true,
                  children: "Select Type"
                }), Object.entries(eventTypesName).map((event, i) => /*#__PURE__*/jsx_runtime.jsx(node.MenuItem, {
                  value: event[0],
                  children: event[1]
                }, i))]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(node.FormControl, {
            color: "primary",
            variant: "outlined",
            className: "w-1/2 sm:w-full",
            children: [/*#__PURE__*/jsx_runtime.jsx(node.InputLabel, {
              id: "pageSize-select-outlined-label",
              children: "Hosting Type"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(node.Select, {
              labelId: "hostingType-select-outlined-label",
              id: "hostingType-select-outlined-label",
              name: "hostingType",
              value: searchQuery.hostingType,
              label: "Hosting Type",
              onChange: event => setSearchQuery(_objectSpread(_objectSpread({}, searchQuery), {}, {
                hostingType: event.target.value
              })),
              children: [/*#__PURE__*/jsx_runtime.jsx(node.MenuItem, {
                value: "",
                disabled: true,
                children: "Select Hosting Type"
              }), /*#__PURE__*/jsx_runtime.jsx(node.MenuItem, {
                value: "venue",
                children: "Venue"
              }), /*#__PURE__*/jsx_runtime.jsx(node.MenuItem, {
                value: "online",
                children: "Online"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)((DialogActions_default()), {
      children: [/*#__PURE__*/jsx_runtime.jsx((Button_default()), {
        color: "primary",
        onClick: reset,
        children: "reset"
      }), /*#__PURE__*/jsx_runtime.jsx((Button_default()), {
        color: "primary",
        onClick: handleClose,
        children: "Show"
      })]
    })]
  });
};

/* harmony default export */ const event_FilterEvents = (FilterEvents);
// EXTERNAL MODULE: ./src/components/shared/SEO.tsx
var SEO = __webpack_require__(54576);
;// CONCATENATED MODULE: ./src/pages/events/index.tsx
function events_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function events_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { events_ownKeys(Object(source), true).forEach(function (key) { events_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { events_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function events_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const events_useStyles = (0,styles_node.makeStyles)((0,styles_node.createStyles)({
  filtersActiveLabel: {
    color: '#998',
    fontSize: '14px',
    paddingRight: 10
  },
  chipZone: {
    padding: '18px 0 5px 10px',
    width: '100%'
  },
  chipLabel: {
    fontWeight: 500,
    marginRight: 5
  },
  filterChip: {
    marginRight: 4,
    color: '#222'
  }
}));

const fetchAllEvents = async searchQuery => {
  const response = await config/* ayoojonApi.get */.ZG.get(`events?${generateQueryString(searchQuery)}`);
  return {
    events: response.data.data,
    pagination: response.data.pagination
  };
};

const Events = ({
  initialEvents,
  pagination
}) => {
  const classes = events_useStyles();
  const {
    0: isVisible,
    1: setVisible
  } = (0,react.useState)(false);
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,react.useState)({
    pageNumber: 1,
    pageSize: 10
  });
  const debouncedQuery = (0,useDebounce/* default */.Z)(searchQuery);
  const {
    data: {
      events
    },
    isLoading
  } = (0,lib.useQuery)(['events', debouncedQuery], () => fetchAllEvents(debouncedQuery), {
    initialData: {
      events: initialEvents,
      pagination
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1
  });

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleDelete = key => {
    setSearchQuery(pre => {
      return events_objectSpread(events_objectSpread({}, pre), {}, {
        [key]: undefined
      });
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "my-12 px-6 md:px-10 lg:px-14",
    children: [/*#__PURE__*/jsx_runtime.jsx(SEO/* default */.Z, {
      siteTitle: "All Events"
    }), /*#__PURE__*/jsx_runtime.jsx(shared_Backdrop, {
      open: isLoading
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "flex justify-between",
      children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
        className: "text-4xl font-bold mb-8 mt-6",
        children: "Nearby Events"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "",
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          className: " mt-2 font-medium capitalize text-white bg-primary rounded-md py-2 px-5",
          onClick: handleOpen,
          children: "Filters"
        }), /*#__PURE__*/jsx_runtime.jsx(event_FilterEvents, {
          isVisible: isVisible,
          setVisible: handleClose,
          searchQuery: searchQuery,
          setSearchQuery: setSearchQuery
        })]
      })]
    }), ((searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.name) || (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.hostingType) || (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.eventType)) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (classes.chipZone, 'mb-6'),
      children: [/*#__PURE__*/jsx_runtime.jsx("span", {
        className: classes.filtersActiveLabel,
        children: "Active filters:"
      }), (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.name) && /*#__PURE__*/jsx_runtime.jsx(node.Chip, {
        className: classes.filterChip // key={column.id}
        ,
        label: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {
            className: classes.chipLabel,
            children: "Name : "
          }), searchQuery.name]
        }),
        onDelete: () => handleDelete('name'),
        variant: "outlined"
      }), (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.eventType) && /*#__PURE__*/jsx_runtime.jsx(node.Chip, {
        className: classes.filterChip // key={column.id}
        ,
        label: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {
            className: classes.chipLabel,
            children: "Event Type : "
          }), searchQuery.eventType]
        }),
        onDelete: () => handleDelete('eventType'),
        variant: "outlined"
      }), (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.hostingType) && /*#__PURE__*/jsx_runtime.jsx(node.Chip, {
        className: classes.filterChip // key={column.id}
        ,
        label: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/jsx_runtime.jsx("span", {
            className: classes.chipLabel,
            children: "Hosting Type : "
          }), searchQuery.hostingType]
        }),
        onDelete: () => handleDelete('hostingType'),
        variant: "outlined"
      })]
    }), events && (events === null || events === void 0 ? void 0 : events.length) > 0 ? /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "grid gap-x-3 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      children: events.map(event => /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
        href: `/events/${event.url}`,
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: "inline-block",
          children: /*#__PURE__*/jsx_runtime.jsx(EventCard, {
            event: event
          }, event._id)
        })
      }, event._id))
    }) : /*#__PURE__*/jsx_runtime.jsx("p", {
      children: "No events found"
    }), pagination && /*#__PURE__*/jsx_runtime.jsx(Pagination/* default */.Z, {
      pagination: pagination,
      handler: () => {}
    })]
  });
};

const getStaticProps = async ctx => {
  try {
    const {
      data
    } = await axios_default().get(`${config/* server */.fw}events`);

    if (!data) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        initialEvents: data.data,
        pagination: data.pagination
      },
      revalidate: 60 // increment in every 1 min.

    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
/* harmony default export */ const events = (Events);

/***/ }),

/***/ 57347:
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

      const compMod = __webpack_require__(80255)

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
        page: "/events",
        buildId: "uu1VwpNjKuCVuimf5PoXD",
        escapedBuildId: "uu1VwpNjKuCVuimf5PoXD",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"e1ec7d898bde857360b72faa8d150a89",previewModeSigningKey:"aaf1858b9c3d2313cf0f4ff405ac53ec2d204cfb90f408e475116ec2a01014b7",previewModeEncryptionKey:"33adfc742ae689f9f9053f4e58e0ebd2fbbb577c6fe4dabbfb110ca4d2a3d4bf"}
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [5177,7532,4491,9008,381,4753,7659,4411,6994,8628,8974,4576,1843,9402], () => (__webpack_require__(57347)))
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
/******/ 			7695: 1
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
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(5177);
/******/ 			__webpack_require__.e(7532);
/******/ 			__webpack_require__.e(4491);
/******/ 			__webpack_require__.e(9008);
/******/ 			__webpack_require__.e(381);
/******/ 			__webpack_require__.e(4753);
/******/ 			__webpack_require__.e(7659);
/******/ 			__webpack_require__.e(4411);
/******/ 			__webpack_require__.e(6994);
/******/ 			__webpack_require__.e(8628);
/******/ 			__webpack_require__.e(8974);
/******/ 			__webpack_require__.e(4576);
/******/ 			__webpack_require__.e(1843);
/******/ 			__webpack_require__.e(9402);
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