exports.id = 7517;
exports.ids = [7517];
exports.modules = {

/***/ 97191:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 20862:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(50008).default;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 13884:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 80521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 6479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(37316);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 63038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(97191);

var iterableToArrayLimit = __webpack_require__(13884);

var unsupportedIterableToArray = __webpack_require__(60379);

var nonIterableRest = __webpack_require__(80521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 50008:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 78263:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getComponentName;

var _functionPrototype = _interopRequireDefault(__webpack_require__(72319));

var _reactIs = __webpack_require__(59864);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getComponentName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return Component.displayName || (0, _functionPrototype["default"])(Component);
  }

  if ((0, _reactIs.isForwardRef)({
    type: Component,
    $$typeof: _reactIs.Element
  })) {
    return Component.displayName;
  }

  if ((0, _reactIs.isMemo)(Component)) {
    return getComponentName(Component.type);
  }

  return null;
}
//# sourceMappingURL=getComponentName.js.map

/***/ }),

/***/ 45186:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(__webpack_require__(50062));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _isPlainObject["default"];
exports.default = _default;
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ 31718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = wrapValidator;

var _object = _interopRequireDefault(__webpack_require__(33533));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function wrapValidator(validator, typeName) {
  var typeChecker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _object["default"])(validator.bind(), {
    typeName: typeName,
    typeChecker: typeChecker,
    isRequired: (0, _object["default"])(validator.isRequired.bind(), {
      typeName: typeName,
      typeChecker: typeChecker,
      typeRequired: true
    })
  });
}
//# sourceMappingURL=wrapValidator.js.map

/***/ }),

/***/ 29733:
/***/ ((module) => {

"use strict";


function noop() {
  return null;
}

noop.isRequired = noop;

function noopThunk() {
  return noop;
}

module.exports = {
  and: noopThunk,
  between: noopThunk,
  booleanSome: noopThunk,
  childrenHavePropXorChildren: noopThunk,
  childrenOf: noopThunk,
  childrenOfType: noopThunk,
  childrenSequenceOf: noopThunk,
  componentWithName: noopThunk,
  disallowedIf: noopThunk,
  elementType: noopThunk,
  empty: noopThunk,
  explicitNull: noopThunk,
  forbidExtraProps: Object,
  integer: noopThunk,
  keysOf: noopThunk,
  mutuallyExclusiveProps: noopThunk,
  mutuallyExclusiveTrueProps: noopThunk,
  nChildren: noopThunk,
  nonNegativeInteger: noop,
  nonNegativeNumber: noopThunk,
  numericString: noopThunk,
  object: noopThunk,
  or: noopThunk,
  predicate: noopThunk,
  range: noopThunk,
  ref: noopThunk,
  requiredBy: noopThunk,
  restrictedProp: noopThunk,
  sequenceOf: noopThunk,
  shape: noopThunk,
  stringEndsWith: noopThunk,
  stringStartsWith: noopThunk,
  uniqueArray: noopThunk,
  uniqueArrayOf: noopThunk,
  valuesOf: noopThunk,
  withShape: noopThunk
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = __webpack_require__(67294);

var _isPlainObject = _interopRequireDefault(__webpack_require__(45186));

var _wrapValidator = _interopRequireDefault(__webpack_require__(31718));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isPrototypeOf = Object.prototype.isPrototypeOf;

function isNewRef(prop) {
  if (!(0, _isPlainObject["default"])(prop)) {
    return false;
  }

  var ownProperties = Object.keys(prop);
  return ownProperties.length === 1 && ownProperties[0] === 'current';
}

function isCallbackRef(prop) {
  return typeof prop === 'function' && !isPrototypeOf.call(_react.Component, prop) && (!_react.PureComponent || !isPrototypeOf.call(_react.PureComponent, prop));
}

function requiredRef(props, propName, componentName) {
  var propValue = props[propName];

  if (isCallbackRef(propValue) || isNewRef(propValue)) {
    return null;
  }

  return new TypeError("".concat(propName, " in ").concat(componentName, " must be a ref"));
}

function ref(props, propName, componentName) {
  var propValue = props[propName];

  if (propValue == null) {
    return null;
  }

  for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  return requiredRef.apply(void 0, [props, propName, componentName].concat(rest));
}

ref.isRequired = requiredRef;

var _default = function _default() {
  return (0, _wrapValidator["default"])(ref, 'ref');
};

exports.default = _default;
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ 78341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =  true ? __webpack_require__(29733) : 0;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 63535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ArraySpeciesCreate = __webpack_require__(67593);
var FlattenIntoArray = __webpack_require__(42130);
var Get = __webpack_require__(14573);
var ToInteger = __webpack_require__(54467);
var ToLength = __webpack_require__(37351);
var ToObject = __webpack_require__(32747);

module.exports = function flat() {
	var O = ToObject(this);
	var sourceLen = ToLength(Get(O, 'length'));

	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ToInteger(arguments[0]);
	}

	var A = ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	return A;
};


/***/ }),

/***/ 16650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var callBind = __webpack_require__(55559);

var implementation = __webpack_require__(63535);
var getPolyfill = __webpack_require__(68981);
var polyfill = getPolyfill();
var shim = __webpack_require__(12131);

var boundFlat = callBind(polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ 68981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(63535);

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ 12131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var getPolyfill = __webpack_require__(68981);

module.exports = function shimFlat() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ flat: polyfill },
		{ flat: function () { return Array.prototype.flat !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 21924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var callBind = __webpack_require__(55559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 55559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(58612);
var GetIntrinsic = __webpack_require__(40210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 37034:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}

exports.addEventListener = addEventListener;


/***/ }),

/***/ 4289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keys = __webpack_require__(82215);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 71676:
/***/ ((module) => {

"use strict";


module.exports = function contains(other) {
	if (arguments.length < 1) {
		throw new TypeError('1 argument is required');
	}
	if (typeof other !== 'object') {
		throw new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');
	}

	var node = other;
	do {
		if (this === node) {
			return true;
		}
		if (node) {
			node = node.parentNode;
		}
	} while (node);

	return false;
};


/***/ }),

/***/ 42483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);

var implementation = __webpack_require__(71676);
var getPolyfill = __webpack_require__(84356);
var polyfill = getPolyfill();
var shim = __webpack_require__(31514);

var boundContains = function contains(node, other) {
	return polyfill.apply(node, [other]);
};

define(boundContains, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundContains;


/***/ }),

/***/ 84356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(71676);

module.exports = function getPolyfill() {
	if (typeof document !== 'undefined') {
		if (document.contains) {
			return document.contains;
		}
		if (document.body && document.body.contains) {
			try {
				if (typeof document.body.contains.call(document, '') === 'boolean') {
					return document.body.contains;
				}
			} catch (e) { /**/ }
		}
	}
	return implementation;
};


/***/ }),

/***/ 31514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var getPolyfill = __webpack_require__(84356);

module.exports = function shimContains() {
	var polyfill = getPolyfill();
	if (typeof document !== 'undefined') {
		define(
			document,
			{ contains: polyfill },
			{ contains: function () { return document.contains !== polyfill; } }
		);
		if (typeof Element !== 'undefined') {
			define(
				Element.prototype,
				{ contains: polyfill },
				{ contains: function () { return Element.prototype.contains !== polyfill; } }
			);
		}
	}
	return polyfill;
};


/***/ }),

/***/ 50760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = shallowEqual;

var _objectIs = _interopRequireDefault(__webpack_require__(20609));

var _has = _interopRequireDefault(__webpack_require__(17642));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// adapted from https://github.com/facebook/react/blob/144328fe81719e916b946e22660479e31561bb0b/packages/shared/shallowEqual.js#L36-L68
function shallowEqual(objA, objB) {
  if ((0, _objectIs["default"])(objA, objB)) {
    return true;
  }

  if (!objA || !objB || _typeof(objA) !== 'object' || _typeof(objB) !== 'object') {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  keysA.sort();
  keysB.sort(); // Test for A's keys different from B.

  for (var i = 0; i < keysA.length; i += 1) {
    if (!(0, _has["default"])(objB, keysA[i]) || !(0, _objectIs["default"])(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzaGFsbG93RXF1YWwiLCJvYmpBIiwib2JqQiIsImtleXNBIiwiT2JqZWN0Iiwia2V5cyIsImtleXNCIiwibGVuZ3RoIiwic29ydCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7QUFDZSxTQUFTQSxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDL0MsTUFBSSwwQkFBR0QsSUFBSCxFQUFTQyxJQUFULENBQUosRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0MsSUFBVixJQUFrQixRQUFPRCxJQUFQLE1BQWdCLFFBQWxDLElBQThDLFFBQU9DLElBQVAsTUFBZ0IsUUFBbEUsRUFBNEU7QUFDMUUsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixDQUFkO0FBQ0EsTUFBTUssS0FBSyxHQUFHRixNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixDQUFkOztBQUVBLE1BQUlDLEtBQUssQ0FBQ0ksTUFBTixLQUFpQkQsS0FBSyxDQUFDQyxNQUEzQixFQUFtQztBQUNqQyxXQUFPLEtBQVA7QUFDRDs7QUFFREosRUFBQUEsS0FBSyxDQUFDSyxJQUFOO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsSUFBTixHQWpCK0MsQ0FtQi9DOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sS0FBSyxDQUFDSSxNQUExQixFQUFrQ0UsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0FBQ3hDLFFBQUksQ0FBQyxxQkFBSVAsSUFBSixFQUFVQyxLQUFLLENBQUNNLENBQUQsQ0FBZixDQUFELElBQXdCLENBQUMsMEJBQUdSLElBQUksQ0FBQ0UsS0FBSyxDQUFDTSxDQUFELENBQU4sQ0FBUCxFQUFtQlAsSUFBSSxDQUFDQyxLQUFLLENBQUNNLENBQUQsQ0FBTixDQUF2QixDQUE3QixFQUFpRTtBQUMvRCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzIGZyb20gJ29iamVjdC1pcyc7XG5pbXBvcnQgaGFzIGZyb20gJ2hhcyc7XG5cbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNDQzMjhmZTgxNzE5ZTkxNmI5NDZlMjI2NjA0NzllMzE1NjFiYjBiL3BhY2thZ2VzL3NoYXJlZC9zaGFsbG93RXF1YWwuanMjTDM2LUw2OFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIW9iakEgfHwgIW9iakIgfHwgdHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAga2V5c0Euc29ydCgpO1xuICBrZXlzQi5zb3J0KCk7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICghaGFzKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIl19
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 41503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(34149);
var isCallable = __webpack_require__(95320);
var isDate = __webpack_require__(18923);
var isSymbol = __webpack_require__(12636);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),

/***/ 42116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(34149);

var isCallable = __webpack_require__(95320);

// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
var ES5internalSlots = {
	'[[DefaultValue]]': function (O) {
		var actualHint;
		if (arguments.length > 1) {
			actualHint = arguments[1];
		} else {
			actualHint = toStr.call(O) === '[object Date]' ? String : Number;
		}

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// http://ecma-international.org/ecma-262/5.1/#sec-9.1
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	if (arguments.length > 1) {
		return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
	}
	return ES5internalSlots['[[DefaultValue]]'](input);
};


/***/ }),

/***/ 34149:
/***/ ((module) => {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 17648:
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 58612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(17648);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 78651:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IsCallable = __webpack_require__(25233);
var functionsHaveNames = __webpack_require__(25972)();
var callBound = __webpack_require__(21924);
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');

var classRegex = /^class /;

var isClass = function isClassConstructor(fn) {
	if (IsCallable(fn)) {
		return false;
	}
	if (typeof fn !== 'function') {
		return false;
	}
	try {
		var match = $stringMatch($functionToString(fn), classRegex);
		return !!match;
	} catch (e) {}
	return false;
};

var regex = /\s*function\s+([^(\s]*)\s*/;

var functionProto = Function.prototype;

module.exports = function getName() {
	if (!isClass(this) && !IsCallable(this)) {
		throw new TypeError('Function.prototype.name sham getter called on non-function');
	}
	if (functionsHaveNames) {
		return this.name;
	}
	if (this === functionProto) {
		return '';
	}
	var str = $functionToString(this);
	var match = $stringMatch(str, regex);
	var name = match && match[1];
	return name;
};


/***/ }),

/***/ 72319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var callBind = __webpack_require__(55559);

var implementation = __webpack_require__(78651);
var getPolyfill = __webpack_require__(73502);
var shim = __webpack_require__(95979);

var bound = callBind(implementation);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ 73502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(78651);

module.exports = function getPolyfill() {
	return implementation;
};


/***/ }),

/***/ 95979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var supportsDescriptors = __webpack_require__(4289).supportsDescriptors;
var functionsHaveNames = __webpack_require__(25972)();
var getPolyfill = __webpack_require__(73502);
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;

module.exports = function shimName() {
	var polyfill = getPolyfill();
	if (functionsHaveNames) {
		return polyfill;
	}
	if (!supportsDescriptors) {
		throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
	}
	var functionProto = Function.prototype;
	defineProperty(functionProto, 'name', {
		configurable: true,
		enumerable: false,
		get: function () {
			var name = polyfill.call(this);
			if (this !== functionProto) {
				defineProperty(this, 'name', {
					configurable: true,
					enumerable: false,
					value: name,
					writable: false
				});
			}
			return name;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 25972:
/***/ ((module) => {

"use strict";


var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	return functionsHaveNames() && gOPD && !!gOPD(function () {}, 'name').configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;


/***/ }),

/***/ 40210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(41405)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(58612);
var hasOwn = __webpack_require__(17642);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 31884:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var isSymbol = __webpack_require__(12636);

var globalKey = '__ global cache key __';
/* istanbul ignore else */
// eslint-disable-next-line no-restricted-properties
if (typeof Symbol === 'function' && isSymbol(Symbol('foo')) && typeof Symbol['for'] === 'function') {
	// eslint-disable-next-line no-restricted-properties
	globalKey = Symbol['for'](globalKey);
}

var trueThunk = function () {
	return true;
};

var ensureCache = function ensureCache() {
	if (!global[globalKey]) {
		var properties = {};
		properties[globalKey] = {};
		var predicates = {};
		predicates[globalKey] = trueThunk;
		define(global, properties, predicates);
	}
	return global[globalKey];
};

var cache = ensureCache();

var isPrimitive = function isPrimitive(val) {
	return val === null || (typeof val !== 'object' && typeof val !== 'function');
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	clear: function clear() {
		delete global[globalKey];
		cache = ensureCache();
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var primitiveKey = getPrimitiveKey(key);
		var props = {};
		props[primitiveKey] = value;
		var predicates = {};
		predicates[primitiveKey] = trueThunk;
		define(cache, props, predicates);
		return globalCache.has(key);
	},

	setIfMissingThenGet: function setIfMissingThenGet(key, valueThunk) {
		if (globalCache.has(key)) {
			return globalCache.get(key);
		}
		var item = valueThunk();
		globalCache.set(key, item);
		return item;
	}
};

module.exports = globalCache;


/***/ }),

/***/ 41405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(55419);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 55419:
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 96410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = __webpack_require__(55419);

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ 17642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(58612);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 95320:
/***/ ((module) => {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
/* globals document: false */
var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};

module.exports = reflectApply
	? function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),

/***/ 18923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = __webpack_require__(96410)();

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ 98420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(21924);
var hasToStringTag = __webpack_require__(96410)();
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};


/***/ }),

/***/ 12636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(41405)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && 0;
	};
}


/***/ }),

/***/ 21465:
/***/ ((module, exports) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isTouchDevice;
function isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
}
module.exports = exports['default'];

/***/ }),

/***/ 27561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(67990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 67990:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 23279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13218),
    now = __webpack_require__(51927),
    toNumber = __webpack_require__(14841);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 51927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(55639);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 23493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(23279),
    isObject = __webpack_require__(13218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 14841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(27561),
    isObject = __webpack_require__(13218),
    isSymbol = __webpack_require__(33448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 70631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(12794).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag !== 'undefined' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 12794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(31669).inspect;


/***/ }),

/***/ 24244:
/***/ ((module) => {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ 20609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var callBind = __webpack_require__(55559);

var implementation = __webpack_require__(24244);
var getPolyfill = __webpack_require__(75624);
var shim = __webpack_require__(52281);

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 75624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(24244);

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ 52281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getPolyfill = __webpack_require__(75624);
var define = __webpack_require__(4289);

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 18987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(21414); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ 82215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(21414);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(18987);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 21414:
/***/ ((module) => {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 92837:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(82215);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(55419)();
var callBound = __webpack_require__(21924);
var toObject = Object;
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if ($propIsEnumerable(source, key)) {
					$push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if ($propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ 33533:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defineProperties = __webpack_require__(4289);
var callBind = __webpack_require__(55559);

var implementation = __webpack_require__(92837);
var getPolyfill = __webpack_require__(28162);
var shim = __webpack_require__(84489);

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ 28162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(92837);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ 84489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var getPolyfill = __webpack_require__(28162);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 73513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var RequireObjectCoercible = __webpack_require__(16237);
var callBound = __webpack_require__(21924);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if ($isEnumerable(obj, key)) { // checks own-ness as well
			vals.push(obj[key]);
		}
	}
	return vals;
};


/***/ }),

/***/ 5869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var callBind = __webpack_require__(55559);

var implementation = __webpack_require__(73513);
var getPolyfill = __webpack_require__(37164);
var shim = __webpack_require__(46970);

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 37164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(73513);

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};


/***/ }),

/***/ 46970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getPolyfill = __webpack_require__(37164);
var define = __webpack_require__(4289);

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 75:
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ 50062:
/***/ ((module, exports) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ 54087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var now = __webpack_require__(75)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ 76141:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(62023);


/***/ }),

/***/ 6063:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line import/no-unresolved
__webpack_require__(65453);


/***/ }),

/***/ 55533:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.PureCalendarDay = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _raf = _interopRequireDefault(__webpack_require__(54087));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _getCalendarDaySettings = _interopRequireDefault(__webpack_require__(6732));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(10337));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarDay =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(CalendarDay, _ref);
  var _proto = CalendarDay.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function CalendarDay() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ref.call.apply(_ref, [this].concat(args)) || this;
    _this.setButtonRef = _this.setButtonRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var _this$props = this.props,
        isFocused = _this$props.isFocused,
        tabIndex = _this$props.tabIndex;

    if (tabIndex === 0) {
      if (isFocused || tabIndex !== prevProps.tabIndex) {
        (0, _raf["default"])(function () {
          if (_this2.buttonRef) {
            _this2.buttonRef.focus();
          }
        });
      }
    }
  };

  _proto.onDayClick = function onDayClick(day, e) {
    var onDayClick = this.props.onDayClick;
    onDayClick(day, e);
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day, e) {
    var onDayMouseEnter = this.props.onDayMouseEnter;
    onDayMouseEnter(day, e);
  };

  _proto.onDayMouseLeave = function onDayMouseLeave(day, e) {
    var onDayMouseLeave = this.props.onDayMouseLeave;
    onDayMouseLeave(day, e);
  };

  _proto.onKeyDown = function onKeyDown(day, e) {
    var onDayClick = this.props.onDayClick;
    var key = e.key;

    if (key === 'Enter' || key === ' ') {
      onDayClick(day, e);
    }
  };

  _proto.setButtonRef = function setButtonRef(ref) {
    this.buttonRef = ref;
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        day = _this$props2.day,
        ariaLabelFormat = _this$props2.ariaLabelFormat,
        daySize = _this$props2.daySize,
        isOutsideDay = _this$props2.isOutsideDay,
        modifiers = _this$props2.modifiers,
        renderDayContents = _this$props2.renderDayContents,
        tabIndex = _this$props2.tabIndex,
        styles = _this$props2.styles,
        phrases = _this$props2.phrases;
    if (!day) return _react["default"].createElement("td", null);

    var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
        daySizeStyles = _getCalendarDaySettin.daySizeStyles,
        useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
        selected = _getCalendarDaySettin.selected,
        hoveredSpan = _getCalendarDaySettin.hoveredSpan,
        isOutsideRange = _getCalendarDaySettin.isOutsideRange,
        ariaLabel = _getCalendarDaySettin.ariaLabel;

    return _react["default"].createElement("td", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, styles.CalendarDay__default, isOutsideDay && styles.CalendarDay__outside, modifiers.has('today') && styles.CalendarDay__today, modifiers.has('first-day-of-week') && styles.CalendarDay__firstDayOfWeek, modifiers.has('last-day-of-week') && styles.CalendarDay__lastDayOfWeek, modifiers.has('hovered-offset') && styles.CalendarDay__hovered_offset, modifiers.has('hovered-start-first-possible-end') && styles.CalendarDay__hovered_start_first_possible_end, modifiers.has('hovered-start-blocked-minimum-nights') && styles.CalendarDay__hovered_start_blocked_min_nights, modifiers.has('highlighted-calendar') && styles.CalendarDay__highlighted_calendar, modifiers.has('blocked-minimum-nights') && styles.CalendarDay__blocked_minimum_nights, modifiers.has('blocked-calendar') && styles.CalendarDay__blocked_calendar, hoveredSpan && styles.CalendarDay__hovered_span, modifiers.has('after-hovered-start') && styles.CalendarDay__after_hovered_start, modifiers.has('selected-span') && styles.CalendarDay__selected_span, modifiers.has('selected-start') && styles.CalendarDay__selected_start, modifiers.has('selected-end') && styles.CalendarDay__selected_end, selected && !modifiers.has('selected-span') && styles.CalendarDay__selected, modifiers.has('before-hovered-end') && styles.CalendarDay__before_hovered_end, modifiers.has('no-selected-start-before-selected-end') && styles.CalendarDay__no_selected_start_before_selected_end, modifiers.has('selected-start-in-hovered-span') && styles.CalendarDay__selected_start_in_hovered_span, modifiers.has('selected-end-in-hovered-span') && styles.CalendarDay__selected_end_in_hovered_span, modifiers.has('selected-start-no-selected-end') && styles.CalendarDay__selected_start_no_selected_end, modifiers.has('selected-end-no-selected-start') && styles.CalendarDay__selected_end_no_selected_start, isOutsideRange && styles.CalendarDay__blocked_out_of_range, daySizeStyles), {
      role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
      ,
      ref: this.setButtonRef,
      "aria-disabled": modifiers.has('blocked'),
      "aria-label": ariaLabel,
      onMouseEnter: function onMouseEnter(e) {
        _this3.onDayMouseEnter(day, e);
      },
      onMouseLeave: function onMouseLeave(e) {
        _this3.onDayMouseLeave(day, e);
      },
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      },
      onClick: function onClick(e) {
        _this3.onDayClick(day, e);
      },
      onKeyDown: function onKeyDown(e) {
        _this3.onKeyDown(day, e);
      },
      tabIndex: tabIndex
    }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
  };

  return CalendarDay;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureCalendarDay = CalendarDay;
CalendarDay.propTypes =  false ? 0 : {};
CalendarDay.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    },
    CalendarDay__default: {
      border: "1px solid ".concat(color.core.borderLight),
      color: color.text,
      background: color.background,
      ':hover': {
        background: color.core.borderLight,
        border: "1px solid ".concat(color.core.borderLight),
        color: 'inherit'
      }
    },
    CalendarDay__hovered_offset: {
      background: color.core.borderBright,
      border: "1px double ".concat(color.core.borderLight),
      color: 'inherit'
    },
    CalendarDay__outside: {
      border: 0,
      background: color.outside.backgroundColor,
      color: color.outside.color,
      ':hover': {
        border: 0
      }
    },
    CalendarDay__blocked_minimum_nights: {
      background: color.minimumNights.backgroundColor,
      border: "1px solid ".concat(color.minimumNights.borderColor),
      color: color.minimumNights.color,
      ':hover': {
        background: color.minimumNights.backgroundColor_hover,
        color: color.minimumNights.color_active
      },
      ':active': {
        background: color.minimumNights.backgroundColor_active,
        color: color.minimumNights.color_active
      }
    },
    CalendarDay__highlighted_calendar: {
      background: color.highlighted.backgroundColor,
      color: color.highlighted.color,
      ':hover': {
        background: color.highlighted.backgroundColor_hover,
        color: color.highlighted.color_active
      },
      ':active': {
        background: color.highlighted.backgroundColor_active,
        color: color.highlighted.color_active
      }
    },
    CalendarDay__selected_span: {
      background: color.selectedSpan.backgroundColor,
      border: "1px double ".concat(color.selectedSpan.borderColor),
      color: color.selectedSpan.color,
      ':hover': {
        background: color.selectedSpan.backgroundColor_hover,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      },
      ':active': {
        background: color.selectedSpan.backgroundColor_active,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      }
    },
    CalendarDay__selected: {
      background: color.selected.backgroundColor,
      border: "1px double ".concat(color.selected.borderColor),
      color: color.selected.color,
      ':hover': {
        background: color.selected.backgroundColor_hover,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      },
      ':active': {
        background: color.selected.backgroundColor_active,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      }
    },
    CalendarDay__hovered_span: {
      background: color.hoveredSpan.backgroundColor,
      border: "1px double ".concat(color.hoveredSpan.borderColor),
      color: color.hoveredSpan.color,
      ':hover': {
        background: color.hoveredSpan.backgroundColor_hover,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      },
      ':active': {
        background: color.hoveredSpan.backgroundColor_active,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      }
    },
    CalendarDay__blocked_calendar: {
      background: color.blocked_calendar.backgroundColor,
      border: "1px solid ".concat(color.blocked_calendar.borderColor),
      color: color.blocked_calendar.color,
      ':hover': {
        background: color.blocked_calendar.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      },
      ':active': {
        background: color.blocked_calendar.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      }
    },
    CalendarDay__blocked_out_of_range: {
      background: color.blocked_out_of_range.backgroundColor,
      border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
      color: color.blocked_out_of_range.color,
      ':hover': {
        background: color.blocked_out_of_range.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      },
      ':active': {
        background: color.blocked_out_of_range.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      }
    },
    CalendarDay__hovered_start_first_possible_end: {
      background: color.core.borderLighter,
      border: "1px double ".concat(color.core.borderLighter)
    },
    CalendarDay__hovered_start_blocked_min_nights: {
      background: color.core.borderLighter,
      border: "1px double ".concat(color.core.borderLight)
    },
    CalendarDay__selected_start: {},
    CalendarDay__selected_end: {},
    CalendarDay__today: {},
    CalendarDay__firstDayOfWeek: {},
    CalendarDay__lastDayOfWeek: {},
    CalendarDay__after_hovered_start: {},
    CalendarDay__before_hovered_end: {},
    CalendarDay__no_selected_start_before_selected_end: {},
    CalendarDay__selected_start_in_hovered_span: {},
    CalendarDay__selected_end_in_hovered_span: {},
    CalendarDay__selected_start_no_selected_end: {},
    CalendarDay__selected_end_no_selected_start: {}
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarDay);

exports.default = _default;

/***/ }),

/***/ 40142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var CalendarIcon = function CalendarIcon(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z"
  }));
};

CalendarIcon.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1393.1 1500"
};
var _default = CalendarIcon;
exports.default = _default;

/***/ }),

/***/ 86419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _CalendarWeek = _interopRequireDefault(__webpack_require__(70650));

var _CalendarDay = _interopRequireDefault(__webpack_require__(55533));

var _calculateDimension = _interopRequireDefault(__webpack_require__(60403));

var _getCalendarMonthWeeks = _interopRequireDefault(__webpack_require__(57116));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

var _toISODateString = _interopRequireDefault(__webpack_require__(54162));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(10337));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(41073));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  month: (0, _moment["default"])(),
  horizontalMonthPadding: 13,
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  daySize: _constants.DAY_SIZE,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthSelect: function onMonthSelect() {},
  onYearSelect: function onYearSelect() {},
  renderMonthText: null,
  renderCalendarDay: function renderCalendarDay(props) {
    return _react["default"].createElement(_CalendarDay["default"], props);
  },
  renderDayContents: null,
  renderMonthElement: null,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  focusedDate: null,
  isFocused: false,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined,
  verticalBorderSpacing: undefined
};

var CalendarMonth =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(CalendarMonth, _ref);
  var _proto = CalendarMonth.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function CalendarMonth(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.state = {
      weeks: (0, _getCalendarMonthWeeks["default"])(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };
    _this.setCaptionRef = _this.setCaptionRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.setMonthTitleHeightTimeout = setTimeout(this.setMonthTitleHeight, 0);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var month = nextProps.month,
        enableOutsideDays = nextProps.enableOutsideDays,
        firstDayOfWeek = nextProps.firstDayOfWeek;
    var _this$props = this.props,
        prevMonth = _this$props.month,
        prevEnableOutsideDays = _this$props.enableOutsideDays,
        prevFirstDayOfWeek = _this$props.firstDayOfWeek;

    if (!month.isSame(prevMonth) || enableOutsideDays !== prevEnableOutsideDays || firstDayOfWeek !== prevFirstDayOfWeek) {
      this.setState({
        weeks: (0, _getCalendarMonthWeeks["default"])(month, enableOutsideDays, firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : firstDayOfWeek)
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.setMonthTitleHeightTimeout) {
      clearTimeout(this.setMonthTitleHeightTimeout);
    }
  };

  _proto.setMonthTitleHeight = function setMonthTitleHeight() {
    var setMonthTitleHeight = this.props.setMonthTitleHeight;

    if (setMonthTitleHeight) {
      var captionHeight = (0, _calculateDimension["default"])(this.captionRef, 'height', true, true);
      setMonthTitleHeight(captionHeight);
    }
  };

  _proto.setCaptionRef = function setCaptionRef(ref) {
    this.captionRef = ref;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        dayAriaLabelFormat = _this$props2.dayAriaLabelFormat,
        daySize = _this$props2.daySize,
        focusedDate = _this$props2.focusedDate,
        horizontalMonthPadding = _this$props2.horizontalMonthPadding,
        isFocused = _this$props2.isFocused,
        isVisible = _this$props2.isVisible,
        modifiers = _this$props2.modifiers,
        month = _this$props2.month,
        monthFormat = _this$props2.monthFormat,
        onDayClick = _this$props2.onDayClick,
        onDayMouseEnter = _this$props2.onDayMouseEnter,
        onDayMouseLeave = _this$props2.onDayMouseLeave,
        onMonthSelect = _this$props2.onMonthSelect,
        onYearSelect = _this$props2.onYearSelect,
        orientation = _this$props2.orientation,
        phrases = _this$props2.phrases,
        renderCalendarDay = _this$props2.renderCalendarDay,
        renderDayContents = _this$props2.renderDayContents,
        renderMonthElement = _this$props2.renderMonthElement,
        renderMonthText = _this$props2.renderMonthText,
        styles = _this$props2.styles,
        verticalBorderSpacing = _this$props2.verticalBorderSpacing;
    var weeks = this.state.weeks;
    var monthTitle = renderMonthText ? renderMonthText(month) : month.format(monthFormat);
    var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    return _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.CalendarMonth, {
      padding: "0 ".concat(horizontalMonthPadding, "px")
    }), {
      "data-visible": isVisible
    }), _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setCaptionRef
    }, (0, _reactWithStyles.css)(styles.CalendarMonth_caption, verticalScrollable && styles.CalendarMonth_caption__verticalScrollable)), renderMonthElement ? renderMonthElement({
      month: month,
      onMonthSelect: onMonthSelect,
      onYearSelect: onYearSelect,
      isVisible: isVisible
    }) : _react["default"].createElement("strong", null, monthTitle)), _react["default"].createElement("table", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(!verticalBorderSpacing && styles.CalendarMonth_table, verticalBorderSpacing && styles.CalendarMonth_verticalSpacing, verticalBorderSpacing && {
      borderSpacing: "0px ".concat(verticalBorderSpacing, "px")
    }), {
      role: "presentation"
    }), _react["default"].createElement("tbody", null, weeks.map(function (week, i) {
      return _react["default"].createElement(_CalendarWeek["default"], {
        key: i
      }, week.map(function (day, dayOfWeek) {
        return renderCalendarDay({
          key: dayOfWeek,
          day: day,
          daySize: daySize,
          isOutsideDay: !day || day.month() !== month.month(),
          tabIndex: isVisible && (0, _isSameDay["default"])(day, focusedDate) ? 0 : -1,
          isFocused: isFocused,
          onDayMouseEnter: onDayMouseEnter,
          onDayMouseLeave: onDayMouseLeave,
          onDayClick: onDayClick,
          renderDayContents: renderDayContents,
          phrases: phrases,
          modifiers: modifiers[(0, _toISODateString["default"])(day)],
          ariaLabelFormat: dayAriaLabelFormat
        });
      }));
    }))));
  };

  return CalendarMonth;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonth.propTypes =  false ? 0 : {};
CalendarMonth.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font,
      spacing = _ref2$reactDates.spacing;
  return {
    CalendarMonth: {
      background: color.background,
      textAlign: 'center',
      verticalAlign: 'top',
      userSelect: 'none'
    },
    CalendarMonth_table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    CalendarMonth_verticalSpacing: {
      borderCollapse: 'separate'
    },
    CalendarMonth_caption: {
      color: color.text,
      fontSize: font.captionSize,
      textAlign: 'center',
      paddingTop: spacing.captionPaddingTop,
      paddingBottom: spacing.captionPaddingBottom,
      captionSide: 'initial'
    },
    CalendarMonth_caption__verticalScrollable: {
      paddingTop: 12,
      paddingBottom: 7
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonth);

exports.default = _default;

/***/ }),

/***/ 39137:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _consolidatedEvents = __webpack_require__(37034);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _CalendarMonth = _interopRequireDefault(__webpack_require__(86419));

var _isTransitionEndSupported = _interopRequireDefault(__webpack_require__(29826));

var _getTransformStyles = _interopRequireDefault(__webpack_require__(88926));

var _getCalendarMonthWidth = _interopRequireDefault(__webpack_require__(46694));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(20180));

var _isPrevMonth = _interopRequireDefault(__webpack_require__(21491));

var _isNextMonth = _interopRequireDefault(__webpack_require__(22376));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(10337));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(41073));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 0,
  horizontalMonthPadding: 13,
  initialMonth: (0, _moment["default"])(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onMonthTransitionEnd: function onMonthTransitionEnd() {},
  renderMonthText: null,
  renderCalendarDay: undefined,
  renderDayContents: null,
  translationValue: null,
  renderMonthElement: null,
  daySize: _constants.DAY_SIZE,
  focusedDate: null,
  isFocused: false,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  isRTL: false,
  transitionDuration: 200,
  verticalBorderSpacing: undefined,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined
};

function getMonths(initialMonth, numberOfMonths, withoutTransitionMonths) {
  var month = initialMonth.clone();
  if (!withoutTransitionMonths) month = month.subtract(1, 'month');
  var months = [];

  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    months.push(month);
    month = month.clone().add(1, 'month');
  }

  return months;
}

var CalendarMonthGrid =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(CalendarMonthGrid, _ref);
  var _proto = CalendarMonthGrid.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function CalendarMonthGrid(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    var withoutTransitionMonths = props.orientation === _constants.VERTICAL_SCROLLABLE;
    _this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths, withoutTransitionMonths)
    };
    _this.isTransitionEndSupported = (0, _isTransitionEndSupported["default"])();
    _this.onTransitionEnd = _this.onTransitionEnd.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.locale = _moment["default"].locale();
    _this.onMonthSelect = _this.onMonthSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearSelect = _this.onYearSelect.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.removeEventListener = (0, _consolidatedEvents.addEventListener)(this.container, 'transitionend', this.onTransitionEnd);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var initialMonth = nextProps.initialMonth,
        numberOfMonths = nextProps.numberOfMonths,
        orientation = nextProps.orientation;
    var months = this.state.months;
    var _this$props = this.props,
        prevInitialMonth = _this$props.initialMonth,
        prevNumberOfMonths = _this$props.numberOfMonths;
    var hasMonthChanged = !prevInitialMonth.isSame(initialMonth, 'month');
    var hasNumberOfMonthsChanged = prevNumberOfMonths !== numberOfMonths;
    var newMonths = months;

    if (hasMonthChanged && !hasNumberOfMonthsChanged) {
      if ((0, _isNextMonth["default"])(prevInitialMonth, initialMonth)) {
        newMonths = months.slice(1);
        newMonths.push(months[months.length - 1].clone().add(1, 'month'));
      } else if ((0, _isPrevMonth["default"])(prevInitialMonth, initialMonth)) {
        newMonths = months.slice(0, months.length - 1);
        newMonths.unshift(months[0].clone().subtract(1, 'month'));
      } else {
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        newMonths = getMonths(initialMonth, numberOfMonths, withoutTransitionMonths);
      }
    }

    if (hasNumberOfMonthsChanged) {
      var _withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;

      newMonths = getMonths(initialMonth, numberOfMonths, _withoutTransitionMonths);
    }

    var momentLocale = _moment["default"].locale();

    if (this.locale !== momentLocale) {
      this.locale = momentLocale;
      newMonths = newMonths.map(function (m) {
        return m.locale(_this2.locale);
      });
    }

    this.setState({
      months: newMonths
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this$props2 = this.props,
        isAnimating = _this$props2.isAnimating,
        transitionDuration = _this$props2.transitionDuration,
        onMonthTransitionEnd = _this$props2.onMonthTransitionEnd; // For IE9, immediately call onMonthTransitionEnd instead of
    // waiting for the animation to complete. Similarly, if transitionDuration
    // is set to 0, also immediately invoke the onMonthTransitionEnd callback

    if ((!this.isTransitionEndSupported || !transitionDuration) && isAnimating) {
      onMonthTransitionEnd();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.removeEventListener) this.removeEventListener();
  };

  _proto.onTransitionEnd = function onTransitionEnd() {
    var onMonthTransitionEnd = this.props.onMonthTransitionEnd;
    onMonthTransitionEnd();
  };

  _proto.onMonthSelect = function onMonthSelect(currentMonth, newMonthVal) {
    var newMonth = currentMonth.clone();
    var _this$props3 = this.props,
        onMonthChange = _this$props3.onMonthChange,
        orientation = _this$props3.orientation;
    var months = this.state.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var initialMonthSubtraction = months.indexOf(currentMonth);

    if (!withoutTransitionMonths) {
      initialMonthSubtraction -= 1;
    }

    newMonth.set('month', newMonthVal).subtract(initialMonthSubtraction, 'months');
    onMonthChange(newMonth);
  };

  _proto.onYearSelect = function onYearSelect(currentMonth, newYearVal) {
    var newMonth = currentMonth.clone();
    var _this$props4 = this.props,
        onYearChange = _this$props4.onYearChange,
        orientation = _this$props4.orientation;
    var months = this.state.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var initialMonthSubtraction = months.indexOf(currentMonth);

    if (!withoutTransitionMonths) {
      initialMonthSubtraction -= 1;
    }

    newMonth.set('year', newYearVal).subtract(initialMonthSubtraction, 'months');
    onYearChange(newMonth);
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props5 = this.props,
        enableOutsideDays = _this$props5.enableOutsideDays,
        firstVisibleMonthIndex = _this$props5.firstVisibleMonthIndex,
        horizontalMonthPadding = _this$props5.horizontalMonthPadding,
        isAnimating = _this$props5.isAnimating,
        modifiers = _this$props5.modifiers,
        numberOfMonths = _this$props5.numberOfMonths,
        monthFormat = _this$props5.monthFormat,
        orientation = _this$props5.orientation,
        translationValue = _this$props5.translationValue,
        daySize = _this$props5.daySize,
        onDayMouseEnter = _this$props5.onDayMouseEnter,
        onDayMouseLeave = _this$props5.onDayMouseLeave,
        onDayClick = _this$props5.onDayClick,
        renderMonthText = _this$props5.renderMonthText,
        renderCalendarDay = _this$props5.renderCalendarDay,
        renderDayContents = _this$props5.renderDayContents,
        renderMonthElement = _this$props5.renderMonthElement,
        onMonthTransitionEnd = _this$props5.onMonthTransitionEnd,
        firstDayOfWeek = _this$props5.firstDayOfWeek,
        focusedDate = _this$props5.focusedDate,
        isFocused = _this$props5.isFocused,
        isRTL = _this$props5.isRTL,
        styles = _this$props5.styles,
        phrases = _this$props5.phrases,
        dayAriaLabelFormat = _this$props5.dayAriaLabelFormat,
        transitionDuration = _this$props5.transitionDuration,
        verticalBorderSpacing = _this$props5.verticalBorderSpacing,
        setMonthTitleHeight = _this$props5.setMonthTitleHeight;
    var months = this.state.months;
    var isVertical = orientation === _constants.VERTICAL_ORIENTATION;
    var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
    var calendarMonthWidth = (0, _getCalendarMonthWidth["default"])(daySize, horizontalMonthPadding);
    var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;
    var transformType = isVertical || isVerticalScrollable ? 'translateY' : 'translateX';
    var transformValue = "".concat(transformType, "(").concat(translationValue, "px)");
    return _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.CalendarMonthGrid, isHorizontal && styles.CalendarMonthGrid__horizontal, isVertical && styles.CalendarMonthGrid__vertical, isVerticalScrollable && styles.CalendarMonthGrid__vertical_scrollable, isAnimating && styles.CalendarMonthGrid__animating, isAnimating && transitionDuration && {
      transition: "transform ".concat(transitionDuration, "ms ease-in-out")
    }, _objectSpread({}, (0, _getTransformStyles["default"])(transformValue), {
      width: width
    })), {
      ref: this.setContainerRef,
      onTransitionEnd: onMonthTransitionEnd
    }), months.map(function (month, i) {
      var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
      var hideForAnimation = i === 0 && !isVisible;
      var showForAnimation = i === 0 && isAnimating && isVisible;
      var monthString = (0, _toISOMonthString["default"])(month);
      return _react["default"].createElement("div", (0, _extends2["default"])({
        key: monthString
      }, (0, _reactWithStyles.css)(isHorizontal && styles.CalendarMonthGrid_month__horizontal, hideForAnimation && styles.CalendarMonthGrid_month__hideForAnimation, showForAnimation && !isVertical && !isRTL && {
        position: 'absolute',
        left: -calendarMonthWidth
      }, showForAnimation && !isVertical && isRTL && {
        position: 'absolute',
        right: 0
      }, showForAnimation && isVertical && {
        position: 'absolute',
        top: -translationValue
      }, !isVisible && !isAnimating && styles.CalendarMonthGrid_month__hidden)), _react["default"].createElement(_CalendarMonth["default"], {
        month: month,
        isVisible: isVisible,
        enableOutsideDays: enableOutsideDays,
        modifiers: modifiers[monthString],
        monthFormat: monthFormat,
        orientation: orientation,
        onDayMouseEnter: onDayMouseEnter,
        onDayMouseLeave: onDayMouseLeave,
        onDayClick: onDayClick,
        onMonthSelect: _this3.onMonthSelect,
        onYearSelect: _this3.onYearSelect,
        renderMonthText: renderMonthText,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderMonthElement: renderMonthElement,
        firstDayOfWeek: firstDayOfWeek,
        daySize: daySize,
        focusedDate: isVisible ? focusedDate : null,
        isFocused: isFocused,
        phrases: phrases,
        setMonthTitleHeight: setMonthTitleHeight,
        dayAriaLabelFormat: dayAriaLabelFormat,
        verticalBorderSpacing: verticalBorderSpacing,
        horizontalMonthPadding: horizontalMonthPadding
      }));
    }));
  };

  return CalendarMonthGrid;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonthGrid.propTypes =  false ? 0 : {};
CalendarMonthGrid.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      spacing = _ref2$reactDates.spacing,
      zIndex = _ref2$reactDates.zIndex;
  return {
    CalendarMonthGrid: {
      background: color.background,
      textAlign: (0, _noflip["default"])('left'),
      zIndex: zIndex
    },
    CalendarMonthGrid__animating: {
      zIndex: zIndex + 1
    },
    CalendarMonthGrid__horizontal: {
      position: 'absolute',
      left: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    CalendarMonthGrid__vertical: {
      margin: '0 auto'
    },
    CalendarMonthGrid__vertical_scrollable: {
      margin: '0 auto'
    },
    CalendarMonthGrid_month__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top',
      minHeight: '100%'
    },
    CalendarMonthGrid_month__hideForAnimation: {
      position: 'absolute',
      zIndex: zIndex - 1,
      opacity: 0,
      pointerEvents: 'none'
    },
    CalendarMonthGrid_month__hidden: {
      visibility: 'hidden'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonthGrid);

exports.default = _default;

/***/ }),

/***/ 70650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = CalendarWeek;

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var propTypes =  false ? 0 : {};

function CalendarWeek(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("tr", null, children);
}

CalendarWeek.propTypes =  false ? 0 : {};

/***/ }),

/***/ 2814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var ChevronDown = function ChevronDown(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M968 289L514 741c-11 11-21 11-32 0L29 289c-4-5-6-11-6-16 0-13 10-23 23-23 6 0 11 2 15 7l437 436 438-436c4-5 9-7 16-7 6 0 11 2 16 7 9 10 9 21 0 32z"
  }));
};

ChevronDown.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = ChevronDown;
exports.default = _default;

/***/ }),

/***/ 86952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var ChevronUp = function ChevronUp(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M32 713l453-453c11-11 21-11 32 0l453 453c5 5 7 10 7 16 0 13-10 23-22 23-7 0-12-2-16-7L501 309 64 745c-4 5-9 7-15 7-7 0-12-2-17-7-9-11-9-21 0-32z"
  }));
};

ChevronUp.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = ChevronUp;
exports.default = _default;

/***/ }),

/***/ 27798:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var CloseButton = function CloseButton(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z"
  }));
};

CloseButton.defaultProps = {
  focusable: "false",
  viewBox: "0 0 12 12"
};
var _default = CloseButton;
exports.default = _default;

/***/ }),

/***/ 60128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _throttle = _interopRequireDefault(__webpack_require__(23493));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(21465));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _getInputHeight = _interopRequireDefault(__webpack_require__(25917));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FANG_PATH_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0z");
var FANG_STROKE_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0 ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX);
var FANG_PATH_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX, ",0 ").concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, "z");
var FANG_STROKE_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",0");
var propTypes =  false ? 0 : {};
var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  ariaLabel: undefined,
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  small: false,
  block: false,
  regular: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyDownShiftTab: function onKeyDownShiftTab() {},
  onKeyDownTab: function onKeyDownTab() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  // accessibility
  isFocused: false
};

var DateInput =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DateInput, _ref);
  var _proto = DateInput.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DateInput(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.state = {
      dateString: '',
      isTouchDevice: false
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setInputRef = _this.setInputRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 300, {
      trailing: false
    });
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isTouchDevice: (0, _isTouchDevice["default"])()
    });
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var dateString = this.state.dateString;

    if (dateString && nextProps.displayValue) {
      this.setState({
        dateString: ''
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        focused = _this$props.focused,
        isFocused = _this$props.isFocused;
    if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

    if (focused && isFocused) {
      this.inputRef.focus();
    }
  };

  _proto.onChange = function onChange(e) {
    var _this$props2 = this.props,
        onChange = _this$props2.onChange,
        onKeyDownQuestionMark = _this$props2.onKeyDownQuestionMark;
    var dateString = e.target.value; // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
    // special case the `?` key so that it always triggers the appropriate callback, instead of
    // modifying the input value

    if (dateString[dateString.length - 1] === '?') {
      onKeyDownQuestionMark(e);
    } else {
      this.setState({
        dateString: dateString
      }, function () {
        return onChange(dateString);
      });
    }
  };

  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();

    if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
      this.throttledKeyDown(e);
    }
  };

  _proto.onFinalKeyDown = function onFinalKeyDown(e) {
    var _this$props3 = this.props,
        onKeyDownShiftTab = _this$props3.onKeyDownShiftTab,
        onKeyDownTab = _this$props3.onKeyDownTab,
        onKeyDownArrowDown = _this$props3.onKeyDownArrowDown,
        onKeyDownQuestionMark = _this$props3.onKeyDownQuestionMark;
    var key = e.key;

    if (key === 'Tab') {
      if (e.shiftKey) {
        onKeyDownShiftTab(e);
      } else {
        onKeyDownTab(e);
      }
    } else if (key === 'ArrowDown') {
      onKeyDownArrowDown(e);
    } else if (key === '?') {
      e.preventDefault();
      onKeyDownQuestionMark(e);
    }
  };

  _proto.setInputRef = function setInputRef(ref) {
    this.inputRef = ref;
  };

  _proto.render = function render() {
    var _this$state = this.state,
        dateString = _this$state.dateString,
        isTouch = _this$state.isTouchDevice;
    var _this$props4 = this.props,
        id = _this$props4.id,
        placeholder = _this$props4.placeholder,
        ariaLabel = _this$props4.ariaLabel,
        displayValue = _this$props4.displayValue,
        screenReaderMessage = _this$props4.screenReaderMessage,
        focused = _this$props4.focused,
        showCaret = _this$props4.showCaret,
        onFocus = _this$props4.onFocus,
        disabled = _this$props4.disabled,
        required = _this$props4.required,
        readOnly = _this$props4.readOnly,
        openDirection = _this$props4.openDirection,
        verticalSpacing = _this$props4.verticalSpacing,
        small = _this$props4.small,
        regular = _this$props4.regular,
        block = _this$props4.block,
        styles = _this$props4.styles,
        reactDates = _this$props4.theme.reactDates;
    var value = dateString || displayValue || '';
    var screenReaderMessageId = "DateInput__screen-reader-message-".concat(id);
    var withFang = showCaret && focused;
    var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
    return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateInput, small && styles.DateInput__small, block && styles.DateInput__block, withFang && styles.DateInput__withFang, disabled && styles.DateInput__disabled, withFang && openDirection === _constants.OPEN_DOWN && styles.DateInput__openDown, withFang && openDirection === _constants.OPEN_UP && styles.DateInput__openUp), _react["default"].createElement("input", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_input, small && styles.DateInput_input__small, regular && styles.DateInput_input__regular, readOnly && styles.DateInput_input__readOnly, focused && styles.DateInput_input__focused, disabled && styles.DateInput_input__disabled), {
      "aria-label": ariaLabel === undefined ? placeholder : ariaLabel,
      type: "text",
      id: id,
      name: id,
      ref: this.setInputRef,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onFocus: onFocus,
      placeholder: placeholder,
      autoComplete: "off",
      disabled: disabled,
      readOnly: typeof readOnly === 'boolean' ? readOnly : isTouch,
      required: required,
      "aria-describedby": screenReaderMessage && screenReaderMessageId
    })), withFang && _react["default"].createElement("svg", (0, _extends2["default"])({
      role: "presentation",
      focusable: "false"
    }, (0, _reactWithStyles.css)(styles.DateInput_fang, openDirection === _constants.OPEN_DOWN && {
      top: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
    }, openDirection === _constants.OPEN_UP && {
      bottom: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
    })), _react["default"].createElement("path", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_fangShape), {
      d: openDirection === _constants.OPEN_DOWN ? FANG_PATH_TOP : FANG_PATH_BOTTOM
    })), _react["default"].createElement("path", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_fangStroke), {
      d: openDirection === _constants.OPEN_DOWN ? FANG_STROKE_TOP : FANG_STROKE_BOTTOM
    }))), screenReaderMessage && _react["default"].createElement("p", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateInput_screenReaderMessage), {
      id: screenReaderMessageId
    }), screenReaderMessage));
  };

  return DateInput;
}(_react["default"].PureComponent || _react["default"].Component);

DateInput.propTypes =  false ? 0 : {};
DateInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing,
      spacing = _ref2$reactDates.spacing,
      font = _ref2$reactDates.font,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateInput: {
      margin: 0,
      padding: spacing.inputPadding,
      background: color.background,
      position: 'relative',
      display: 'inline-block',
      width: sizing.inputWidth,
      verticalAlign: 'middle'
    },
    DateInput__small: {
      width: sizing.inputWidth_small
    },
    DateInput__block: {
      width: '100%'
    },
    DateInput__disabled: {
      background: color.disabled,
      color: color.textDisabled
    },
    DateInput_input: {
      fontWeight: font.input.weight,
      fontSize: font.input.size,
      lineHeight: font.input.lineHeight,
      color: color.text,
      backgroundColor: color.background,
      width: '100%',
      padding: "".concat(spacing.displayTextPaddingVertical, "px ").concat(spacing.displayTextPaddingHorizontal, "px"),
      paddingTop: spacing.displayTextPaddingTop,
      paddingBottom: spacing.displayTextPaddingBottom,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight),
      border: border.input.border,
      borderTop: border.input.borderTop,
      borderRight: (0, _noflip["default"])(border.input.borderRight),
      borderBottom: border.input.borderBottom,
      borderLeft: (0, _noflip["default"])(border.input.borderLeft),
      borderRadius: border.input.borderRadius
    },
    DateInput_input__small: {
      fontSize: font.input.size_small,
      lineHeight: font.input.lineHeight_small,
      letterSpacing: font.input.letterSpacing_small,
      padding: "".concat(spacing.displayTextPaddingVertical_small, "px ").concat(spacing.displayTextPaddingHorizontal_small, "px"),
      paddingTop: spacing.displayTextPaddingTop_small,
      paddingBottom: spacing.displayTextPaddingBottom_small,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft_small),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight_small)
    },
    DateInput_input__regular: {
      fontWeight: 'auto'
    },
    DateInput_input__readOnly: {
      userSelect: 'none'
    },
    DateInput_input__focused: {
      outline: border.input.outlineFocused,
      background: color.backgroundFocused,
      border: border.input.borderFocused,
      borderTop: border.input.borderTopFocused,
      borderRight: (0, _noflip["default"])(border.input.borderRightFocused),
      borderBottom: border.input.borderBottomFocused,
      borderLeft: (0, _noflip["default"])(border.input.borderLeftFocused)
    },
    DateInput_input__disabled: {
      background: color.disabled,
      fontStyle: font.input.styleDisabled
    },
    DateInput_screenReaderMessage: {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    },
    DateInput_fang: {
      position: 'absolute',
      width: _constants.FANG_WIDTH_PX,
      height: _constants.FANG_HEIGHT_PX,
      left: 22,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      zIndex: zIndex + 2
    },
    DateInput_fangShape: {
      fill: color.background
    },
    DateInput_fangStroke: {
      stroke: color.core.border,
      fill: 'transparent'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateInput);

exports.default = _default;

/***/ }),

/***/ 5012:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.PureDateRangePicker = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _reactWithStyles = __webpack_require__(17224);

var _reactPortal = __webpack_require__(32923);

var _airbnbPropTypes = __webpack_require__(78341);

var _consolidatedEvents = __webpack_require__(37034);

var _isTouchDevice = _interopRequireDefault(__webpack_require__(21465));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__(39834));

var _DateRangePickerShape = _interopRequireDefault(__webpack_require__(18149));

var _defaultPhrases = __webpack_require__(98304);

var _getResponsiveContainerStyles = _interopRequireDefault(__webpack_require__(91804));

var _getDetachedContainerStyles = _interopRequireDefault(__webpack_require__(74133));

var _getInputHeight = _interopRequireDefault(__webpack_require__(25917));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(78890));

var _disableScroll2 = _interopRequireDefault(__webpack_require__(1926));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _DateRangePickerInputController = _interopRequireDefault(__webpack_require__(21897));

var _DayPickerRangeController = _interopRequireDefault(__webpack_require__(25900));

var _CloseButton = _interopRequireDefault(__webpack_require__(27798));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,
  // input related props
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateAriaLabel: undefined,
  endDateAriaLabel: undefined,
  startDateOffset: undefined,
  endDateOffset: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  firstDayOfWeek: null,
  verticalHeight: null,
  transitionDuration: undefined,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  horizontalMonthPadding: undefined,
  // navigation related props
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked() {
    return false;
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  isDayHighlighted: function isDayHighlighted() {
    return false;
  },
  minDate: undefined,
  maxDate: undefined,
  // internationalization
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DateRangePickerPhrases,
  dayAriaLabelFormat: undefined
};

var DateRangePicker =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DateRangePicker, _ref);
  var _proto = DateRangePicker.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DateRangePicker(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.state = {
      dayPickerContainerStyles: {},
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    };
    _this.isTouchDevice = false;
    _this.onOutsideClick = _this.onOutsideClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDateRangePickerInputFocus = _this.onDateRangePickerInputFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerFocusOut = _this.onDayPickerFocusOut.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.disableScroll = _this.disableScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.removeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
      passive: true
    });
    this.responsivizePickerPosition();
    this.disableScroll();
    var focusedInput = this.props.focusedInput;

    if (focusedInput) {
      this.setState({
        isDateRangePickerInputFocused: true
      });
    }

    this.isTouchDevice = (0, _isTouchDevice["default"])();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var focusedInput = this.props.focusedInput;

    if (!prevProps.focusedInput && focusedInput && this.isOpened()) {
      // The date picker just changed from being closed to being open.
      this.responsivizePickerPosition();
      this.disableScroll();
    } else if (prevProps.focusedInput && !focusedInput && !this.isOpened()) {
      // The date picker just changed from being open to being closed.
      if (this.enableScroll) this.enableScroll();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeDayPickerEventListeners();
    if (this.removeEventListener) this.removeEventListener();
    if (this.enableScroll) this.enableScroll();
  };

  _proto.onOutsideClick = function onOutsideClick(event) {
    var _this$props = this.props,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate,
        appendToBody = _this$props.appendToBody;
    if (!this.isOpened()) return;
    if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
    onFocusChange(null);
    onClose({
      startDate: startDate,
      endDate: endDate
    });
  };

  _proto.onDateRangePickerInputFocus = function onDateRangePickerInputFocus(focusedInput) {
    var _this$props2 = this.props,
        onFocusChange = _this$props2.onFocusChange,
        readOnly = _this$props2.readOnly,
        withPortal = _this$props2.withPortal,
        withFullScreenPortal = _this$props2.withFullScreenPortal,
        keepFocusOnInput = _this$props2.keepFocusOnInput;

    if (focusedInput) {
      var withAnyPortal = withPortal || withFullScreenPortal;
      var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

      if (moveFocusToDayPicker) {
        this.onDayPickerFocus();
      } else {
        this.onDayPickerBlur();
      }
    }

    onFocusChange(focusedInput);
  };

  _proto.onDayPickerFocus = function onDayPickerFocus() {
    var _this$props3 = this.props,
        focusedInput = _this$props3.focusedInput,
        onFocusChange = _this$props3.onFocusChange;
    if (!focusedInput) onFocusChange(_constants.START_DATE);
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: false
    });
  };

  _proto.onDayPickerFocusOut = function onDayPickerFocusOut(event) {
    // In cases where **relatedTarget** is not null, it points to the right
    // element here. However, in cases where it is null (such as clicking on a
    // specific day) or it is **document.body** (IE11), the appropriate value is **event.target**.
    //
    // We handle both situations here by using the ` || ` operator to fallback
    // to *event.target** when **relatedTarget** is not provided.
    var relatedTarget = event.relatedTarget === document.body ? event.target : event.relatedTarget || event.target;
    if (this.dayPickerContainer.contains(relatedTarget)) return;
    this.onOutsideClick(event);
  };

  _proto.onDayPickerBlur = function onDayPickerBlur() {
    this.setState({
      isDateRangePickerInputFocused: true,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
  };

  _proto.setDayPickerContainerRef = function setDayPickerContainerRef(ref) {
    if (ref === this.dayPickerContainer) return;
    if (this.dayPickerContainer) this.removeDayPickerEventListeners();
    this.dayPickerContainer = ref;
    if (!ref) return;
    this.addDayPickerEventListeners();
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.addDayPickerEventListeners = function addDayPickerEventListeners() {
    // NOTE: We are using a manual event listener here, because React doesn't
    // provide FocusOut, while blur and keydown don't provide the information
    // needed in order to know whether we have left focus or not.
    //
    // For reference, this issue is further described here:
    // - https://github.com/facebook/react/issues/6410
    this.removeDayPickerFocusOut = (0, _consolidatedEvents.addEventListener)(this.dayPickerContainer, 'focusout', this.onDayPickerFocusOut);
  };

  _proto.removeDayPickerEventListeners = function removeDayPickerEventListeners() {
    if (this.removeDayPickerFocusOut) this.removeDayPickerFocusOut();
  };

  _proto.isOpened = function isOpened() {
    var focusedInput = this.props.focusedInput;
    return focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
  };

  _proto.disableScroll = function disableScroll() {
    var _this$props4 = this.props,
        appendToBody = _this$props4.appendToBody,
        propDisableScroll = _this$props4.disableScroll;
    if (!appendToBody && !propDisableScroll) return;
    if (!this.isOpened()) return; // Disable scroll for every ancestor of this DateRangePicker up to the
    // document level. This ensures the input and the picker never move. Other
    // sibling elements or the picker itself can scroll.

    this.enableScroll = (0, _disableScroll2["default"])(this.container);
  };

  _proto.responsivizePickerPosition = function responsivizePickerPosition() {
    // It's possible the portal props have been changed in response to window resizes
    // So let's ensure we reset this back to the base state each time
    var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

    if (Object.keys(dayPickerContainerStyles).length > 0) {
      this.setState({
        dayPickerContainerStyles: {}
      });
    }

    if (!this.isOpened()) {
      return;
    }

    var _this$props5 = this.props,
        openDirection = _this$props5.openDirection,
        anchorDirection = _this$props5.anchorDirection,
        horizontalMargin = _this$props5.horizontalMargin,
        withPortal = _this$props5.withPortal,
        withFullScreenPortal = _this$props5.withFullScreenPortal,
        appendToBody = _this$props5.appendToBody;
    var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

    if (!withPortal && !withFullScreenPortal) {
      var containerRect = this.dayPickerContainer.getBoundingClientRect();
      var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
      var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
      this.setState({
        dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), {}, appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
      });
    }
  };

  _proto.showKeyboardShortcutsPanel = function showKeyboardShortcutsPanel() {
    this.setState({
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: true
    });
  };

  _proto.maybeRenderDayPickerWithPortal = function maybeRenderDayPickerWithPortal() {
    var _this$props6 = this.props,
        withPortal = _this$props6.withPortal,
        withFullScreenPortal = _this$props6.withFullScreenPortal,
        appendToBody = _this$props6.appendToBody;

    if (!this.isOpened()) {
      return null;
    }

    if (withPortal || withFullScreenPortal || appendToBody) {
      return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
    }

    return this.renderDayPicker();
  };

  _proto.renderDayPicker = function renderDayPicker() {
    var _this$props7 = this.props,
        anchorDirection = _this$props7.anchorDirection,
        openDirection = _this$props7.openDirection,
        isDayBlocked = _this$props7.isDayBlocked,
        isDayHighlighted = _this$props7.isDayHighlighted,
        isOutsideRange = _this$props7.isOutsideRange,
        numberOfMonths = _this$props7.numberOfMonths,
        orientation = _this$props7.orientation,
        monthFormat = _this$props7.monthFormat,
        renderMonthText = _this$props7.renderMonthText,
        renderWeekHeaderElement = _this$props7.renderWeekHeaderElement,
        dayPickerNavigationInlineStyles = _this$props7.dayPickerNavigationInlineStyles,
        navPosition = _this$props7.navPosition,
        navPrev = _this$props7.navPrev,
        navNext = _this$props7.navNext,
        renderNavPrevButton = _this$props7.renderNavPrevButton,
        renderNavNextButton = _this$props7.renderNavNextButton,
        onPrevMonthClick = _this$props7.onPrevMonthClick,
        onNextMonthClick = _this$props7.onNextMonthClick,
        onDatesChange = _this$props7.onDatesChange,
        onFocusChange = _this$props7.onFocusChange,
        withPortal = _this$props7.withPortal,
        withFullScreenPortal = _this$props7.withFullScreenPortal,
        daySize = _this$props7.daySize,
        enableOutsideDays = _this$props7.enableOutsideDays,
        focusedInput = _this$props7.focusedInput,
        startDate = _this$props7.startDate,
        startDateOffset = _this$props7.startDateOffset,
        endDate = _this$props7.endDate,
        endDateOffset = _this$props7.endDateOffset,
        minDate = _this$props7.minDate,
        maxDate = _this$props7.maxDate,
        minimumNights = _this$props7.minimumNights,
        keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
        renderCalendarDay = _this$props7.renderCalendarDay,
        renderDayContents = _this$props7.renderDayContents,
        renderCalendarInfo = _this$props7.renderCalendarInfo,
        renderMonthElement = _this$props7.renderMonthElement,
        calendarInfoPosition = _this$props7.calendarInfoPosition,
        firstDayOfWeek = _this$props7.firstDayOfWeek,
        initialVisibleMonth = _this$props7.initialVisibleMonth,
        hideKeyboardShortcutsPanel = _this$props7.hideKeyboardShortcutsPanel,
        customCloseIcon = _this$props7.customCloseIcon,
        onClose = _this$props7.onClose,
        phrases = _this$props7.phrases,
        dayAriaLabelFormat = _this$props7.dayAriaLabelFormat,
        isRTL = _this$props7.isRTL,
        weekDayFormat = _this$props7.weekDayFormat,
        styles = _this$props7.styles,
        verticalHeight = _this$props7.verticalHeight,
        transitionDuration = _this$props7.transitionDuration,
        verticalSpacing = _this$props7.verticalSpacing,
        horizontalMonthPadding = _this$props7.horizontalMonthPadding,
        small = _this$props7.small,
        disabled = _this$props7.disabled,
        reactDates = _this$props7.theme.reactDates;
    var _this$state = this.state,
        dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
        isDayPickerFocused = _this$state.isDayPickerFocused,
        showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
    var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

    var initialVisibleMonthThunk = initialVisibleMonth || function () {
      return startDate || endDate || (0, _moment["default"])();
    };

    var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateRangePicker_closeButton_svg));

    var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
    var withAnyPortal = withPortal || withFullScreenPortal;
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setDayPickerContainerRef
    }, (0, _reactWithStyles.css)(styles.DateRangePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.DateRangePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.DateRangePicker_picker__directionRight, orientation === _constants.HORIZONTAL_ORIENTATION && styles.DateRangePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.DateRangePicker_picker__vertical, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
      top: inputHeight + verticalSpacing
    }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
      bottom: inputHeight + verticalSpacing
    }, withAnyPortal && styles.DateRangePicker_picker__portal, withFullScreenPortal && styles.DateRangePicker_picker__fullScreenPortal, isRTL && styles.DateRangePicker_picker__rtl, dayPickerContainerStyles), {
      onClick: onOutsideClick
    }), _react["default"].createElement(_DayPickerRangeController["default"], {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      numberOfMonths: numberOfMonths,
      onPrevMonthClick: onPrevMonthClick,
      onNextMonthClick: onNextMonthClick,
      onDatesChange: onDatesChange,
      onFocusChange: onFocusChange,
      onClose: onClose,
      focusedInput: focusedInput,
      startDate: startDate,
      startDateOffset: startDateOffset,
      endDate: endDate,
      endDateOffset: endDateOffset,
      minDate: minDate,
      maxDate: maxDate,
      monthFormat: monthFormat,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      withPortal: withAnyPortal,
      daySize: daySize,
      initialVisibleMonth: initialVisibleMonthThunk,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      minimumNights: minimumNights,
      isOutsideRange: isOutsideRange,
      isDayHighlighted: isDayHighlighted,
      isDayBlocked: isDayBlocked,
      keepOpenOnDateSelect: keepOpenOnDateSelect,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isDayPickerFocused,
      showKeyboardShortcuts: showKeyboardShortcuts,
      onBlur: this.onDayPickerBlur,
      phrases: phrases,
      dayAriaLabelFormat: dayAriaLabelFormat,
      isRTL: isRTL,
      firstDayOfWeek: firstDayOfWeek,
      weekDayFormat: weekDayFormat,
      verticalHeight: verticalHeight,
      transitionDuration: transitionDuration,
      disabled: disabled,
      horizontalMonthPadding: horizontalMonthPadding
    }), withFullScreenPortal && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateRangePicker_closeButton), {
      type: "button",
      onClick: this.onOutsideClick,
      "aria-label": phrases.closeDatePicker
    }), closeIcon));
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    /* eslint-enable jsx-a11y/click-events-have-key-events */
  };

  _proto.render = function render() {
    var _this$props8 = this.props,
        startDate = _this$props8.startDate,
        startDateId = _this$props8.startDateId,
        startDatePlaceholderText = _this$props8.startDatePlaceholderText,
        startDateAriaLabel = _this$props8.startDateAriaLabel,
        endDate = _this$props8.endDate,
        endDateId = _this$props8.endDateId,
        endDatePlaceholderText = _this$props8.endDatePlaceholderText,
        endDateAriaLabel = _this$props8.endDateAriaLabel,
        focusedInput = _this$props8.focusedInput,
        screenReaderInputMessage = _this$props8.screenReaderInputMessage,
        showClearDates = _this$props8.showClearDates,
        showDefaultInputIcon = _this$props8.showDefaultInputIcon,
        inputIconPosition = _this$props8.inputIconPosition,
        customInputIcon = _this$props8.customInputIcon,
        customArrowIcon = _this$props8.customArrowIcon,
        customCloseIcon = _this$props8.customCloseIcon,
        disabled = _this$props8.disabled,
        required = _this$props8.required,
        readOnly = _this$props8.readOnly,
        openDirection = _this$props8.openDirection,
        phrases = _this$props8.phrases,
        isOutsideRange = _this$props8.isOutsideRange,
        minimumNights = _this$props8.minimumNights,
        withPortal = _this$props8.withPortal,
        withFullScreenPortal = _this$props8.withFullScreenPortal,
        displayFormat = _this$props8.displayFormat,
        reopenPickerOnClearDates = _this$props8.reopenPickerOnClearDates,
        keepOpenOnDateSelect = _this$props8.keepOpenOnDateSelect,
        onDatesChange = _this$props8.onDatesChange,
        onClose = _this$props8.onClose,
        isRTL = _this$props8.isRTL,
        noBorder = _this$props8.noBorder,
        block = _this$props8.block,
        verticalSpacing = _this$props8.verticalSpacing,
        small = _this$props8.small,
        regular = _this$props8.regular,
        styles = _this$props8.styles;
    var isDateRangePickerInputFocused = this.state.isDateRangePickerInputFocused;
    var enableOutsideClick = !withPortal && !withFullScreenPortal;
    var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

    var input = _react["default"].createElement(_DateRangePickerInputController["default"], {
      startDate: startDate,
      startDateId: startDateId,
      startDatePlaceholderText: startDatePlaceholderText,
      isStartDateFocused: focusedInput === _constants.START_DATE,
      startDateAriaLabel: startDateAriaLabel,
      endDate: endDate,
      endDateId: endDateId,
      endDatePlaceholderText: endDatePlaceholderText,
      isEndDateFocused: focusedInput === _constants.END_DATE,
      endDateAriaLabel: endDateAriaLabel,
      displayFormat: displayFormat,
      showClearDates: showClearDates,
      showCaret: !withPortal && !withFullScreenPortal && !hideFang,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      customInputIcon: customInputIcon,
      customArrowIcon: customArrowIcon,
      customCloseIcon: customCloseIcon,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      reopenPickerOnClearDates: reopenPickerOnClearDates,
      keepOpenOnDateSelect: keepOpenOnDateSelect,
      isOutsideRange: isOutsideRange,
      minimumNights: minimumNights,
      withFullScreenPortal: withFullScreenPortal,
      onDatesChange: onDatesChange,
      onFocusChange: this.onDateRangePickerInputFocus,
      onKeyDownArrowDown: this.onDayPickerFocus,
      onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
      onClose: onClose,
      phrases: phrases,
      screenReaderMessage: screenReaderInputMessage,
      isFocused: isDateRangePickerInputFocused,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing
    }, this.maybeRenderDayPickerWithPortal());

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setContainerRef
    }, (0, _reactWithStyles.css)(styles.DateRangePicker, block && styles.DateRangePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
      onOutsideClick: this.onOutsideClick
    }, input), enableOutsideClick || input);
  };

  return DateRangePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDateRangePicker = DateRangePicker;
DateRangePicker.propTypes =  false ? 0 : {};
DateRangePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateRangePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    DateRangePicker__block: {
      display: 'block'
    },
    DateRangePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    DateRangePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    DateRangePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    DateRangePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    DateRangePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    DateRangePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    DateRangePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePicker);

exports.default = _default;

/***/ }),

/***/ 47524:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _DateInput = _interopRequireDefault(__webpack_require__(60128));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(45174));

var _DisabledShape = _interopRequireDefault(__webpack_require__(38712));

var _RightArrow = _interopRequireDefault(__webpack_require__(57783));

var _LeftArrow = _interopRequireDefault(__webpack_require__(58601));

var _CloseButton = _interopRequireDefault(__webpack_require__(27798));

var _CalendarIcon = _interopRequireDefault(__webpack_require__(40142));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  children: null,
  startDateId: _constants.START_DATE,
  endDateId: _constants.END_DATE,
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateAriaLabel: undefined,
  endDateAriaLabel: undefined,
  screenReaderMessage: '',
  onStartDateFocus: function onStartDateFocus() {},
  onEndDateFocus: function onEndDateFocus() {},
  onStartDateChange: function onStartDateChange() {},
  onEndDateChange: function onEndDateChange() {},
  onStartDateShiftTab: function onStartDateShiftTab() {},
  onEndDateTab: function onEndDateTab() {},
  onClearDates: function onClearDates() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  startDate: '',
  endDate: '',
  isStartDateFocused: false,
  isEndDateFocused: false,
  showClearDates: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};

function DateRangePickerInput(_ref) {
  var children = _ref.children,
      startDate = _ref.startDate,
      startDateId = _ref.startDateId,
      startDatePlaceholderText = _ref.startDatePlaceholderText,
      screenReaderMessage = _ref.screenReaderMessage,
      isStartDateFocused = _ref.isStartDateFocused,
      onStartDateChange = _ref.onStartDateChange,
      onStartDateFocus = _ref.onStartDateFocus,
      onStartDateShiftTab = _ref.onStartDateShiftTab,
      startDateAriaLabel = _ref.startDateAriaLabel,
      endDate = _ref.endDate,
      endDateId = _ref.endDateId,
      endDatePlaceholderText = _ref.endDatePlaceholderText,
      isEndDateFocused = _ref.isEndDateFocused,
      onEndDateChange = _ref.onEndDateChange,
      onEndDateFocus = _ref.onEndDateFocus,
      onEndDateTab = _ref.onEndDateTab,
      endDateAriaLabel = _ref.endDateAriaLabel,
      onKeyDownArrowDown = _ref.onKeyDownArrowDown,
      onKeyDownQuestionMark = _ref.onKeyDownQuestionMark,
      onClearDates = _ref.onClearDates,
      showClearDates = _ref.showClearDates,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      showCaret = _ref.showCaret,
      openDirection = _ref.openDirection,
      showDefaultInputIcon = _ref.showDefaultInputIcon,
      inputIconPosition = _ref.inputIconPosition,
      customInputIcon = _ref.customInputIcon,
      customArrowIcon = _ref.customArrowIcon,
      customCloseIcon = _ref.customCloseIcon,
      isFocused = _ref.isFocused,
      phrases = _ref.phrases,
      isRTL = _ref.isRTL,
      noBorder = _ref.noBorder,
      block = _ref.block,
      verticalSpacing = _ref.verticalSpacing,
      small = _ref.small,
      regular = _ref.regular,
      styles = _ref.styles;

  var calendarIcon = customInputIcon || _react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_calendarIcon_svg));

  var arrowIcon = customArrowIcon || _react["default"].createElement(_RightArrow["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow_svg));

  if (isRTL) arrowIcon = _react["default"].createElement(_LeftArrow["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow_svg));
  if (small) arrowIcon = '-';

  var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_clearDates_svg, small && styles.DateRangePickerInput_clearDates_svg__small));

  var screenReaderStartDateText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;
  var screenReaderEndDateText = screenReaderMessage || phrases.keyboardBackwardNavigationInstructions;

  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateRangePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onKeyDownArrowDown
  }), calendarIcon);

  var startDateDisabled = disabled === _constants.START_DATE || disabled === true;
  var endDateDisabled = disabled === _constants.END_DATE || disabled === true;
  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateRangePickerInput, disabled && styles.DateRangePickerInput__disabled, isRTL && styles.DateRangePickerInput__rtl, !noBorder && styles.DateRangePickerInput__withBorder, block && styles.DateRangePickerInput__block, showClearDates && styles.DateRangePickerInput__showClearDates), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, _react["default"].createElement(_DateInput["default"], {
    id: startDateId,
    placeholder: startDatePlaceholderText,
    ariaLabel: startDateAriaLabel,
    displayValue: startDate,
    screenReaderMessage: screenReaderStartDateText,
    focused: isStartDateFocused,
    isFocused: isFocused,
    disabled: startDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onStartDateChange,
    onFocus: onStartDateFocus,
    onKeyDownShiftTab: onStartDateShiftTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), children, _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow), {
    "aria-hidden": "true",
    role: "presentation"
  }), arrowIcon), _react["default"].createElement(_DateInput["default"], {
    id: endDateId,
    placeholder: endDatePlaceholderText,
    ariaLabel: endDateAriaLabel,
    displayValue: endDate,
    screenReaderMessage: screenReaderEndDateText,
    focused: isEndDateFocused,
    isFocused: isFocused,
    disabled: endDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onEndDateChange,
    onFocus: onEndDateFocus,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    onKeyDownTab: onEndDateTab,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), showClearDates && _react["default"].createElement("button", (0, _extends2["default"])({
    type: "button",
    "aria-label": phrases.clearDates
  }, (0, _reactWithStyles.css)(styles.DateRangePickerInput_clearDates, small && styles.DateRangePickerInput_clearDates__small, !customCloseIcon && styles.DateRangePickerInput_clearDates_default, !(startDate || endDate) && styles.DateRangePickerInput_clearDates__hide), {
    onClick: onClearDates,
    disabled: disabled
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}

DateRangePickerInput.propTypes =  false ? 0 : {};
DateRangePickerInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing;
  return {
    DateRangePickerInput: {
      backgroundColor: color.background,
      display: 'inline-block'
    },
    DateRangePickerInput__disabled: {
      background: color.disabled
    },
    DateRangePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    DateRangePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePickerInput__block: {
      display: 'block'
    },
    DateRangePickerInput__showClearDates: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    DateRangePickerInput_arrow: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateRangePickerInput_arrow_svg: {
      verticalAlign: 'middle',
      fill: color.text,
      height: sizing.arrowWidth,
      width: sizing.arrowWidth
    },
    DateRangePickerInput_clearDates: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    DateRangePickerInput_clearDates__small: {
      padding: 6
    },
    DateRangePickerInput_clearDates_default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    DateRangePickerInput_clearDates__hide: {
      visibility: 'hidden'
    },
    DateRangePickerInput_clearDates_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    DateRangePickerInput_clearDates_svg__small: {
      height: 9
    },
    DateRangePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    DateRangePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePickerInput);

exports.default = _default;

/***/ }),

/***/ 21897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _DateRangePickerInput = _interopRequireDefault(__webpack_require__(47524));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(45174));

var _DisabledShape = _interopRequireDefault(__webpack_require__(38712));

var _toMomentObject = _interopRequireDefault(__webpack_require__(11526));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__(5027));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(78890));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(12933));

var _constants = __webpack_require__(45388);

var propTypes =  false ? 0 : {};
var defaultProps = {
  children: null,
  startDate: null,
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,
  startDateAriaLabel: undefined,
  endDate: null,
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,
  endDateAriaLabel: undefined,
  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  minimumNights: 1,
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  onDatesChange: function onDatesChange() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};

var DateRangePickerInputController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DateRangePickerInputController, _ref);
  var _proto = DateRangePickerInputController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DateRangePickerInputController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.onClearFocus = _this.onClearFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onStartDateChange = _this.onStartDateChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onStartDateFocus = _this.onStartDateFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onEndDateChange = _this.onEndDateChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onEndDateFocus = _this.onEndDateFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.clearDates = _this.clearDates.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.onClearFocus = function onClearFocus() {
    var _this$props = this.props,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate;
    onFocusChange(null);
    onClose({
      startDate: startDate,
      endDate: endDate
    });
  };

  _proto.onEndDateChange = function onEndDateChange(endDateString) {
    var _this$props2 = this.props,
        startDate = _this$props2.startDate,
        isOutsideRange = _this$props2.isOutsideRange,
        minimumNights = _this$props2.minimumNights,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        onDatesChange = _this$props2.onDatesChange;
    var endDate = (0, _toMomentObject["default"])(endDateString, this.getDisplayFormat());
    var isEndDateValid = endDate && !isOutsideRange(endDate) && !(startDate && (0, _isBeforeDay["default"])(endDate, startDate.clone().add(minimumNights, 'days')));

    if (isEndDateValid) {
      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
      if (!keepOpenOnDateSelect) this.onClearFocus();
    } else {
      onDatesChange({
        startDate: startDate,
        endDate: null
      });
    }
  };

  _proto.onEndDateFocus = function onEndDateFocus() {
    var _this$props3 = this.props,
        startDate = _this$props3.startDate,
        onFocusChange = _this$props3.onFocusChange,
        withFullScreenPortal = _this$props3.withFullScreenPortal,
        disabled = _this$props3.disabled;

    if (!startDate && withFullScreenPortal && (!disabled || disabled === _constants.END_DATE)) {
      // When the datepicker is full screen, we never want to focus the end date first
      // because there's no indication that that is the case once the datepicker is open and it
      // might confuse the user
      onFocusChange(_constants.START_DATE);
    } else if (!disabled || disabled === _constants.START_DATE) {
      onFocusChange(_constants.END_DATE);
    }
  };

  _proto.onStartDateChange = function onStartDateChange(startDateString) {
    var endDate = this.props.endDate;
    var _this$props4 = this.props,
        isOutsideRange = _this$props4.isOutsideRange,
        minimumNights = _this$props4.minimumNights,
        onDatesChange = _this$props4.onDatesChange,
        onFocusChange = _this$props4.onFocusChange,
        disabled = _this$props4.disabled;
    var startDate = (0, _toMomentObject["default"])(startDateString, this.getDisplayFormat());
    var isEndDateBeforeStartDate = startDate && (0, _isBeforeDay["default"])(endDate, startDate.clone().add(minimumNights, 'days'));
    var isStartDateValid = startDate && !isOutsideRange(startDate) && !(disabled === _constants.END_DATE && isEndDateBeforeStartDate);

    if (isStartDateValid) {
      if (isEndDateBeforeStartDate) {
        endDate = null;
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
      onFocusChange(_constants.END_DATE);
    } else {
      onDatesChange({
        startDate: null,
        endDate: endDate
      });
    }
  };

  _proto.onStartDateFocus = function onStartDateFocus() {
    var _this$props5 = this.props,
        disabled = _this$props5.disabled,
        onFocusChange = _this$props5.onFocusChange;

    if (!disabled || disabled === _constants.END_DATE) {
      onFocusChange(_constants.START_DATE);
    }
  };

  _proto.getDisplayFormat = function getDisplayFormat() {
    var displayFormat = this.props.displayFormat;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  };

  _proto.getDateString = function getDateString(date) {
    var displayFormat = this.getDisplayFormat();

    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }

    return (0, _toLocalizedDateString["default"])(date);
  };

  _proto.clearDates = function clearDates() {
    var _this$props6 = this.props,
        onDatesChange = _this$props6.onDatesChange,
        reopenPickerOnClearDates = _this$props6.reopenPickerOnClearDates,
        onFocusChange = _this$props6.onFocusChange;
    onDatesChange({
      startDate: null,
      endDate: null
    });

    if (reopenPickerOnClearDates) {
      onFocusChange(_constants.START_DATE);
    }
  };

  _proto.render = function render() {
    var _this$props7 = this.props,
        children = _this$props7.children,
        startDate = _this$props7.startDate,
        startDateId = _this$props7.startDateId,
        startDatePlaceholderText = _this$props7.startDatePlaceholderText,
        isStartDateFocused = _this$props7.isStartDateFocused,
        startDateAriaLabel = _this$props7.startDateAriaLabel,
        endDate = _this$props7.endDate,
        endDateId = _this$props7.endDateId,
        endDatePlaceholderText = _this$props7.endDatePlaceholderText,
        endDateAriaLabel = _this$props7.endDateAriaLabel,
        isEndDateFocused = _this$props7.isEndDateFocused,
        screenReaderMessage = _this$props7.screenReaderMessage,
        showClearDates = _this$props7.showClearDates,
        showCaret = _this$props7.showCaret,
        showDefaultInputIcon = _this$props7.showDefaultInputIcon,
        inputIconPosition = _this$props7.inputIconPosition,
        customInputIcon = _this$props7.customInputIcon,
        customArrowIcon = _this$props7.customArrowIcon,
        customCloseIcon = _this$props7.customCloseIcon,
        disabled = _this$props7.disabled,
        required = _this$props7.required,
        readOnly = _this$props7.readOnly,
        openDirection = _this$props7.openDirection,
        isFocused = _this$props7.isFocused,
        phrases = _this$props7.phrases,
        onKeyDownArrowDown = _this$props7.onKeyDownArrowDown,
        onKeyDownQuestionMark = _this$props7.onKeyDownQuestionMark,
        isRTL = _this$props7.isRTL,
        noBorder = _this$props7.noBorder,
        block = _this$props7.block,
        small = _this$props7.small,
        regular = _this$props7.regular,
        verticalSpacing = _this$props7.verticalSpacing;
    var startDateString = this.getDateString(startDate);
    var endDateString = this.getDateString(endDate);
    return _react["default"].createElement(_DateRangePickerInput["default"], {
      startDate: startDateString,
      startDateId: startDateId,
      startDatePlaceholderText: startDatePlaceholderText,
      isStartDateFocused: isStartDateFocused,
      startDateAriaLabel: startDateAriaLabel,
      endDate: endDateString,
      endDateId: endDateId,
      endDatePlaceholderText: endDatePlaceholderText,
      isEndDateFocused: isEndDateFocused,
      endDateAriaLabel: endDateAriaLabel,
      isFocused: isFocused,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      showCaret: showCaret,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      customInputIcon: customInputIcon,
      customArrowIcon: customArrowIcon,
      customCloseIcon: customCloseIcon,
      phrases: phrases,
      onStartDateChange: this.onStartDateChange,
      onStartDateFocus: this.onStartDateFocus,
      onStartDateShiftTab: this.onClearFocus,
      onEndDateChange: this.onEndDateChange,
      onEndDateFocus: this.onEndDateFocus,
      showClearDates: showClearDates,
      onClearDates: this.clearDates,
      screenReaderMessage: screenReaderMessage,
      onKeyDownArrowDown: onKeyDownArrowDown,
      onKeyDownQuestionMark: onKeyDownQuestionMark,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing
    }, children);
  };

  return DateRangePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports.default = DateRangePickerInputController;
DateRangePickerInputController.propTypes =  false ? 0 : {};
DateRangePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ 65860:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.PureDayPicker = exports.defaultProps = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(319));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _throttle = _interopRequireDefault(__webpack_require__(23493));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(21465));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__(39834));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _CalendarMonthGrid = _interopRequireDefault(__webpack_require__(39137));

var _DayPickerNavigation = _interopRequireDefault(__webpack_require__(6476));

var _DayPickerKeyboardShortcuts = _interopRequireWildcard(__webpack_require__(16708));

var _getNumberOfCalendarMonthWeeks = _interopRequireDefault(__webpack_require__(93065));

var _getCalendarMonthWidth = _interopRequireDefault(__webpack_require__(46694));

var _calculateDimension = _interopRequireDefault(__webpack_require__(60403));

var _getActiveElement = _interopRequireDefault(__webpack_require__(65446));

var _isDayVisible = _interopRequireDefault(__webpack_require__(13720));

var _isSameMonth = _interopRequireDefault(__webpack_require__(30034));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(10337));

var _NavPositionShape = _interopRequireDefault(__webpack_require__(98771));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(41073));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(12003));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MONTH_PADDING = 23;
var PREV_TRANSITION = 'prev';
var NEXT_TRANSITION = 'next';
var MONTH_SELECTION_TRANSITION = 'month_selection';
var YEAR_SELECTION_TRANSITION = 'year_selection';
var PREV_NAV = 'prev_nav';
var NEXT_NAV = 'next_nav';
var propTypes =  false ? 0 : {};
var defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 2,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick: function onOutsideClick() {},
  hidden: false,
  initialVisibleMonth: function initialVisibleMonth() {
    return (0, _moment["default"])();
  },
  firstDayOfWeek: null,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined,
  // navigation props
  dayPickerNavigationInlineStyles: null,
  disablePrev: false,
  disableNext: false,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  noNavButtons: false,
  noNavNextButton: false,
  noNavPrevButton: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onGetNextScrollableMonths: function onGetNextScrollableMonths() {},
  onGetPrevScrollableMonths: function onGetPrevScrollableMonths() {},
  // month props
  renderMonthText: null,
  renderMonthElement: null,
  renderWeekHeaderElement: null,
  // day props
  modifiers: {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  // accessibility props
  isFocused: false,
  getFirstFocusableDay: null,
  onBlur: function onBlur() {},
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined
};
exports.defaultProps = defaultProps;

var DayPicker =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPicker, _ref);
  var _proto = DayPicker.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPicker(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    var currentMonth = props.hidden ? (0, _moment["default"])() : props.initialVisibleMonth();
    var focusedDate = currentMonth.clone().startOf('month');

    if (props.getFirstFocusableDay) {
      focusedDate = props.getFirstFocusableDay(currentMonth);
    }

    var horizontalMonthPadding = props.horizontalMonthPadding;
    var translationValue = props.isRTL && _this.isHorizontal() ? -(0, _getCalendarMonthWidth["default"])(props.daySize, horizontalMonthPadding) : 0;
    _this.hasSetInitialVisibleMonth = !props.hidden;
    _this.state = {
      currentMonthScrollTop: null,
      currentMonth: currentMonth,
      monthTransition: null,
      translationValue: translationValue,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: (0, _getCalendarMonthWidth["default"])(props.daySize, horizontalMonthPadding),
      focusedDate: !props.hidden || props.isFocused ? focusedDate : null,
      nextFocusedDate: null,
      showKeyboardShortcuts: props.showKeyboardShortcuts,
      onKeyboardShortcutsPanelClose: function onKeyboardShortcutsPanelClose() {},
      isTouchDevice: (0, _isTouchDevice["default"])(),
      withMouseInteractions: true,
      calendarInfoWidth: 0,
      monthTitleHeight: null,
      hasSetHeight: false
    };

    _this.setCalendarMonthWeeks(currentMonth);

    _this.calendarMonthGridHeight = 0;
    _this.setCalendarInfoWidthTimeout = null;
    _this.setCalendarMonthGridHeightTimeout = null;
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 200, {
      trailing: false
    });
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onPrevMonthTransition = _this.onPrevMonthTransition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthTransition = _this.onNextMonthTransition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMonthChange = _this.onMonthChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearChange = _this.onYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getNextScrollableMonths = _this.getNextScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getPrevScrollableMonths = _this.getPrevScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openKeyboardShortcutsPanel = _this.openKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeKeyboardShortcutsPanel = _this.closeKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setCalendarInfoRef = _this.setCalendarInfoRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setTransitionContainerRef = _this.setTransitionContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    var orientation = this.props.orientation;
    var currentMonth = this.state.currentMonth;
    var calendarInfoWidth = this.calendarInfo ? (0, _calculateDimension["default"])(this.calendarInfo, 'width', true, true) : 0;
    var currentMonthScrollTop = this.transitionContainer && orientation === _constants.VERTICAL_SCROLLABLE ? this.transitionContainer.scrollHeight - this.transitionContainer.scrollTop : null;
    this.setState({
      isTouchDevice: (0, _isTouchDevice["default"])(),
      calendarInfoWidth: calendarInfoWidth,
      currentMonthScrollTop: currentMonthScrollTop
    });
    this.setCalendarMonthWeeks(currentMonth);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    var hidden = nextProps.hidden,
        isFocused = nextProps.isFocused,
        showKeyboardShortcuts = nextProps.showKeyboardShortcuts,
        onBlur = nextProps.onBlur,
        orientation = nextProps.orientation,
        renderMonthText = nextProps.renderMonthText,
        horizontalMonthPadding = nextProps.horizontalMonthPadding;
    var currentMonth = this.state.currentMonth;
    var nextCurrentMonth = nextState.currentMonth;

    if (!hidden) {
      if (!this.hasSetInitialVisibleMonth) {
        this.hasSetInitialVisibleMonth = true;
        this.setState({
          currentMonth: nextProps.initialVisibleMonth()
        });
      }
    }

    var _this$props = this.props,
        daySize = _this$props.daySize,
        prevIsFocused = _this$props.isFocused,
        prevRenderMonthText = _this$props.renderMonthText;

    if (nextProps.daySize !== daySize) {
      this.setState({
        calendarMonthWidth: (0, _getCalendarMonthWidth["default"])(nextProps.daySize, horizontalMonthPadding)
      });
    }

    if (isFocused !== prevIsFocused) {
      if (isFocused) {
        var focusedDate = this.getFocusedDay(currentMonth);
        var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

        if (nextProps.showKeyboardShortcuts) {
          // the ? shortcut came from the input and we should return input there once it is close
          onKeyboardShortcutsPanelClose = onBlur;
        }

        this.setState({
          showKeyboardShortcuts: showKeyboardShortcuts,
          onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelClose,
          focusedDate: focusedDate,
          withMouseInteractions: false
        });
      } else {
        this.setState({
          focusedDate: null
        });
      }
    }

    if (renderMonthText !== prevRenderMonthText) {
      this.setState({
        monthTitleHeight: null
      });
    } // Capture the scroll position so when previous months are rendered above the current month
    // we can adjust scroll after the component has updated and the previous current month
    // stays in view.


    if (orientation === _constants.VERTICAL_SCROLLABLE && this.transitionContainer && !(0, _isSameMonth["default"])(currentMonth, nextCurrentMonth)) {
      this.setState({
        currentMonthScrollTop: this.transitionContainer.scrollHeight - this.transitionContainer.scrollTop
      });
    }
  };

  _proto.componentWillUpdate = function componentWillUpdate() {
    var _this2 = this;

    var transitionDuration = this.props.transitionDuration; // Calculating the dimensions trigger a DOM repaint which
    // breaks the CSS transition.
    // The setTimeout will wait until the transition ends.

    if (this.calendarInfo) {
      this.setCalendarInfoWidthTimeout = setTimeout(function () {
        var calendarInfoWidth = _this2.state.calendarInfoWidth;
        var calendarInfoPanelWidth = (0, _calculateDimension["default"])(_this2.calendarInfo, 'width', true, true);

        if (calendarInfoWidth !== calendarInfoPanelWidth) {
          _this2.setState({
            calendarInfoWidth: calendarInfoPanelWidth
          });
        }
      }, transitionDuration);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props2 = this.props,
        orientation = _this$props2.orientation,
        daySize = _this$props2.daySize,
        isFocused = _this$props2.isFocused,
        numberOfMonths = _this$props2.numberOfMonths;
    var _this$state = this.state,
        currentMonth = _this$state.currentMonth,
        currentMonthScrollTop = _this$state.currentMonthScrollTop,
        focusedDate = _this$state.focusedDate,
        monthTitleHeight = _this$state.monthTitleHeight;

    if (this.isHorizontal() && (orientation !== prevProps.orientation || daySize !== prevProps.daySize)) {
      var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
      var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);
      var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;
      this.adjustDayPickerHeight(newMonthHeight);
    }

    if (!prevProps.isFocused && isFocused && !focusedDate) {
      this.container.focus();
    } // If orientation is VERTICAL_SCROLLABLE and currentMonth has changed adjust scrollTop so the
    // new months rendered above the current month don't push the current month out of view.


    if (orientation === _constants.VERTICAL_SCROLLABLE && !(0, _isSameMonth["default"])(prevState.currentMonth, currentMonth) && currentMonthScrollTop && this.transitionContainer) {
      this.transitionContainer.scrollTop = this.transitionContainer.scrollHeight - currentMonthScrollTop;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.setCalendarInfoWidthTimeout);
    clearTimeout(this.setCalendarMonthGridHeightTimeout);
  };

  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();

    if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
      this.throttledKeyDown(e);
    }
  };

  _proto.onFinalKeyDown = function onFinalKeyDown(e) {
    this.setState({
      withMouseInteractions: false
    });
    var _this$props3 = this.props,
        onBlur = _this$props3.onBlur,
        onTab = _this$props3.onTab,
        onShiftTab = _this$props3.onShiftTab,
        isRTL = _this$props3.isRTL;
    var _this$state2 = this.state,
        focusedDate = _this$state2.focusedDate,
        showKeyboardShortcuts = _this$state2.showKeyboardShortcuts;
    if (!focusedDate) return;
    var newFocusedDate = focusedDate.clone();
    var didTransitionMonth = false; // focus might be anywhere when the keyboard shortcuts panel is opened so we want to
    // return it to wherever it was before when the panel was opened

    var activeElement = (0, _getActiveElement["default"])();

    var onKeyboardShortcutsPanelClose = function onKeyboardShortcutsPanelClose() {
      if (activeElement) activeElement.focus();
    };

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        newFocusedDate.subtract(1, 'week');
        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'ArrowLeft':
        e.preventDefault();

        if (isRTL) {
          newFocusedDate.add(1, 'day');
        } else {
          newFocusedDate.subtract(1, 'day');
        }

        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'Home':
        e.preventDefault();
        newFocusedDate.startOf('week');
        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'PageUp':
        e.preventDefault();
        newFocusedDate.subtract(1, 'month');
        didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
        break;

      case 'ArrowDown':
        e.preventDefault();
        newFocusedDate.add(1, 'week');
        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case 'ArrowRight':
        e.preventDefault();

        if (isRTL) {
          newFocusedDate.subtract(1, 'day');
        } else {
          newFocusedDate.add(1, 'day');
        }

        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case 'End':
        e.preventDefault();
        newFocusedDate.endOf('week');
        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case 'PageDown':
        e.preventDefault();
        newFocusedDate.add(1, 'month');
        didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
        break;

      case '?':
        this.openKeyboardShortcutsPanel(onKeyboardShortcutsPanelClose);
        break;

      case 'Escape':
        if (showKeyboardShortcuts) {
          this.closeKeyboardShortcutsPanel();
        } else {
          onBlur(e);
        }

        break;

      case 'Tab':
        if (e.shiftKey) {
          onShiftTab();
        } else {
          onTab(e);
        }

        break;

      default:
        break;
    } // If there was a month transition, do not update the focused date until the transition has
    // completed. Otherwise, attempting to focus on a DOM node may interrupt the CSS animation. If
    // didTransitionMonth is true, the focusedDate gets updated in #updateStateAfterMonthTransition


    if (!didTransitionMonth) {
      this.setState({
        focusedDate: newFocusedDate
      });
    }
  };

  _proto.onPrevMonthClick = function onPrevMonthClick(e) {
    if (e) e.preventDefault();
    this.onPrevMonthTransition();
  };

  _proto.onPrevMonthTransition = function onPrevMonthTransition(nextFocusedDate) {
    var _this$props4 = this.props,
        daySize = _this$props4.daySize,
        isRTL = _this$props4.isRTL,
        numberOfMonths = _this$props4.numberOfMonths;
    var _this$state3 = this.state,
        calendarMonthWidth = _this$state3.calendarMonthWidth,
        monthTitleHeight = _this$state3.monthTitleHeight;
    var translationValue;

    if (this.isVertical()) {
      var calendarMonthWeeksHeight = this.calendarMonthWeeks[0] * (daySize - 1);
      translationValue = monthTitleHeight + calendarMonthWeeksHeight + 1;
    } else if (this.isHorizontal()) {
      translationValue = calendarMonthWidth;

      if (isRTL) {
        translationValue = -2 * calendarMonthWidth;
      }

      var visibleCalendarWeeks = this.calendarMonthWeeks.slice(0, numberOfMonths);

      var _calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);

      var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight + 1;
      this.adjustDayPickerHeight(newMonthHeight);
    }

    this.setState({
      monthTransition: PREV_TRANSITION,
      translationValue: translationValue,
      focusedDate: null,
      nextFocusedDate: nextFocusedDate
    });
  };

  _proto.onMonthChange = function onMonthChange(currentMonth) {
    this.setCalendarMonthWeeks(currentMonth);
    this.calculateAndSetDayPickerHeight(); // Translation value is a hack to force an invisible transition that
    // properly rerenders the CalendarMonthGrid

    this.setState({
      monthTransition: MONTH_SELECTION_TRANSITION,
      translationValue: 0.00001,
      focusedDate: null,
      nextFocusedDate: currentMonth,
      currentMonth: currentMonth
    });
  };

  _proto.onYearChange = function onYearChange(currentMonth) {
    this.setCalendarMonthWeeks(currentMonth);
    this.calculateAndSetDayPickerHeight(); // Translation value is a hack to force an invisible transition that
    // properly rerenders the CalendarMonthGrid

    this.setState({
      monthTransition: YEAR_SELECTION_TRANSITION,
      translationValue: 0.0001,
      focusedDate: null,
      nextFocusedDate: currentMonth,
      currentMonth: currentMonth
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick(e) {
    if (e) e.preventDefault();
    this.onNextMonthTransition();
  };

  _proto.onNextMonthTransition = function onNextMonthTransition(nextFocusedDate) {
    var _this$props5 = this.props,
        isRTL = _this$props5.isRTL,
        numberOfMonths = _this$props5.numberOfMonths,
        daySize = _this$props5.daySize;
    var _this$state4 = this.state,
        calendarMonthWidth = _this$state4.calendarMonthWidth,
        monthTitleHeight = _this$state4.monthTitleHeight;
    var translationValue;

    if (this.isVertical()) {
      var firstVisibleMonthWeeks = this.calendarMonthWeeks[1];
      var calendarMonthWeeksHeight = firstVisibleMonthWeeks * (daySize - 1);
      translationValue = -(monthTitleHeight + calendarMonthWeeksHeight + 1);
    }

    if (this.isHorizontal()) {
      translationValue = -calendarMonthWidth;

      if (isRTL) {
        translationValue = 0;
      }

      var visibleCalendarWeeks = this.calendarMonthWeeks.slice(2, numberOfMonths + 2);

      var _calendarMonthWeeksHeight2 = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);

      var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight2 + 1;
      this.adjustDayPickerHeight(newMonthHeight);
    }

    this.setState({
      monthTransition: NEXT_TRANSITION,
      translationValue: translationValue,
      focusedDate: null,
      nextFocusedDate: nextFocusedDate
    });
  };

  _proto.getFirstDayOfWeek = function getFirstDayOfWeek() {
    var firstDayOfWeek = this.props.firstDayOfWeek;

    if (firstDayOfWeek == null) {
      return _moment["default"].localeData().firstDayOfWeek();
    }

    return firstDayOfWeek;
  };

  _proto.getWeekHeaders = function getWeekHeaders() {
    var weekDayFormat = this.props.weekDayFormat;
    var currentMonth = this.state.currentMonth;
    var firstDayOfWeek = this.getFirstDayOfWeek();
    var weekHeaders = [];

    for (var i = 0; i < 7; i += 1) {
      weekHeaders.push(currentMonth.clone().day((i + firstDayOfWeek) % 7).format(weekDayFormat));
    }

    return weekHeaders;
  };

  _proto.getFirstVisibleIndex = function getFirstVisibleIndex() {
    var orientation = this.props.orientation;
    var monthTransition = this.state.monthTransition;
    if (orientation === _constants.VERTICAL_SCROLLABLE) return 0;
    var firstVisibleMonthIndex = 1;

    if (monthTransition === PREV_TRANSITION) {
      firstVisibleMonthIndex -= 1;
    } else if (monthTransition === NEXT_TRANSITION) {
      firstVisibleMonthIndex += 1;
    }

    return firstVisibleMonthIndex;
  };

  _proto.getFocusedDay = function getFocusedDay(newMonth) {
    var _this$props6 = this.props,
        getFirstFocusableDay = _this$props6.getFirstFocusableDay,
        numberOfMonths = _this$props6.numberOfMonths;
    var focusedDate;

    if (getFirstFocusableDay) {
      focusedDate = getFirstFocusableDay(newMonth);
    }

    if (newMonth && (!focusedDate || !(0, _isDayVisible["default"])(focusedDate, newMonth, numberOfMonths))) {
      focusedDate = newMonth.clone().startOf('month');
    }

    return focusedDate;
  };

  _proto.setMonthTitleHeight = function setMonthTitleHeight(monthTitleHeight) {
    var _this3 = this;

    this.setState({
      monthTitleHeight: monthTitleHeight
    }, function () {
      _this3.calculateAndSetDayPickerHeight();
    });
  };

  _proto.setCalendarMonthWeeks = function setCalendarMonthWeeks(currentMonth) {
    var numberOfMonths = this.props.numberOfMonths;
    this.calendarMonthWeeks = [];
    var month = currentMonth.clone().subtract(1, 'months');
    var firstDayOfWeek = this.getFirstDayOfWeek();

    for (var i = 0; i < numberOfMonths + 2; i += 1) {
      var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(month, firstDayOfWeek);
      this.calendarMonthWeeks.push(numberOfWeeks);
      month = month.add(1, 'months');
    }
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.setCalendarInfoRef = function setCalendarInfoRef(ref) {
    this.calendarInfo = ref;
  };

  _proto.setTransitionContainerRef = function setTransitionContainerRef(ref) {
    this.transitionContainer = ref;
  };

  _proto.getNextScrollableMonths = function getNextScrollableMonths(e) {
    var onGetNextScrollableMonths = this.props.onGetNextScrollableMonths;
    if (e) e.preventDefault();
    if (onGetNextScrollableMonths) onGetNextScrollableMonths(e);
    this.setState(function (_ref2) {
      var scrollableMonthMultiple = _ref2.scrollableMonthMultiple;
      return {
        scrollableMonthMultiple: scrollableMonthMultiple + 1
      };
    });
  };

  _proto.getPrevScrollableMonths = function getPrevScrollableMonths(e) {
    var _this$props7 = this.props,
        numberOfMonths = _this$props7.numberOfMonths,
        onGetPrevScrollableMonths = _this$props7.onGetPrevScrollableMonths;
    if (e) e.preventDefault();
    if (onGetPrevScrollableMonths) onGetPrevScrollableMonths(e);
    this.setState(function (_ref3) {
      var currentMonth = _ref3.currentMonth,
          scrollableMonthMultiple = _ref3.scrollableMonthMultiple;
      return {
        currentMonth: currentMonth.clone().subtract(numberOfMonths, 'month'),
        scrollableMonthMultiple: scrollableMonthMultiple + 1
      };
    });
  };

  _proto.maybeTransitionNextMonth = function maybeTransitionNextMonth(newFocusedDate) {
    var numberOfMonths = this.props.numberOfMonths;
    var _this$state5 = this.state,
        currentMonth = _this$state5.currentMonth,
        focusedDate = _this$state5.focusedDate;
    var newFocusedDateMonth = newFocusedDate.month();
    var focusedDateMonth = focusedDate.month();
    var isNewFocusedDateVisible = (0, _isDayVisible["default"])(newFocusedDate, currentMonth, numberOfMonths);

    if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
      this.onNextMonthTransition(newFocusedDate);
      return true;
    }

    return false;
  };

  _proto.maybeTransitionPrevMonth = function maybeTransitionPrevMonth(newFocusedDate) {
    var numberOfMonths = this.props.numberOfMonths;
    var _this$state6 = this.state,
        currentMonth = _this$state6.currentMonth,
        focusedDate = _this$state6.focusedDate;
    var newFocusedDateMonth = newFocusedDate.month();
    var focusedDateMonth = focusedDate.month();
    var isNewFocusedDateVisible = (0, _isDayVisible["default"])(newFocusedDate, currentMonth, numberOfMonths);

    if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
      this.onPrevMonthTransition(newFocusedDate);
      return true;
    }

    return false;
  };

  _proto.isHorizontal = function isHorizontal() {
    var orientation = this.props.orientation;
    return orientation === _constants.HORIZONTAL_ORIENTATION;
  };

  _proto.isVertical = function isVertical() {
    var orientation = this.props.orientation;
    return orientation === _constants.VERTICAL_ORIENTATION || orientation === _constants.VERTICAL_SCROLLABLE;
  };

  _proto.updateStateAfterMonthTransition = function updateStateAfterMonthTransition() {
    var _this4 = this;

    var _this$props8 = this.props,
        onPrevMonthClick = _this$props8.onPrevMonthClick,
        onNextMonthClick = _this$props8.onNextMonthClick,
        numberOfMonths = _this$props8.numberOfMonths,
        onMonthChange = _this$props8.onMonthChange,
        onYearChange = _this$props8.onYearChange,
        isRTL = _this$props8.isRTL;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        monthTransition = _this$state7.monthTransition,
        focusedDate = _this$state7.focusedDate,
        nextFocusedDate = _this$state7.nextFocusedDate,
        withMouseInteractions = _this$state7.withMouseInteractions,
        calendarMonthWidth = _this$state7.calendarMonthWidth;
    if (!monthTransition) return;
    var newMonth = currentMonth.clone();
    var firstDayOfWeek = this.getFirstDayOfWeek();

    if (monthTransition === PREV_TRANSITION) {
      newMonth.subtract(1, 'month');
      if (onPrevMonthClick) onPrevMonthClick(newMonth);
      var newInvisibleMonth = newMonth.clone().subtract(1, 'month');
      var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(newInvisibleMonth, firstDayOfWeek);
      this.calendarMonthWeeks = [numberOfWeeks].concat((0, _toConsumableArray2["default"])(this.calendarMonthWeeks.slice(0, -1)));
    } else if (monthTransition === NEXT_TRANSITION) {
      newMonth.add(1, 'month');
      if (onNextMonthClick) onNextMonthClick(newMonth);

      var _newInvisibleMonth = newMonth.clone().add(numberOfMonths, 'month');

      var _numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(_newInvisibleMonth, firstDayOfWeek);

      this.calendarMonthWeeks = [].concat((0, _toConsumableArray2["default"])(this.calendarMonthWeeks.slice(1)), [_numberOfWeeks]);
    } else if (monthTransition === MONTH_SELECTION_TRANSITION) {
      if (onMonthChange) onMonthChange(newMonth);
    } else if (monthTransition === YEAR_SELECTION_TRANSITION) {
      if (onYearChange) onYearChange(newMonth);
    }

    var newFocusedDate = null;

    if (nextFocusedDate) {
      newFocusedDate = nextFocusedDate;
    } else if (!focusedDate && !withMouseInteractions) {
      newFocusedDate = this.getFocusedDay(newMonth);
    }

    this.setState({
      currentMonth: newMonth,
      monthTransition: null,
      translationValue: isRTL && this.isHorizontal() ? -calendarMonthWidth : 0,
      nextFocusedDate: null,
      focusedDate: newFocusedDate
    }, function () {
      // we don't want to focus on the relevant calendar day after a month transition
      // if the user is navigating around using a mouse
      if (withMouseInteractions) {
        var activeElement = (0, _getActiveElement["default"])();

        if (activeElement && activeElement !== document.body && _this4.container.contains(activeElement) && activeElement.blur) {
          activeElement.blur();
        }
      }
    });
  };

  _proto.adjustDayPickerHeight = function adjustDayPickerHeight(newMonthHeight) {
    var _this5 = this;

    var monthHeight = newMonthHeight + MONTH_PADDING;

    if (monthHeight !== this.calendarMonthGridHeight) {
      this.transitionContainer.style.height = "".concat(monthHeight, "px");

      if (!this.calendarMonthGridHeight) {
        this.setCalendarMonthGridHeightTimeout = setTimeout(function () {
          _this5.setState({
            hasSetHeight: true
          });
        }, 0);
      }

      this.calendarMonthGridHeight = monthHeight;
    }
  };

  _proto.calculateAndSetDayPickerHeight = function calculateAndSetDayPickerHeight() {
    var _this$props9 = this.props,
        daySize = _this$props9.daySize,
        numberOfMonths = _this$props9.numberOfMonths;
    var monthTitleHeight = this.state.monthTitleHeight;
    var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
    var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat((0, _toConsumableArray2["default"])(visibleCalendarWeeks))) * (daySize - 1);
    var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;

    if (this.isHorizontal()) {
      this.adjustDayPickerHeight(newMonthHeight);
    }
  };

  _proto.openKeyboardShortcutsPanel = function openKeyboardShortcutsPanel(onCloseCallBack) {
    this.setState({
      showKeyboardShortcuts: true,
      onKeyboardShortcutsPanelClose: onCloseCallBack
    });
  };

  _proto.closeKeyboardShortcutsPanel = function closeKeyboardShortcutsPanel() {
    var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

    if (onKeyboardShortcutsPanelClose) {
      onKeyboardShortcutsPanelClose();
    }

    this.setState({
      onKeyboardShortcutsPanelClose: null,
      showKeyboardShortcuts: false
    });
  };

  _proto.renderNavigation = function renderNavigation(navDirection) {
    var _this$props10 = this.props,
        dayPickerNavigationInlineStyles = _this$props10.dayPickerNavigationInlineStyles,
        disablePrev = _this$props10.disablePrev,
        disableNext = _this$props10.disableNext,
        navPosition = _this$props10.navPosition,
        navPrev = _this$props10.navPrev,
        navNext = _this$props10.navNext,
        noNavButtons = _this$props10.noNavButtons,
        noNavNextButton = _this$props10.noNavNextButton,
        noNavPrevButton = _this$props10.noNavPrevButton,
        orientation = _this$props10.orientation,
        phrases = _this$props10.phrases,
        renderNavPrevButton = _this$props10.renderNavPrevButton,
        renderNavNextButton = _this$props10.renderNavNextButton,
        isRTL = _this$props10.isRTL;

    if (noNavButtons) {
      return null;
    }

    var onPrevMonthClick = orientation === _constants.VERTICAL_SCROLLABLE ? this.getPrevScrollableMonths : this.onPrevMonthClick;
    var onNextMonthClick = orientation === _constants.VERTICAL_SCROLLABLE ? this.getNextScrollableMonths : this.onNextMonthClick;
    return _react["default"].createElement(_DayPickerNavigation["default"], {
      disablePrev: disablePrev,
      disableNext: disableNext,
      inlineStyles: dayPickerNavigationInlineStyles,
      onPrevMonthClick: onPrevMonthClick,
      onNextMonthClick: onNextMonthClick,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      orientation: orientation,
      phrases: phrases,
      isRTL: isRTL,
      showNavNextButton: !(noNavNextButton || orientation === _constants.VERTICAL_SCROLLABLE && navDirection === PREV_NAV),
      showNavPrevButton: !(noNavPrevButton || orientation === _constants.VERTICAL_SCROLLABLE && navDirection === NEXT_NAV)
    });
  };

  _proto.renderWeekHeader = function renderWeekHeader(index) {
    var _this$props11 = this.props,
        daySize = _this$props11.daySize,
        horizontalMonthPadding = _this$props11.horizontalMonthPadding,
        orientation = _this$props11.orientation,
        renderWeekHeaderElement = _this$props11.renderWeekHeaderElement,
        styles = _this$props11.styles;
    var calendarMonthWidth = this.state.calendarMonthWidth;
    var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var horizontalStyle = {
      left: index * calendarMonthWidth
    };
    var verticalStyle = {
      marginLeft: -calendarMonthWidth / 2
    };
    var weekHeaderStyle = {}; // no styles applied to the vertical-scrollable orientation

    if (this.isHorizontal()) {
      weekHeaderStyle = horizontalStyle;
    } else if (this.isVertical() && !verticalScrollable) {
      weekHeaderStyle = verticalStyle;
    }

    var weekHeaders = this.getWeekHeaders();
    var header = weekHeaders.map(function (day) {
      return _react["default"].createElement("li", (0, _extends2["default"])({
        key: day
      }, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_li, {
        width: daySize
      })), renderWeekHeaderElement ? renderWeekHeaderElement(day) : _react["default"].createElement("small", null, day));
    });
    return _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader, this.isVertical() && styles.DayPicker_weekHeader__vertical, verticalScrollable && styles.DayPicker_weekHeader__verticalScrollable, weekHeaderStyle, {
      padding: "0 ".concat(horizontalMonthPadding, "px")
    }), {
      key: "week-".concat(index)
    }), _react["default"].createElement("ul", (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_ul), header));
  };

  _proto.render = function render() {
    var _this6 = this;

    var _this$state8 = this.state,
        calendarMonthWidth = _this$state8.calendarMonthWidth,
        currentMonth = _this$state8.currentMonth,
        monthTransition = _this$state8.monthTransition,
        translationValue = _this$state8.translationValue,
        scrollableMonthMultiple = _this$state8.scrollableMonthMultiple,
        focusedDate = _this$state8.focusedDate,
        showKeyboardShortcuts = _this$state8.showKeyboardShortcuts,
        isTouch = _this$state8.isTouchDevice,
        hasSetHeight = _this$state8.hasSetHeight,
        calendarInfoWidth = _this$state8.calendarInfoWidth,
        monthTitleHeight = _this$state8.monthTitleHeight;
    var _this$props12 = this.props,
        enableOutsideDays = _this$props12.enableOutsideDays,
        numberOfMonths = _this$props12.numberOfMonths,
        orientation = _this$props12.orientation,
        modifiers = _this$props12.modifiers,
        withPortal = _this$props12.withPortal,
        onDayClick = _this$props12.onDayClick,
        onDayMouseEnter = _this$props12.onDayMouseEnter,
        onDayMouseLeave = _this$props12.onDayMouseLeave,
        firstDayOfWeek = _this$props12.firstDayOfWeek,
        renderMonthText = _this$props12.renderMonthText,
        renderCalendarDay = _this$props12.renderCalendarDay,
        renderDayContents = _this$props12.renderDayContents,
        renderCalendarInfo = _this$props12.renderCalendarInfo,
        renderMonthElement = _this$props12.renderMonthElement,
        renderKeyboardShortcutsButton = _this$props12.renderKeyboardShortcutsButton,
        renderKeyboardShortcutsPanel = _this$props12.renderKeyboardShortcutsPanel,
        calendarInfoPosition = _this$props12.calendarInfoPosition,
        hideKeyboardShortcutsPanel = _this$props12.hideKeyboardShortcutsPanel,
        onOutsideClick = _this$props12.onOutsideClick,
        monthFormat = _this$props12.monthFormat,
        daySize = _this$props12.daySize,
        isFocused = _this$props12.isFocused,
        isRTL = _this$props12.isRTL,
        styles = _this$props12.styles,
        theme = _this$props12.theme,
        phrases = _this$props12.phrases,
        verticalHeight = _this$props12.verticalHeight,
        dayAriaLabelFormat = _this$props12.dayAriaLabelFormat,
        noBorder = _this$props12.noBorder,
        transitionDuration = _this$props12.transitionDuration,
        verticalBorderSpacing = _this$props12.verticalBorderSpacing,
        horizontalMonthPadding = _this$props12.horizontalMonthPadding,
        navPosition = _this$props12.navPosition;
    var dayPickerHorizontalPadding = theme.reactDates.spacing.dayPickerHorizontalPadding;
    var isHorizontal = this.isHorizontal();
    var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
    var weekHeaders = [];

    for (var i = 0; i < numOfWeekHeaders; i += 1) {
      weekHeaders.push(this.renderWeekHeader(i));
    }

    var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var height;

    if (isHorizontal) {
      height = this.calendarMonthGridHeight;
    } else if (this.isVertical() && !verticalScrollable && !withPortal) {
      // If the user doesn't set a desired height,
      // we default back to this kind of made-up value that generally looks good
      height = verticalHeight || 1.75 * calendarMonthWidth;
    }

    var isCalendarMonthGridAnimating = monthTransition !== null;
    var shouldFocusDate = !isCalendarMonthGridAnimating && isFocused;
    var keyboardShortcutButtonLocation = _DayPickerKeyboardShortcuts.BOTTOM_RIGHT;

    if (this.isVertical()) {
      keyboardShortcutButtonLocation = withPortal ? _DayPickerKeyboardShortcuts.TOP_LEFT : _DayPickerKeyboardShortcuts.TOP_RIGHT;
    }

    var shouldAnimateHeight = isHorizontal && hasSetHeight;
    var calendarInfoPositionTop = calendarInfoPosition === _constants.INFO_POSITION_TOP;
    var calendarInfoPositionBottom = calendarInfoPosition === _constants.INFO_POSITION_BOTTOM;
    var calendarInfoPositionBefore = calendarInfoPosition === _constants.INFO_POSITION_BEFORE;
    var calendarInfoPositionAfter = calendarInfoPosition === _constants.INFO_POSITION_AFTER;
    var calendarInfoIsInline = calendarInfoPositionBefore || calendarInfoPositionAfter;

    var calendarInfo = renderCalendarInfo && _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setCalendarInfoRef
    }, (0, _reactWithStyles.css)(calendarInfoIsInline && styles.DayPicker_calendarInfo__horizontal)), renderCalendarInfo());

    var calendarInfoPanelWidth = renderCalendarInfo && calendarInfoIsInline ? calendarInfoWidth : 0;
    var firstVisibleMonthIndex = this.getFirstVisibleIndex();
    var wrapperHorizontalWidth = calendarMonthWidth * numberOfMonths + 2 * dayPickerHorizontalPadding; // Adding `1px` because of whitespace between 2 inline-block

    var fullHorizontalWidth = wrapperHorizontalWidth + calendarInfoPanelWidth + 1;
    var transitionContainerStyle = {
      width: isHorizontal && wrapperHorizontalWidth,
      height: height
    };
    var dayPickerWrapperStyle = {
      width: isHorizontal && wrapperHorizontalWidth
    };
    var dayPickerStyle = {
      width: isHorizontal && fullHorizontalWidth,
      // These values are to center the datepicker (approximately) on the page
      marginLeft: isHorizontal && withPortal ? -fullHorizontalWidth / 2 : null,
      marginTop: isHorizontal && withPortal ? -calendarMonthWidth / 2 : null
    };
    return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DayPicker, isHorizontal && styles.DayPicker__horizontal, verticalScrollable && styles.DayPicker__verticalScrollable, isHorizontal && withPortal && styles.DayPicker_portal__horizontal, this.isVertical() && withPortal && styles.DayPicker_portal__vertical, dayPickerStyle, !monthTitleHeight && styles.DayPicker__hidden, !noBorder && styles.DayPicker__withBorder), _react["default"].createElement(_reactOutsideClickHandler["default"], {
      onOutsideClick: onOutsideClick
    }, (calendarInfoPositionTop || calendarInfoPositionBefore) && calendarInfo, _react["default"].createElement("div", (0, _reactWithStyles.css)(dayPickerWrapperStyle, calendarInfoIsInline && isHorizontal && styles.DayPicker_wrapper__horizontal), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeaders, isHorizontal && styles.DayPicker_weekHeaders__horizontal), {
      "aria-hidden": "true",
      role: "presentation"
    }), weekHeaders), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_focusRegion), {
      ref: this.setContainerRef,
      onClick: function onClick(e) {
        e.stopPropagation();
      },
      onKeyDown: this.onKeyDown,
      onMouseUp: function onMouseUp() {
        _this6.setState({
          withMouseInteractions: true
        });
      },
      tabIndex: -1,
      role: "application",
      "aria-roledescription": phrases.roleDescription,
      "aria-label": phrases.calendarLabel
    }), !verticalScrollable && navPosition === _constants.NAV_POSITION_TOP && this.renderNavigation(), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPicker_transitionContainer, shouldAnimateHeight && styles.DayPicker_transitionContainer__horizontal, this.isVertical() && styles.DayPicker_transitionContainer__vertical, verticalScrollable && styles.DayPicker_transitionContainer__verticalScrollable, transitionContainerStyle), {
      ref: this.setTransitionContainerRef
    }), verticalScrollable && this.renderNavigation(PREV_NAV), _react["default"].createElement(_CalendarMonthGrid["default"], {
      setMonthTitleHeight: !monthTitleHeight ? this.setMonthTitleHeight : undefined,
      translationValue: translationValue,
      enableOutsideDays: enableOutsideDays,
      firstVisibleMonthIndex: firstVisibleMonthIndex,
      initialMonth: currentMonth,
      isAnimating: isCalendarMonthGridAnimating,
      modifiers: modifiers,
      orientation: orientation,
      numberOfMonths: numberOfMonths * scrollableMonthMultiple,
      onDayClick: onDayClick,
      onDayMouseEnter: onDayMouseEnter,
      onDayMouseLeave: onDayMouseLeave,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
      renderMonthText: renderMonthText,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderMonthElement: renderMonthElement,
      onMonthTransitionEnd: this.updateStateAfterMonthTransition,
      monthFormat: monthFormat,
      daySize: daySize,
      firstDayOfWeek: firstDayOfWeek,
      isFocused: shouldFocusDate,
      focusedDate: focusedDate,
      phrases: phrases,
      isRTL: isRTL,
      dayAriaLabelFormat: dayAriaLabelFormat,
      transitionDuration: transitionDuration,
      verticalBorderSpacing: verticalBorderSpacing,
      horizontalMonthPadding: horizontalMonthPadding
    }), verticalScrollable && this.renderNavigation(NEXT_NAV)), !verticalScrollable && navPosition === _constants.NAV_POSITION_BOTTOM && this.renderNavigation(), !isTouch && !hideKeyboardShortcutsPanel && _react["default"].createElement(_DayPickerKeyboardShortcuts["default"], {
      block: this.isVertical() && !withPortal,
      buttonLocation: keyboardShortcutButtonLocation,
      showKeyboardShortcutsPanel: showKeyboardShortcuts,
      openKeyboardShortcutsPanel: this.openKeyboardShortcutsPanel,
      closeKeyboardShortcutsPanel: this.closeKeyboardShortcutsPanel,
      phrases: phrases,
      renderKeyboardShortcutsButton: renderKeyboardShortcutsButton,
      renderKeyboardShortcutsPanel: renderKeyboardShortcutsPanel
    }))), (calendarInfoPositionBottom || calendarInfoPositionAfter) && calendarInfo));
  };

  return DayPicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDayPicker = DayPicker;
DayPicker.propTypes =  false ? 0 : {};
DayPicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref4) {
  var _ref4$reactDates = _ref4.reactDates,
      color = _ref4$reactDates.color,
      font = _ref4$reactDates.font,
      noScrollBarOnVerticalScrollable = _ref4$reactDates.noScrollBarOnVerticalScrollable,
      spacing = _ref4$reactDates.spacing,
      zIndex = _ref4$reactDates.zIndex;
  return {
    DayPicker: {
      background: color.background,
      position: 'relative',
      textAlign: (0, _noflip["default"])('left')
    },
    DayPicker__horizontal: {
      background: color.background
    },
    DayPicker__verticalScrollable: {
      height: '100%'
    },
    DayPicker__hidden: {
      visibility: 'hidden'
    },
    DayPicker__withBorder: {
      boxShadow: (0, _noflip["default"])('0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)'),
      borderRadius: 3
    },
    DayPicker_portal__horizontal: {
      boxShadow: 'none',
      position: 'absolute',
      left: (0, _noflip["default"])('50%'),
      top: '50%'
    },
    DayPicker_portal__vertical: {
      position: 'initial'
    },
    DayPicker_focusRegion: {
      outline: 'none'
    },
    DayPicker_calendarInfo__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    DayPicker_wrapper__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    DayPicker_weekHeaders: {
      position: 'relative'
    },
    DayPicker_weekHeaders__horizontal: {
      marginLeft: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    DayPicker_weekHeader: {
      color: color.placeholderText,
      position: 'absolute',
      top: 62,
      zIndex: zIndex + 2,
      textAlign: (0, _noflip["default"])('left')
    },
    DayPicker_weekHeader__vertical: {
      left: (0, _noflip["default"])('50%')
    },
    DayPicker_weekHeader__verticalScrollable: {
      top: 0,
      display: 'table-row',
      borderBottom: "1px solid ".concat(color.core.border),
      background: color.background,
      marginLeft: (0, _noflip["default"])(0),
      left: (0, _noflip["default"])(0),
      width: '100%',
      textAlign: 'center'
    },
    DayPicker_weekHeader_ul: {
      listStyle: 'none',
      margin: '1px 0',
      paddingLeft: (0, _noflip["default"])(0),
      paddingRight: (0, _noflip["default"])(0),
      fontSize: font.size
    },
    DayPicker_weekHeader_li: {
      display: 'inline-block',
      textAlign: 'center'
    },
    DayPicker_transitionContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 3
    },
    DayPicker_transitionContainer__horizontal: {
      transition: 'height 0.2s ease-in-out'
    },
    DayPicker_transitionContainer__vertical: {
      width: '100%'
    },
    DayPicker_transitionContainer__verticalScrollable: _objectSpread({
      paddingTop: 20,
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: (0, _noflip["default"])(0),
      left: (0, _noflip["default"])(0),
      overflowY: 'scroll'
    }, noScrollBarOnVerticalScrollable && {
      '-webkitOverflowScrolling': 'touch',
      '::-webkit-scrollbar': {
        '-webkit-appearance': 'none',
        display: 'none'
      }
    })
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPicker);

exports.default = _default;

/***/ }),

/***/ 16708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.BOTTOM_RIGHT = exports.TOP_RIGHT = exports.TOP_LEFT = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _KeyboardShortcutRow = _interopRequireDefault(__webpack_require__(25804));

var _CloseButton = _interopRequireDefault(__webpack_require__(27798));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TOP_LEFT = 'top-left';
exports.TOP_LEFT = TOP_LEFT;
var TOP_RIGHT = 'top-right';
exports.TOP_RIGHT = TOP_RIGHT;
var BOTTOM_RIGHT = 'bottom-right';
exports.BOTTOM_RIGHT = BOTTOM_RIGHT;
var propTypes =  false ? 0 : {};
var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function openKeyboardShortcutsPanel() {},
  closeKeyboardShortcutsPanel: function closeKeyboardShortcutsPanel() {},
  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined
};

function getKeyboardShortcuts(phrases) {
  return [{
    unicode: '↵',
    label: phrases.enterKey,
    action: phrases.selectFocusedDate
  }, {
    unicode: '←/→',
    label: phrases.leftArrowRightArrow,
    action: phrases.moveFocusByOneDay
  }, {
    unicode: '↑/↓',
    label: phrases.upArrowDownArrow,
    action: phrases.moveFocusByOneWeek
  }, {
    unicode: 'PgUp/PgDn',
    label: phrases.pageUpPageDown,
    action: phrases.moveFocusByOneMonth
  }, {
    unicode: 'Home/End',
    label: phrases.homeEnd,
    action: phrases.moveFocustoStartAndEndOfWeek
  }, {
    unicode: 'Esc',
    label: phrases.escape,
    action: phrases.returnFocusToInput
  }, {
    unicode: '?',
    label: phrases.questionMark,
    action: phrases.openThisPanel
  }];
}

var DayPickerKeyboardShortcuts =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerKeyboardShortcuts, _ref);
  var _proto = DayPickerKeyboardShortcuts.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPickerKeyboardShortcuts() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ref.call.apply(_ref, [this].concat(args)) || this;
    var phrases = _this.props.phrases;
    _this.keyboardShortcuts = getKeyboardShortcuts(phrases);
    _this.onShowKeyboardShortcutsButtonClick = _this.onShowKeyboardShortcutsButtonClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setHideKeyboardShortcutsButtonRef = _this.setHideKeyboardShortcutsButtonRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var phrases = this.props.phrases;

    if (nextProps.phrases !== phrases) {
      this.keyboardShortcuts = getKeyboardShortcuts(nextProps.phrases);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.handleFocus();
  };

  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();
    var closeKeyboardShortcutsPanel = this.props.closeKeyboardShortcutsPanel; // Because the close button is the only focusable element inside of the panel, this
    // amounts to a very basic focus trap. The user can exit the panel by "pressing" the
    // close button or hitting escape

    switch (e.key) {
      case 'Escape':
        closeKeyboardShortcutsPanel();
        break;
      // do nothing - this allows the up and down arrows continue their
      // default behavior of scrolling the content of the Keyboard Shortcuts Panel
      // which is needed when only a single month is shown for instance.

      case 'ArrowUp':
      case 'ArrowDown':
        break;
      // completely block the rest of the keys that have functionality outside of this panel

      case 'Tab':
      case 'Home':
      case 'End':
      case 'PageUp':
      case 'PageDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  _proto.onShowKeyboardShortcutsButtonClick = function onShowKeyboardShortcutsButtonClick() {
    var _this2 = this;

    var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel; // we want to return focus to this button after closing the keyboard shortcuts panel

    openKeyboardShortcutsPanel(function () {
      _this2.showKeyboardShortcutsButton.focus();
    });
  };

  _proto.setShowKeyboardShortcutsButtonRef = function setShowKeyboardShortcutsButtonRef(ref) {
    this.showKeyboardShortcutsButton = ref;
  };

  _proto.setHideKeyboardShortcutsButtonRef = function setHideKeyboardShortcutsButtonRef(ref) {
    this.hideKeyboardShortcutsButton = ref;
  };

  _proto.handleFocus = function handleFocus() {
    if (this.hideKeyboardShortcutsButton) {
      // automatically move focus into the dialog by moving
      // to the only interactive element, the hide button
      this.hideKeyboardShortcutsButton.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        block = _this$props.block,
        buttonLocation = _this$props.buttonLocation,
        showKeyboardShortcutsPanel = _this$props.showKeyboardShortcutsPanel,
        closeKeyboardShortcutsPanel = _this$props.closeKeyboardShortcutsPanel,
        styles = _this$props.styles,
        phrases = _this$props.phrases,
        renderKeyboardShortcutsButton = _this$props.renderKeyboardShortcutsButton,
        renderKeyboardShortcutsPanel = _this$props.renderKeyboardShortcutsPanel;
    var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;
    var bottomRight = buttonLocation === BOTTOM_RIGHT;
    var topRight = buttonLocation === TOP_RIGHT;
    var topLeft = buttonLocation === TOP_LEFT;
    return _react["default"].createElement("div", null, renderKeyboardShortcutsButton && renderKeyboardShortcutsButton({
      // passing in context-specific props
      ref: this.setShowKeyboardShortcutsButtonRef,
      onClick: this.onShowKeyboardShortcutsButtonClick,
      ariaLabel: toggleButtonText
    }), !renderKeyboardShortcutsButton && _react["default"].createElement("button", (0, _extends2["default"])({
      ref: this.setShowKeyboardShortcutsButtonRef
    }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_show, bottomRight && styles.DayPickerKeyboardShortcuts_show__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_show__topRight, topLeft && styles.DayPickerKeyboardShortcuts_show__topLeft), {
      type: "button",
      "aria-label": toggleButtonText,
      onClick: this.onShowKeyboardShortcutsButtonClick,
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      }
    }), _react["default"].createElement("span", (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_showSpan, bottomRight && styles.DayPickerKeyboardShortcuts_showSpan__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_showSpan__topRight, topLeft && styles.DayPickerKeyboardShortcuts_showSpan__topLeft), "?")), showKeyboardShortcutsPanel && (renderKeyboardShortcutsPanel ? renderKeyboardShortcutsPanel({
      closeButtonAriaLabel: phrases.hideKeyboardShortcutsPanel,
      keyboardShortcuts: this.keyboardShortcuts,
      onCloseButtonClick: closeKeyboardShortcutsPanel,
      onKeyDown: this.onKeyDown,
      title: phrases.keyboardShortcuts
    }) : _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_panel), {
      role: "dialog",
      "aria-labelledby": "DayPickerKeyboardShortcuts_title",
      "aria-describedby": "DayPickerKeyboardShortcuts_description"
    }), _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_title), {
      id: "DayPickerKeyboardShortcuts_title"
    }), phrases.keyboardShortcuts), _react["default"].createElement("button", (0, _extends2["default"])({
      ref: this.setHideKeyboardShortcutsButtonRef
    }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_close), {
      type: "button",
      tabIndex: "0",
      "aria-label": phrases.hideKeyboardShortcutsPanel,
      onClick: closeKeyboardShortcutsPanel,
      onKeyDown: this.onKeyDown
    }), _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_closeSvg))), _react["default"].createElement("ul", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_list), {
      id: "DayPickerKeyboardShortcuts_description"
    }), this.keyboardShortcuts.map(function (_ref2) {
      var unicode = _ref2.unicode,
          label = _ref2.label,
          action = _ref2.action;
      return _react["default"].createElement(_KeyboardShortcutRow["default"], {
        key: label,
        unicode: unicode,
        label: label,
        action: action,
        block: block
      });
    })))));
  };

  return DayPickerKeyboardShortcuts;
}(_react["default"].PureComponent || _react["default"].Component);

DayPickerKeyboardShortcuts.propTypes =  false ? 0 : {};
DayPickerKeyboardShortcuts.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      font = _ref3$reactDates.font,
      zIndex = _ref3$reactDates.zIndex;
  return {
    DayPickerKeyboardShortcuts_buttonReset: {
      background: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      padding: 0,
      cursor: 'pointer',
      fontSize: font.size,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_show: {
      width: 33,
      height: 26,
      position: 'absolute',
      zIndex: zIndex + 2,
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute'
      }
    },
    DayPickerKeyboardShortcuts_show__bottomRight: {
      bottom: 0,
      right: 0,
      '::before': {
        borderTop: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        bottom: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topRight: {
      top: 0,
      right: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        top: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topLeft: {
      top: 0,
      left: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderLeft: "33px solid ".concat(color.core.primary),
        top: 0,
        left: 0
      },
      ':hover::before': {
        borderLeft: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_showSpan: {
      color: color.core.white,
      position: 'absolute'
    },
    DayPickerKeyboardShortcuts_showSpan__bottomRight: {
      bottom: 0,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topRight: {
      top: 1,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topLeft: {
      top: 1,
      left: 5
    },
    DayPickerKeyboardShortcuts_panel: {
      overflow: 'auto',
      background: color.background,
      border: "1px solid ".concat(color.core.border),
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: zIndex + 2,
      padding: 22,
      margin: 33,
      textAlign: 'left' // TODO: investigate use of text-align throughout the library

    },
    DayPickerKeyboardShortcuts_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 0
    },
    DayPickerKeyboardShortcuts_list: {
      listStyle: 'none',
      padding: 0,
      fontSize: font.size
    },
    DayPickerKeyboardShortcuts_close: {
      position: 'absolute',
      right: 22,
      top: 22,
      zIndex: zIndex + 2,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_closeSvg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter,
      ':hover': {
        fill: color.core.grayLight
      },
      ':focus': {
        fill: color.core.grayLight
      }
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerKeyboardShortcuts);

exports.default = _default;

/***/ }),

/***/ 6476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(319));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _LeftArrow = _interopRequireDefault(__webpack_require__(58601));

var _RightArrow = _interopRequireDefault(__webpack_require__(57783));

var _ChevronUp = _interopRequireDefault(__webpack_require__(86952));

var _ChevronDown = _interopRequireDefault(__webpack_require__(2814));

var _NavPositionShape = _interopRequireDefault(__webpack_require__(98771));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(41073));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  disablePrev: false,
  disableNext: false,
  inlineStyles: null,
  isRTL: false,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  // internationalization
  phrases: _defaultPhrases.DayPickerNavigationPhrases,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  showNavPrevButton: true,
  showNavNextButton: true
};

var DayPickerNavigation =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerNavigation, _ref);

  function DayPickerNavigation() {
    return _ref.apply(this, arguments) || this;
  }

  var _proto = DayPickerNavigation.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        inlineStyles = _this$props.inlineStyles,
        isRTL = _this$props.isRTL,
        disablePrev = _this$props.disablePrev,
        disableNext = _this$props.disableNext,
        navPosition = _this$props.navPosition,
        navPrev = _this$props.navPrev,
        navNext = _this$props.navNext,
        onPrevMonthClick = _this$props.onPrevMonthClick,
        onNextMonthClick = _this$props.onNextMonthClick,
        orientation = _this$props.orientation,
        phrases = _this$props.phrases,
        renderNavPrevButton = _this$props.renderNavPrevButton,
        renderNavNextButton = _this$props.renderNavNextButton,
        showNavPrevButton = _this$props.showNavPrevButton,
        showNavNextButton = _this$props.showNavNextButton,
        styles = _this$props.styles;

    if (!showNavNextButton && !showNavPrevButton) {
      return null;
    }

    var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
    var isVertical = orientation !== _constants.HORIZONTAL_ORIENTATION;
    var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var isBottomNavPosition = navPosition === _constants.NAV_POSITION_BOTTOM;
    var hasInlineStyles = !!inlineStyles;
    var navPrevIcon = navPrev;
    var navNextIcon = navNext;
    var isDefaultNavPrev = false;
    var isDefaultNavNext = false;
    var navPrevTabIndex = {};
    var navNextTabIndex = {};

    if (!navPrevIcon && !renderNavPrevButton && showNavPrevButton) {
      navPrevTabIndex = {
        tabIndex: '0'
      };
      isDefaultNavPrev = true;
      var Icon = isVertical ? _ChevronUp["default"] : _LeftArrow["default"];

      if (isRTL && !isVertical) {
        Icon = _RightArrow["default"];
      }

      navPrevIcon = _react["default"].createElement(Icon, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disablePrev && styles.DayPickerNavigation_svg__disabled));
    }

    if (!navNextIcon && !renderNavNextButton && showNavNextButton) {
      navNextTabIndex = {
        tabIndex: '0'
      };
      isDefaultNavNext = true;

      var _Icon = isVertical ? _ChevronDown["default"] : _RightArrow["default"];

      if (isRTL && !isVertical) {
        _Icon = _LeftArrow["default"];
      }

      navNextIcon = _react["default"].createElement(_Icon, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disableNext && styles.DayPickerNavigation_svg__disabled));
    }

    var isDefaultNav = isDefaultNavNext || isDefaultNavPrev;
    return _react["default"].createElement("div", _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation, isHorizontal && styles.DayPickerNavigation__horizontal].concat((0, _toConsumableArray2["default"])(isVertical ? [styles.DayPickerNavigation__vertical, isDefaultNav && styles.DayPickerNavigation__verticalDefault] : []), (0, _toConsumableArray2["default"])(isVerticalScrollable ? [styles.DayPickerNavigation__verticalScrollable, isDefaultNav && styles.DayPickerNavigation__verticalScrollableDefault, showNavPrevButton && styles.DayPickerNavigation__verticalScrollable_prevNav] : []), (0, _toConsumableArray2["default"])(isBottomNavPosition ? [styles.DayPickerNavigation__bottom, isDefaultNav && styles.DayPickerNavigation__bottomDefault] : []), [hasInlineStyles && inlineStyles])), showNavPrevButton && (renderNavPrevButton ? renderNavPrevButton({
      ariaLabel: phrases.jumpToPrevMonth,
      disabled: disablePrev,
      onClick: disablePrev ? undefined : onPrevMonthClick,
      onKeyUp: disablePrev ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onPrevMonthClick(e);
        }
      },
      onMouseUp: disablePrev ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }) : _react["default"].createElement("div", (0, _extends2["default"])({
      // eslint-disable-line jsx-a11y/interactive-supports-focus
      role: "button"
    }, navPrevTabIndex, _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavPrev && styles.DayPickerNavigation_button__default, disablePrev && styles.DayPickerNavigation_button__disabled].concat((0, _toConsumableArray2["default"])(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat((0, _toConsumableArray2["default"])(isDefaultNavPrev ? [styles.DayPickerNavigation_button__horizontalDefault, isBottomNavPosition && styles.DayPickerNavigation_bottomButton__horizontalDefault, !isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), (0, _toConsumableArray2["default"])(isVertical ? [styles.DayPickerNavigation_button__vertical].concat((0, _toConsumableArray2["default"])(isDefaultNavPrev ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_prevButton__verticalDefault, isVerticalScrollable && styles.DayPickerNavigation_prevButton__verticalScrollableDefault] : [])) : []))), {
      "aria-disabled": disablePrev ? true : undefined,
      "aria-label": phrases.jumpToPrevMonth,
      onClick: disablePrev ? undefined : onPrevMonthClick,
      onKeyUp: disablePrev ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onPrevMonthClick(e);
        }
      },
      onMouseUp: disablePrev ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }), navPrevIcon)), showNavNextButton && (renderNavNextButton ? renderNavNextButton({
      ariaLabel: phrases.jumpToNextMonth,
      disabled: disableNext,
      onClick: disableNext ? undefined : onNextMonthClick,
      onKeyUp: disableNext ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onNextMonthClick(e);
        }
      },
      onMouseUp: disableNext ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }) : _react["default"].createElement("div", (0, _extends2["default"])({
      // eslint-disable-line jsx-a11y/interactive-supports-focus
      role: "button"
    }, navNextTabIndex, _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavNext && styles.DayPickerNavigation_button__default, disableNext && styles.DayPickerNavigation_button__disabled].concat((0, _toConsumableArray2["default"])(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat((0, _toConsumableArray2["default"])(isDefaultNavNext ? [styles.DayPickerNavigation_button__horizontalDefault, isBottomNavPosition && styles.DayPickerNavigation_bottomButton__horizontalDefault, isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, !isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), (0, _toConsumableArray2["default"])(isVertical ? [styles.DayPickerNavigation_button__vertical].concat((0, _toConsumableArray2["default"])(isDefaultNavNext ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_nextButton__verticalDefault, isVerticalScrollable && styles.DayPickerNavigation_nextButton__verticalScrollableDefault] : [])) : []))), {
      "aria-disabled": disableNext ? true : undefined,
      "aria-label": phrases.jumpToNextMonth,
      onClick: disableNext ? undefined : onNextMonthClick,
      onKeyUp: disableNext ? undefined : function (e) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onNextMonthClick(e);
        }
      },
      onMouseUp: disableNext ? undefined : function (e) {
        e.currentTarget.blur();
      }
    }), navNextIcon)));
  };

  return DayPickerNavigation;
}(_react["default"].PureComponent || _react["default"].Component);

DayPickerNavigation.propTypes =  false ? 0 : {};
DayPickerNavigation.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DayPickerNavigation: {
      position: 'relative',
      zIndex: zIndex + 2
    },
    DayPickerNavigation__horizontal: {
      height: 0
    },
    DayPickerNavigation__vertical: {},
    DayPickerNavigation__verticalScrollable: {},
    DayPickerNavigation__verticalScrollable_prevNav: {
      zIndex: zIndex + 1 // zIndex + 2 causes the button to show on top of the day of week headers

    },
    DayPickerNavigation__verticalDefault: {
      position: 'absolute',
      width: '100%',
      height: 52,
      bottom: 0,
      left: (0, _noflip["default"])(0)
    },
    DayPickerNavigation__verticalScrollableDefault: {
      position: 'relative'
    },
    DayPickerNavigation__bottom: {
      height: 'auto'
    },
    DayPickerNavigation__bottomDefault: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    DayPickerNavigation_button: {
      cursor: 'pointer',
      userSelect: 'none',
      border: 0,
      padding: 0,
      margin: 0
    },
    DayPickerNavigation_button__default: {
      border: "1px solid ".concat(color.core.borderLight),
      backgroundColor: color.background,
      color: color.placeholderText,
      ':focus': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':hover': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':active': {
        background: color.backgroundDark
      }
    },
    DayPickerNavigation_button__disabled: {
      cursor: 'default',
      border: "1px solid ".concat(color.disabled),
      ':focus': {
        border: "1px solid ".concat(color.disabled)
      },
      ':hover': {
        border: "1px solid ".concat(color.disabled)
      },
      ':active': {
        background: 'none'
      }
    },
    DayPickerNavigation_button__horizontal: {},
    DayPickerNavigation_button__horizontalDefault: {
      position: 'absolute',
      top: 18,
      lineHeight: 0.78,
      borderRadius: 3,
      padding: '6px 9px'
    },
    DayPickerNavigation_bottomButton__horizontalDefault: {
      position: 'static',
      marginLeft: 22,
      marginRight: 22,
      marginBottom: 30,
      marginTop: -10
    },
    DayPickerNavigation_leftButton__horizontalDefault: {
      left: (0, _noflip["default"])(22)
    },
    DayPickerNavigation_rightButton__horizontalDefault: {
      right: (0, _noflip["default"])(22)
    },
    DayPickerNavigation_button__vertical: {},
    DayPickerNavigation_button__verticalDefault: {
      padding: 5,
      background: color.background,
      boxShadow: (0, _noflip["default"])('0 0 5px 2px rgba(0, 0, 0, 0.1)'),
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center',
      height: '100%',
      width: '50%'
    },
    DayPickerNavigation_prevButton__verticalDefault: {},
    DayPickerNavigation_nextButton__verticalDefault: {
      borderLeft: (0, _noflip["default"])(0)
    },
    DayPickerNavigation_nextButton__verticalScrollableDefault: {
      width: '100%'
    },
    DayPickerNavigation_prevButton__verticalScrollableDefault: {
      width: '100%'
    },
    DayPickerNavigation_svg__horizontal: {
      height: 19,
      width: 19,
      fill: color.core.grayLight,
      display: 'block'
    },
    DayPickerNavigation_svg__vertical: {
      height: 42,
      width: 42,
      fill: color.text
    },
    DayPickerNavigation_svg__disabled: {
      fill: color.disabled
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerNavigation);

exports.default = _default;

/***/ }),

/***/ 25900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(63038));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _object = _interopRequireDefault(__webpack_require__(5869));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(21465));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(78890));

var _isNextDay = _interopRequireDefault(__webpack_require__(57202));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

var _isAfterDay = _interopRequireDefault(__webpack_require__(76023));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(12933));

var _isPreviousDay = _interopRequireDefault(__webpack_require__(98864));

var _getVisibleDays = _interopRequireDefault(__webpack_require__(61729));

var _isDayVisible = _interopRequireDefault(__webpack_require__(13720));

var _getSelectedDateOffset = _interopRequireDefault(__webpack_require__(16070));

var _toISODateString = _interopRequireDefault(__webpack_require__(54162));

var _modifiers = __webpack_require__(58390);

var _DisabledShape = _interopRequireDefault(__webpack_require__(38712));

var _FocusedInputShape = _interopRequireDefault(__webpack_require__(85101));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(41073));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(12003));

var _NavPositionShape = _interopRequireDefault(__webpack_require__(98771));

var _constants = __webpack_require__(45388);

var _DayPicker = _interopRequireDefault(__webpack_require__(65860));

var _getPooledMoment = _interopRequireDefault(__webpack_require__(52936));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  startDate: undefined,
  // TODO: use null
  endDate: undefined,
  // TODO: use null
  minDate: null,
  maxDate: null,
  onDatesChange: function onDatesChange() {},
  startDateOffset: undefined,
  endDateOffset: undefined,
  focusedInput: null,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  minimumNights: 1,
  disabled: false,
  isOutsideRange: function isOutsideRange() {},
  isDayBlocked: function isDayBlocked() {},
  isDayHighlighted: function isDayHighlighted() {},
  getMinNightsForHoverDate: function getMinNightsForHoverDate() {},
  daysViolatingMinNightsCanBeClicked: false,
  // DayPicker props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  daySize: _constants.DAY_SIZE,
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  noNavButtons: false,
  noNavNextButton: false,
  noNavPrevButton: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  firstDayOfWeek: null,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
  // accessibility
  onBlur: function onBlur() {},
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var getChooseAvailableDatePhrase = function getChooseAvailableDatePhrase(phrases, focusedInput) {
  if (focusedInput === _constants.START_DATE) {
    return phrases.chooseAvailableStartDate;
  }

  if (focusedInput === _constants.END_DATE) {
    return phrases.chooseAvailableEndDate;
  }

  return phrases.chooseAvailableDate;
};

var DayPickerRangeController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerRangeController, _ref);
  var _proto = DayPickerRangeController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPickerRangeController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = (0, _isTouchDevice["default"])();
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function today(day) {
        return _this.isToday(day);
      },
      blocked: function blocked(day) {
        return _this.isBlocked(day);
      },
      'blocked-calendar': function blockedCalendar(day) {
        return props.isDayBlocked(day);
      },
      'blocked-out-of-range': function blockedOutOfRange(day) {
        return props.isOutsideRange(day);
      },
      'highlighted-calendar': function highlightedCalendar(day) {
        return props.isDayHighlighted(day);
      },
      valid: function valid(day) {
        return !_this.isBlocked(day);
      },
      'selected-start': function selectedStart(day) {
        return _this.isStartDate(day);
      },
      'selected-end': function selectedEnd(day) {
        return _this.isEndDate(day);
      },
      'blocked-minimum-nights': function blockedMinimumNights(day) {
        return _this.doesNotMeetMinimumNights(day);
      },
      'selected-span': function selectedSpan(day) {
        return _this.isInSelectedSpan(day);
      },
      'last-in-range': function lastInRange(day) {
        return _this.isLastInRange(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      'hovered-span': function hoveredSpan(day) {
        return _this.isInHoveredSpan(day);
      },
      'hovered-offset': function hoveredOffset(day) {
        return _this.isInHoveredSpan(day);
      },
      'after-hovered-start': function afterHoveredStart(day) {
        return _this.isDayAfterHoveredStartDate(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      },
      'hovered-start-first-possible-end': function hoveredStartFirstPossibleEnd(day, hoverDate) {
        return _this.isFirstPossibleEndDateForHoveredStartDate(day, hoverDate);
      },
      'hovered-start-blocked-minimum-nights': function hoveredStartBlockedMinimumNights(day, hoverDate) {
        return _this.doesNotMeetMinNightsForHoveredStartDate(day, hoverDate);
      },
      'before-hovered-end': function beforeHoveredEnd(day) {
        return _this.isDayBeforeHoveredEndDate(day);
      },
      'no-selected-start-before-selected-end': function noSelectedStartBeforeSelectedEnd(day) {
        return _this.beforeSelectedEnd(day) && !props.startDate;
      },
      'selected-start-in-hovered-span': function selectedStartInHoveredSpan(day, hoverDate) {
        return _this.isStartDate(day) && (0, _isAfterDay["default"])(hoverDate, day);
      },
      'selected-start-no-selected-end': function selectedStartNoSelectedEnd(day) {
        return _this.isStartDate(day) && !props.endDate;
      },
      'selected-end-no-selected-start': function selectedEndNoSelectedStart(day) {
        return _this.isEndDate(day) && !props.startDate;
      }
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays; // initialize phrases
    // set the appropriate CalendarDay phrase based on focusedInput


    var chooseAvailableDate = getChooseAvailableDatePhrase(props.phrases, props.focusedInput);
    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      phrases: _objectSpread({}, props.phrases, {
        chooseAvailableDate: chooseAvailableDate
      }),
      visibleDays: visibleDays,
      disablePrev: _this.shouldDisableMonthNavigation(props.minDate, currentMonth),
      disableNext: _this.shouldDisableMonthNavigation(props.maxDate, currentMonth)
    };
    _this.onDayClick = _this.onDayClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMonthChange = _this.onMonthChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearChange = _this.onYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetNextScrollableMonths = _this.onGetNextScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetPrevScrollableMonths = _this.onGetPrevScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var startDate = nextProps.startDate,
        endDate = nextProps.endDate,
        focusedInput = nextProps.focusedInput,
        getMinNightsForHoverDate = nextProps.getMinNightsForHoverDate,
        minimumNights = nextProps.minimumNights,
        isOutsideRange = nextProps.isOutsideRange,
        isDayBlocked = nextProps.isDayBlocked,
        isDayHighlighted = nextProps.isDayHighlighted,
        phrases = nextProps.phrases,
        initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays;
    var _this$props = this.props,
        prevStartDate = _this$props.startDate,
        prevEndDate = _this$props.endDate,
        prevFocusedInput = _this$props.focusedInput,
        prevMinimumNights = _this$props.minimumNights,
        prevIsOutsideRange = _this$props.isOutsideRange,
        prevIsDayBlocked = _this$props.isDayBlocked,
        prevIsDayHighlighted = _this$props.isDayHighlighted,
        prevPhrases = _this$props.phrases,
        prevInitialVisibleMonth = _this$props.initialVisibleMonth,
        prevNumberOfMonths = _this$props.numberOfMonths,
        prevEnableOutsideDays = _this$props.enableOutsideDays;
    var hoverDate = this.state.hoverDate;
    var visibleDays = this.state.visibleDays;
    var recomputeOutsideRange = false;
    var recomputeDayBlocked = false;
    var recomputeDayHighlighted = false;

    if (isOutsideRange !== prevIsOutsideRange) {
      this.modifiers['blocked-out-of-range'] = function (day) {
        return isOutsideRange(day);
      };

      recomputeOutsideRange = true;
    }

    if (isDayBlocked !== prevIsDayBlocked) {
      this.modifiers['blocked-calendar'] = function (day) {
        return isDayBlocked(day);
      };

      recomputeDayBlocked = true;
    }

    if (isDayHighlighted !== prevIsDayHighlighted) {
      this.modifiers['highlighted-calendar'] = function (day) {
        return isDayHighlighted(day);
      };

      recomputeDayHighlighted = true;
    }

    var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;
    var didStartDateChange = startDate !== prevStartDate;
    var didEndDateChange = endDate !== prevEndDate;
    var didFocusChange = focusedInput !== prevFocusedInput;

    if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocusedInput && didFocusChange) {
      var newMonthState = this.getStateForNewMonth(nextProps);
      var currentMonth = newMonthState.currentMonth;
      visibleDays = newMonthState.visibleDays;
      this.setState({
        currentMonth: currentMonth,
        visibleDays: visibleDays
      });
    }

    var modifiers = {};

    if (didStartDateChange) {
      modifiers = this.deleteModifier(modifiers, prevStartDate, 'selected-start');
      modifiers = this.addModifier(modifiers, startDate, 'selected-start');

      if (prevStartDate) {
        var startSpan = prevStartDate.clone().add(1, 'day');
        var endSpan = prevStartDate.clone().add(prevMinimumNights + 1, 'days');
        modifiers = this.deleteModifierFromRange(modifiers, startSpan, endSpan, 'after-hovered-start');

        if (!endDate || !prevEndDate) {
          modifiers = this.deleteModifier(modifiers, prevStartDate, 'selected-start-no-selected-end');
        }
      }

      if (!prevStartDate && endDate && startDate) {
        modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-no-selected-start');
        modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-in-hovered-span');
        (0, _object["default"])(visibleDays).forEach(function (days) {
          Object.keys(days).forEach(function (day) {
            var momentObj = (0, _moment["default"])(day);
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'no-selected-start-before-selected-end');
          });
        });
      }
    }

    if (didEndDateChange) {
      modifiers = this.deleteModifier(modifiers, prevEndDate, 'selected-end');
      modifiers = this.addModifier(modifiers, endDate, 'selected-end');

      if (prevEndDate && (!startDate || !prevStartDate)) {
        modifiers = this.deleteModifier(modifiers, prevEndDate, 'selected-end-no-selected-start');
      }
    }

    if (didStartDateChange || didEndDateChange) {
      if (prevStartDate && prevEndDate) {
        modifiers = this.deleteModifierFromRange(modifiers, prevStartDate, prevEndDate.clone().add(1, 'day'), 'selected-span');
      }

      if (startDate && endDate) {
        modifiers = this.deleteModifierFromRange(modifiers, startDate, endDate.clone().add(1, 'day'), 'hovered-span');
        modifiers = this.addModifierToRange(modifiers, startDate.clone().add(1, 'day'), endDate, 'selected-span');
      }

      if (startDate && !endDate) {
        modifiers = this.addModifier(modifiers, startDate, 'selected-start-no-selected-end');
      }

      if (endDate && !startDate) {
        modifiers = this.addModifier(modifiers, endDate, 'selected-end-no-selected-start');
      }

      if (!startDate && endDate) {
        (0, _object["default"])(visibleDays).forEach(function (days) {
          Object.keys(days).forEach(function (day) {
            var momentObj = (0, _moment["default"])(day);

            if ((0, _isBeforeDay["default"])(momentObj, endDate)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'no-selected-start-before-selected-end');
            }
          });
        });
      }
    }

    if (!this.isTouchDevice && didStartDateChange && startDate && !endDate) {
      var _startSpan = startDate.clone().add(1, 'day');

      var _endSpan = startDate.clone().add(minimumNights + 1, 'days');

      modifiers = this.addModifierToRange(modifiers, _startSpan, _endSpan, 'after-hovered-start');
    }

    if (!this.isTouchDevice && didEndDateChange && !startDate && endDate) {
      var _startSpan2 = endDate.clone().subtract(minimumNights, 'days');

      var _endSpan2 = endDate.clone();

      modifiers = this.addModifierToRange(modifiers, _startSpan2, _endSpan2, 'before-hovered-end');
    }

    if (prevMinimumNights > 0) {
      if (didFocusChange || didStartDateChange || minimumNights !== prevMinimumNights) {
        var _startSpan3 = prevStartDate || this.today;

        modifiers = this.deleteModifierFromRange(modifiers, _startSpan3, _startSpan3.clone().add(prevMinimumNights, 'days'), 'blocked-minimum-nights');
        modifiers = this.deleteModifierFromRange(modifiers, _startSpan3, _startSpan3.clone().add(prevMinimumNights, 'days'), 'blocked');
      }
    }

    if (didFocusChange || recomputePropModifiers) {
      (0, _object["default"])(visibleDays).forEach(function (days) {
        Object.keys(days).forEach(function (day) {
          var momentObj = (0, _getPooledMoment["default"])(day);
          var isBlocked = false;

          if (didFocusChange || recomputeOutsideRange) {
            if (isOutsideRange(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
              isBlocked = true;
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
            }
          }

          if (didFocusChange || recomputeDayBlocked) {
            if (isDayBlocked(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
              isBlocked = true;
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
            }
          }

          if (isBlocked) {
            modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
          } else {
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
          }

          if (didFocusChange || recomputeDayHighlighted) {
            if (isDayHighlighted(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
            }
          }
        });
      });
    }

    if (!this.isTouchDevice && didFocusChange && hoverDate && !this.isBlocked(hoverDate)) {
      var minNightsForHoverDate = getMinNightsForHoverDate(hoverDate);

      if (minNightsForHoverDate > 0 && focusedInput === _constants.END_DATE) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
        modifiers = this.deleteModifier(modifiers, hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
      }

      if (minNightsForHoverDate > 0 && focusedInput === _constants.START_DATE) {
        modifiers = this.addModifierToRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
        modifiers = this.addModifier(modifiers, hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
      }
    }

    if (minimumNights > 0 && startDate && focusedInput === _constants.END_DATE) {
      modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked-minimum-nights');
      modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked');
    }

    var today = (0, _moment["default"])();

    if (!(0, _isSameDay["default"])(this.today, today)) {
      modifiers = this.deleteModifier(modifiers, this.today, 'today');
      modifiers = this.addModifier(modifiers, today, 'today');
      this.today = today;
    }

    if (Object.keys(modifiers).length > 0) {
      this.setState({
        visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
      });
    }

    if (didFocusChange || phrases !== prevPhrases) {
      // set the appropriate CalendarDay phrase based on focusedInput
      var chooseAvailableDate = getChooseAvailableDatePhrase(phrases, focusedInput);
      this.setState({
        phrases: _objectSpread({}, phrases, {
          chooseAvailableDate: chooseAvailableDate
        })
      });
    }
  };

  _proto.onDayClick = function onDayClick(day, e) {
    var _this$props2 = this.props,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        minimumNights = _this$props2.minimumNights,
        onBlur = _this$props2.onBlur,
        focusedInput = _this$props2.focusedInput,
        onFocusChange = _this$props2.onFocusChange,
        onClose = _this$props2.onClose,
        onDatesChange = _this$props2.onDatesChange,
        startDateOffset = _this$props2.startDateOffset,
        endDateOffset = _this$props2.endDateOffset,
        disabled = _this$props2.disabled,
        daysViolatingMinNightsCanBeClicked = _this$props2.daysViolatingMinNightsCanBeClicked;
    if (e) e.preventDefault();
    if (this.isBlocked(day, !daysViolatingMinNightsCanBeClicked)) return;
    var _this$props3 = this.props,
        startDate = _this$props3.startDate,
        endDate = _this$props3.endDate;

    if (startDateOffset || endDateOffset) {
      startDate = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
      endDate = (0, _getSelectedDateOffset["default"])(endDateOffset, day);

      if (this.isBlocked(startDate) || this.isBlocked(endDate)) {
        return;
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });

      if (!keepOpenOnDateSelect) {
        onFocusChange(null);
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      }
    } else if (focusedInput === _constants.START_DATE) {
      var lastAllowedStartDate = endDate && endDate.clone().subtract(minimumNights, 'days');
      var isStartDateAfterEndDate = (0, _isBeforeDay["default"])(lastAllowedStartDate, day) || (0, _isAfterDay["default"])(startDate, endDate);
      var isEndDateDisabled = disabled === _constants.END_DATE;

      if (!isEndDateDisabled || !isStartDateAfterEndDate) {
        startDate = day;

        if (isStartDateAfterEndDate) {
          endDate = null;
        }
      }

      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });

      if (isEndDateDisabled && !isStartDateAfterEndDate) {
        onFocusChange(null);
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      } else if (!isEndDateDisabled) {
        onFocusChange(_constants.END_DATE);
      }
    } else if (focusedInput === _constants.END_DATE) {
      var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

      if (!startDate) {
        endDate = day;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        onFocusChange(_constants.START_DATE);
      } else if ((0, _isInclusivelyAfterDay["default"])(day, firstAllowedEndDate)) {
        endDate = day;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });

        if (!keepOpenOnDateSelect) {
          onFocusChange(null);
          onClose({
            startDate: startDate,
            endDate: endDate
          });
        }
      } else if (daysViolatingMinNightsCanBeClicked && this.doesNotMeetMinimumNights(day)) {
        endDate = day;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      } else if (disabled !== _constants.START_DATE) {
        startDate = day;
        endDate = null;
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      } else {
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    } else {
      onDatesChange({
        startDate: startDate,
        endDate: endDate
      });
    }

    onBlur();
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day) {
    /* eslint react/destructuring-assignment: 1 */
    if (this.isTouchDevice) return;
    var _this$props4 = this.props,
        startDate = _this$props4.startDate,
        endDate = _this$props4.endDate,
        focusedInput = _this$props4.focusedInput,
        getMinNightsForHoverDate = _this$props4.getMinNightsForHoverDate,
        minimumNights = _this$props4.minimumNights,
        startDateOffset = _this$props4.startDateOffset,
        endDateOffset = _this$props4.endDateOffset;
    var _this$state = this.state,
        hoverDate = _this$state.hoverDate,
        visibleDays = _this$state.visibleDays,
        dateOffset = _this$state.dateOffset;
    var nextDateOffset = null;

    if (focusedInput) {
      var hasOffset = startDateOffset || endDateOffset;
      var modifiers = {};

      if (hasOffset) {
        var start = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
        var end = (0, _getSelectedDateOffset["default"])(endDateOffset, day, function (rangeDay) {
          return rangeDay.add(1, 'day');
        });
        nextDateOffset = {
          start: start,
          end: end
        }; // eslint-disable-next-line react/destructuring-assignment

        if (dateOffset && dateOffset.start && dateOffset.end) {
          modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
        }

        modifiers = this.addModifierToRange(modifiers, start, end, 'hovered-offset');
      }

      if (!hasOffset) {
        modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');
        modifiers = this.addModifier(modifiers, day, 'hovered');

        if (startDate && !endDate && focusedInput === _constants.END_DATE) {
          if ((0, _isAfterDay["default"])(hoverDate, startDate)) {
            var endSpan = hoverDate.clone().add(1, 'day');
            modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
          }

          if ((0, _isBeforeDay["default"])(day, startDate) || (0, _isSameDay["default"])(day, startDate)) {
            modifiers = this.deleteModifier(modifiers, startDate, 'selected-start-in-hovered-span');
          }

          if (!this.isBlocked(day) && (0, _isAfterDay["default"])(day, startDate)) {
            var _endSpan3 = day.clone().add(1, 'day');

            modifiers = this.addModifierToRange(modifiers, startDate, _endSpan3, 'hovered-span');
            modifiers = this.addModifier(modifiers, startDate, 'selected-start-in-hovered-span');
          }
        }

        if (!startDate && endDate && focusedInput === _constants.START_DATE) {
          if ((0, _isBeforeDay["default"])(hoverDate, endDate)) {
            modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
          }

          if ((0, _isAfterDay["default"])(day, endDate) || (0, _isSameDay["default"])(day, endDate)) {
            modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-in-hovered-span');
          }

          if (!this.isBlocked(day) && (0, _isBeforeDay["default"])(day, endDate)) {
            modifiers = this.addModifierToRange(modifiers, day, endDate, 'hovered-span');
            modifiers = this.addModifier(modifiers, endDate, 'selected-end-in-hovered-span');
          }
        }

        if (startDate) {
          var startSpan = startDate.clone().add(1, 'day');

          var _endSpan4 = startDate.clone().add(minimumNights + 1, 'days');

          modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan4, 'after-hovered-start');

          if ((0, _isSameDay["default"])(day, startDate)) {
            var newStartSpan = startDate.clone().add(1, 'day');
            var newEndSpan = startDate.clone().add(minimumNights + 1, 'days');
            modifiers = this.addModifierToRange(modifiers, newStartSpan, newEndSpan, 'after-hovered-start');
          }
        }

        if (endDate) {
          var _startSpan4 = endDate.clone().subtract(minimumNights, 'days');

          modifiers = this.deleteModifierFromRange(modifiers, _startSpan4, endDate, 'before-hovered-end');

          if ((0, _isSameDay["default"])(day, endDate)) {
            var _newStartSpan = endDate.clone().subtract(minimumNights, 'days');

            modifiers = this.addModifierToRange(modifiers, _newStartSpan, endDate, 'before-hovered-end');
          }
        }

        if (hoverDate && !this.isBlocked(hoverDate)) {
          var minNightsForPrevHoverDate = getMinNightsForHoverDate(hoverDate);

          if (minNightsForPrevHoverDate > 0 && focusedInput === _constants.START_DATE) {
            modifiers = this.deleteModifierFromRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForPrevHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
            modifiers = this.deleteModifier(modifiers, hoverDate.clone().add(minNightsForPrevHoverDate, 'days'), 'hovered-start-first-possible-end');
          }
        }

        if (!this.isBlocked(day)) {
          var minNightsForHoverDate = getMinNightsForHoverDate(day);

          if (minNightsForHoverDate > 0 && focusedInput === _constants.START_DATE) {
            modifiers = this.addModifierToRange(modifiers, day.clone().add(1, 'days'), day.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
            modifiers = this.addModifier(modifiers, day.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
          }
        }
      }

      this.setState({
        hoverDate: day,
        dateOffset: nextDateOffset,
        visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
      });
    }
  };

  _proto.onDayMouseLeave = function onDayMouseLeave(day) {
    var _this$props5 = this.props,
        startDate = _this$props5.startDate,
        endDate = _this$props5.endDate,
        focusedInput = _this$props5.focusedInput,
        getMinNightsForHoverDate = _this$props5.getMinNightsForHoverDate,
        minimumNights = _this$props5.minimumNights;
    var _this$state2 = this.state,
        hoverDate = _this$state2.hoverDate,
        visibleDays = _this$state2.visibleDays,
        dateOffset = _this$state2.dateOffset;
    if (this.isTouchDevice || !hoverDate) return;
    var modifiers = {};
    modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');

    if (dateOffset) {
      modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
    }

    if (startDate && !endDate) {
      if ((0, _isAfterDay["default"])(hoverDate, startDate)) {
        var endSpan = hoverDate.clone().add(1, 'day');
        modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
      }

      if ((0, _isAfterDay["default"])(day, startDate)) {
        modifiers = this.deleteModifier(modifiers, startDate, 'selected-start-in-hovered-span');
      }
    }

    if (!startDate && endDate) {
      if ((0, _isAfterDay["default"])(endDate, hoverDate)) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
      }

      if ((0, _isBeforeDay["default"])(day, endDate)) {
        modifiers = this.deleteModifier(modifiers, endDate, 'selected-end-in-hovered-span');
      }
    }

    if (startDate && (0, _isSameDay["default"])(day, startDate)) {
      var startSpan = startDate.clone().add(1, 'day');

      var _endSpan5 = startDate.clone().add(minimumNights + 1, 'days');

      modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan5, 'after-hovered-start');
    }

    if (endDate && (0, _isSameDay["default"])(day, endDate)) {
      var _startSpan5 = endDate.clone().subtract(minimumNights, 'days');

      modifiers = this.deleteModifierFromRange(modifiers, _startSpan5, endDate, 'before-hovered-end');
    }

    if (!this.isBlocked(hoverDate)) {
      var minNightsForHoverDate = getMinNightsForHoverDate(hoverDate);

      if (minNightsForHoverDate > 0 && focusedInput === _constants.START_DATE) {
        modifiers = this.deleteModifierFromRange(modifiers, hoverDate.clone().add(1, 'days'), hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-blocked-minimum-nights');
        modifiers = this.deleteModifier(modifiers, hoverDate.clone().add(minNightsForHoverDate, 'days'), 'hovered-start-first-possible-end');
      }
    }

    this.setState({
      hoverDate: null,
      visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
    });
  };

  _proto.onPrevMonthClick = function onPrevMonthClick() {
    var _this$props6 = this.props,
        enableOutsideDays = _this$props6.enableOutsideDays,
        maxDate = _this$props6.maxDate,
        minDate = _this$props6.minDate,
        numberOfMonths = _this$props6.numberOfMonths,
        onPrevMonthClick = _this$props6.onPrevMonthClick;
    var _this$state3 = this.state,
        currentMonth = _this$state3.currentMonth,
        visibleDays = _this$state3.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var prevMonth = currentMonth.clone().subtract(2, 'months');
    var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays, true);
    var newCurrentMonth = currentMonth.clone().subtract(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
      disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(prevMonthVisibleDays))
    }, function () {
      onPrevMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick() {
    var _this$props7 = this.props,
        enableOutsideDays = _this$props7.enableOutsideDays,
        maxDate = _this$props7.maxDate,
        minDate = _this$props7.minDate,
        numberOfMonths = _this$props7.numberOfMonths,
        onNextMonthClick = _this$props7.onNextMonthClick;
    var _this$state4 = this.state,
        currentMonth = _this$state4.currentMonth,
        visibleDays = _this$state4.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var nextMonth = currentMonth.clone().add(numberOfMonths + 1, 'month');
    var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays, true);
    var newCurrentMonth = currentMonth.clone().add(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
      disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(nextMonthVisibleDays))
    }, function () {
      onNextMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onMonthChange = function onMonthChange(newMonth) {
    var _this$props8 = this.props,
        numberOfMonths = _this$props8.numberOfMonths,
        enableOutsideDays = _this$props8.enableOutsideDays,
        orientation = _this$props8.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onYearChange = function onYearChange(newMonth) {
    var _this$props9 = this.props,
        numberOfMonths = _this$props9.numberOfMonths,
        enableOutsideDays = _this$props9.enableOutsideDays,
        orientation = _this$props9.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onGetNextScrollableMonths = function onGetNextScrollableMonths() {
    var _this$props10 = this.props,
        numberOfMonths = _this$props10.numberOfMonths,
        enableOutsideDays = _this$props10.enableOutsideDays;
    var _this$state5 = this.state,
        currentMonth = _this$state5.currentMonth,
        visibleDays = _this$state5.visibleDays;
    var numberOfVisibleMonths = Object.keys(visibleDays).length;
    var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(nextMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.onGetPrevScrollableMonths = function onGetPrevScrollableMonths() {
    var _this$props11 = this.props,
        numberOfMonths = _this$props11.numberOfMonths,
        enableOutsideDays = _this$props11.enableOutsideDays;
    var _this$state6 = this.state,
        currentMonth = _this$state6.currentMonth,
        visibleDays = _this$state6.visibleDays;
    var firstPreviousMonth = currentMonth.clone().subtract(numberOfMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(firstPreviousMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      currentMonth: firstPreviousMonth.clone(),
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.getFirstFocusableDay = function getFirstFocusableDay(newMonth) {
    var _this3 = this;

    var _this$props12 = this.props,
        startDate = _this$props12.startDate,
        endDate = _this$props12.endDate,
        focusedInput = _this$props12.focusedInput,
        minimumNights = _this$props12.minimumNights,
        numberOfMonths = _this$props12.numberOfMonths;
    var focusedDate = newMonth.clone().startOf('month');

    if (focusedInput === _constants.START_DATE && startDate) {
      focusedDate = startDate.clone();
    } else if (focusedInput === _constants.END_DATE && !endDate && startDate) {
      focusedDate = startDate.clone().add(minimumNights, 'days');
    } else if (focusedInput === _constants.END_DATE && endDate) {
      focusedDate = endDate.clone();
    }

    if (this.isBlocked(focusedDate)) {
      var days = [];
      var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
      var currentDay = focusedDate.clone();

      while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
        currentDay = currentDay.clone().add(1, 'day');
        days.push(currentDay);
      }

      var viableDays = days.filter(function (day) {
        return !_this3.isBlocked(day);
      });

      if (viableDays.length > 0) {
        var _viableDays = (0, _slicedToArray2["default"])(viableDays, 1);

        focusedDate = _viableDays[0];
      }
    }

    return focusedDate;
  };

  _proto.getModifiers = function getModifiers(visibleDays) {
    var _this4 = this;

    var modifiers = {};
    Object.keys(visibleDays).forEach(function (month) {
      modifiers[month] = {};
      visibleDays[month].forEach(function (day) {
        modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
      });
    });
    return modifiers;
  };

  _proto.getModifiersForDay = function getModifiersForDay(day) {
    var _this5 = this;

    return new Set(Object.keys(this.modifiers).filter(function (modifier) {
      return _this5.modifiers[modifier](day);
    }));
  };

  _proto.getStateForNewMonth = function getStateForNewMonth(nextProps) {
    var _this6 = this;

    var initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays,
        orientation = nextProps.orientation,
        startDate = nextProps.startDate;
    var initialVisibleMonthThunk = initialVisibleMonth || (startDate ? function () {
      return startDate;
    } : function () {
      return _this6.today;
    });
    var currentMonth = initialVisibleMonthThunk();
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
    return {
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
  };

  _proto.shouldDisableMonthNavigation = function shouldDisableMonthNavigation(date, visibleMonth) {
    if (!date) return false;
    var _this$props13 = this.props,
        numberOfMonths = _this$props13.numberOfMonths,
        enableOutsideDays = _this$props13.enableOutsideDays;
    return (0, _isDayVisible["default"])(date, visibleMonth, numberOfMonths, enableOutsideDays);
  };

  _proto.addModifier = function addModifier(updatedDays, day, modifier) {
    return (0, _modifiers.addModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.addModifierToRange = function addModifierToRange(updatedDays, start, end, modifier) {
    var days = updatedDays;
    var spanStart = start.clone();

    while ((0, _isBeforeDay["default"])(spanStart, end)) {
      days = this.addModifier(days, spanStart, modifier);
      spanStart = spanStart.clone().add(1, 'day');
    }

    return days;
  };

  _proto.deleteModifier = function deleteModifier(updatedDays, day, modifier) {
    return (0, _modifiers.deleteModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.deleteModifierFromRange = function deleteModifierFromRange(updatedDays, start, end, modifier) {
    var days = updatedDays;
    var spanStart = start.clone();

    while ((0, _isBeforeDay["default"])(spanStart, end)) {
      days = this.deleteModifier(days, spanStart, modifier);
      spanStart = spanStart.clone().add(1, 'day');
    }

    return days;
  };

  _proto.doesNotMeetMinimumNights = function doesNotMeetMinimumNights(day) {
    var _this$props14 = this.props,
        startDate = _this$props14.startDate,
        isOutsideRange = _this$props14.isOutsideRange,
        focusedInput = _this$props14.focusedInput,
        minimumNights = _this$props14.minimumNights;
    if (focusedInput !== _constants.END_DATE) return false;

    if (startDate) {
      var dayDiff = day.diff(startDate.clone().startOf('day').hour(12), 'days');
      return dayDiff < minimumNights && dayDiff >= 0;
    }

    return isOutsideRange((0, _moment["default"])(day).subtract(minimumNights, 'days'));
  };

  _proto.doesNotMeetMinNightsForHoveredStartDate = function doesNotMeetMinNightsForHoveredStartDate(day, hoverDate) {
    var _this$props15 = this.props,
        focusedInput = _this$props15.focusedInput,
        getMinNightsForHoverDate = _this$props15.getMinNightsForHoverDate;
    if (focusedInput !== _constants.END_DATE) return false;

    if (hoverDate && !this.isBlocked(hoverDate)) {
      var minNights = getMinNightsForHoverDate(hoverDate);
      var dayDiff = day.diff(hoverDate.clone().startOf('day').hour(12), 'days');
      return dayDiff < minNights && dayDiff >= 0;
    }

    return false;
  };

  _proto.isDayAfterHoveredStartDate = function isDayAfterHoveredStartDate(day) {
    var _this$props16 = this.props,
        startDate = _this$props16.startDate,
        endDate = _this$props16.endDate,
        minimumNights = _this$props16.minimumNights;

    var _ref2 = this.state || {},
        hoverDate = _ref2.hoverDate;

    return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay["default"])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay["default"])(hoverDate, startDate);
  };

  _proto.isEndDate = function isEndDate(day) {
    var endDate = this.props.endDate;
    return (0, _isSameDay["default"])(day, endDate);
  };

  _proto.isHovered = function isHovered(day) {
    var _ref3 = this.state || {},
        hoverDate = _ref3.hoverDate;

    var focusedInput = this.props.focusedInput;
    return !!focusedInput && (0, _isSameDay["default"])(day, hoverDate);
  };

  _proto.isInHoveredSpan = function isInHoveredSpan(day) {
    var _this$props17 = this.props,
        startDate = _this$props17.startDate,
        endDate = _this$props17.endDate;

    var _ref4 = this.state || {},
        hoverDate = _ref4.hoverDate;

    var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay["default"])(hoverDate, day));
    var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay["default"])(hoverDate, day));
    var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);
    return (isForwardRange || isBackwardRange) && isValidDayHovered;
  };

  _proto.isInSelectedSpan = function isInSelectedSpan(day) {
    var _this$props18 = this.props,
        startDate = _this$props18.startDate,
        endDate = _this$props18.endDate;
    return day.isBetween(startDate, endDate, 'days');
  };

  _proto.isLastInRange = function isLastInRange(day) {
    var endDate = this.props.endDate;
    return this.isInSelectedSpan(day) && (0, _isNextDay["default"])(day, endDate);
  };

  _proto.isStartDate = function isStartDate(day) {
    var startDate = this.props.startDate;
    return (0, _isSameDay["default"])(day, startDate);
  };

  _proto.isBlocked = function isBlocked(day) {
    var blockDaysViolatingMinNights = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var _this$props19 = this.props,
        isDayBlocked = _this$props19.isDayBlocked,
        isOutsideRange = _this$props19.isOutsideRange;
    return isDayBlocked(day) || isOutsideRange(day) || blockDaysViolatingMinNights && this.doesNotMeetMinimumNights(day);
  };

  _proto.isToday = function isToday(day) {
    return (0, _isSameDay["default"])(day, this.today);
  };

  _proto.isFirstDayOfWeek = function isFirstDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
  };

  _proto.isLastDayOfWeek = function isLastDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
  };

  _proto.isFirstPossibleEndDateForHoveredStartDate = function isFirstPossibleEndDateForHoveredStartDate(day, hoverDate) {
    var _this$props20 = this.props,
        focusedInput = _this$props20.focusedInput,
        getMinNightsForHoverDate = _this$props20.getMinNightsForHoverDate;
    if (focusedInput !== _constants.END_DATE || !hoverDate || this.isBlocked(hoverDate)) return false;
    var minNights = getMinNightsForHoverDate(hoverDate);
    var firstAvailableEndDate = hoverDate.clone().add(minNights, 'days');
    return (0, _isSameDay["default"])(day, firstAvailableEndDate);
  };

  _proto.beforeSelectedEnd = function beforeSelectedEnd(day) {
    var endDate = this.props.endDate;
    return (0, _isBeforeDay["default"])(day, endDate);
  };

  _proto.isDayBeforeHoveredEndDate = function isDayBeforeHoveredEndDate(day) {
    var _this$props21 = this.props,
        startDate = _this$props21.startDate,
        endDate = _this$props21.endDate,
        minimumNights = _this$props21.minimumNights;

    var _ref5 = this.state || {},
        hoverDate = _ref5.hoverDate;

    return !!endDate && !startDate && !this.isBlocked(day) && (0, _isPreviousDay["default"])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay["default"])(hoverDate, endDate);
  };

  _proto.render = function render() {
    var _this$props22 = this.props,
        numberOfMonths = _this$props22.numberOfMonths,
        orientation = _this$props22.orientation,
        monthFormat = _this$props22.monthFormat,
        renderMonthText = _this$props22.renderMonthText,
        renderWeekHeaderElement = _this$props22.renderWeekHeaderElement,
        dayPickerNavigationInlineStyles = _this$props22.dayPickerNavigationInlineStyles,
        navPosition = _this$props22.navPosition,
        navPrev = _this$props22.navPrev,
        navNext = _this$props22.navNext,
        renderNavPrevButton = _this$props22.renderNavPrevButton,
        renderNavNextButton = _this$props22.renderNavNextButton,
        noNavButtons = _this$props22.noNavButtons,
        noNavNextButton = _this$props22.noNavNextButton,
        noNavPrevButton = _this$props22.noNavPrevButton,
        onOutsideClick = _this$props22.onOutsideClick,
        withPortal = _this$props22.withPortal,
        enableOutsideDays = _this$props22.enableOutsideDays,
        firstDayOfWeek = _this$props22.firstDayOfWeek,
        renderKeyboardShortcutsButton = _this$props22.renderKeyboardShortcutsButton,
        renderKeyboardShortcutsPanel = _this$props22.renderKeyboardShortcutsPanel,
        hideKeyboardShortcutsPanel = _this$props22.hideKeyboardShortcutsPanel,
        daySize = _this$props22.daySize,
        focusedInput = _this$props22.focusedInput,
        renderCalendarDay = _this$props22.renderCalendarDay,
        renderDayContents = _this$props22.renderDayContents,
        renderCalendarInfo = _this$props22.renderCalendarInfo,
        renderMonthElement = _this$props22.renderMonthElement,
        calendarInfoPosition = _this$props22.calendarInfoPosition,
        onBlur = _this$props22.onBlur,
        onShiftTab = _this$props22.onShiftTab,
        onTab = _this$props22.onTab,
        isFocused = _this$props22.isFocused,
        showKeyboardShortcuts = _this$props22.showKeyboardShortcuts,
        isRTL = _this$props22.isRTL,
        weekDayFormat = _this$props22.weekDayFormat,
        dayAriaLabelFormat = _this$props22.dayAriaLabelFormat,
        verticalHeight = _this$props22.verticalHeight,
        noBorder = _this$props22.noBorder,
        transitionDuration = _this$props22.transitionDuration,
        verticalBorderSpacing = _this$props22.verticalBorderSpacing,
        horizontalMonthPadding = _this$props22.horizontalMonthPadding;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        phrases = _this$state7.phrases,
        visibleDays = _this$state7.visibleDays,
        disablePrev = _this$state7.disablePrev,
        disableNext = _this$state7.disableNext;
    return _react["default"].createElement(_DayPicker["default"], {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      modifiers: visibleDays,
      numberOfMonths: numberOfMonths,
      onDayClick: this.onDayClick,
      onDayMouseEnter: this.onDayMouseEnter,
      onDayMouseLeave: this.onDayMouseLeave,
      onPrevMonthClick: this.onPrevMonthClick,
      onNextMonthClick: this.onNextMonthClick,
      onMonthChange: this.onMonthChange,
      onTab: onTab,
      onShiftTab: onShiftTab,
      onYearChange: this.onYearChange,
      onGetNextScrollableMonths: this.onGetNextScrollableMonths,
      onGetPrevScrollableMonths: this.onGetPrevScrollableMonths,
      monthFormat: monthFormat,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      withPortal: withPortal,
      hidden: !focusedInput,
      initialVisibleMonth: function initialVisibleMonth() {
        return currentMonth;
      },
      daySize: daySize,
      onOutsideClick: onOutsideClick,
      disablePrev: disablePrev,
      disableNext: disableNext,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      noNavButtons: noNavButtons,
      noNavPrevButton: noNavPrevButton,
      noNavNextButton: noNavNextButton,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      renderKeyboardShortcutsButton: renderKeyboardShortcutsButton,
      renderKeyboardShortcutsPanel: renderKeyboardShortcutsPanel,
      calendarInfoPosition: calendarInfoPosition,
      firstDayOfWeek: firstDayOfWeek,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      isFocused: isFocused,
      getFirstFocusableDay: this.getFirstFocusableDay,
      onBlur: onBlur,
      showKeyboardShortcuts: showKeyboardShortcuts,
      phrases: phrases,
      isRTL: isRTL,
      weekDayFormat: weekDayFormat,
      dayAriaLabelFormat: dayAriaLabelFormat,
      verticalHeight: verticalHeight,
      verticalBorderSpacing: verticalBorderSpacing,
      noBorder: noBorder,
      transitionDuration: transitionDuration,
      horizontalMonthPadding: horizontalMonthPadding
    });
  };

  return DayPickerRangeController;
}(_react["default"].PureComponent || _react["default"].Component);

exports.default = DayPickerRangeController;
DayPickerRangeController.propTypes =  false ? 0 : {};
DayPickerRangeController.defaultProps = defaultProps;

/***/ }),

/***/ 99368:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(63038));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _object = _interopRequireDefault(__webpack_require__(5869));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(21465));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

var _isAfterDay = _interopRequireDefault(__webpack_require__(76023));

var _getVisibleDays = _interopRequireDefault(__webpack_require__(61729));

var _toISODateString = _interopRequireDefault(__webpack_require__(54162));

var _modifiers = __webpack_require__(58390);

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(41073));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(12003));

var _NavPositionShape = _interopRequireDefault(__webpack_require__(98771));

var _constants = __webpack_require__(45388);

var _DayPicker = _interopRequireDefault(__webpack_require__(65860));

var _getPooledMoment = _interopRequireDefault(__webpack_require__(52936));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  date: undefined,
  // TODO: use null
  onDateChange: function onDateChange() {},
  focused: false,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  isOutsideRange: function isOutsideRange() {},
  isDayBlocked: function isDayBlocked() {},
  isDayHighlighted: function isDayHighlighted() {},
  // DayPicker props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  daySize: _constants.DAY_SIZE,
  verticalHeight: null,
  noBorder: false,
  verticalBorderSpacing: undefined,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  noNavButtons: false,
  noNavNextButton: false,
  noNavPrevButton: false,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  // accessibility
  onBlur: function onBlur() {},
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var DayPickerSingleDateController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(DayPickerSingleDateController, _ref);
  var _proto = DayPickerSingleDateController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function DayPickerSingleDateController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = false;
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function today(day) {
        return _this.isToday(day);
      },
      blocked: function blocked(day) {
        return _this.isBlocked(day);
      },
      'blocked-calendar': function blockedCalendar(day) {
        return props.isDayBlocked(day);
      },
      'blocked-out-of-range': function blockedOutOfRange(day) {
        return props.isOutsideRange(day);
      },
      'highlighted-calendar': function highlightedCalendar(day) {
        return props.isDayHighlighted(day);
      },
      valid: function valid(day) {
        return !_this.isBlocked(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      selected: function selected(day) {
        return _this.isSelected(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      }
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays;

    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayClick = _this.onDayClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onMonthChange = _this.onMonthChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onYearChange = _this.onYearChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetNextScrollableMonths = _this.onGetNextScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onGetPrevScrollableMonths = _this.onGetPrevScrollableMonths.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.isTouchDevice = (0, _isTouchDevice["default"])();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var date = nextProps.date,
        focused = nextProps.focused,
        isOutsideRange = nextProps.isOutsideRange,
        isDayBlocked = nextProps.isDayBlocked,
        isDayHighlighted = nextProps.isDayHighlighted,
        initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays;
    var _this$props = this.props,
        prevIsOutsideRange = _this$props.isOutsideRange,
        prevIsDayBlocked = _this$props.isDayBlocked,
        prevIsDayHighlighted = _this$props.isDayHighlighted,
        prevNumberOfMonths = _this$props.numberOfMonths,
        prevEnableOutsideDays = _this$props.enableOutsideDays,
        prevInitialVisibleMonth = _this$props.initialVisibleMonth,
        prevFocused = _this$props.focused,
        prevDate = _this$props.date;
    var visibleDays = this.state.visibleDays;
    var recomputeOutsideRange = false;
    var recomputeDayBlocked = false;
    var recomputeDayHighlighted = false;

    if (isOutsideRange !== prevIsOutsideRange) {
      this.modifiers['blocked-out-of-range'] = function (day) {
        return isOutsideRange(day);
      };

      recomputeOutsideRange = true;
    }

    if (isDayBlocked !== prevIsDayBlocked) {
      this.modifiers['blocked-calendar'] = function (day) {
        return isDayBlocked(day);
      };

      recomputeDayBlocked = true;
    }

    if (isDayHighlighted !== prevIsDayHighlighted) {
      this.modifiers['highlighted-calendar'] = function (day) {
        return isDayHighlighted(day);
      };

      recomputeDayHighlighted = true;
    }

    var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;

    if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocused && focused) {
      var newMonthState = this.getStateForNewMonth(nextProps);
      var currentMonth = newMonthState.currentMonth;
      visibleDays = newMonthState.visibleDays;
      this.setState({
        currentMonth: currentMonth,
        visibleDays: visibleDays
      });
    }

    var didDateChange = date !== prevDate;
    var didFocusChange = focused !== prevFocused;
    var modifiers = {};

    if (didDateChange) {
      modifiers = this.deleteModifier(modifiers, prevDate, 'selected');
      modifiers = this.addModifier(modifiers, date, 'selected');
    }

    if (didFocusChange || recomputePropModifiers) {
      (0, _object["default"])(visibleDays).forEach(function (days) {
        Object.keys(days).forEach(function (day) {
          var momentObj = (0, _getPooledMoment["default"])(day);

          if (_this2.isBlocked(momentObj)) {
            modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
          } else {
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
          }

          if (didFocusChange || recomputeOutsideRange) {
            if (isOutsideRange(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
            }
          }

          if (didFocusChange || recomputeDayBlocked) {
            if (isDayBlocked(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
            }
          }

          if (didFocusChange || recomputeDayHighlighted) {
            if (isDayHighlighted(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
            }
          }
        });
      });
    }

    var today = (0, _moment["default"])();

    if (!(0, _isSameDay["default"])(this.today, today)) {
      modifiers = this.deleteModifier(modifiers, this.today, 'today');
      modifiers = this.addModifier(modifiers, today, 'today');
      this.today = today;
    }

    if (Object.keys(modifiers).length > 0) {
      this.setState({
        visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
      });
    }
  };

  _proto.componentWillUpdate = function componentWillUpdate() {
    this.today = (0, _moment["default"])();
  };

  _proto.onDayClick = function onDayClick(day, e) {
    if (e) e.preventDefault();
    if (this.isBlocked(day)) return;
    var _this$props2 = this.props,
        onDateChange = _this$props2.onDateChange,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        onFocusChange = _this$props2.onFocusChange,
        onClose = _this$props2.onClose;
    onDateChange(day);

    if (!keepOpenOnDateSelect) {
      onFocusChange({
        focused: false
      });
      onClose({
        date: day
      });
    }
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day) {
    if (this.isTouchDevice) return;
    var _this$state = this.state,
        hoverDate = _this$state.hoverDate,
        visibleDays = _this$state.visibleDays;
    var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
    modifiers = this.addModifier(modifiers, day, 'hovered');
    this.setState({
      hoverDate: day,
      visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
    });
  };

  _proto.onDayMouseLeave = function onDayMouseLeave() {
    var _this$state2 = this.state,
        hoverDate = _this$state2.hoverDate,
        visibleDays = _this$state2.visibleDays;
    if (this.isTouchDevice || !hoverDate) return;
    var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
    this.setState({
      hoverDate: null,
      visibleDays: _objectSpread({}, visibleDays, {}, modifiers)
    });
  };

  _proto.onPrevMonthClick = function onPrevMonthClick() {
    var _this$props3 = this.props,
        onPrevMonthClick = _this$props3.onPrevMonthClick,
        numberOfMonths = _this$props3.numberOfMonths,
        enableOutsideDays = _this$props3.enableOutsideDays;
    var _this$state3 = this.state,
        currentMonth = _this$state3.currentMonth,
        visibleDays = _this$state3.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var prevMonth = currentMonth.clone().subtract(1, 'month');
    var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays);
    this.setState({
      currentMonth: prevMonth,
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(prevMonthVisibleDays))
    }, function () {
      onPrevMonthClick(prevMonth.clone());
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick() {
    var _this$props4 = this.props,
        onNextMonthClick = _this$props4.onNextMonthClick,
        numberOfMonths = _this$props4.numberOfMonths,
        enableOutsideDays = _this$props4.enableOutsideDays;
    var _this$state4 = this.state,
        currentMonth = _this$state4.currentMonth,
        visibleDays = _this$state4.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
    var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays);
    var newCurrentMonth = currentMonth.clone().add(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      visibleDays: _objectSpread({}, newVisibleDays, {}, this.getModifiers(nextMonthVisibleDays))
    }, function () {
      onNextMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onMonthChange = function onMonthChange(newMonth) {
    var _this$props5 = this.props,
        numberOfMonths = _this$props5.numberOfMonths,
        enableOutsideDays = _this$props5.enableOutsideDays,
        orientation = _this$props5.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onYearChange = function onYearChange(newMonth) {
    var _this$props6 = this.props,
        numberOfMonths = _this$props6.numberOfMonths,
        enableOutsideDays = _this$props6.enableOutsideDays,
        orientation = _this$props6.orientation;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onGetNextScrollableMonths = function onGetNextScrollableMonths() {
    var _this$props7 = this.props,
        numberOfMonths = _this$props7.numberOfMonths,
        enableOutsideDays = _this$props7.enableOutsideDays;
    var _this$state5 = this.state,
        currentMonth = _this$state5.currentMonth,
        visibleDays = _this$state5.visibleDays;
    var numberOfVisibleMonths = Object.keys(visibleDays).length;
    var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(nextMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.onGetPrevScrollableMonths = function onGetPrevScrollableMonths() {
    var _this$props8 = this.props,
        numberOfMonths = _this$props8.numberOfMonths,
        enableOutsideDays = _this$props8.enableOutsideDays;
    var _this$state6 = this.state,
        currentMonth = _this$state6.currentMonth,
        visibleDays = _this$state6.visibleDays;
    var firstPreviousMonth = currentMonth.clone().subtract(numberOfMonths, 'month');
    var newVisibleDays = (0, _getVisibleDays["default"])(firstPreviousMonth, numberOfMonths, enableOutsideDays, true);
    this.setState({
      currentMonth: firstPreviousMonth.clone(),
      visibleDays: _objectSpread({}, visibleDays, {}, this.getModifiers(newVisibleDays))
    });
  };

  _proto.getFirstFocusableDay = function getFirstFocusableDay(newMonth) {
    var _this3 = this;

    var _this$props9 = this.props,
        date = _this$props9.date,
        numberOfMonths = _this$props9.numberOfMonths;
    var focusedDate = newMonth.clone().startOf('month');

    if (date) {
      focusedDate = date.clone();
    }

    if (this.isBlocked(focusedDate)) {
      var days = [];
      var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
      var currentDay = focusedDate.clone();

      while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
        currentDay = currentDay.clone().add(1, 'day');
        days.push(currentDay);
      }

      var viableDays = days.filter(function (day) {
        return !_this3.isBlocked(day) && (0, _isAfterDay["default"])(day, focusedDate);
      });

      if (viableDays.length > 0) {
        var _viableDays = (0, _slicedToArray2["default"])(viableDays, 1);

        focusedDate = _viableDays[0];
      }
    }

    return focusedDate;
  };

  _proto.getModifiers = function getModifiers(visibleDays) {
    var _this4 = this;

    var modifiers = {};
    Object.keys(visibleDays).forEach(function (month) {
      modifiers[month] = {};
      visibleDays[month].forEach(function (day) {
        modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
      });
    });
    return modifiers;
  };

  _proto.getModifiersForDay = function getModifiersForDay(day) {
    var _this5 = this;

    return new Set(Object.keys(this.modifiers).filter(function (modifier) {
      return _this5.modifiers[modifier](day);
    }));
  };

  _proto.getStateForNewMonth = function getStateForNewMonth(nextProps) {
    var _this6 = this;

    var initialVisibleMonth = nextProps.initialVisibleMonth,
        date = nextProps.date,
        numberOfMonths = nextProps.numberOfMonths,
        orientation = nextProps.orientation,
        enableOutsideDays = nextProps.enableOutsideDays;
    var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
      return date;
    } : function () {
      return _this6.today;
    });
    var currentMonth = initialVisibleMonthThunk();
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
    return {
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
  };

  _proto.addModifier = function addModifier(updatedDays, day, modifier) {
    return (0, _modifiers.addModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.deleteModifier = function deleteModifier(updatedDays, day, modifier) {
    return (0, _modifiers.deleteModifier)(updatedDays, day, modifier, this.props, this.state);
  };

  _proto.isBlocked = function isBlocked(day) {
    var _this$props10 = this.props,
        isDayBlocked = _this$props10.isDayBlocked,
        isOutsideRange = _this$props10.isOutsideRange;
    return isDayBlocked(day) || isOutsideRange(day);
  };

  _proto.isHovered = function isHovered(day) {
    var _ref2 = this.state || {},
        hoverDate = _ref2.hoverDate;

    return (0, _isSameDay["default"])(day, hoverDate);
  };

  _proto.isSelected = function isSelected(day) {
    var date = this.props.date;
    return (0, _isSameDay["default"])(day, date);
  };

  _proto.isToday = function isToday(day) {
    return (0, _isSameDay["default"])(day, this.today);
  };

  _proto.isFirstDayOfWeek = function isFirstDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
  };

  _proto.isLastDayOfWeek = function isLastDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
  };

  _proto.render = function render() {
    var _this$props11 = this.props,
        numberOfMonths = _this$props11.numberOfMonths,
        orientation = _this$props11.orientation,
        monthFormat = _this$props11.monthFormat,
        renderMonthText = _this$props11.renderMonthText,
        renderWeekHeaderElement = _this$props11.renderWeekHeaderElement,
        dayPickerNavigationInlineStyles = _this$props11.dayPickerNavigationInlineStyles,
        navPosition = _this$props11.navPosition,
        navPrev = _this$props11.navPrev,
        navNext = _this$props11.navNext,
        renderNavPrevButton = _this$props11.renderNavPrevButton,
        renderNavNextButton = _this$props11.renderNavNextButton,
        noNavButtons = _this$props11.noNavButtons,
        noNavPrevButton = _this$props11.noNavPrevButton,
        noNavNextButton = _this$props11.noNavNextButton,
        onOutsideClick = _this$props11.onOutsideClick,
        onShiftTab = _this$props11.onShiftTab,
        onTab = _this$props11.onTab,
        withPortal = _this$props11.withPortal,
        focused = _this$props11.focused,
        enableOutsideDays = _this$props11.enableOutsideDays,
        hideKeyboardShortcutsPanel = _this$props11.hideKeyboardShortcutsPanel,
        daySize = _this$props11.daySize,
        firstDayOfWeek = _this$props11.firstDayOfWeek,
        renderCalendarDay = _this$props11.renderCalendarDay,
        renderDayContents = _this$props11.renderDayContents,
        renderCalendarInfo = _this$props11.renderCalendarInfo,
        renderMonthElement = _this$props11.renderMonthElement,
        calendarInfoPosition = _this$props11.calendarInfoPosition,
        isFocused = _this$props11.isFocused,
        isRTL = _this$props11.isRTL,
        phrases = _this$props11.phrases,
        dayAriaLabelFormat = _this$props11.dayAriaLabelFormat,
        onBlur = _this$props11.onBlur,
        showKeyboardShortcuts = _this$props11.showKeyboardShortcuts,
        weekDayFormat = _this$props11.weekDayFormat,
        verticalHeight = _this$props11.verticalHeight,
        noBorder = _this$props11.noBorder,
        transitionDuration = _this$props11.transitionDuration,
        verticalBorderSpacing = _this$props11.verticalBorderSpacing,
        horizontalMonthPadding = _this$props11.horizontalMonthPadding;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        visibleDays = _this$state7.visibleDays;
    return _react["default"].createElement(_DayPicker["default"], {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      modifiers: visibleDays,
      numberOfMonths: numberOfMonths,
      onDayClick: this.onDayClick,
      onDayMouseEnter: this.onDayMouseEnter,
      onDayMouseLeave: this.onDayMouseLeave,
      onPrevMonthClick: this.onPrevMonthClick,
      onNextMonthClick: this.onNextMonthClick,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
      onGetNextScrollableMonths: this.onGetNextScrollableMonths,
      onGetPrevScrollableMonths: this.onGetPrevScrollableMonths,
      monthFormat: monthFormat,
      withPortal: withPortal,
      hidden: !focused,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      initialVisibleMonth: function initialVisibleMonth() {
        return currentMonth;
      },
      firstDayOfWeek: firstDayOfWeek,
      onOutsideClick: onOutsideClick,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      noNavButtons: noNavButtons,
      noNavNextButton: noNavNextButton,
      noNavPrevButton: noNavPrevButton,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isFocused,
      getFirstFocusableDay: this.getFirstFocusableDay,
      onBlur: onBlur,
      onTab: onTab,
      onShiftTab: onShiftTab,
      phrases: phrases,
      daySize: daySize,
      isRTL: isRTL,
      showKeyboardShortcuts: showKeyboardShortcuts,
      weekDayFormat: weekDayFormat,
      dayAriaLabelFormat: dayAriaLabelFormat,
      verticalHeight: verticalHeight,
      noBorder: noBorder,
      transitionDuration: transitionDuration,
      verticalBorderSpacing: verticalBorderSpacing,
      horizontalMonthPadding: horizontalMonthPadding
    });
  };

  return DayPickerSingleDateController;
}(_react["default"].PureComponent || _react["default"].Component);

exports.default = DayPickerSingleDateController;
DayPickerSingleDateController.propTypes =  false ? 0 : {};
DayPickerSingleDateController.defaultProps = defaultProps;

/***/ }),

/***/ 25804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  block: false
};

function KeyboardShortcutRow(_ref) {
  var unicode = _ref.unicode,
      label = _ref.label,
      action = _ref.action,
      block = _ref.block,
      styles = _ref.styles;
  return _react["default"].createElement("li", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow, block && styles.KeyboardShortcutRow__block), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_keyContainer, block && styles.KeyboardShortcutRow_keyContainer__block), _react["default"].createElement("span", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_key), {
    role: "img",
    "aria-label": "".concat(label, ",") // add comma so screen readers will pause before reading action

  }), unicode)), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_action), action));
}

KeyboardShortcutRow.propTypes =  false ? 0 : {};
KeyboardShortcutRow.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var color = _ref2.reactDates.color;
  return {
    KeyboardShortcutRow: {
      listStyle: 'none',
      margin: '6px 0'
    },
    KeyboardShortcutRow__block: {
      marginBottom: 16
    },
    KeyboardShortcutRow_keyContainer: {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      // is not handled by isRTL
      marginRight: 6 // is not handled by isRTL

    },
    KeyboardShortcutRow_keyContainer__block: {
      textAlign: 'left',
      // is not handled by isRTL
      display: 'inline'
    },
    KeyboardShortcutRow_key: {
      fontFamily: 'monospace',
      fontSize: 12,
      textTransform: 'uppercase',
      background: color.core.grayLightest,
      padding: '2px 6px'
    },
    KeyboardShortcutRow_action: {
      display: 'inline',
      wordBreak: 'break-word',
      marginLeft: 8 // is not handled by isRTL

    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(KeyboardShortcutRow);

exports.default = _default;

/***/ }),

/***/ 58601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var LeftArrow = function LeftArrow(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z"
  }));
};

LeftArrow.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = LeftArrow;
exports.default = _default;

/***/ }),

/***/ 57783:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(67294));

var RightArrow = function RightArrow(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
    d: "M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"
  }));
};

RightArrow.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = RightArrow;
exports.default = _default;

/***/ }),

/***/ 8745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.PureSingleDatePicker = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _reactWithStyles = __webpack_require__(17224);

var _reactPortal = __webpack_require__(32923);

var _airbnbPropTypes = __webpack_require__(78341);

var _consolidatedEvents = __webpack_require__(37034);

var _isTouchDevice = _interopRequireDefault(__webpack_require__(21465));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__(39834));

var _SingleDatePickerShape = _interopRequireDefault(__webpack_require__(27451));

var _defaultPhrases = __webpack_require__(98304);

var _getResponsiveContainerStyles = _interopRequireDefault(__webpack_require__(91804));

var _getDetachedContainerStyles = _interopRequireDefault(__webpack_require__(74133));

var _getInputHeight = _interopRequireDefault(__webpack_require__(25917));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(78890));

var _disableScroll2 = _interopRequireDefault(__webpack_require__(1926));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _SingleDatePickerInputController = _interopRequireDefault(__webpack_require__(17530));

var _DayPickerSingleDateController = _interopRequireDefault(__webpack_require__(99368));

var _CloseButton = _interopRequireDefault(__webpack_require__(27798));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  // required props for a functional interactive SingleDatePicker
  date: null,
  focused: false,
  // input related props
  id: 'date',
  placeholder: 'Date',
  ariaLabel: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  // navigation related props
  dayPickerNavigationInlineStyles: null,
  navPosition: _constants.NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  renderNavPrevButton: null,
  renderNavNextButton: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onClose: function onClose() {},
  // month presentation and interaction related props
  renderMonthText: null,
  renderWeekHeaderElement: null,
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  enableOutsideDays: false,
  isDayBlocked: function isDayBlocked() {
    return false;
  },
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  isDayHighlighted: function isDayHighlighted() {},
  // internationalization props
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.SingleDatePickerPhrases,
  dayAriaLabelFormat: undefined
};

var SingleDatePicker =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(SingleDatePicker, _ref);
  var _proto = SingleDatePicker.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function SingleDatePicker(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = false;
    _this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false,
      showKeyboardShortcuts: false
    };
    _this.onFocusOut = _this.onFocusOut.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onOutsideClick = _this.onOutsideClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onInputFocus = _this.onInputFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.disableScroll = _this.disableScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  /* istanbul ignore next */


  _proto.componentDidMount = function componentDidMount() {
    this.removeResizeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
      passive: true
    });
    this.responsivizePickerPosition();
    this.disableScroll();
    var focused = this.props.focused;

    if (focused) {
      this.setState({
        isInputFocused: true
      });
    }

    this.isTouchDevice = (0, _isTouchDevice["default"])();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var focused = this.props.focused;

    if (!prevProps.focused && focused) {
      this.responsivizePickerPosition();
      this.disableScroll();
    } else if (prevProps.focused && !focused) {
      if (this.enableScroll) this.enableScroll();
    }
  }
  /* istanbul ignore next */
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.removeResizeEventListener) this.removeResizeEventListener();
    if (this.removeFocusOutEventListener) this.removeFocusOutEventListener();
    if (this.enableScroll) this.enableScroll();
  };

  _proto.onOutsideClick = function onOutsideClick(event) {
    var _this$props = this.props,
        focused = _this$props.focused,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose,
        date = _this$props.date,
        appendToBody = _this$props.appendToBody;
    if (!focused) return;
    if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
    onFocusChange({
      focused: false
    });
    onClose({
      date: date
    });
  };

  _proto.onInputFocus = function onInputFocus(_ref2) {
    var focused = _ref2.focused;
    var _this$props2 = this.props,
        onFocusChange = _this$props2.onFocusChange,
        readOnly = _this$props2.readOnly,
        withPortal = _this$props2.withPortal,
        withFullScreenPortal = _this$props2.withFullScreenPortal,
        keepFocusOnInput = _this$props2.keepFocusOnInput;

    if (focused) {
      var withAnyPortal = withPortal || withFullScreenPortal;
      var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

      if (moveFocusToDayPicker) {
        this.onDayPickerFocus();
      } else {
        this.onDayPickerBlur();
      }
    }

    onFocusChange({
      focused: focused
    });
  };

  _proto.onDayPickerFocus = function onDayPickerFocus() {
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: false
    });
  };

  _proto.onDayPickerBlur = function onDayPickerBlur() {
    this.setState({
      isInputFocused: true,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    });
  };

  _proto.onFocusOut = function onFocusOut(e) {
    var onFocusChange = this.props.onFocusChange; // In cases where **relatedTarget** is not null, it points to the right
    // element here. However, in cases where it is null (such as clicking on a
    // specific day) or it is **document.body** (IE11), the appropriate value is **event.target**.
    //
    // We handle both situations here by using the ` || ` operator to fallback
    // to *event.target** when **relatedTarget** is not provided.

    var relatedTarget = e.relatedTarget === document.body ? e.target : e.relatedTarget || e.target;
    if (this.dayPickerContainer.contains(relatedTarget)) return;
    onFocusChange({
      focused: false
    });
  };

  _proto.setDayPickerContainerRef = function setDayPickerContainerRef(ref) {
    if (ref === this.dayPickerContainer) return;
    this.removeEventListeners();
    this.dayPickerContainer = ref;
    if (!ref) return;
    this.addEventListeners();
  };

  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };

  _proto.addEventListeners = function addEventListeners() {
    // We manually set event because React has not implemented onFocusIn/onFocusOut.
    // Keep an eye on https://github.com/facebook/react/issues/6410 for updates
    // We use "blur w/ useCapture param" vs "onfocusout" for FF browser support
    this.removeFocusOutEventListener = (0, _consolidatedEvents.addEventListener)(this.dayPickerContainer, 'focusout', this.onFocusOut);
  };

  _proto.removeEventListeners = function removeEventListeners() {
    if (this.removeFocusOutEventListener) this.removeFocusOutEventListener();
  };

  _proto.disableScroll = function disableScroll() {
    var _this$props3 = this.props,
        appendToBody = _this$props3.appendToBody,
        propDisableScroll = _this$props3.disableScroll,
        focused = _this$props3.focused;
    if (!appendToBody && !propDisableScroll) return;
    if (!focused) return; // Disable scroll for every ancestor of this <SingleDatePicker> up to the
    // document level. This ensures the input and the picker never move. Other
    // sibling elements or the picker itself can scroll.

    this.enableScroll = (0, _disableScroll2["default"])(this.container);
  }
  /* istanbul ignore next */
  ;

  _proto.responsivizePickerPosition = function responsivizePickerPosition() {
    // It's possible the portal props have been changed in response to window resizes
    // So let's ensure we reset this back to the base state each time
    this.setState({
      dayPickerContainerStyles: {}
    });
    var _this$props4 = this.props,
        openDirection = _this$props4.openDirection,
        anchorDirection = _this$props4.anchorDirection,
        horizontalMargin = _this$props4.horizontalMargin,
        withPortal = _this$props4.withPortal,
        withFullScreenPortal = _this$props4.withFullScreenPortal,
        appendToBody = _this$props4.appendToBody,
        focused = _this$props4.focused;
    var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

    if (!focused) {
      return;
    }

    var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

    if (!withPortal && !withFullScreenPortal) {
      var containerRect = this.dayPickerContainer.getBoundingClientRect();
      var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
      var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
      this.setState({
        dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), {}, appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
      });
    }
  };

  _proto.showKeyboardShortcutsPanel = function showKeyboardShortcutsPanel() {
    this.setState({
      isInputFocused: false,
      isDayPickerFocused: true,
      showKeyboardShortcuts: true
    });
  };

  _proto.maybeRenderDayPickerWithPortal = function maybeRenderDayPickerWithPortal() {
    var _this$props5 = this.props,
        focused = _this$props5.focused,
        withPortal = _this$props5.withPortal,
        withFullScreenPortal = _this$props5.withFullScreenPortal,
        appendToBody = _this$props5.appendToBody;

    if (!focused) {
      return null;
    }

    if (withPortal || withFullScreenPortal || appendToBody) {
      return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
    }

    return this.renderDayPicker();
  };

  _proto.renderDayPicker = function renderDayPicker() {
    var _this$props6 = this.props,
        anchorDirection = _this$props6.anchorDirection,
        openDirection = _this$props6.openDirection,
        onDateChange = _this$props6.onDateChange,
        date = _this$props6.date,
        onFocusChange = _this$props6.onFocusChange,
        focused = _this$props6.focused,
        enableOutsideDays = _this$props6.enableOutsideDays,
        numberOfMonths = _this$props6.numberOfMonths,
        orientation = _this$props6.orientation,
        monthFormat = _this$props6.monthFormat,
        dayPickerNavigationInlineStyles = _this$props6.dayPickerNavigationInlineStyles,
        navPosition = _this$props6.navPosition,
        navPrev = _this$props6.navPrev,
        navNext = _this$props6.navNext,
        renderNavPrevButton = _this$props6.renderNavPrevButton,
        renderNavNextButton = _this$props6.renderNavNextButton,
        onPrevMonthClick = _this$props6.onPrevMonthClick,
        onNextMonthClick = _this$props6.onNextMonthClick,
        onClose = _this$props6.onClose,
        withPortal = _this$props6.withPortal,
        withFullScreenPortal = _this$props6.withFullScreenPortal,
        keepOpenOnDateSelect = _this$props6.keepOpenOnDateSelect,
        initialVisibleMonth = _this$props6.initialVisibleMonth,
        renderMonthText = _this$props6.renderMonthText,
        renderWeekHeaderElement = _this$props6.renderWeekHeaderElement,
        renderCalendarDay = _this$props6.renderCalendarDay,
        renderDayContents = _this$props6.renderDayContents,
        renderCalendarInfo = _this$props6.renderCalendarInfo,
        renderMonthElement = _this$props6.renderMonthElement,
        calendarInfoPosition = _this$props6.calendarInfoPosition,
        hideKeyboardShortcutsPanel = _this$props6.hideKeyboardShortcutsPanel,
        firstDayOfWeek = _this$props6.firstDayOfWeek,
        customCloseIcon = _this$props6.customCloseIcon,
        phrases = _this$props6.phrases,
        dayAriaLabelFormat = _this$props6.dayAriaLabelFormat,
        daySize = _this$props6.daySize,
        isRTL = _this$props6.isRTL,
        isOutsideRange = _this$props6.isOutsideRange,
        isDayBlocked = _this$props6.isDayBlocked,
        isDayHighlighted = _this$props6.isDayHighlighted,
        weekDayFormat = _this$props6.weekDayFormat,
        styles = _this$props6.styles,
        verticalHeight = _this$props6.verticalHeight,
        transitionDuration = _this$props6.transitionDuration,
        verticalSpacing = _this$props6.verticalSpacing,
        horizontalMonthPadding = _this$props6.horizontalMonthPadding,
        small = _this$props6.small,
        reactDates = _this$props6.theme.reactDates;
    var _this$state = this.state,
        dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
        isDayPickerFocused = _this$state.isDayPickerFocused,
        showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
    var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

    var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], null);

    var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
    var withAnyPortal = withPortal || withFullScreenPortal;
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    /* eslint-disable jsx-a11y/click-events-have-key-events */

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setDayPickerContainerRef
    }, (0, _reactWithStyles.css)(styles.SingleDatePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.SingleDatePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.SingleDatePicker_picker__directionRight, openDirection === _constants.OPEN_DOWN && styles.SingleDatePicker_picker__openDown, openDirection === _constants.OPEN_UP && styles.SingleDatePicker_picker__openUp, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
      top: inputHeight + verticalSpacing
    }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
      bottom: inputHeight + verticalSpacing
    }, orientation === _constants.HORIZONTAL_ORIENTATION && styles.SingleDatePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.SingleDatePicker_picker__vertical, withAnyPortal && styles.SingleDatePicker_picker__portal, withFullScreenPortal && styles.SingleDatePicker_picker__fullScreenPortal, isRTL && styles.SingleDatePicker_picker__rtl, dayPickerContainerStyles), {
      onClick: onOutsideClick
    }), _react["default"].createElement(_DayPickerSingleDateController["default"], {
      date: date,
      onDateChange: onDateChange,
      onFocusChange: onFocusChange,
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      numberOfMonths: numberOfMonths,
      monthFormat: monthFormat,
      withPortal: withAnyPortal,
      focused: focused,
      keepOpenOnDateSelect: keepOpenOnDateSelect,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      initialVisibleMonth: initialVisibleMonth,
      dayPickerNavigationInlineStyles: dayPickerNavigationInlineStyles,
      navPosition: navPosition,
      navPrev: navPrev,
      navNext: navNext,
      renderNavPrevButton: renderNavPrevButton,
      renderNavNextButton: renderNavNextButton,
      onPrevMonthClick: onPrevMonthClick,
      onNextMonthClick: onNextMonthClick,
      onClose: onClose,
      renderMonthText: renderMonthText,
      renderWeekHeaderElement: renderWeekHeaderElement,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isDayPickerFocused,
      showKeyboardShortcuts: showKeyboardShortcuts,
      onBlur: this.onDayPickerBlur,
      phrases: phrases,
      dayAriaLabelFormat: dayAriaLabelFormat,
      daySize: daySize,
      isRTL: isRTL,
      isOutsideRange: isOutsideRange,
      isDayBlocked: isDayBlocked,
      isDayHighlighted: isDayHighlighted,
      firstDayOfWeek: firstDayOfWeek,
      weekDayFormat: weekDayFormat,
      verticalHeight: verticalHeight,
      transitionDuration: transitionDuration,
      horizontalMonthPadding: horizontalMonthPadding
    }), withFullScreenPortal && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton), {
      "aria-label": phrases.closeDatePicker,
      type: "button",
      onClick: this.onOutsideClick
    }), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton_svg), closeIcon)));
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    /* eslint-enable jsx-a11y/click-events-have-key-events */
  };

  _proto.render = function render() {
    var _this$props7 = this.props,
        id = _this$props7.id,
        placeholder = _this$props7.placeholder,
        ariaLabel = _this$props7.ariaLabel,
        disabled = _this$props7.disabled,
        focused = _this$props7.focused,
        required = _this$props7.required,
        readOnly = _this$props7.readOnly,
        openDirection = _this$props7.openDirection,
        showClearDate = _this$props7.showClearDate,
        showDefaultInputIcon = _this$props7.showDefaultInputIcon,
        inputIconPosition = _this$props7.inputIconPosition,
        customCloseIcon = _this$props7.customCloseIcon,
        customInputIcon = _this$props7.customInputIcon,
        date = _this$props7.date,
        onDateChange = _this$props7.onDateChange,
        displayFormat = _this$props7.displayFormat,
        phrases = _this$props7.phrases,
        withPortal = _this$props7.withPortal,
        withFullScreenPortal = _this$props7.withFullScreenPortal,
        screenReaderInputMessage = _this$props7.screenReaderInputMessage,
        isRTL = _this$props7.isRTL,
        noBorder = _this$props7.noBorder,
        block = _this$props7.block,
        small = _this$props7.small,
        regular = _this$props7.regular,
        verticalSpacing = _this$props7.verticalSpacing,
        reopenPickerOnClearDate = _this$props7.reopenPickerOnClearDate,
        keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
        styles = _this$props7.styles,
        isOutsideRange = _this$props7.isOutsideRange;
    var isInputFocused = this.state.isInputFocused;
    var enableOutsideClick = !withPortal && !withFullScreenPortal;
    var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

    var input = _react["default"].createElement(_SingleDatePickerInputController["default"], {
      id: id,
      placeholder: placeholder,
      ariaLabel: ariaLabel,
      focused: focused,
      isFocused: isInputFocused,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      showCaret: !withPortal && !withFullScreenPortal && !hideFang,
      showClearDate: showClearDate,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      isOutsideRange: isOutsideRange,
      customCloseIcon: customCloseIcon,
      customInputIcon: customInputIcon,
      date: date,
      onDateChange: onDateChange,
      displayFormat: displayFormat,
      onFocusChange: this.onInputFocus,
      onKeyDownArrowDown: this.onDayPickerFocus,
      onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
      screenReaderMessage: screenReaderInputMessage,
      phrases: phrases,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing,
      reopenPickerOnClearDate: reopenPickerOnClearDate,
      keepOpenOnDateSelect: keepOpenOnDateSelect
    }, this.maybeRenderDayPickerWithPortal());

    return _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this.setContainerRef
    }, (0, _reactWithStyles.css)(styles.SingleDatePicker, block && styles.SingleDatePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
      onOutsideClick: this.onOutsideClick
    }, input), enableOutsideClick || input);
  };

  return SingleDatePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureSingleDatePicker = SingleDatePicker;
SingleDatePicker.propTypes =  false ? 0 : {};
SingleDatePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      zIndex = _ref3$reactDates.zIndex;
  return {
    SingleDatePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    SingleDatePicker__block: {
      display: 'block'
    },
    SingleDatePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    SingleDatePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    SingleDatePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    SingleDatePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    SingleDatePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePicker);

exports.default = _default;

/***/ }),

/***/ 10909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _reactWithStyles = __webpack_require__(17224);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _noflip = _interopRequireDefault(__webpack_require__(39286));

var _DateInput = _interopRequireDefault(__webpack_require__(60128));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(45174));

var _CloseButton = _interopRequireDefault(__webpack_require__(27798));

var _CalendarIcon = _interopRequireDefault(__webpack_require__(40142));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes =  false ? 0 : {};
var defaultProps = {
  children: null,
  placeholder: 'Select Date',
  ariaLabel: undefined,
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  isFocused: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customCloseIcon: null,
  customInputIcon: null,
  isRTL: false,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  onChange: function onChange() {},
  onClearDate: function onClearDate() {},
  onFocus: function onFocus() {},
  onKeyDownShiftTab: function onKeyDownShiftTab() {},
  onKeyDownTab: function onKeyDownTab() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases
};

function SingleDatePickerInput(_ref) {
  var id = _ref.id,
      children = _ref.children,
      placeholder = _ref.placeholder,
      ariaLabel = _ref.ariaLabel,
      displayValue = _ref.displayValue,
      focused = _ref.focused,
      isFocused = _ref.isFocused,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      showCaret = _ref.showCaret,
      showClearDate = _ref.showClearDate,
      showDefaultInputIcon = _ref.showDefaultInputIcon,
      inputIconPosition = _ref.inputIconPosition,
      phrases = _ref.phrases,
      onClearDate = _ref.onClearDate,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onKeyDownShiftTab = _ref.onKeyDownShiftTab,
      onKeyDownTab = _ref.onKeyDownTab,
      onKeyDownArrowDown = _ref.onKeyDownArrowDown,
      onKeyDownQuestionMark = _ref.onKeyDownQuestionMark,
      screenReaderMessage = _ref.screenReaderMessage,
      customCloseIcon = _ref.customCloseIcon,
      customInputIcon = _ref.customInputIcon,
      openDirection = _ref.openDirection,
      isRTL = _ref.isRTL,
      noBorder = _ref.noBorder,
      block = _ref.block,
      small = _ref.small,
      regular = _ref.regular,
      verticalSpacing = _ref.verticalSpacing,
      styles = _ref.styles;

  var calendarIcon = customInputIcon || _react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.SingleDatePickerInput_calendarIcon_svg));

  var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.SingleDatePickerInput_clearDate_svg, small && styles.SingleDatePickerInput_clearDate_svg__small));

  var screenReaderText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;

  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.SingleDatePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onFocus
  }), calendarIcon);

  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePickerInput, disabled && styles.SingleDatePickerInput__disabled, isRTL && styles.SingleDatePickerInput__rtl, !noBorder && styles.SingleDatePickerInput__withBorder, block && styles.SingleDatePickerInput__block, showClearDate && styles.SingleDatePickerInput__showClearDate), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, _react["default"].createElement(_DateInput["default"], {
    id: id,
    placeholder: placeholder,
    ariaLabel: ariaLabel,
    displayValue: displayValue,
    screenReaderMessage: screenReaderText,
    focused: focused,
    isFocused: isFocused,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDownShiftTab: onKeyDownShiftTab,
    onKeyDownTab: onKeyDownTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    openDirection: openDirection,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular,
    block: block
  }), children, showClearDate && _react["default"].createElement("button", (0, _extends2["default"])({}, (0, _reactWithStyles.css)(styles.SingleDatePickerInput_clearDate, small && styles.SingleDatePickerInput_clearDate__small, !customCloseIcon && styles.SingleDatePickerInput_clearDate__default, !displayValue && styles.SingleDatePickerInput_clearDate__hide), {
    type: "button",
    "aria-label": phrases.clearDate,
    disabled: disabled,
    onClick: onClearDate
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}

SingleDatePickerInput.propTypes =  false ? 0 : {};
SingleDatePickerInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color;
  return {
    SingleDatePickerInput: {
      display: 'inline-block',
      backgroundColor: color.background
    },
    SingleDatePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    SingleDatePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePickerInput__disabled: {
      backgroundColor: color.disabled
    },
    SingleDatePickerInput__block: {
      display: 'block'
    },
    SingleDatePickerInput__showClearDate: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    SingleDatePickerInput_clearDate: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    SingleDatePickerInput_clearDate__default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    SingleDatePickerInput_clearDate__small: {
      padding: 6
    },
    SingleDatePickerInput_clearDate__hide: {
      visibility: 'hidden'
    },
    SingleDatePickerInput_clearDate_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    SingleDatePickerInput_clearDate_svg__small: {
      height: 9
    },
    SingleDatePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    SingleDatePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePickerInput);

exports.default = _default;

/***/ }),

/***/ 17530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _enzymeShallowEqual = _interopRequireDefault(__webpack_require__(50760));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _SingleDatePickerInput = _interopRequireDefault(__webpack_require__(10909));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(45174));

var _DisabledShape = _interopRequireDefault(__webpack_require__(38712));

var _toMomentObject = _interopRequireDefault(__webpack_require__(11526));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__(5027));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(78890));

var _constants = __webpack_require__(45388);

var propTypes =  false ? 0 : {};
var defaultProps = {
  children: null,
  date: null,
  focused: false,
  placeholder: '',
  ariaLabel: undefined,
  screenReaderMessage: 'Date',
  showClearDate: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isOutsideRange: function isOutsideRange(day) {
    return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
  },
  displayFormat: function displayFormat() {
    return _moment["default"].localeData().longDateFormat('L');
  },
  onClose: function onClose() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  customInputIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases,
  isRTL: false
};

var SingleDatePickerInputController =
/*#__PURE__*/
function (_ref) {
  (0, _inheritsLoose2["default"])(SingleDatePickerInputController, _ref);
  var _proto = SingleDatePickerInputController.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };

  function SingleDatePickerInputController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFocus = _this.onFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onClearFocus = _this.onClearFocus.bind((0, _assertThisInitialized2["default"])(_this));
    _this.clearDate = _this.clearDate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  _proto.onChange = function onChange(dateString) {
    var _this$props = this.props,
        isOutsideRange = _this$props.isOutsideRange,
        keepOpenOnDateSelect = _this$props.keepOpenOnDateSelect,
        onDateChange = _this$props.onDateChange,
        onFocusChange = _this$props.onFocusChange,
        onClose = _this$props.onClose;
    var newDate = (0, _toMomentObject["default"])(dateString, this.getDisplayFormat());
    var isValid = newDate && !isOutsideRange(newDate);

    if (isValid) {
      onDateChange(newDate);

      if (!keepOpenOnDateSelect) {
        onFocusChange({
          focused: false
        });
        onClose({
          date: newDate
        });
      }
    } else {
      onDateChange(null);
    }
  };

  _proto.onFocus = function onFocus() {
    var _this$props2 = this.props,
        onFocusChange = _this$props2.onFocusChange,
        disabled = _this$props2.disabled;

    if (!disabled) {
      onFocusChange({
        focused: true
      });
    }
  };

  _proto.onClearFocus = function onClearFocus() {
    var _this$props3 = this.props,
        focused = _this$props3.focused,
        onFocusChange = _this$props3.onFocusChange,
        onClose = _this$props3.onClose,
        date = _this$props3.date;
    if (!focused) return;
    onFocusChange({
      focused: false
    });
    onClose({
      date: date
    });
  };

  _proto.getDisplayFormat = function getDisplayFormat() {
    var displayFormat = this.props.displayFormat;
    return typeof displayFormat === 'string' ? displayFormat : displayFormat();
  };

  _proto.getDateString = function getDateString(date) {
    var displayFormat = this.getDisplayFormat();

    if (date && displayFormat) {
      return date && date.format(displayFormat);
    }

    return (0, _toLocalizedDateString["default"])(date);
  };

  _proto.clearDate = function clearDate() {
    var _this$props4 = this.props,
        onDateChange = _this$props4.onDateChange,
        reopenPickerOnClearDate = _this$props4.reopenPickerOnClearDate,
        onFocusChange = _this$props4.onFocusChange;
    onDateChange(null);

    if (reopenPickerOnClearDate) {
      onFocusChange({
        focused: true
      });
    }
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        children = _this$props5.children,
        id = _this$props5.id,
        placeholder = _this$props5.placeholder,
        ariaLabel = _this$props5.ariaLabel,
        disabled = _this$props5.disabled,
        focused = _this$props5.focused,
        isFocused = _this$props5.isFocused,
        required = _this$props5.required,
        readOnly = _this$props5.readOnly,
        openDirection = _this$props5.openDirection,
        showClearDate = _this$props5.showClearDate,
        showCaret = _this$props5.showCaret,
        showDefaultInputIcon = _this$props5.showDefaultInputIcon,
        inputIconPosition = _this$props5.inputIconPosition,
        customCloseIcon = _this$props5.customCloseIcon,
        customInputIcon = _this$props5.customInputIcon,
        date = _this$props5.date,
        phrases = _this$props5.phrases,
        onKeyDownArrowDown = _this$props5.onKeyDownArrowDown,
        onKeyDownQuestionMark = _this$props5.onKeyDownQuestionMark,
        screenReaderMessage = _this$props5.screenReaderMessage,
        isRTL = _this$props5.isRTL,
        noBorder = _this$props5.noBorder,
        block = _this$props5.block,
        small = _this$props5.small,
        regular = _this$props5.regular,
        verticalSpacing = _this$props5.verticalSpacing;
    var displayValue = this.getDateString(date);
    return _react["default"].createElement(_SingleDatePickerInput["default"], {
      id: id,
      placeholder: placeholder,
      ariaLabel: ariaLabel,
      focused: focused,
      isFocused: isFocused,
      disabled: disabled,
      required: required,
      readOnly: readOnly,
      openDirection: openDirection,
      showCaret: showCaret,
      onClearDate: this.clearDate,
      showClearDate: showClearDate,
      showDefaultInputIcon: showDefaultInputIcon,
      inputIconPosition: inputIconPosition,
      customCloseIcon: customCloseIcon,
      customInputIcon: customInputIcon,
      displayValue: displayValue,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onKeyDownShiftTab: this.onClearFocus,
      onKeyDownArrowDown: onKeyDownArrowDown,
      onKeyDownQuestionMark: onKeyDownQuestionMark,
      screenReaderMessage: screenReaderMessage,
      phrases: phrases,
      isRTL: isRTL,
      noBorder: noBorder,
      block: block,
      small: small,
      regular: regular,
      verticalSpacing: verticalSpacing
    }, children);
  };

  return SingleDatePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports.default = SingleDatePickerInputController;
SingleDatePickerInputController.propTypes =  false ? 0 : {};
SingleDatePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ 45388:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MODIFIER_KEY_NAMES = exports.DEFAULT_VERTICAL_SPACING = exports.FANG_HEIGHT_PX = exports.FANG_WIDTH_PX = exports.WEEKDAYS = exports.BLOCKED_MODIFIER = exports.DAY_SIZE = exports.OPEN_UP = exports.OPEN_DOWN = exports.ANCHOR_RIGHT = exports.ANCHOR_LEFT = exports.INFO_POSITION_AFTER = exports.INFO_POSITION_BEFORE = exports.INFO_POSITION_BOTTOM = exports.INFO_POSITION_TOP = exports.ICON_AFTER_POSITION = exports.ICON_BEFORE_POSITION = exports.NAV_POSITION_TOP = exports.NAV_POSITION_BOTTOM = exports.VERTICAL_SCROLLABLE = exports.VERTICAL_ORIENTATION = exports.HORIZONTAL_ORIENTATION = exports.END_DATE = exports.START_DATE = exports.ISO_MONTH_FORMAT = exports.ISO_FORMAT = exports.DISPLAY_FORMAT = void 0;
var DISPLAY_FORMAT = 'L';
exports.DISPLAY_FORMAT = DISPLAY_FORMAT;
var ISO_FORMAT = 'YYYY-MM-DD';
exports.ISO_FORMAT = ISO_FORMAT;
var ISO_MONTH_FORMAT = 'YYYY-MM'; // TODO delete this line of dead code on next breaking change

exports.ISO_MONTH_FORMAT = ISO_MONTH_FORMAT;
var START_DATE = 'startDate';
exports.START_DATE = START_DATE;
var END_DATE = 'endDate';
exports.END_DATE = END_DATE;
var HORIZONTAL_ORIENTATION = 'horizontal';
exports.HORIZONTAL_ORIENTATION = HORIZONTAL_ORIENTATION;
var VERTICAL_ORIENTATION = 'vertical';
exports.VERTICAL_ORIENTATION = VERTICAL_ORIENTATION;
var VERTICAL_SCROLLABLE = 'verticalScrollable';
exports.VERTICAL_SCROLLABLE = VERTICAL_SCROLLABLE;
var NAV_POSITION_BOTTOM = 'navPositionBottom';
exports.NAV_POSITION_BOTTOM = NAV_POSITION_BOTTOM;
var NAV_POSITION_TOP = 'navPositionTop';
exports.NAV_POSITION_TOP = NAV_POSITION_TOP;
var ICON_BEFORE_POSITION = 'before';
exports.ICON_BEFORE_POSITION = ICON_BEFORE_POSITION;
var ICON_AFTER_POSITION = 'after';
exports.ICON_AFTER_POSITION = ICON_AFTER_POSITION;
var INFO_POSITION_TOP = 'top';
exports.INFO_POSITION_TOP = INFO_POSITION_TOP;
var INFO_POSITION_BOTTOM = 'bottom';
exports.INFO_POSITION_BOTTOM = INFO_POSITION_BOTTOM;
var INFO_POSITION_BEFORE = 'before';
exports.INFO_POSITION_BEFORE = INFO_POSITION_BEFORE;
var INFO_POSITION_AFTER = 'after';
exports.INFO_POSITION_AFTER = INFO_POSITION_AFTER;
var ANCHOR_LEFT = 'left';
exports.ANCHOR_LEFT = ANCHOR_LEFT;
var ANCHOR_RIGHT = 'right';
exports.ANCHOR_RIGHT = ANCHOR_RIGHT;
var OPEN_DOWN = 'down';
exports.OPEN_DOWN = OPEN_DOWN;
var OPEN_UP = 'up';
exports.OPEN_UP = OPEN_UP;
var DAY_SIZE = 39;
exports.DAY_SIZE = DAY_SIZE;
var BLOCKED_MODIFIER = 'blocked';
exports.BLOCKED_MODIFIER = BLOCKED_MODIFIER;
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
exports.WEEKDAYS = WEEKDAYS;
var FANG_WIDTH_PX = 20;
exports.FANG_WIDTH_PX = FANG_WIDTH_PX;
var FANG_HEIGHT_PX = 10;
exports.FANG_HEIGHT_PX = FANG_HEIGHT_PX;
var DEFAULT_VERTICAL_SPACING = 22;
exports.DEFAULT_VERTICAL_SPACING = DEFAULT_VERTICAL_SPACING;
var MODIFIER_KEY_NAMES = new Set(['Shift', 'Control', 'Alt', 'Meta']);
exports.MODIFIER_KEY_NAMES = MODIFIER_KEY_NAMES;

/***/ }),

/***/ 98304:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CalendarDayPhrases = exports.DayPickerNavigationPhrases = exports.DayPickerKeyboardShortcutsPhrases = exports.DayPickerPhrases = exports.SingleDatePickerInputPhrases = exports.SingleDatePickerPhrases = exports.DateRangePickerInputPhrases = exports.DateRangePickerPhrases = exports.default = void 0;
var calendarLabel = 'Calendar';
var roleDescription = 'datepicker';
var closeDatePicker = 'Close';
var focusStartDate = 'Interact with the calendar and add the check-in date for your trip.';
var clearDate = 'Clear Date';
var clearDates = 'Clear Dates';
var jumpToPrevMonth = 'Move backward to switch to the previous month.';
var jumpToNextMonth = 'Move forward to switch to the next month.';
var keyboardShortcuts = 'Keyboard Shortcuts';
var showKeyboardShortcutsPanel = 'Open the keyboard shortcuts panel.';
var hideKeyboardShortcutsPanel = 'Close the shortcuts panel.';
var openThisPanel = 'Open this panel.';
var enterKey = 'Enter key';
var leftArrowRightArrow = 'Right and left arrow keys';
var upArrowDownArrow = 'up and down arrow keys';
var pageUpPageDown = 'page up and page down keys';
var homeEnd = 'Home and end keys';
var escape = 'Escape key';
var questionMark = 'Question mark';
var selectFocusedDate = 'Select the date in focus.';
var moveFocusByOneDay = 'Move backward (left) and forward (right) by one day.';
var moveFocusByOneWeek = 'Move backward (up) and forward (down) by one week.';
var moveFocusByOneMonth = 'Switch months.';
var moveFocustoStartAndEndOfWeek = 'Go to the first or last day of a week.';
var returnFocusToInput = 'Return to the date input field.';
var keyboardForwardNavigationInstructions = 'Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.';
var keyboardBackwardNavigationInstructions = 'Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.';

var chooseAvailableStartDate = function chooseAvailableStartDate(_ref) {
  var date = _ref.date;
  return "Choose ".concat(date, " as your check-in date. It\u2019s available.");
};

var chooseAvailableEndDate = function chooseAvailableEndDate(_ref2) {
  var date = _ref2.date;
  return "Choose ".concat(date, " as your check-out date. It\u2019s available.");
};

var chooseAvailableDate = function chooseAvailableDate(_ref3) {
  var date = _ref3.date;
  return date;
};

var dateIsUnavailable = function dateIsUnavailable(_ref4) {
  var date = _ref4.date;
  return "Not available. ".concat(date);
};

var dateIsSelected = function dateIsSelected(_ref5) {
  var date = _ref5.date;
  return "Selected. ".concat(date);
};

var dateIsSelectedAsStartDate = function dateIsSelectedAsStartDate(_ref6) {
  var date = _ref6.date;
  return "Selected as start date. ".concat(date);
};

var dateIsSelectedAsEndDate = function dateIsSelectedAsEndDate(_ref7) {
  var date = _ref7.date;
  return "Selected as end date. ".concat(date);
};

var _default = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  closeDatePicker: closeDatePicker,
  focusStartDate: focusStartDate,
  clearDate: clearDate,
  clearDates: clearDates,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.default = _default;
var DateRangePickerPhrases = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  closeDatePicker: closeDatePicker,
  clearDates: clearDates,
  focusStartDate: focusStartDate,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.DateRangePickerPhrases = DateRangePickerPhrases;
var DateRangePickerInputPhrases = {
  focusStartDate: focusStartDate,
  clearDates: clearDates,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions
};
exports.DateRangePickerInputPhrases = DateRangePickerInputPhrases;
var SingleDatePickerPhrases = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  closeDatePicker: closeDatePicker,
  clearDate: clearDate,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions,
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected
};
exports.SingleDatePickerPhrases = SingleDatePickerPhrases;
var SingleDatePickerInputPhrases = {
  clearDate: clearDate,
  keyboardForwardNavigationInstructions: keyboardForwardNavigationInstructions,
  keyboardBackwardNavigationInstructions: keyboardBackwardNavigationInstructions
};
exports.SingleDatePickerInputPhrases = SingleDatePickerInputPhrases;
var DayPickerPhrases = {
  calendarLabel: calendarLabel,
  roleDescription: roleDescription,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.DayPickerPhrases = DayPickerPhrases;
var DayPickerKeyboardShortcutsPhrases = {
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput
};
exports.DayPickerKeyboardShortcutsPhrases = DayPickerKeyboardShortcutsPhrases;
var DayPickerNavigationPhrases = {
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth
};
exports.DayPickerNavigationPhrases = DayPickerNavigationPhrases;
var CalendarDayPhrases = {
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.CalendarDayPhrases = CalendarDayPhrases;

/***/ }),

/***/ 62023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CalendarDay["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CalendarMonth["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CalendarMonthGrid["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DateRangePicker["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DateRangePickerInput["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DateRangePickerInputController["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DateRangePickerShape["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DayPicker["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DayPickerRangeController["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DayPickerSingleDateController["default"];
  }
});
Object.defineProperty(exports, "SingleDatePicker", ({
  enumerable: true,
  get: function get() {
    return _SingleDatePicker["default"];
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _SingleDatePickerInput["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _SingleDatePickerShape["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _isInclusivelyAfterDay["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _isInclusivelyBeforeDay["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _isNextDay["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _isSameDay["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _toISODateString["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _toLocalizedDateString["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _toMomentObject["default"];
  }
});

var _CalendarDay = _interopRequireDefault(__webpack_require__(55533));

var _CalendarMonth = _interopRequireDefault(__webpack_require__(86419));

var _CalendarMonthGrid = _interopRequireDefault(__webpack_require__(39137));

var _DateRangePicker = _interopRequireDefault(__webpack_require__(5012));

var _DateRangePickerInput = _interopRequireDefault(__webpack_require__(47524));

var _DateRangePickerInputController = _interopRequireDefault(__webpack_require__(21897));

var _DateRangePickerShape = _interopRequireDefault(__webpack_require__(18149));

var _DayPicker = _interopRequireDefault(__webpack_require__(65860));

var _DayPickerRangeController = _interopRequireDefault(__webpack_require__(25900));

var _DayPickerSingleDateController = _interopRequireDefault(__webpack_require__(99368));

var _SingleDatePicker = _interopRequireDefault(__webpack_require__(8745));

var _SingleDatePickerInput = _interopRequireDefault(__webpack_require__(10909));

var _SingleDatePickerShape = _interopRequireDefault(__webpack_require__(27451));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(78890));

var _isInclusivelyBeforeDay = _interopRequireDefault(__webpack_require__(50463));

var _isNextDay = _interopRequireDefault(__webpack_require__(57202));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

var _toISODateString = _interopRequireDefault(__webpack_require__(54162));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__(5027));

var _toMomentObject = _interopRequireDefault(__webpack_require__(11526));

/***/ }),

/***/ 65453:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(5135));

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ 11782:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.ANCHOR_LEFT, _constants.ANCHOR_RIGHT]);

exports.default = _default;

/***/ }),

/***/ 12003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.INFO_POSITION_TOP, _constants.INFO_POSITION_BOTTOM, _constants.INFO_POSITION_BEFORE, _constants.INFO_POSITION_AFTER]);

exports.default = _default;

/***/ }),

/***/ 18149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _FocusedInputShape = _interopRequireDefault(__webpack_require__(85101));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(45174));

var _OrientationShape = _interopRequireDefault(__webpack_require__(73185));

var _DisabledShape = _interopRequireDefault(__webpack_require__(38712));

var _AnchorDirectionShape = _interopRequireDefault(__webpack_require__(11782));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(12003));

var _NavPositionShape = _interopRequireDefault(__webpack_require__(98771));

var _default = {
  // required props for a functional interactive DateRangePicker
  startDate: _reactMomentProptypes["default"].momentObj,
  endDate: _reactMomentProptypes["default"].momentObj,
  onDatesChange: _propTypes["default"].func.isRequired,
  focusedInput: _FocusedInputShape["default"],
  onFocusChange: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func,
  // input related props
  startDateId: _propTypes["default"].string.isRequired,
  startDatePlaceholderText: _propTypes["default"].string,
  startDateOffset: _propTypes["default"].func,
  endDateOffset: _propTypes["default"].func,
  endDateId: _propTypes["default"].string.isRequired,
  endDatePlaceholderText: _propTypes["default"].string,
  startDateAriaLabel: _propTypes["default"].string,
  endDateAriaLabel: _propTypes["default"].string,
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  screenReaderInputMessage: _propTypes["default"].string,
  showClearDates: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  customArrowIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  keepFocusOnInput: _propTypes["default"].bool,
  // calendar presentation and interaction related props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  orientation: _OrientationShape["default"],
  anchorDirection: _AnchorDirectionShape["default"],
  openDirection: _OpenDirectionShape["default"],
  horizontalMargin: _propTypes["default"].number,
  withPortal: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  appendToBody: _propTypes["default"].bool,
  disableScroll: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  firstDayOfWeek: _DayOfWeekShape["default"],
  initialVisibleMonth: _propTypes["default"].func,
  numberOfMonths: _propTypes["default"].number,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDates: _propTypes["default"].bool,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  // navigation related props
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  // day presentation and interaction related props
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  minimumNights: _propTypes["default"].number,
  minDate: _reactMomentProptypes["default"].momentObj,
  maxDate: _reactMomentProptypes["default"].momentObj,
  enableOutsideDays: _propTypes["default"].bool,
  isDayBlocked: _propTypes["default"].func,
  isOutsideRange: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // internationalization props
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DateRangePickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
};
exports.default = _default;

/***/ }),

/***/ 58182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf(_constants.WEEKDAYS);

exports.default = _default;

/***/ }),

/***/ 38712:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE])]);

exports.default = _default;

/***/ }),

/***/ 85101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE]);

exports.default = _default;

/***/ }),

/***/ 45174:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.ICON_BEFORE_POSITION, _constants.ICON_AFTER_POSITION]);

exports.default = _default;

/***/ }),

/***/ 10337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(319));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _airbnbPropTypes = __webpack_require__(78341);

var _default = (0, _airbnbPropTypes.and)([_propTypes["default"].instanceOf(Set), function modifiers(props, propName) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  var propValue = props[propName];
  var firstError;
  (0, _toConsumableArray2["default"])(propValue).some(function (v, i) {
    var _PropTypes$string;

    var fakePropName = "".concat(propName, ": index ").concat(i);
    firstError = (_PropTypes$string = _propTypes["default"].string).isRequired.apply(_PropTypes$string, [(0, _defineProperty2["default"])({}, fakePropName, v), fakePropName].concat(rest));
    return firstError != null;
  });
  return firstError == null ? null : firstError;
}], 'Modifiers (Set of Strings)');

exports.default = _default;

/***/ }),

/***/ 98771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.NAV_POSITION_BOTTOM, _constants.NAV_POSITION_TOP]);

exports.default = _default;

/***/ }),

/***/ 24496:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.OPEN_DOWN, _constants.OPEN_UP]);

exports.default = _default;

/***/ }),

/***/ 73185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION]);

exports.default = _default;

/***/ }),

/***/ 41073:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _constants = __webpack_require__(45388);

var _default = _propTypes["default"].oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION, _constants.VERTICAL_SCROLLABLE]);

exports.default = _default;

/***/ }),

/***/ 27451:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(42605));

var _airbnbPropTypes = __webpack_require__(78341);

var _defaultPhrases = __webpack_require__(98304);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(31983));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(45174));

var _OrientationShape = _interopRequireDefault(__webpack_require__(73185));

var _AnchorDirectionShape = _interopRequireDefault(__webpack_require__(11782));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(24496));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(58182));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(12003));

var _NavPositionShape = _interopRequireDefault(__webpack_require__(98771));

var _default = {
  // required props for a functional interactive SingleDatePicker
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func.isRequired,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func.isRequired,
  // input related props
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  screenReaderInputMessage: _propTypes["default"].string,
  showClearDate: _propTypes["default"].bool,
  customCloseIcon: _propTypes["default"].node,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  keepFocusOnInput: _propTypes["default"].bool,
  // calendar presentation and interaction related props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderWeekHeaderElement: _propTypes["default"].func,
  orientation: _OrientationShape["default"],
  anchorDirection: _AnchorDirectionShape["default"],
  openDirection: _OpenDirectionShape["default"],
  horizontalMargin: _propTypes["default"].number,
  withPortal: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  appendToBody: _propTypes["default"].bool,
  disableScroll: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  firstDayOfWeek: _DayOfWeekShape["default"],
  numberOfMonths: _propTypes["default"].number,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDate: _propTypes["default"].bool,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  // navigation related props
  dayPickerNavigationInlineStyles: _propTypes["default"].object,
  navPosition: _NavPositionShape["default"],
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  renderNavPrevButton: _propTypes["default"].func,
  renderNavNextButton: _propTypes["default"].func,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  // day presentation and interaction related props
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  enableOutsideDays: _propTypes["default"].bool,
  isDayBlocked: _propTypes["default"].func,
  isOutsideRange: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // internationalization props
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
};
exports.default = _default;

/***/ }),

/***/ 26729:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var core = {
  white: '#fff',
  gray: '#484848',
  grayLight: '#82888a',
  grayLighter: '#cacccd',
  grayLightest: '#f2f2f2',
  borderMedium: '#c4c4c4',
  border: '#dbdbdb',
  borderLight: '#e4e7e7',
  borderLighter: '#eceeee',
  borderBright: '#f4f5f5',
  primary: '#00a699',
  primaryShade_1: '#33dacd',
  primaryShade_2: '#66e2da',
  primaryShade_3: '#80e8e0',
  primaryShade_4: '#b2f1ec',
  primary_dark: '#008489',
  secondary: '#007a87',
  yellow: '#ffe8bc',
  yellow_dark: '#ffce71'
};
var _default = {
  reactDates: {
    zIndex: 0,
    border: {
      input: {
        border: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: '2px solid transparent',
        borderLeft: 0,
        outlineFocused: 0,
        borderFocused: 0,
        borderTopFocused: 0,
        borderLeftFocused: 0,
        borderBottomFocused: "2px solid ".concat(core.primary_dark),
        borderRightFocused: 0,
        borderRadius: 0
      },
      pickerInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2
      }
    },
    color: {
      core: core,
      disabled: core.grayLightest,
      background: core.white,
      backgroundDark: '#f2f2f2',
      backgroundFocused: core.white,
      border: 'rgb(219, 219, 219)',
      text: core.gray,
      textDisabled: core.border,
      textFocused: '#007a87',
      placeholderText: '#757575',
      outside: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      highlighted: {
        backgroundColor: core.yellow,
        backgroundColor_active: core.yellow_dark,
        backgroundColor_hover: core.yellow_dark,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      minimumNights: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLighter,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      },
      hoveredSpan: {
        backgroundColor: core.primaryShade_4,
        backgroundColor_active: core.primaryShade_3,
        backgroundColor_hover: core.primaryShade_4,
        borderColor: core.primaryShade_3,
        borderColor_active: core.primaryShade_3,
        borderColor_hover: core.primaryShade_3,
        color: core.secondary,
        color_active: core.secondary,
        color_hover: core.secondary
      },
      selectedSpan: {
        backgroundColor: core.primaryShade_2,
        backgroundColor_active: core.primaryShade_1,
        backgroundColor_hover: core.primaryShade_1,
        borderColor: core.primaryShade_1,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      selected: {
        backgroundColor: core.primary,
        backgroundColor_active: core.primary,
        backgroundColor_hover: core.primary,
        borderColor: core.primary,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      blocked_calendar: {
        backgroundColor: core.grayLighter,
        backgroundColor_active: core.grayLighter,
        backgroundColor_hover: core.grayLighter,
        borderColor: core.grayLighter,
        borderColor_active: core.grayLighter,
        borderColor_hover: core.grayLighter,
        color: core.grayLight,
        color_active: core.grayLight,
        color_hover: core.grayLight
      },
      blocked_out_of_range: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLight,
        borderColor_active: core.borderLight,
        borderColor_hover: core.borderLight,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      }
    },
    spacing: {
      dayPickerHorizontalPadding: 9,
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      displayTextPaddingVertical: undefined,
      displayTextPaddingTop: 11,
      displayTextPaddingBottom: 9,
      displayTextPaddingHorizontal: undefined,
      displayTextPaddingLeft: 11,
      displayTextPaddingRight: 11,
      displayTextPaddingVertical_small: undefined,
      displayTextPaddingTop_small: 7,
      displayTextPaddingBottom_small: 5,
      displayTextPaddingHorizontal_small: undefined,
      displayTextPaddingLeft_small: 7,
      displayTextPaddingRight_small: 7
    },
    sizing: {
      inputWidth: 130,
      inputWidth_small: 97,
      arrowWidth: 24
    },
    noScrollBarOnVerticalScrollable: false,
    font: {
      size: 14,
      captionSize: 18,
      input: {
        size: 19,
        weight: 200,
        lineHeight: '24px',
        size_small: 15,
        lineHeight_small: '18px',
        letterSpacing_small: '0.2px',
        styleDisabled: 'italic'
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 60403:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = calculateDimension;

function calculateDimension(el, axis) {
  var borderBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var withMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!el) {
    return 0;
  }

  var axisStart = axis === 'width' ? 'Left' : 'Top';
  var axisEnd = axis === 'width' ? 'Right' : 'Bottom'; // Only read styles if we need to

  var style = !borderBox || withMargin ? window.getComputedStyle(el) : null; // Offset includes border and padding

  var offsetWidth = el.offsetWidth,
      offsetHeight = el.offsetHeight;
  var size = axis === 'width' ? offsetWidth : offsetHeight; // Get the inner size

  if (!borderBox) {
    size -= parseFloat(style["padding".concat(axisStart)]) + parseFloat(style["padding".concat(axisEnd)]) + parseFloat(style["border".concat(axisStart, "Width")]) + parseFloat(style["border".concat(axisEnd, "Width")]);
  } // Apply margin


  if (withMargin) {
    size += parseFloat(style["margin".concat(axisStart)]) + parseFloat(style["margin".concat(axisEnd)]);
  }

  return size;
}

/***/ }),

/***/ 1926:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getScrollParent = getScrollParent;
exports.getScrollAncestorsOverflowY = getScrollAncestorsOverflowY;
exports.default = disableScroll;

var getScrollingRoot = function getScrollingRoot() {
  return document.scrollingElement || document.documentElement;
};
/**
 * Recursively finds the scroll parent of a node. The scroll parrent of a node
 * is the closest node that is scrollable. A node is scrollable if:
 *  - it is allowed to scroll via CSS ('overflow-y' not visible or hidden);
 *  - and its children/content are "bigger" than the node's box height.
 *
 * The root of the document always scrolls by default.
 *
 * @param {HTMLElement} node Any DOM element.
 * @return {HTMLElement} The scroll parent element.
 */


function getScrollParent(node) {
  var parent = node.parentElement;
  if (parent == null) return getScrollingRoot();

  var _window$getComputedSt = window.getComputedStyle(parent),
      overflowY = _window$getComputedSt.overflowY;

  var canScroll = overflowY !== 'visible' && overflowY !== 'hidden';

  if (canScroll && parent.scrollHeight > parent.clientHeight) {
    return parent;
  }

  return getScrollParent(parent);
}
/**
 * Recursively traverses the tree upwards from the given node, capturing all
 * ancestor nodes that scroll along with their current 'overflow-y' CSS
 * property.
 *
 * @param {HTMLElement} node Any DOM element.
 * @param {Map<HTMLElement,string>} [acc] Accumulator map.
 * @return {Map<HTMLElement,string>} Map of ancestors with their 'overflow-y' value.
 */


function getScrollAncestorsOverflowY(node) {
  var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
  var scrollingRoot = getScrollingRoot();
  var scrollParent = getScrollParent(node);
  acc.set(scrollParent, scrollParent.style.overflowY);
  if (scrollParent === scrollingRoot) return acc;
  return getScrollAncestorsOverflowY(scrollParent, acc);
}
/**
 * Disabling the scroll on a node involves finding all the scrollable ancestors
 * and set their 'overflow-y' CSS property to 'hidden'. When all ancestors have
 * 'overflow-y: hidden' (up to the document element) there is no scroll
 * container, thus all the scroll outside of the node is disabled. In order to
 * enable scroll again, we store the previous value of the 'overflow-y' for
 * every ancestor in a closure and reset it back.
 *
 * @param {HTMLElement} node Any DOM element.
 */


function disableScroll(node) {
  var scrollAncestorsOverflowY = getScrollAncestorsOverflowY(node);

  var toggle = function toggle(on) {
    return scrollAncestorsOverflowY.forEach(function (overflowY, ancestor) {
      ancestor.style.setProperty('overflow-y', on ? 'hidden' : overflowY);
    });
  };

  toggle(true);
  return function () {
    return toggle(false);
  };
}

/***/ }),

/***/ 65446:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getActiveElement;

function getActiveElement() {
  return typeof document !== 'undefined' && document.activeElement;
}

/***/ }),

/***/ 6732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getCalendarDaySettings;

var _getPhrase = _interopRequireDefault(__webpack_require__(74748));

var _constants = __webpack_require__(45388);

function isSelected(modifiers) {
  return modifiers.has('selected') || modifiers.has('selected-span') || modifiers.has('selected-start') || modifiers.has('selected-end');
}

function shouldUseDefaultCursor(modifiers) {
  return modifiers.has('blocked-minimum-nights') || modifiers.has('blocked-calendar') || modifiers.has('blocked-out-of-range');
}

function isHoveredSpan(modifiers) {
  if (isSelected(modifiers)) return false;
  return modifiers.has('hovered-span') || modifiers.has('after-hovered-start') || modifiers.has('before-hovered-end');
}

function getAriaLabel(phrases, modifiers, day, ariaLabelFormat) {
  var chooseAvailableDate = phrases.chooseAvailableDate,
      dateIsUnavailable = phrases.dateIsUnavailable,
      dateIsSelected = phrases.dateIsSelected,
      dateIsSelectedAsStartDate = phrases.dateIsSelectedAsStartDate,
      dateIsSelectedAsEndDate = phrases.dateIsSelectedAsEndDate;
  var formattedDate = {
    date: day.format(ariaLabelFormat)
  };

  if (modifiers.has('selected-start') && dateIsSelectedAsStartDate) {
    return (0, _getPhrase["default"])(dateIsSelectedAsStartDate, formattedDate);
  }

  if (modifiers.has('selected-end') && dateIsSelectedAsEndDate) {
    return (0, _getPhrase["default"])(dateIsSelectedAsEndDate, formattedDate);
  }

  if (isSelected(modifiers) && dateIsSelected) {
    return (0, _getPhrase["default"])(dateIsSelected, formattedDate);
  }

  if (modifiers.has(_constants.BLOCKED_MODIFIER)) {
    return (0, _getPhrase["default"])(dateIsUnavailable, formattedDate);
  }

  return (0, _getPhrase["default"])(chooseAvailableDate, formattedDate);
}

function getCalendarDaySettings(day, ariaLabelFormat, daySize, modifiers, phrases) {
  return {
    ariaLabel: getAriaLabel(phrases, modifiers, day, ariaLabelFormat),
    hoveredSpan: isHoveredSpan(modifiers),
    isOutsideRange: modifiers.has('blocked-out-of-range'),
    selected: isSelected(modifiers),
    useDefaultCursor: shouldUseDefaultCursor(modifiers),
    daySizeStyles: {
      width: daySize,
      height: daySize - 1
    }
  };
}

/***/ }),

/***/ 57116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getCalendarMonthWeeks;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _constants = __webpack_require__(45388);

function getCalendarMonthWeeks(month, enableOutsideDays) {
  var firstDayOfWeek = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _moment["default"].localeData().firstDayOfWeek();

  if (!_moment["default"].isMoment(month) || !month.isValid()) {
    throw new TypeError('`month` must be a valid moment object');
  }

  if (_constants.WEEKDAYS.indexOf(firstDayOfWeek) === -1) {
    throw new TypeError('`firstDayOfWeek` must be an integer between 0 and 6');
  } // set utc offset to get correct dates in future (when timezone changes)


  var firstOfMonth = month.clone().startOf('month').hour(12);
  var lastOfMonth = month.clone().endOf('month').hour(12); // calculate the exact first and last days to fill the entire matrix
  // (considering days outside month)

  var prevDays = (firstOfMonth.day() + 7 - firstDayOfWeek) % 7;
  var nextDays = (firstDayOfWeek + 6 - lastOfMonth.day()) % 7;
  var firstDay = firstOfMonth.clone().subtract(prevDays, 'day');
  var lastDay = lastOfMonth.clone().add(nextDays, 'day');
  var totalDays = lastDay.diff(firstDay, 'days') + 1;
  var currentDay = firstDay.clone();
  var weeksInMonth = [];

  for (var i = 0; i < totalDays; i += 1) {
    if (i % 7 === 0) {
      weeksInMonth.push([]);
    }

    var day = null;

    if (i >= prevDays && i < totalDays - nextDays || enableOutsideDays) {
      day = currentDay.clone();
    }

    weeksInMonth[weeksInMonth.length - 1].push(day);
    currentDay.add(1, 'day');
  }

  return weeksInMonth;
}

/***/ }),

/***/ 46694:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getCalendarMonthWidth;

function getCalendarMonthWidth(daySize) {
  var calendarMonthPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return 7 * daySize + 2 * calendarMonthPadding + 1;
}

/***/ }),

/***/ 74133:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getDetachedContainerStyles;

var _constants = __webpack_require__(45388);

/**
 * Calculate and return a CSS transform style to position a detached element
 * next to a reference element. The open and anchor direction indicate wether
 * it should be positioned above/below and/or to the left/right of the
 * reference element.
 *
 * Assuming r(0,0), r(1,1), d(0,0), d(1,1) for the bottom-left and top-right
 * corners of the reference and detached elements, respectively:
 *  - openDirection = DOWN, anchorDirection = LEFT => d(0,1) == r(0,1)
 *  - openDirection = UP, anchorDirection = LEFT => d(0,0) == r(0,0)
 *  - openDirection = DOWN, anchorDirection = RIGHT => d(1,1) == r(1,1)
 *  - openDirection = UP, anchorDirection = RIGHT => d(1,0) == r(1,0)
 *
 * By using a CSS transform, we allow to further position it using
 * top/bottom CSS properties for the anchor gutter.
 *
 * @param {string} openDirection The vertical positioning of the popup
 * @param {string} anchorDirection The horizontal position of the popup
 * @param {HTMLElement} referenceEl The reference element
 */
function getDetachedContainerStyles(openDirection, anchorDirection, referenceEl) {
  var referenceRect = referenceEl.getBoundingClientRect();
  var offsetX = referenceRect.left;
  var offsetY = referenceRect.top;

  if (openDirection === _constants.OPEN_UP) {
    offsetY = -(window.innerHeight - referenceRect.bottom);
  }

  if (anchorDirection === _constants.ANCHOR_RIGHT) {
    offsetX = -(window.innerWidth - referenceRect.right);
  }

  return {
    transform: "translate3d(".concat(Math.round(offsetX), "px, ").concat(Math.round(offsetY), "px, 0)")
  };
}

/***/ }),

/***/ 25917:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getInputHeight;

/* eslint-disable camelcase */
function getPadding(vertical, top, bottom) {
  var isTopDefined = typeof top === 'number';
  var isBottomDefined = typeof bottom === 'number';
  var isVerticalDefined = typeof vertical === 'number';

  if (isTopDefined && isBottomDefined) {
    return top + bottom;
  }

  if (isTopDefined && isVerticalDefined) {
    return top + vertical;
  }

  if (isTopDefined) {
    return top;
  }

  if (isBottomDefined && isVerticalDefined) {
    return bottom + vertical;
  }

  if (isBottomDefined) {
    return bottom;
  }

  if (isVerticalDefined) {
    return 2 * vertical;
  }

  return 0;
}

function getInputHeight(_ref, small) {
  var _ref$font$input = _ref.font.input,
      lineHeight = _ref$font$input.lineHeight,
      lineHeight_small = _ref$font$input.lineHeight_small,
      _ref$spacing = _ref.spacing,
      inputPadding = _ref$spacing.inputPadding,
      displayTextPaddingVertical = _ref$spacing.displayTextPaddingVertical,
      displayTextPaddingTop = _ref$spacing.displayTextPaddingTop,
      displayTextPaddingBottom = _ref$spacing.displayTextPaddingBottom,
      displayTextPaddingVertical_small = _ref$spacing.displayTextPaddingVertical_small,
      displayTextPaddingTop_small = _ref$spacing.displayTextPaddingTop_small,
      displayTextPaddingBottom_small = _ref$spacing.displayTextPaddingBottom_small;
  var calcLineHeight = small ? lineHeight_small : lineHeight;
  var padding = small ? getPadding(displayTextPaddingVertical_small, displayTextPaddingTop_small, displayTextPaddingBottom_small) : getPadding(displayTextPaddingVertical, displayTextPaddingTop, displayTextPaddingBottom);
  return parseInt(calcLineHeight, 10) + 2 * inputPadding + padding;
}

/***/ }),

/***/ 93065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getNumberOfCalendarMonthWeeks;

var _moment = _interopRequireDefault(__webpack_require__(30381));

function getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek) {
  var weekDayDiff = firstDayOfMonth.day() - firstDayOfWeek;
  return (weekDayDiff + 7) % 7;
}

function getNumberOfCalendarMonthWeeks(month) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _moment["default"].localeData().firstDayOfWeek();
  var firstDayOfMonth = month.clone().startOf('month');
  var numBlankDays = getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek);
  return Math.ceil((numBlankDays + month.daysInMonth()) / 7);
}

/***/ }),

/***/ 74748:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getPhrase;

function getPhrase(phrase, args) {
  if (typeof phrase === 'string') return phrase;

  if (typeof phrase === 'function') {
    return phrase(args);
  }

  return '';
}

/***/ }),

/***/ 31983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getPhrasePropTypes;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getPhrasePropTypes(defaultPhrases) {
  return Object.keys(defaultPhrases).reduce(function (phrases, key) {
    return _objectSpread({}, phrases, (0, _defineProperty2["default"])({}, key, _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].node])));
  }, {});
}

/***/ }),

/***/ 52936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getPooledMoment;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var momentPool = new Map();

function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, (0, _moment["default"])(dayString));
  }

  return momentPool.get(dayString);
}

/***/ }),

/***/ 90912:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getPreviousMonthMemoLast;
var getPreviousMonthMemoKey;
var getPreviousMonthMemoValue;

function getPreviousMonthMemoLast(month) {
  if (month !== getPreviousMonthMemoKey) {
    getPreviousMonthMemoKey = month;
    getPreviousMonthMemoValue = month.clone().subtract(1, 'month');
  }

  return getPreviousMonthMemoValue;
}

/***/ }),

/***/ 91804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getResponsiveContainerStyles;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _constants = __webpack_require__(45388);

function getResponsiveContainerStyles(anchorDirection, currentOffset, containerEdge, margin) {
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  var calculatedOffset = anchorDirection === _constants.ANCHOR_LEFT ? windowWidth - containerEdge : containerEdge;
  var calculatedMargin = margin || 0;
  return (0, _defineProperty2["default"])({}, anchorDirection, Math.min(currentOffset + calculatedOffset - calculatedMargin, 0));
}

/***/ }),

/***/ 16070:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getSelectedDateOffset;

var defaultModifier = function defaultModifier(day) {
  return day;
};

function getSelectedDateOffset(fn, day) {
  var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultModifier;
  if (!fn) return day;
  return modifier(fn(day.clone()));
}

/***/ }),

/***/ 88926:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getTransformStyles;

function getTransformStyles(transformValue) {
  return {
    transform: transformValue,
    msTransform: transformValue,
    MozTransform: transformValue,
    WebkitTransform: transformValue
  };
}

/***/ }),

/***/ 61729:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getVisibleDays;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(20180));

function getVisibleDays(month, numberOfMonths, enableOutsideDays, withoutTransitionMonths) {
  if (!_moment["default"].isMoment(month)) return {};
  var visibleDaysByMonth = {};
  var currentMonth = withoutTransitionMonths ? month.clone() : month.clone().subtract(1, 'month');

  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    var visibleDays = []; // set utc offset to get correct dates in future (when timezone changes)

    var baseDate = currentMonth.clone();
    var firstOfMonth = baseDate.clone().startOf('month').hour(12);
    var lastOfMonth = baseDate.clone().endOf('month').hour(12);
    var currentDay = firstOfMonth.clone(); // days belonging to the previous month

    if (enableOutsideDays) {
      for (var j = 0; j < currentDay.weekday(); j += 1) {
        var prevDay = currentDay.clone().subtract(j + 1, 'day');
        visibleDays.unshift(prevDay);
      }
    }

    while (currentDay < lastOfMonth) {
      visibleDays.push(currentDay.clone());
      currentDay.add(1, 'day');
    }

    if (enableOutsideDays) {
      // weekday() returns the index of the day of the week according to the locale
      // this means if the week starts on Monday, weekday() will return 0 for a Monday date, not 1
      if (currentDay.weekday() !== 0) {
        // days belonging to the next month
        for (var k = currentDay.weekday(), count = 0; k < 7; k += 1, count += 1) {
          var nextDay = currentDay.clone().add(count, 'day');
          visibleDays.push(nextDay);
        }
      }
    }

    visibleDaysByMonth[(0, _toISOMonthString["default"])(currentMonth)] = visibleDays;
    currentMonth = currentMonth.clone().add(1, 'month');
  }

  return visibleDaysByMonth;
}

/***/ }),

/***/ 76023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isAfterDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(12933));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

function isAfterDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b) && !(0, _isSameDay["default"])(a, b);
}

/***/ }),

/***/ 12933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isBeforeDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

function isBeforeDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var aYear = a.year();
  var aMonth = a.month();
  var bYear = b.year();
  var bMonth = b.month();
  var isSameYear = aYear === bYear;
  var isSameMonth = aMonth === bMonth;
  if (isSameYear && isSameMonth) return a.date() < b.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
}

/***/ }),

/***/ 13720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isDayVisible;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(12933));

var _isAfterDay = _interopRequireDefault(__webpack_require__(76023));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(20180));

var startCacheOutsideDays = new Map();
var endCacheOutsideDays = new Map();
var startCacheInsideDays = new Map();
var endCacheInsideDays = new Map();

function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  if (!_moment["default"].isMoment(day)) return false; // Cloning is a little expensive, so we want to do it as little as possible.

  var startKey = (0, _toISOMonthString["default"])(month); // eslint-disable-next-line prefer-template

  var endKey = startKey + '+' + numberOfMonths;

  if (enableOutsideDays) {
    if (!startCacheOutsideDays.has(startKey)) {
      startCacheOutsideDays.set(startKey, month.clone().startOf('month').startOf('week'));
    }

    if ((0, _isBeforeDay["default"])(day, startCacheOutsideDays.get(startKey))) return false;

    if (!endCacheOutsideDays.has(endKey)) {
      endCacheOutsideDays.set(endKey, month.clone().endOf('week').add(numberOfMonths - 1, 'months').endOf('month').endOf('week'));
    }

    return !(0, _isAfterDay["default"])(day, endCacheOutsideDays.get(endKey));
  } // !enableOutsideDays


  if (!startCacheInsideDays.has(startKey)) {
    startCacheInsideDays.set(startKey, month.clone().startOf('month'));
  }

  if ((0, _isBeforeDay["default"])(day, startCacheInsideDays.get(startKey))) return false;

  if (!endCacheInsideDays.has(endKey)) {
    endCacheInsideDays.set(endKey, month.clone().add(numberOfMonths - 1, 'months').endOf('month'));
  }

  return !(0, _isAfterDay["default"])(day, endCacheInsideDays.get(endKey));
}

/***/ }),

/***/ 78890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isInclusivelyAfterDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(12933));

function isInclusivelyAfterDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b);
}

/***/ }),

/***/ 50463:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isInclusivelyBeforeDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isAfterDay = _interopRequireDefault(__webpack_require__(76023));

function isInclusivelyBeforeDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isAfterDay["default"])(a, b);
}

/***/ }),

/***/ 57202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isNextDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

function isNextDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var nextDay = (0, _moment["default"])(a).add(1, 'day');
  return (0, _isSameDay["default"])(nextDay, b);
}

/***/ }),

/***/ 22376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isNextMonth;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isSameMonth = _interopRequireDefault(__webpack_require__(30034));

function isNextMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().add(1, 'month'), b);
}

/***/ }),

/***/ 21491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isPrevMonth;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isSameMonth = _interopRequireDefault(__webpack_require__(30034));

function isPrevMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().subtract(1, 'month'), b);
}

/***/ }),

/***/ 98864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isPreviousDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _isSameDay = _interopRequireDefault(__webpack_require__(61992));

function isPreviousDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var dayBefore = (0, _moment["default"])(a).subtract(1, 'day');
  return (0, _isSameDay["default"])(dayBefore, b);
}

/***/ }),

/***/ 61992:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isSameDay;

var _moment = _interopRequireDefault(__webpack_require__(30381));

function isSameDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.date() === b.date() && a.month() === b.month() && a.year() === b.year();
}

/***/ }),

/***/ 30034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isSameMonth;

var _moment = _interopRequireDefault(__webpack_require__(30381));

function isSameMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.month() === b.month() && a.year() === b.year();
}

/***/ }),

/***/ 29826:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isTransitionEndSupported;

function isTransitionEndSupported() {
  return !!(typeof window !== 'undefined' && 'TransitionEvent' in window);
}

/***/ }),

/***/ 58390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addModifier = addModifier;
exports.deleteModifier = deleteModifier;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _isDayVisible = _interopRequireDefault(__webpack_require__(13720));

var _toISODateString = _interopRequireDefault(__webpack_require__(54162));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(20180));

var _getPreviousMonthMemoLast = _interopRequireDefault(__webpack_require__(90912));

var _constants = __webpack_require__(45388);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function addModifier(updatedDays, day, modifier, props, state) {
  var numberOfVisibleMonths = props.numberOfMonths,
      enableOutsideDays = props.enableOutsideDays,
      orientation = props.orientation;
  var firstVisibleMonth = state.currentMonth,
      visibleDays = state.visibleDays;
  var currentMonth = firstVisibleMonth;
  var numberOfMonths = numberOfVisibleMonths;

  if (orientation === _constants.VERTICAL_SCROLLABLE) {
    numberOfMonths = Object.keys(visibleDays).length;
  } else {
    currentMonth = (0, _getPreviousMonthMemoLast["default"])(currentMonth);
    numberOfMonths += 2;
  }

  if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
    return updatedDays;
  }

  var iso = (0, _toISODateString["default"])(day);

  var updatedDaysAfterAddition = _objectSpread({}, updatedDays);

  if (enableOutsideDays) {
    var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
      return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
    });
    updatedDaysAfterAddition = monthsToUpdate.reduce(function (acc, monthIso) {
      var month = updatedDays[monthIso] || visibleDays[monthIso];

      if (!month[iso] || !month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers.add(modifier);
        acc[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
      }

      return acc;
    }, updatedDaysAfterAddition);
  } else {
    var monthIso = (0, _toISOMonthString["default"])(day);
    var month = updatedDays[monthIso] || visibleDays[monthIso] || {};

    if (!month[iso] || !month[iso].has(modifier)) {
      var modifiers = new Set(month[iso]);
      modifiers.add(modifier);
      updatedDaysAfterAddition[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
    }
  }

  return updatedDaysAfterAddition;
}

function deleteModifier(updatedDays, day, modifier, props, state) {
  var numberOfVisibleMonths = props.numberOfMonths,
      enableOutsideDays = props.enableOutsideDays,
      orientation = props.orientation;
  var firstVisibleMonth = state.currentMonth,
      visibleDays = state.visibleDays;
  var currentMonth = firstVisibleMonth;
  var numberOfMonths = numberOfVisibleMonths;

  if (orientation === _constants.VERTICAL_SCROLLABLE) {
    numberOfMonths = Object.keys(visibleDays).length;
  } else {
    currentMonth = (0, _getPreviousMonthMemoLast["default"])(currentMonth);
    numberOfMonths += 2;
  }

  if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
    return updatedDays;
  }

  var iso = (0, _toISODateString["default"])(day);

  var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);

  if (enableOutsideDays) {
    var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
      return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
    });
    updatedDaysAfterDeletion = monthsToUpdate.reduce(function (acc, monthIso) {
      var month = updatedDays[monthIso] || visibleDays[monthIso];

      if (month[iso] && month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers["delete"](modifier);
        acc[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
      }

      return acc;
    }, updatedDaysAfterDeletion);
  } else {
    var monthIso = (0, _toISOMonthString["default"])(day);
    var month = updatedDays[monthIso] || visibleDays[monthIso] || {};

    if (month[iso] && month[iso].has(modifier)) {
      var modifiers = new Set(month[iso]);
      modifiers["delete"](modifier);
      updatedDaysAfterDeletion[monthIso] = _objectSpread({}, month, (0, _defineProperty2["default"])({}, iso, modifiers));
    }
  }

  return updatedDaysAfterDeletion;
}

/***/ }),

/***/ 39286:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = noflip;
var NOFLIP = '/* @noflip */'; // Appends a noflip comment to a style rule in order to prevent it from being automatically
// flipped in RTL contexts. This should be used only in situations where the style must remain
// unflipped regardless of direction context. See: https://github.com/kentcdodds/rtl-css-js#usage

function noflip(value) {
  if (typeof value === 'number') return "".concat(value, "px ").concat(NOFLIP);
  if (typeof value === 'string') return "".concat(value, " ").concat(NOFLIP);
  throw new TypeError('noflip expects a string or a number');
}

/***/ }),

/***/ 5135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__(25906));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(28874));

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ 28874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__(54202));

var _DefaultTheme = _interopRequireDefault(__webpack_require__(26729));

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ 54162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = toISODateString;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _toMomentObject = _interopRequireDefault(__webpack_require__(11526));

function toISODateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null; // Template strings compiled in strict mode uses concat, which is slow. Since
  // this code is in a hot path and we want it to be as fast as possible, we
  // want to use old-fashioned +.
  // eslint-disable-next-line prefer-template

  return dateObj.year() + '-' + String(dateObj.month() + 1).padStart(2, '0') + '-' + String(dateObj.date()).padStart(2, '0');
}

/***/ }),

/***/ 20180:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = toISOMonthString;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _toMomentObject = _interopRequireDefault(__webpack_require__(11526));

function toISOMonthString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null; // Template strings compiled in strict mode uses concat, which is slow. Since
  // this code is in a hot path and we want it to be as fast as possible, we
  // want to use old-fashioned +.
  // eslint-disable-next-line prefer-template

  return dateObj.year() + '-' + String(dateObj.month() + 1).padStart(2, '0');
}

/***/ }),

/***/ 5027:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = toLocalizedDateString;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _toMomentObject = _interopRequireDefault(__webpack_require__(11526));

var _constants = __webpack_require__(45388);

function toLocalizedDateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.DISPLAY_FORMAT);
}

/***/ }),

/***/ 11526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = toMomentObject;

var _moment = _interopRequireDefault(__webpack_require__(30381));

var _constants = __webpack_require__(45388);

function toMomentObject(dateString, customFormat) {
  var dateFormats = customFormat ? [customFormat, _constants.DISPLAY_FORMAT, _constants.ISO_FORMAT] : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];
  var date = (0, _moment["default"])(dateString, dateFormats, true);
  return date.isValid() ? date.hour(12) : null;
}

/***/ }),

/***/ 88333:
/***/ ((module) => {

var messages = {
  invalidPredicate: '`predicate` must be a function',
  invalidPropValidator: '`propValidator` must be a function',
  requiredCore: 'is marked as required',
  invalidTypeCore: 'Invalid input type',
  predicateFailureCore: 'Failed to succeed with predicate',
  anonymousMessage: '<<anonymous>>',
  baseInvalidMessage: 'Invalid ',
};

function constructPropValidatorVariations(propValidator) {
  if (typeof propValidator !== 'function') {
    throw new Error(messages.invalidPropValidator);
  }

  var requiredPropValidator = propValidator.bind(null, false, null);
  requiredPropValidator.isRequired = propValidator.bind(null, true, null);

  requiredPropValidator.withPredicate = function predicateApplication(predicate) {
    if (typeof predicate !== 'function') {
      throw new Error(messages.invalidPredicate);
    }
    var basePropValidator = propValidator.bind(null, false, predicate);
    basePropValidator.isRequired = propValidator.bind(null, true, predicate);
    return basePropValidator;
  };

  return requiredPropValidator;
}

function createInvalidRequiredErrorMessage(propName, componentName, value) {
  return new Error(
    'The prop `' + propName + '` ' + messages.requiredCore +
    ' in `' + componentName + '`, but its value is `' + value + '`.'
  );
}

var independentGuardianValue = -1;

function preValidationRequireCheck(isRequired, componentName, propFullName, propValue) {
  var isPropValueUndefined = typeof propValue === 'undefined';
  var isPropValueNull = propValue === null;

  if (isRequired) {
    if (isPropValueUndefined) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'undefined');
    } else if (isPropValueNull) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'null');
    }
  }

  if (isPropValueUndefined || isPropValueNull) {
    return null;
  }

  return independentGuardianValue;
}

function createMomentChecker(type, typeValidator, validator, momentType) {

  function propValidator(
    isRequired, // Bound parameter to indicate with the propType is required
    predicate, // Bound parameter to allow user to add dynamic validation
    props,
    propName,
    componentName,
    location,
    propFullName
  ) {
    var propValue = props[ propName ];
    var propType = typeof propValue;

    componentName = componentName || messages.anonymousMessage;
    propFullName = propFullName || propName;

    var preValidationRequireCheckValue = preValidationRequireCheck(
      isRequired, componentName, propFullName, propValue
    );

    if (preValidationRequireCheckValue !== independentGuardianValue) {
      return preValidationRequireCheckValue;
    }

    if (typeValidator && !typeValidator(propValue)) {
      return new Error(
        messages.invalidTypeCore + ': `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + type + '`.'
      );
    }

    if (!validator(propValue)) {
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + momentType + '`.'
      );
    }

    if (predicate && !predicate(propValue)) {
      var predicateName = predicate.name || messages.anonymousMessage;
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`. ' + messages.predicateFailureCore + ' `' +
        predicateName + '`.'
      );
    }

    return null;

  }

  return constructPropValidatorVariations(propValidator);

}

module.exports = {
  constructPropValidatorVariations: constructPropValidatorVariations,
  createMomentChecker: createMomentChecker,
  messages: messages,
};


/***/ }),

/***/ 42605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var moment = __webpack_require__(30381);
var momentValidationWrapper = __webpack_require__(10914);
var core = __webpack_require__(88333);

module.exports = {

  momentObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(value);
    },
    'Moment'
  ),

  momentString : core.createMomentChecker(
    'string',
    function(str) {
      return typeof str === 'string';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(moment(value));
    },
    'Moment'
  ),

  momentDurationObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return moment.isDuration(value);
    },
    'Duration'
  ),

};


/***/ }),

/***/ 10914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var moment = __webpack_require__(30381);

function isValidMoment(testMoment) {
  if (typeof moment.isMoment === 'function' && !moment.isMoment(testMoment)) {
    return false;
  }

  /* istanbul ignore else  */
  if (typeof testMoment.isValid === 'function') {
    // moment 1.7.0+
    return testMoment.isValid();
  }

  /* istanbul ignore next */
  return !isNaN(testMoment);
}

module.exports = {
  isValidMoment : isValidMoment,
};


/***/ }),

/***/ 16428:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__(78341);

var _consolidatedEvents = __webpack_require__(37034);

var _object = __webpack_require__(5869);

var _object2 = _interopRequireDefault(_object);

var _document = __webpack_require__(42483);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents'
};

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes2['default'].node.isRequired,
  onOutsideClick: _propTypes2['default'].func.isRequired,
  disabled: _propTypes2['default'].bool,
  useCapture: _propTypes2['default'].bool,
  display: _propTypes2['default'].oneOf((0, _object2['default'])(DISPLAY))
});

var defaultProps = {
  disabled: false,

  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

var OutsideClickHandler = function (_React$Component) {
  _inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler() {
    var _ref;

    _classCallCheck(this, OutsideClickHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref, [this].concat(args)));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.setChildNodeRef = _this.setChildNodeRef.bind(_this);
    return _this;
  }

  _createClass(OutsideClickHandler, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            disabled = _props.disabled,
            useCapture = _props.useCapture;


        if (!disabled) this.addMouseDownEventListener(useCapture);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(_ref2) {
        var prevDisabled = _ref2.disabled;
        var _props2 = this.props,
            disabled = _props2.disabled,
            useCapture = _props2.useCapture;

        if (prevDisabled !== disabled) {
          if (disabled) {
            this.removeEventListeners();
          } else {
            this.addMouseDownEventListener(useCapture);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.removeEventListeners();
      }

      return componentWillUnmount;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseDown',
    value: function () {
      function onMouseDown(e) {
        var useCapture = this.props.useCapture;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (!isDescendantOfRoot) {
          if (this.removeMouseUp) {
            this.removeMouseUp();
            this.removeMouseUp = null;
          }
          this.removeMouseUp = (0, _consolidatedEvents.addEventListener)(document, 'mouseup', this.onMouseUp, { capture: useCapture });
        }
      }

      return onMouseDown;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseUp',
    value: function () {
      function onMouseUp(e) {
        var onOutsideClick = this.props.onOutsideClick;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        if (!isDescendantOfRoot) {
          onOutsideClick(e);
        }
      }

      return onMouseUp;
    }()
  }, {
    key: 'setChildNodeRef',
    value: function () {
      function setChildNodeRef(ref) {
        this.childNode = ref;
      }

      return setChildNodeRef;
    }()
  }, {
    key: 'addMouseDownEventListener',
    value: function () {
      function addMouseDownEventListener(useCapture) {
        this.removeMouseDown = (0, _consolidatedEvents.addEventListener)(document, 'mousedown', this.onMouseDown, { capture: useCapture });
      }

      return addMouseDownEventListener;
    }()
  }, {
    key: 'removeEventListeners',
    value: function () {
      function removeEventListeners() {
        if (this.removeMouseDown) this.removeMouseDown();
        if (this.removeMouseUp) this.removeMouseUp();
      }

      return removeEventListeners;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            children = _props3.children,
            display = _props3.display;


        return _react2['default'].createElement(
          'div',
          {
            ref: this.setChildNodeRef,
            style: display !== DISPLAY.BLOCK && (0, _object2['default'])(DISPLAY).includes(display) ? { display: display } : undefined
          },
          children
        );
      }

      return render;
    }()
  }]);

  return OutsideClickHandler;
}(_react2['default'].Component);

exports.default = OutsideClickHandler;


OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

/***/ }),

/***/ 39834:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(16428);


/***/ }),

/***/ 55003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(73935);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = _react2.default.cloneElement(this.props.children);
      }

      this.portal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react2.default.Component);

exports.default = Portal;


Portal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  node: _propTypes2.default.any
};

/***/ }),

/***/ 65343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(73935);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(22798);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!_utils.canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return _reactDom2.default.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(_react2.default.Component);

Portal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  node: _propTypes2.default.any
};

exports.default = Portal;

/***/ }),

/***/ 75184:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _reactDom = __webpack_require__(73935);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Portal = __webpack_require__(65343);

var _Portal2 = _interopRequireDefault(_Portal);

var _LegacyPortal = __webpack_require__(55003);

var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portal = void 0;

if (_reactDom2.default.createPortal) {
  Portal = _Portal2.default;
} else {
  Portal = _LegacyPortal2.default;
}

exports.default = Portal;

/***/ }),

/***/ 97979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PortalCompat = __webpack_require__(75184);

var _PortalCompat2 = _interopRequireDefault(_PortalCompat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState = function (_React$Component) {
  _inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    _classCallCheck(this, PortalWithState);

    var _this = _possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return _react2.default.createElement(
        _PortalCompat2.default,
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode && (this.portalNode.props.node || this.portalNode.defaultNode);
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(_react2.default.Component);

PortalWithState.propTypes = {
  children: _propTypes2.default.func.isRequired,
  defaultOpen: _propTypes2.default.bool,
  node: _propTypes2.default.any,
  closeOnEsc: _propTypes2.default.bool,
  closeOnOutsideClick: _propTypes2.default.bool,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};

PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

exports.default = PortalWithState;

/***/ }),

/***/ 32923:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PortalWithState = exports.Portal = undefined;

var _PortalCompat = __webpack_require__(75184);

var _PortalCompat2 = _interopRequireDefault(_PortalCompat);

var _PortalWithState = __webpack_require__(97979);

var _PortalWithState2 = _interopRequireDefault(_PortalWithState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Portal = _PortalCompat2.default;
exports.PortalWithState = _PortalWithState2.default;

/***/ }),

/***/ 22798:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ 12166:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var CHANNEL = exports.CHANNEL = '__direction__';

var DIRECTIONS = exports.DIRECTIONS = {
  LTR: 'ltr',
  RTL: 'rtl'
};

/***/ }),

/***/ 9885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.default = _propTypes2['default'].shape({
  getState: _propTypes2['default'].func,
  setState: _propTypes2['default'].func,
  subscribe: _propTypes2['default'].func
});

/***/ }),

/***/ 43046:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _object = __webpack_require__(5869);

var _object2 = _interopRequireDefault(_object);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(12166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.default = _propTypes2['default'].oneOf((0, _object2['default'])(_constants.DIRECTIONS));

/***/ }),

/***/ 68283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withDirectionPropTypes = exports.DIRECTIONS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withDirection;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(8679);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _deepmerge = __webpack_require__(46388);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _getComponentName = __webpack_require__(78263);

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _constants = __webpack_require__(12166);

var _brcast = __webpack_require__(9885);

var _brcast2 = _interopRequireDefault(_brcast);

var _direction = __webpack_require__(43046);

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable react/forbid-foreign-prop-types */
// This higher-order component consumes a string from React context that is
// provided by the DirectionProvider component.
// We can use this to conditionally switch layout/direction for right-to-left layouts.

var contextTypes = _defineProperty({}, _constants.CHANNEL, _brcast2['default']);

exports.DIRECTIONS = _constants.DIRECTIONS;

// set a default direction so that a component wrapped with this HOC can be
// used even without a DirectionProvider ancestor in its react tree.

var defaultDirection = _constants.DIRECTIONS.LTR;

// export for convenience, in order for components to spread these onto their propTypes
var withDirectionPropTypes = exports.withDirectionPropTypes = {
  direction: _direction2['default'].isRequired
};

function withDirection(WrappedComponent) {
  var WithDirection = function (_React$Component) {
    _inherits(WithDirection, _React$Component);

    function WithDirection(props, context) {
      _classCallCheck(this, WithDirection);

      var _this = _possibleConstructorReturn(this, (WithDirection.__proto__ || Object.getPrototypeOf(WithDirection)).call(this, props, context));

      _this.state = {
        direction: context[_constants.CHANNEL] ? context[_constants.CHANNEL].getState() : defaultDirection
      };
      return _this;
    }

    _createClass(WithDirection, [{
      key: 'componentDidMount',
      value: function () {
        function componentDidMount() {
          var _this2 = this;

          if (this.context[_constants.CHANNEL]) {
            // subscribe to future direction changes
            this.channelUnsubscribe = this.context[_constants.CHANNEL].subscribe(function (direction) {
              _this2.setState({ direction: direction });
            });
          }
        }

        return componentDidMount;
      }()
    }, {
      key: 'componentWillUnmount',
      value: function () {
        function componentWillUnmount() {
          if (this.channelUnsubscribe) {
            this.channelUnsubscribe();
          }
        }

        return componentWillUnmount;
      }()
    }, {
      key: 'render',
      value: function () {
        function render() {
          var direction = this.state.direction;


          return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, {
            direction: direction
          }));
        }

        return render;
      }()
    }]);

    return WithDirection;
  }(_react2['default'].Component);

  var wrappedComponentName = (0, _getComponentName2['default'])(WrappedComponent) || 'Component';

  WithDirection.WrappedComponent = WrappedComponent;
  WithDirection.contextTypes = contextTypes;
  WithDirection.displayName = 'withDirection(' + String(wrappedComponentName) + ')';
  if (WrappedComponent.propTypes) {
    WithDirection.propTypes = (0, _deepmerge2['default'])({}, WrappedComponent.propTypes);
    delete WithDirection.propTypes.direction;
  }
  if (WrappedComponent.defaultProps) {
    WithDirection.defaultProps = (0, _deepmerge2['default'])({}, WrappedComponent.defaultProps);
  }

  return (0, _hoistNonReactStatics2['default'])(WithDirection, WrappedComponent);
}

/***/ }),

/***/ 46388:
/***/ (function(module) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var deepmerge_1 = deepmerge;

return deepmerge_1;

})));


/***/ }),

/***/ 58232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var _arrayPrototype = _interopRequireDefault(__webpack_require__(16650));

var _globalCache = _interopRequireDefault(__webpack_require__(31884));

var _constants = __webpack_require__(28966);

var _getClassName = _interopRequireDefault(__webpack_require__(66280));

var _separateStyles2 = _interopRequireDefault(__webpack_require__(94333));

/**
 * Function required as part of the react-with-styles interface. Parses the styles provided by
 * react-with-styles to produce class names based on the style name and optionally the namespace if
 * available.
 *
 * stylesObject {Object} The styles object passed to withStyles.
 *
 * Return an object mapping style names to class names.
 */
function create(stylesObject) {
  var stylesToClasses = {};
  var styleNames = Object.keys(stylesObject);
  var sharedState = _globalCache["default"].get(_constants.GLOBAL_CACHE_KEY) || {};
  var _sharedState$namespac = sharedState.namespace,
      namespace = _sharedState$namespac === void 0 ? '' : _sharedState$namespac;
  styleNames.forEach(function (styleName) {
    var className = (0, _getClassName["default"])(namespace, styleName);
    stylesToClasses[styleName] = className;
  });
  return stylesToClasses;
}
/**
 * Process styles to be consumed by a component.
 *
 * stylesArray {Array} Array of the following: values returned by create, plain JavaScript objects
 * representing inline styles, or arrays thereof.
 *
 * Return an object with optional className and style properties to be spread on a component.
 */


function resolve(stylesArray) {
  var flattenedStyles = (0, _arrayPrototype["default"])(stylesArray, Infinity);

  var _separateStyles = (0, _separateStyles2["default"])(flattenedStyles),
      classNames = _separateStyles.classNames,
      hasInlineStyles = _separateStyles.hasInlineStyles,
      inlineStyles = _separateStyles.inlineStyles;

  var specificClassNames = classNames.map(function (name, index) {
    return "".concat(name, " ").concat(name, "_").concat(index + 1);
  });
  var className = specificClassNames.join(' ');
  var result = {
    className: className
  };
  if (hasInlineStyles) result.style = inlineStyles;
  return result;
}

var _default = {
  create: create,
  resolve: resolve
};
exports.default = _default;

/***/ }),

/***/ 28966:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MAX_SPECIFICITY = exports.GLOBAL_CACHE_KEY = void 0;
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
var MAX_SPECIFICITY = 20;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ 66280:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getClassName;

/**
 * Construct a class name.
 *
 * namespace {String} Used to construct unique class names.
 * styleName {String} Name identifying the specific style.
 *
 * Return the class name.
 */
function getClassName(namespace, styleName) {
  var namespaceSegment = namespace.length > 0 ? "".concat(namespace, "__") : '';
  return "".concat(namespaceSegment).concat(styleName);
}

/***/ }),

/***/ 94333:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

// This function takes an array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var classNames = []; // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.

  var hasInlineStyles = false;
  var inlineStyles = {}; // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.

  for (var i = 0; i < stylesArray.length; i++) {
    // eslint-disable-line no-plusplus
    var style = stylesArray[i]; // If this  style is falsy, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)

    if (style) {
      if (typeof style === 'string') {
        classNames.push(style);
      } else {
        Object.assign(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    classNames: classNames,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}

var _default = separateStyles;
exports.default = _default;

/***/ }),

/***/ 25906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(58232).default;


/***/ }),

/***/ 54202:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports._getInterface = _getInterface;
exports._getTheme = get;
exports.default = void 0;
var styleInterface;
var styleTheme;
var START_MARK = 'react-with-styles.resolve.start';
var END_MARK = 'react-with-styles.resolve.end';
var MEASURE_MARK = "\uD83D\uDC69\u200D\uD83C\uDFA8 [resolve]";

function registerTheme(theme) {
  styleTheme = theme;
}

function registerInterface(interfaceToRegister) {
  styleInterface = interfaceToRegister;
}

function create(makeFromTheme, createWithDirection) {
  var styles = createWithDirection(makeFromTheme(styleTheme));
  return function () {
    return styles;
  };
}

function createLTR(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createLTR || styleInterface.create);
}

function createRTL(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createRTL || styleInterface.create);
}

function get() {
  return styleTheme;
}

function resolve() {
  if (false) {}

  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if (false) {}

  return result;
}

function resolveLTR() {
  for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  if (styleInterface.resolveLTR) {
    return styleInterface.resolveLTR(styles);
  }

  return resolve(styles);
}

function resolveRTL() {
  for (var _len3 = arguments.length, styles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  if (styleInterface.resolveRTL) {
    return styleInterface.resolveRTL(styles);
  }

  return resolve(styles);
}

function flush() {
  if (styleInterface.flush) {
    styleInterface.flush();
  }
} // Exported until we deprecate this API completely
// eslint-disable-next-line no-underscore-dangle


function _getInterface() {
  return styleInterface;
} // Exported until we deprecate this API completely


var _default = {
  registerTheme: registerTheme,
  registerInterface: registerInterface,
  create: createLTR,
  createLTR: createLTR,
  createRTL: createRTL,
  get: get,
  resolve: resolveLTR,
  resolveLTR: resolveLTR,
  resolveRTL: resolveRTL,
  flush: flush
};
exports.default = _default;

/***/ }),

/***/ 82151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DIRECTIONS", ({
  enumerable: true,
  get: function get() {
    return _reactWithDirection.DIRECTIONS;
  }
}));
exports.default = void 0;

var _react = __webpack_require__(67294);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _reactWithDirection = __webpack_require__(68283);

function detectAndCreateContext(defaultValue) {
  if (_react.createContext) {
    return /*#__PURE__*/(0, _react.createContext)(defaultValue);
  }

  return {
    Provider: function Provider() {
      throw new ReferenceError('WithStylesContext requires React 16.3 or later');
    },
    Consumer: function Consumer() {
      throw new ReferenceError('WithStylesContext requires React 16.3 or later');
    }
  };
}

var WithStylesContext = detectAndCreateContext({
  stylesInterface: null,
  stylesTheme: null,
  direction: null
});
WithStylesContext.Provider.propTypes = {
  stylesInterface: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  stylesTheme: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  direction: _propTypes["default"].oneOf([_reactWithDirection.DIRECTIONS.LTR, _reactWithDirection.DIRECTIONS.RTL])
};
var _default = WithStylesContext;
exports.default = _default;

/***/ }),

/***/ 53007:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var EMPTY_STYLES = {};

var EMPTY_STYLES_FN = function EMPTY_STYLES_FN() {
  return EMPTY_STYLES;
};

var _default = EMPTY_STYLES_FN;
exports.default = _default;

/***/ }),

/***/ 6881:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.perfStart = perfStart;
exports.perfEnd = perfEnd;
exports.default = withPerf;

function perfStart(startMark) {
  if (typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function' && startMark) {
    performance.clearMarks(startMark);
    performance.mark(startMark);
  }
}

function perfEnd(startMark, endMark, measureName) {
  if (typeof performance !== 'undefined' && performance.mark !== undefined && typeof performance.clearMarks === 'function') {
    performance.clearMarks(endMark);
    performance.mark(endMark);
    performance.measure(measureName, startMark, endMark);
    performance.clearMarks(measureName);
  }
}

function withPerf(methodName) {
  var startMark = "react-with-styles.".concat(methodName, ".start");
  var endMark = "react-with-styles.".concat(methodName, ".end");
  var measureName = "\uD83D\uDC69\u200D\uD83C\uDFA8 [".concat(methodName, "]");
  return function (fn) {
    return function () {
      if (false) {}

      var result = fn.apply(void 0, arguments);

      if (false) {}

      return result;
    };
  };
}

/***/ }),

/***/ 17224:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withStyles = withStyles;
Object.defineProperty(exports, "withStylesPropTypes", ({
  enumerable: true,
  get: function get() {
    return _withStylesPropTypes.withStylesPropTypes;
  }
}));
exports.css = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(6479));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(85354));

var _react = _interopRequireDefault(__webpack_require__(67294));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(8679));

var _getComponentName = _interopRequireDefault(__webpack_require__(78263));

var _ref3 = _interopRequireDefault(__webpack_require__(54713));

var _emptyStylesFn = _interopRequireDefault(__webpack_require__(53007));

var _perf = _interopRequireDefault(__webpack_require__(6881));

var _WithStylesContext = _interopRequireWildcard(__webpack_require__(82151));

var _ThemedStyleSheet = _interopRequireWildcard(__webpack_require__(54202));

var _withStylesPropTypes = __webpack_require__(11151);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * A higher order function that returns a higher order class component that injects
 * CSS-in-JS props derived from the react-with-styles theme, interface, and
 * direction provided through the WithStylesContext provider.
 *
 * The function should be used as follows:
 * `withStyles((theme) => styles, options)(Component)`
 *
 * Options can be used to rename the injected props, memoize the component, and flush
 * the styles to the styles tag (or whatever the interface implements as flush) before
 * rendering.
 *
 * @export
 * @param {Function|null|undefined} [stylesFn=EMPTY_STYLES_FN]
 * @param {Object} [{
 *     stylesPropName = 'styles',
 *     themePropName = 'theme',
 *     cssPropName = 'css',
 *     flushBefore = false,
 *     pureComponent = false,
 *   }={}]
 * @returns a higher order component that wraps the provided component and injects
 * the react-with-styles css, styles, and theme props.
 */
function withStyles() {
  var stylesFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emptyStylesFn["default"];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stylesPropName = _ref.stylesPropName,
      stylesPropName = _ref$stylesPropName === void 0 ? 'styles' : _ref$stylesPropName,
      _ref$themePropName = _ref.themePropName,
      themePropName = _ref$themePropName === void 0 ? 'theme' : _ref$themePropName,
      _ref$cssPropName = _ref.cssPropName,
      cssPropName = _ref$cssPropName === void 0 ? 'css' : _ref$cssPropName,
      _ref$flushBefore = _ref.flushBefore,
      flushBefore = _ref$flushBefore === void 0 ? false : _ref$flushBefore,
      _ref$pureComponent = _ref.pureComponent,
      pureComponent = _ref$pureComponent === void 0 ? false : _ref$pureComponent;

  stylesFn = stylesFn || _emptyStylesFn["default"];
  var BaseClass = pureComponent ? _react["default"].PureComponent : _react["default"].Component;
  /** Cache for storing the result of stylesFn(theme) for all themes. */

  var stylesFnResultCacheMap = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();

  function getOrCreateStylesFnResultCache(theme) {
    // Get and store the result in the stylesFnResultsCache for the component
    // -- not the instance -- so we only apply the theme to the stylesFn
    // once per theme for this component.
    var cachedResultForTheme = stylesFnResultCacheMap.get(theme);
    var stylesFnResult = cachedResultForTheme || stylesFn(theme) || {};
    stylesFnResultCacheMap.set(theme, stylesFnResult); // cache the result of stylesFn(theme)

    return stylesFnResult;
  }
  /**
   * Cache for storing the results of computations:
   * `WeakMap<Theme, WeakMap<typeof WithStyles, { ltr: {}, rtl: {} }>>`
   * Falling back to `Map` whenever `WeakMap` is not supported
   */


  var withStylesCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();

  function getComponentCache(theme, component, direction) {
    var themeCache = withStylesCache.get(theme);

    if (!themeCache) {
      return null;
    }

    var componentCache = themeCache.get(component);

    if (!componentCache) {
      return null;
    }

    return componentCache[direction];
  }

  function updateComponentCache(theme, component, direction, results) {
    var themeCache = withStylesCache.get(theme);

    if (!themeCache) {
      themeCache = typeof WeakMap === 'undefined' ? new Map() : new WeakMap();
      withStylesCache.set(theme, themeCache);
    }

    var componentCache = themeCache.get(component);

    if (!componentCache) {
      componentCache = {
        ltr: {},
        rtl: {}
      };
      themeCache.set(component, componentCache);
    }

    componentCache[direction] = results;
  }
  /** Derive the create function from the interface and direction */


  function makeCreateFn(direction, stylesInterface) {
    var directionSelector = direction === _WithStylesContext.DIRECTIONS.RTL ? 'RTL' : 'LTR';
    var create = stylesInterface["create".concat(directionSelector)] || stylesInterface.create;
    var original = create;

    if (false) {}

    return {
      create: create,
      original: original
    };
  }
  /** Derive the resolve function from the interface and direction */


  function makeResolveFn(direction, stylesInterface) {
    var directionSelector = direction === _WithStylesContext.DIRECTIONS.RTL ? 'RTL' : 'LTR';
    var resolve = stylesInterface["resolve".concat(directionSelector)] || stylesInterface.resolve;
    var original = resolve;

    if (false) {}

    return {
      resolve: resolve,
      original: original
    };
  } // The function that wraps the provided component in a wrapper
  // component that injects the withStyles props


  return function withStylesHOC(WrappedComponent) {
    var wrappedComponentName = (0, _getComponentName["default"])(WrappedComponent); // The wrapper component that injects the withStyles props

    var WithStyles = /*#__PURE__*/function (_BaseClass) {
      (0, _inheritsLoose2["default"])(WithStyles, _BaseClass);

      function WithStyles() {
        return _BaseClass.apply(this, arguments) || this;
      }

      var _proto = WithStyles.prototype;

      _proto.getCurrentInterface = function getCurrentInterface() {
        // Fallback to the singleton implementation
        return this.context && this.context.stylesInterface || (0, _ThemedStyleSheet._getInterface)();
      };

      _proto.getCurrentTheme = function getCurrentTheme() {
        // Fallback to the singleton implementation
        return this.context && this.context.stylesTheme || (0, _ThemedStyleSheet._getTheme)();
      };

      _proto.getCurrentDirection = function getCurrentDirection() {
        return this.context && this.context.direction || _WithStylesContext.DIRECTIONS.LTR;
      };

      _proto.getProps = function getProps() {
        // Get the styles interface, theme, and direction from context
        var stylesInterface = this.getCurrentInterface();
        var theme = this.getCurrentTheme();
        var direction = this.getCurrentDirection(); // Use a cache to store the interface methods and created styles by direction.
        // This way, if the theme and the interface don't change, we do not recalculate
        // styles or any other interface derivations. They are effectively only calculated
        // once per direction, until the theme or interface change.
        // Assume: always an object.

        var componentCache = getComponentCache(theme, WithStyles, direction); // Determine what's changed

        var interfaceChanged = !componentCache || !componentCache.stylesInterface || stylesInterface && componentCache.stylesInterface !== stylesInterface;
        var themeChanged = !componentCache || componentCache.theme !== theme; // If the interface and theme haven't changed for this direction,
        // we return the cached props immediately.

        if (!interfaceChanged && !themeChanged) {
          return componentCache.props;
        } // If the theme or the interface changed, then there are some values
        // we need to recalculate. We avoid recalculating the ones we already
        // calculated in the past if the objects they're derived from have not
        // changed.


        var createFn = interfaceChanged && makeCreateFn(direction, stylesInterface) || componentCache.create;
        var resolveFn = interfaceChanged && makeResolveFn(direction, stylesInterface) || componentCache.resolve;
        var create = createFn.create;
        var resolve = resolveFn.resolve; // Determine if create or resolve functions have changed, which will then
        // determine if we need to create new styles or css props

        var createChanged = !componentCache || !componentCache.create || createFn.original !== componentCache.create.original;
        var resolveChanged = !componentCache || !componentCache.resolve || resolveFn.original !== componentCache.resolve.original; // Derive the css function prop: recalculate it if resolve changed

        var css = resolveChanged && function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return resolve(args);
        } || componentCache.props.css; // Get or calculate the themed styles from the stylesFn:
        // Uses a separate cache at the component level, not at the instance level,
        // to only apply the theme to the stylesFn once per component class per theme.


        var stylesFnResult = getOrCreateStylesFnResultCache(theme); // Derive the styles prop: recalculate it if create changed, or stylesFnResult changed

        var styles = (createChanged || stylesFnResult !== componentCache.stylesFnResult) && create(stylesFnResult) || componentCache.props.styles; // Put the new props together

        var props = {
          css: css,
          styles: styles,
          theme: theme
        }; // Update the cache with all the new values

        updateComponentCache(theme, WithStyles, direction, {
          stylesInterface: stylesInterface,
          theme: theme,
          create: createFn,
          resolve: resolveFn,
          stylesFnResult: stylesFnResult,
          props: props
        });
        return props;
      };

      _proto.flush = function flush() {
        var stylesInterface = this.getCurrentInterface();

        if (stylesInterface && stylesInterface.flush) {
          stylesInterface.flush();
        }
      };

      _proto.render = function render() {
        var _ref2;

        // We only want to re-render if the theme, stylesInterface, or direction change.
        // These values are in context so we're listening for their updates.
        // this.getProps() derives the props from the theme, stylesInterface, and direction in
        // context, and memoizes them on the instance per direction.
        var _this$getProps = this.getProps(),
            theme = _this$getProps.theme,
            styles = _this$getProps.styles,
            css = _this$getProps.css; // Flush if specified


        if (flushBefore) {
          this.flush();
        }

        var _this$props = this.props,
            forwardedRef = _this$props.forwardedRef,
            rest = (0, _objectWithoutProperties2["default"])(_this$props, ["forwardedRef"]);
        return /*#__PURE__*/_react["default"].createElement(WrappedComponent // TODO: remove conditional once breaking change to only support React 16.3+
        // ref: https://github.com/airbnb/react-with-styles/pull/240#discussion_r533497857
        , (0, _extends2["default"])({
          ref: typeof _react["default"].forwardRef === 'undefined' ? undefined : forwardedRef
        }, typeof _react["default"].forwardRef === 'undefined' ? this.props : rest, (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, themePropName, theme), (0, _defineProperty2["default"])(_ref2, stylesPropName, styles), (0, _defineProperty2["default"])(_ref2, cssPropName, css), _ref2)));
      };

      return WithStyles;
    }(BaseClass); // TODO: remove conditional once breaking change to only support React 16.3+
    // ref: https://github.com/airbnb/react-with-styles/pull/240#discussion_r533497857


    if (typeof _react["default"].forwardRef !== 'undefined') {
      WithStyles.propTypes = {
        forwardedRef: (0, _ref3["default"])()
      };
    } // TODO: remove conditional once breaking change to only support React 16.3+
    // ref: https://github.com/airbnb/react-with-styles/pull/240#discussion_r533497857


    var ForwardedWithStyles = typeof _react["default"].forwardRef === 'undefined' ? WithStyles : /*#__PURE__*/_react["default"].forwardRef(function (props, forwardedRef) {
      return /*#__PURE__*/_react["default"].createElement(WithStyles, (0, _extends2["default"])({}, props, {
        forwardedRef: forwardedRef
      }));
    }); // Copy the wrapped component's prop types and default props on WithStyles

    if (WrappedComponent.propTypes) {
      ForwardedWithStyles.propTypes = _objectSpread({}, WrappedComponent.propTypes);
      delete ForwardedWithStyles.propTypes[stylesPropName];
      delete ForwardedWithStyles.propTypes[themePropName];
      delete ForwardedWithStyles.propTypes[cssPropName];
    }

    if (WrappedComponent.defaultProps) {
      ForwardedWithStyles.defaultProps = _objectSpread({}, WrappedComponent.defaultProps);
    }

    WithStyles.contextType = _WithStylesContext["default"];
    ForwardedWithStyles.WrappedComponent = WrappedComponent;
    ForwardedWithStyles.displayName = "withStyles(".concat(wrappedComponentName, ")");
    return (0, _hoistNonReactStatics["default"])(ForwardedWithStyles, WrappedComponent);
  };
}

var _default = withStyles;
/**
 * Deprecated: Do not use directly. Please wrap your component in `withStyles` and use the `css`
 * prop injected via props instead.
 */

exports.default = _default;
var css = _ThemedStyleSheet["default"].resolveLTR;
exports.css = css;

/***/ }),

/***/ 11151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.withStylesPropTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var withStylesPropTypes = {
  styles: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired,
  css: _propTypes["default"].func.isRequired
};
exports.withStylesPropTypes = withStylesPropTypes;
var _default = withStylesPropTypes;
exports.default = _default;

/***/ }),

/***/ 75251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(27418);var f=__webpack_require__(67294),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 67593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__(14573);
var IsArray = __webpack_require__(37912);
var IsConstructor = __webpack_require__(5497);
var IsInteger = __webpack_require__(31377);
var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};



/***/ }),

/***/ 81341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);
var callBound = __webpack_require__(21924);

var $TypeError = GetIntrinsic('%TypeError%');

var IsArray = __webpack_require__(37912);

var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('%Function.prototype.apply%');

// https://ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	if (!IsArray(argumentsList)) {
		throw new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');
	}
	return $apply(F, V, argumentsList);
};


/***/ }),

/***/ 25427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = __webpack_require__(63682);

var FromPropertyDescriptor = __webpack_require__(41323);
var OrdinaryGetOwnProperty = __webpack_require__(77695);
var IsDataDescriptor = __webpack_require__(2846);
var IsExtensible = __webpack_require__(29405);
var IsPropertyKey = __webpack_require__(13086);
var SameValue = __webpack_require__(59640);
var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = OrdinaryGetOwnProperty(O, P);
	var extensible = !oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc['[[Writable]]'] || !oldDesc['[[Configurable]]']);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};


/***/ }),

/***/ 25797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = __webpack_require__(25427);
var IsPropertyKey = __webpack_require__(13086);
var Type = __webpack_require__(51501);

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};


/***/ }),

/***/ 65289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = __webpack_require__(2435);
var DefineOwnProperty = __webpack_require__(63682);

var FromPropertyDescriptor = __webpack_require__(41323);
var IsAccessorDescriptor = __webpack_require__(84275);
var IsDataDescriptor = __webpack_require__(2846);
var IsPropertyKey = __webpack_require__(13086);
var SameValue = __webpack_require__(59640);
var ToPropertyDescriptor = __webpack_require__(15627);
var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};


/***/ }),

/***/ 42130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var MAX_SAFE_INTEGER = __webpack_require__(11645);

var Call = __webpack_require__(81341);
var CreateDataPropertyOrThrow = __webpack_require__(25797);
var Get = __webpack_require__(14573);
var HasProperty = __webpack_require__(5994);
var IsArray = __webpack_require__(37912);
var LengthOfArrayLike = __webpack_require__(68136);
var ToString = __webpack_require__(32167);

// https://262.ecma-international.org/11.0/#sec-flattenintoarray

// eslint-disable-next-line max-params
module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = LengthOfArrayLike(element);
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};


/***/ }),

/***/ 41323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var assertRecord = __webpack_require__(62188);

var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};


/***/ }),

/***/ 14573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__(70631);

var IsPropertyKey = __webpack_require__(13086);
var Type = __webpack_require__(51501);

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};


/***/ }),

/***/ 5994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = __webpack_require__(13086);
var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};


/***/ }),

/***/ 84275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var has = __webpack_require__(17642);

var assertRecord = __webpack_require__(62188);

var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ 37912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__(21924)('Object.prototype.toString');

// https://ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),

/***/ 25233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = __webpack_require__(95320);


/***/ }),

/***/ 5497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(14445);

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = __webpack_require__(65289);
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://ecma-international.org/ecma-262/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}


/***/ }),

/***/ 2846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var has = __webpack_require__(17642);

var assertRecord = __webpack_require__(62188);

var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ 29405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $Object = GetIntrinsic('%Object%');

var isPrimitive = __webpack_require__(64790);

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) {
		return !isPrimitive(obj);
	};


/***/ }),

/***/ 31377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var abs = __webpack_require__(81737);
var floor = __webpack_require__(6183);

var $isNaN = __webpack_require__(29086);
var $isFinite = __webpack_require__(22633);

// https://ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var absValue = abs(argument);
	return floor(absValue) === absValue;
};


/***/ }),

/***/ 13086:
/***/ ((module) => {

"use strict";


// https://ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ }),

/***/ 71780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = __webpack_require__(98420);

var ToBoolean = __webpack_require__(32970);

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};


/***/ }),

/***/ 68136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__(14573);
var ToLength = __webpack_require__(37351);
var Type = __webpack_require__(51501);

// https://262.ecma-international.org/11.0/#sec-lengthofarraylike

module.exports = function LengthOfArrayLike(obj) {
	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	return ToLength(Get(obj, 'length'));
};

// TODO: use this all over


/***/ }),

/***/ 77695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $gOPD = __webpack_require__(20882);
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = __webpack_require__(21924);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = __webpack_require__(17642);

var IsArray = __webpack_require__(37912);
var IsPropertyKey = __webpack_require__(13086);
var IsRegExp = __webpack_require__(71780);
var ToPropertyDescriptor = __webpack_require__(15627);
var Type = __webpack_require__(51501);

// https://ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};


/***/ }),

/***/ 16237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(4559);


/***/ }),

/***/ 59640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $isNaN = __webpack_require__(29086);

// http://262.ecma-international.org/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};


/***/ }),

/***/ 32970:
/***/ ((module) => {

"use strict";


// http://262.ecma-international.org/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };


/***/ }),

/***/ 54467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ES5ToInteger = __webpack_require__(90775);

var ToNumber = __webpack_require__(35959);

// https://262.ecma-international.org/11.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if (number !== 0) {
		number = ES5ToInteger(number);
	}
	return number === 0 ? 0 : number;
};


/***/ }),

/***/ 37351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var MAX_SAFE_INTEGER = __webpack_require__(11645);

var ToInteger = __webpack_require__(54467);

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};


/***/ }),

/***/ 35959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__(21924);
var regexTester = __webpack_require__(50823);
var isPrimitive = __webpack_require__(64790);

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__(22448);

// https://ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'bigint') {
		throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};


/***/ }),

/***/ 32747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__(16237);

// https://ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ }),

/***/ 22448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(41503);

// https://ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ }),

/***/ 15627:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var has = __webpack_require__(17642);

var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__(51501);
var ToBoolean = __webpack_require__(32970);
var IsCallable = __webpack_require__(25233);

// https://262.ecma-international.org/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new $TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),

/***/ 32167:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};


/***/ }),

/***/ 51501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ES5Type = __webpack_require__(23951);

// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	if (typeof x === 'bigint') {
		return 'BigInt';
	}
	return ES5Type(x);
};


/***/ }),

/***/ 81737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $abs = GetIntrinsic('%Math.abs%');

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function abs(x) {
	return $abs(x);
};


/***/ }),

/***/ 6183:
/***/ ((module) => {

"use strict";


// var modulo = require('./modulo');
var $floor = Math.floor;

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	return $floor(x);
};


/***/ }),

/***/ 4559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');

// http://262.ecma-international.org/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),

/***/ 90775:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var abs = __webpack_require__(77890);
var floor = __webpack_require__(32748);
var ToNumber = __webpack_require__(77709);

var $isNaN = __webpack_require__(29086);
var $isFinite = __webpack_require__(22633);
var $sign = __webpack_require__(38111);

// http://262.ecma-international.org/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * floor(abs(number));
};


/***/ }),

/***/ 77709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ToPrimitive = __webpack_require__(1950);

// http://262.ecma-international.org/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	var prim = ToPrimitive(value, Number);
	if (typeof prim !== 'string') {
		return +prim; // eslint-disable-line no-implicit-coercion
	}

	// eslint-disable-next-line no-control-regex
	var trimmed = prim.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, '');
	if ((/^0[ob]|^[+-]0x/).test(trimmed)) {
		return NaN;
	}

	return +trimmed; // eslint-disable-line no-implicit-coercion
};


/***/ }),

/***/ 1950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// http://262.ecma-international.org/5.1/#sec-9.1

module.exports = __webpack_require__(42116);


/***/ }),

/***/ 23951:
/***/ ((module) => {

"use strict";


// https://262.ecma-international.org/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),

/***/ 77890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $abs = GetIntrinsic('%Math.abs%');

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function abs(x) {
	return $abs(x);
};


/***/ }),

/***/ 32748:
/***/ ((module) => {

"use strict";


// var modulo = require('./modulo');
var $floor = Math.floor;

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	return $floor(x);
};


/***/ }),

/***/ 14445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// TODO: remove, semver-major

module.exports = __webpack_require__(40210);


/***/ }),

/***/ 63682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

var callBound = __webpack_require__(21924);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};


/***/ }),

/***/ 62188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(17642);

var predicates = {
	// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),

/***/ 20882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ 22633:
/***/ ((module) => {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ 29086:
/***/ ((module) => {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 64790:
/***/ ((module) => {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 2435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var has = __webpack_require__(17642);
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ }),

/***/ 11645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;


/***/ }),

/***/ 50823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = __webpack_require__(55559);

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};


/***/ }),

/***/ 38111:
/***/ ((module) => {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ })

};
;