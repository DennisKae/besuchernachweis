webpackHotUpdate("static/development/pages/[locale]/visitor/cancle.js",{

/***/ "./hooks/useVisitorSearchReducer.tsx":
/*!*******************************************!*\
  !*** ./hooks/useVisitorSearchReducer.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var visitorTableReducer = function visitorTableReducer(state, action) {
  switch (action.type) {
    case 'setVisitors':
      {
        if (action.payload.count) return _objectSpread({}, state, {
          rows: action.payload.rows,
          count: action.payload.count
        });else return _objectSpread({}, state, {
          rows: action.payload.rows
        });
      }

    case 'changePage':
      return _objectSpread({}, state, {
        page: action.payload.page,
        skip: action.payload.skip
      });

    case 'changeRowsPerPage':
      return _objectSpread({}, state, {
        limit: action.payload.limit
      });

    case 'setSearch':
      {
        return _objectSpread({}, state, {
          search: action.payload
        });
      }

    default:
      return state;
  }
};

var DEFAULT_STATE = {
  skip: 0,
  limit: 50,
  count: 0,
  page: 0,
  rows: [],
  search: {
    name: '',
    firstName: '',
    startDate: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date().setHours(0, 0, 0, 0)).toISOString(),
    endDate: moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date().setHours(24, 0, 0, 0)).subtract(1, 'minute').toISOString()
  }
};
var SEARCH_STATE_KEY = 'visitor_search_state';

var useSearchStateReducer = function useSearchStateReducer() {
  if (true) {
    var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](visitorTableReducer, DEFAULT_STATE, function (defaultState) {
      var persisted = localStorage.getItem(SEARCH_STATE_KEY);
      if (persisted) return _objectSpread({}, defaultState, {
        search: JSON.parse(persisted)
      });
      return defaultState;
    }),
        _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
        state = _React$useReducer2[0],
        dispatch = _React$useReducer2[1];

    react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
      return localStorage.setItem(SEARCH_STATE_KEY, JSON.stringify(state.search));
    }, [state.search]);
    return {
      state: state,
      dispatch: dispatch
    };
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (useSearchStateReducer);

/***/ })

})
//# sourceMappingURL=cancle.js.3239a2989e831e89d47d.hot-update.js.map