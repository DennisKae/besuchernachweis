module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CancleVisit/index.tsx":
/*!******************************************!*\
  !*** ./components/CancleVisit/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useVisitorSearchReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useVisitorSearchReducer */ "./hooks/useVisitorSearchReducer.tsx");
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Table */ "./components/Table/index.tsx");
/* harmony import */ var _StatsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StatsCard */ "./components/StatsCard/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./components/CancleVisit/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/CancleVisit/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Dashboard = () => {
  const reducer = Object(_hooks_useVisitorSearchReducer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  if (!reducer) return null;
  const {
    state: {
      skip,
      limit,
      count,
      page,
      rows,
      search
    },
    dispatch
  } = reducer;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    async function getVisitors() {
      try {
        const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('http://ec2-3-127-244-90.eu-central-1.compute.amazonaws.com/api/Besuch/GetByFilter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            vorname: 'Max',
            name: 'Mustermann',
            datumVon: search.startDate,
            datumBis: search.endDate
          })
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getVisitors();
  }, []);
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    t
  } = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, t('administration')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, t('visitor-cancle'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('visitor-count-for-period'),
    value: "200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: t('visitor-count-current-registered'),
    value: `${rows.length}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: t('search-name'),
    style: {
      width: '100%'
    },
    value: search.firstName,
    onChange: event => dispatch({
      type: 'setSearch',
      payload: _objectSpread({}, search, {
        firstName: event.target.value
      })
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginTop: '8px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: t('search-first-name'),
    style: {
      width: '100%'
    },
    value: search.name,
    onChange: event => dispatch({
      type: 'setSearch',
      payload: _objectSpread({}, search, {
        name: event.target.value
      })
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginTop: '8px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, t('search-apply'))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    style: {
      paddingRight: '12px'
    },
    label: t('search-start-date'),
    type: "datetime-local",
    defaultValue: search.startDate,
    onChange: event => dispatch({
      type: 'setSearch',
      payload: _objectSpread({}, search, {
        startDate: event.target.value
      })
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: t('search-end-date'),
    type: "datetime-local",
    defaultValue: search.endDate,
    onChange: event => {
      dispatch({
        type: 'setSearch',
        payload: _objectSpread({}, search, {
          endDate: event.target.value
        })
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rows: rows,
    rowsPerPageOptions: [25, 50, 100],
    count: count,
    rowsPerPage: limit,
    page: page,
    onChangePage: (_, newPage) => {
      const newSkip = newPage > page ? skip + limit : skip - limit;
      dispatch({
        type: 'changePage',
        payload: {
          skip: newSkip,
          page: newPage
        }
      });
    },
    onChangeRowsPerPage: event => {
      const limit = Number(event.target.value);
      dispatch({
        type: 'changeRowsPerPage',
        payload: {
          limit
        }
      });
    },
    displayOnly: false,
    onClickRow: val => console.log(val),
    buttonLabel: "Abmelden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./components/CancleVisit/style.tsx":
/*!******************************************!*\
  !*** ./components/CancleVisit/style.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    padding: theme.spacing(4)
  }
})));

/***/ }),

/***/ "./components/StatsCard/index.tsx":
/*!****************************************!*\
  !*** ./components/StatsCard/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/StatsCard/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/StatsCard/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const StatsCard = ({
  title,
  value
}) => {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, value)));
};

/* harmony default export */ __webpack_exports__["default"] = (StatsCard);

/***/ }),

/***/ "./components/StatsCard/style.tsx":
/*!****************************************!*\
  !*** ./components/StatsCard/style.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 400
  }
})));

/***/ }),

/***/ "./components/Table/index.tsx":
/*!************************************!*\
  !*** ./components/Table/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Table/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Table/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const EnhancedTableHead = ({
  cells
}) => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, cells.map(cell => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    key: cell,
    align: "left",
    padding: "default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, cell))));
};

const EnhancedTableToolbar = () => {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_2__["useToolbarStyles"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Besuche"));
};

const EnhancedTableCell = ({
  children
}) => {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    className: classes.cell,
    component: "th",
    scope: "row",
    padding: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, children);
};

function formatValue(val) {
  if (Array.isArray(val)) return val.join(', ');
  return val;
}

const EnhancedTable = ({
  rows,
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
  displayOnly,
  onClickRow,
  buttonLabel
}) => {
  if (rows.length === 0) return null;
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const cells = Object.keys(rows[0]);
  if (!displayOnly) cells.push('');
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(EnhancedTableToolbar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: classes.table,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(EnhancedTableHead, {
    cells: cells,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
    const keys = Object.keys(row);
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, keys.map((k, index) => {
      // @ts-ignore
      const value = formatValue(row[k]);
      return __jsx(EnhancedTableCell, {
        key: index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 27
        }
      }, value);
    }), !displayOnly && __jsx(EnhancedTableCell, {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "outlined",
      color: "secondary",
      onClick: () => {
        if (row['ID']) onClickRow(row['ID']);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 27
      }
    }, buttonLabel)));
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TablePagination"], {
    rowsPerPageOptions: rowsPerPageOptions,
    labelRowsPerPage: "Datens\xE4tze pro Seite",
    count: count,
    rowsPerPage: rowsPerPage,
    page: page,
    component: "div",
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    labelDisplayedRows: ({
      from,
      to,
      count
    }) => `${from}-${to} von ${count}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EnhancedTable);

/***/ }),

/***/ "./components/Table/style.tsx":
/*!************************************!*\
  !*** ./components/Table/style.tsx ***!
  \************************************/
/*! exports provided: useToolbarStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToolbarStyles", function() { return useToolbarStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight: theme.palette.type === 'light' ? {
    color: theme.palette.secondary.main,
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["lighten"])(theme.palette.secondary.light, 0.85)
  } : {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.dark
  },
  title: {
    flex: '1 1 100%'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  cell: {
    padding: '0 16px'
  }
})));

/***/ }),

/***/ "./context/LocaleContext.tsx":
/*!***********************************!*\
  !*** ./context/LocaleContext.tsx ***!
  \***********************************/
/*! exports provided: LocaleProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/locales */ "./utils/locales.ts");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/context/LocaleContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const LocaleContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  locale: _utils_locales__WEBPACK_IMPORTED_MODULE_2__["defaultLocale"],
  setLocale: () => null
});
const LocaleProvider = ({
  initialLocale,
  children
}) => {
  const [locale, setLocale] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialLocale);
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (typeof query.locale === 'string' && Object(_utils_locales__WEBPACK_IMPORTED_MODULE_2__["isLocale"])(query.locale) && locale !== query.locale) {
      setLocale(query.locale);
    }
  }, [query.locale, locale]);
  return __jsx(LocaleContext.Provider, {
    value: {
      locale,
      setLocale
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (LocaleContext);

/***/ }),

/***/ "./hooks/useTranslations.tsx":
/*!***********************************!*\
  !*** ./hooks/useTranslations.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.tsx");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations */ "./translations/index.tsx");
/* harmony import */ var _utils_locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/locales */ "./utils/locales.ts");





const useTranslation = () => {
  const {
    locale
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  function t(key) {
    if (!_translations__WEBPACK_IMPORTED_MODULE_2__["default"][locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return _translations__WEBPACK_IMPORTED_MODULE_2__["default"][locale][key] || _translations__WEBPACK_IMPORTED_MODULE_2__["default"][_utils_locales__WEBPACK_IMPORTED_MODULE_3__["defaultLocale"]][key] || '';
  }

  return {
    t,
    locale
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTranslation);

/***/ }),

/***/ "./hooks/useVisitorSearchReducer.tsx":
/*!*******************************************!*\
  !*** ./hooks/useVisitorSearchReducer.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const visitorTableReducer = (state, action) => {
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

const DEFAULT_STATE = {
  skip: 0,
  limit: 50,
  count: 0,
  page: 0,
  rows: [],
  search: {
    name: '',
    firstName: '',
    startDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date().setHours(0, 0, 0, 0)).toISOString(),
    endDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date().setHours(24, 0, 0, 0)).subtract(1, 'minute').toISOString()
  }
};
const SEARCH_STATE_KEY = 'visitor_search_state';

const useSearchStateReducer = () => {
  if (false) {}

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (useSearchStateReducer);

/***/ }),

/***/ "./pages/[locale]/visitor/cancle.tsx":
/*!*******************************************!*\
  !*** ./pages/[locale]/visitor/cancle.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CancleVisit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/CancleVisit */ "./components/CancleVisit/index.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/pages/[locale]/visitor/cancle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Visitors = () => __jsx(_components_CancleVisit__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 49
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Visitors);

/***/ }),

/***/ "./translations/index.tsx":
/*!********************************!*\
  !*** ./translations/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const t = {
  en: {
    administration: 'Administration',
    'visitor-register': 'Register visitor',
    'visitor-cancle': 'Cancle visitor',
    'visitor-count-for-period': 'Visitor count for period',
    'visitor-count-current-registered': 'Current visitor count',
    'search-start-date': 'Start date',
    'search-end-date': 'End date',
    'search-first-name': 'First name',
    'search-name': 'name',
    'search-apply': 'Search',
    'navigation-register-visitor': 'Register visit',
    'navigation-cancle-visitor': 'Cancle visit',
    'navigation-property-management': 'Buildings & Rooms',
    'view-rooms': 'View rooms',
    'property-properties-rooms': 'Buildings & Rooms',
    'property-properties': 'Building',
    'property-rooms': 'Room',
    edit: 'Edit',
    delete: 'delete',
    yes: 'Yes',
    no: 'No',
    'are-you-sure-to-delete': 'Are you sure you want to delete that?',
    'add-description': 'Please add a description',
    description: 'Description',
    save: 'Save',
    cancle: 'Cancle',
    'register-first-name': 'First name',
    'register-name': 'name',
    'register-email': 'e-mail',
    'register-phone': 'phone',
    'register-permission-granted': 'Permission granted',
    'register-new-visitor': 'New Visitor',
    'register-already-existing': 'Already registered',
    register: 'Register'
  },
  de: {
    administration: 'Verwaltung',
    'visitor-register': 'Besuch anmelden',
    'visitor-cancle': 'Besuch abmelden',
    'visitor-count-for-period': 'Anzahl Besuche im Zeitraum',
    'visitor-count-current-registered': 'Anzahl angemeldeter Besucher',
    'search-start-date': 'Startdatum',
    'search-end-date': 'Enddatum',
    'search-first-name': 'Vorname',
    'search-name': 'Name',
    'search-apply': 'Suchen',
    'navigation-register-visitor': 'Besuch anmelden',
    'navigation-cancle-visitor': 'Besuch abmelden',
    'navigation-property-management': 'Gebäude & Räume',
    'view-rooms': 'Räume ansehen',
    'property-properties-rooms': 'Gebäude & Räume',
    'property-properties': 'Gebäude',
    'property-rooms': 'Zimmer',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    yes: 'Ja',
    no: 'Nein',
    'are-you-sure-to-delete': 'Sind Sie sicher, dass Sie das löschen möchten?',
    'add-description': 'Bitte geben Sie eine Bezeichnung ein',
    description: 'Bezeichnung',
    save: 'Speichern',
    cancle: 'Abbrechen',
    'register-first-name': 'Vorname',
    'register-name': 'Name',
    'register-email': 'E-Mail',
    'register-phone': 'Telefon',
    'register-permission-granted': 'Zugangsberechtigung erteilt',
    'register-new-visitor': 'Neuer Besucher',
    'register-already-existing': 'Bereits registriert',
    register: 'Registrieren'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (t);

/***/ }),

/***/ "./utils/locales.ts":
/*!**************************!*\
  !*** ./utils/locales.ts ***!
  \**************************/
/*! exports provided: defaultLocale, locales, isLocale, detectLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocale", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocale", function() { return isLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectLocale", function() { return detectLocale; });
const defaultLocale = 'en';
const locales = ['en', 'de'];
const DEFAULT_LOCALE = 'en';
function isLocale(tested) {
  return locales.some(locale => locale === tested);
}
function detectLocale(req) {
  if (req) {
    const acceptLanugage = req.headers['accept-language'];

    if (acceptLanugage) {
      const requestedLocales = acceptLanugage.split(',').map(part => {
        const [locale, priority] = part.trim().split(';q=');
        return {
          locale,
          priority: parseInt(priority)
        };
      });
      requestedLocales.sort((a, b) => b.priority - a.priority);
      const found = requestedLocales.find(({
        locale
      }) => locale !== '*');
      if (!found) return DEFAULT_LOCALE;else {
        const locale = found.locale.split('-')[0];
        if (locales.includes(locale)) return locale;else return DEFAULT_LOCALE;
      }
    }
  }

  if (typeof navigator !== 'undefined') {
    const locale = navigator.languages[0].split('-')[0];
    if (locale && locales.includes(locale)) return locale;else return DEFAULT_LOCALE;
  }

  return DEFAULT_LOCALE;
}

/***/ }),

/***/ 4:
/*!*************************************************!*\
  !*** multi ./pages/[locale]/visitor/cancle.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephangilli/projects/besuchernachweis/frontend/pages/[locale]/visitor/cancle.tsx */"./pages/[locale]/visitor/cancle.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=cancle.js.map