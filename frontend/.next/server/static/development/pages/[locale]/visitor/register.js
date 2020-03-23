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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RegisterVisit/index.tsx":
/*!********************************************!*\
  !*** ./components/RegisterVisit/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Input */ "@material-ui/icons/Input");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Table */ "./components/Table/index.tsx");
/* harmony import */ var _hooks_useRestClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useRestClient */ "./hooks/useRestClient.tsx");
/* harmony import */ var _hooks_useTableSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTableSearch */ "./hooks/useTableSearch.tsx");
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./components/RegisterVisit/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/RegisterVisit/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const INITIAL_FORM_STATE = {
  id: null,
  firstName: '',
  name: '',
  email: '',
  phone: '',
  building: 0,
  rooms: [],
  permissionGranted: false
};

const RegisterVisit = () => {
  // hooks
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const reducer = Object(_hooks_useTableSearch__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    t
  } = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    client,
    setIsLoading,
    setHasError
  } = Object(_hooks_useRestClient__WEBPACK_IMPORTED_MODULE_5__["default"])();
  if (!reducer) return null;
  const {
    state,
    dispatch
  } = reducer;

  async function getBesucherByFilter() {
    const res = await client.getBesucherByFilter({
      skip: state.skip,
      take: state.limit
    });
    if (res) dispatch({
      type: 'setRows',
      payload: {
        rows: res.map(r => ({
          id: r.id,
          vorname: 'Max',
          nachname: 'Mustermann',
          email: 'max@mustermann.de'
        })),
        count: res.length
      }
    });
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    getBesucherByFilter();
  }, [state.page, state.limit]);
  const [buildings, setBuildings] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    async function getGebauede() {
      const res = await client.getGebauede();
      if (res) setBuildings(res);
    }

    getGebauede();
  }, []);
  const [rooms, setRooms] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](INITIAL_FORM_STATE);
  const [showSuccessAlert, setShowSuccessAlert] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);

  async function registerBesuch() {
    setIsLoading(true);
    let id = formState.id;

    try {
      if (!id) {
        const res = await client.registerBesucher({
          person: {
            name: formState.name,
            vorname: formState.firstName,
            email: formState.email,
            telefon: formState.phone
          },
          gesundheitsstatus: 'gesund'
        });

        if (res && res.id) {
          id = res.id;
          await getBesucherByFilter();
        }
      }

      await client.registerBesuch({
        besucher: [id],
        raeume: formState.rooms
      });
      setShowSuccessAlert(true);
      setFormState(INITIAL_FORM_STATE);
    } catch (error) {
      setHasError(true);
    }

    setIsLoading(false);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, showSuccessAlert && __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
    severity: "success",
    onClick: () => setShowSuccessAlert(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Neuer Besuch erfolgreich erstellt"), __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, t('administration')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, t('visitor-register'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "Registrieter Besucher"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "Besucher ausw\xE4hlen"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.contentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: classes.input,
    placeholder: t('register-first-name'),
    value: formState.firstName,
    onChange: event => setFormState(_objectSpread({}, formState, {
      firstName: event.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: classes.input,
    placeholder: t('register-name'),
    value: formState.name,
    onChange: event => setFormState(_objectSpread({}, formState, {
      name: event.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: classes.input,
    type: "email",
    placeholder: t('register-email'),
    value: formState.email,
    onChange: event => setFormState(_objectSpread({}, formState, {
      email: event.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: classes.input,
    placeholder: t('register-phone'),
    value: formState.phone,
    onChange: event => setFormState(_objectSpread({}, formState, {
      phone: event.target.value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, "Geb\xE4ude"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: formState.building,
    onChange: event => {
      setFormState(_objectSpread({}, formState, {
        building: event.target.value
      }));
      const rooms = buildings.filter(b => b.id === event.target.value).map(v => v.raeume);
      if (rooms) setRooms(rooms[0]);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, buildings && buildings.length > 0 && buildings.map((building, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    key: index,
    value: building.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 27
    }
  }, building.bezeichnung))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, t('property-rooms')), rooms && rooms.length > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: formState.rooms,
    multiple: true,
    onChange: event => {
      setFormState(_objectSpread({}, formState, {
        rooms: event.target.value
      }));
    },
    input: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 32
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 23
    }
  }, rooms.map((room, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: room.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 29
      }
    }, room.bezeichnung);
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: async () => registerBesuch(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 19
    }
  }, t('register')))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 11
    }
  }, __jsx(_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rows: state.rows,
    rowsPerPageOptions: [25, 50, 100],
    count: state.count,
    rowsPerPage: state.limit,
    page: state.page,
    onChangePage: (_, newPage) => {
      const newSkip = newPage > state.page ? state.skip + state.limit : state.skip - state.limit;
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
    uniqueId: "id",
    toolbarSettings: {
      title: 'Besucher',
      tooltipSelected: {
        title: 'Besucher auswählen',
        icon: __jsx(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_2___default.a, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 25
          }
        }),
        onClick: ids => {
          if (ids.length) {
            const id = ids[0];
            const user = state.rows.filter(u => u.id === id);
            if (user.length) setFormState(_objectSpread({}, formState, {
              id: user[0].id,
              firstName: user[0].vorname,
              name: user[0].nachname,
              email: user[0].email
            }));
          }
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterVisit);

/***/ }),

/***/ "./components/RegisterVisit/style.tsx":
/*!********************************************!*\
  !*** ./components/RegisterVisit/style.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    padding: theme.spacing(4)
  },
  contentContainer: {
    padding: theme.spacing(3)
  },
  input: {
    width: '100%'
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Table/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Table/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







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
  onRowClick,
  uniqueId,
  toolbarSettings
}) => {
  if (rows.length === 0) return null; // state

  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]); // hooks

  const {
    t
  } = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const cells = Object.keys(rows[0]).filter(r => r !== uniqueId).map(r => {
    return {
      key: r,
      label: t(r)
    };
  });

  const EnhancedTableHead = () => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], {
      style: {
        background: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_3___default.a[200]
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      padding: "checkbox",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }), cells.map(cell => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      key: cell.key,
      align: "left",
      padding: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, cell.label))));
  };

  const EnhancedTableToolbar = () => {
    const numSelected = selected.length;
    const classes = Object(_style__WEBPACK_IMPORTED_MODULE_5__["useToolbarStyles"])();
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
      className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
        [classes.highlight]: numSelected > 0
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, numSelected > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.title,
      color: "inherit",
      variant: "subtitle1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, numSelected, " ", t('table-general-selected')) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.title,
      variant: "h6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, toolbarSettings.title), !onRowClick && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, toolbarSettings.tooltipSelected && numSelected > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: toolbarSettings.tooltipSelected.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      onClick: () => toolbarSettings.tooltipSelected.onClick(selected),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, toolbarSettings.tooltipSelected.icon)), toolbarSettings.tooltipUnselected && numSelected === 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: toolbarSettings.tooltipUnselected.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      onClick: () => toolbarSettings.tooltipUnselected.onClick(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, toolbarSettings.tooltipUnselected.icon))));
  };

  const EnhancedTableCell = ({
    children
  }) => {
    const classes = Object(_style__WEBPACK_IMPORTED_MODULE_5__["default"])();
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      className: classes.cell,
      component: "th",
      scope: "row",
      padding: "none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }
    }, children);
  };

  const handleRowClick = id => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);else if (selectedIndex === 0) newSelected = newSelected.concat(selected.slice(1));else if (selectedIndex === selected.length - 1) newSelected = newSelected.concat(selected.slice(0, -1));else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(EnhancedTableToolbar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    className: classes.table,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx(EnhancedTableHead, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, rows.map((row, index) => {
    const checked = selected.indexOf(row[uniqueId]) !== -1;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: index,
      onClick: () => {
        const id = row[uniqueId];
        if (onRowClick) onRowClick(id);else handleRowClick(id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 19
      }
    }, !onRowClick && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      padding: "checkbox",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      checked: checked,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 25
      }
    })), cells.map((c, index) => {
      if (c.key !== uniqueId) {
        // @ts-ignore
        const value = formatValue(row[c.key]);
        return __jsx(EnhancedTableCell, {
          key: index,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 27
          }
        }, value);
      }
    }));
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TablePagination"], {
    rowsPerPageOptions: rowsPerPageOptions,
    labelRowsPerPage: t('table-general-rows-per-page'),
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
    }) => `${from}-${to} ${t('table-general-displayed-rows-of')} ${count}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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

/***/ "./context/RestContext.tsx":
/*!*********************************!*\
  !*** ./context/RestContext.tsx ***!
  \*********************************/
/*! exports provided: RestProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestProvider", function() { return RestProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rest_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest-client */ "./rest-client/index.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/context/RestContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const RestContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  client: new _rest_client__WEBPACK_IMPORTED_MODULE_1__["default"](''),
  isLoading: false,
  setIsLoading: () => null,
  setHasError: () => null,
  hasError: false
});
const RestProvider = ({
  url,
  children
}) => {
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [hasError, setHasError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const client = new _rest_client__WEBPACK_IMPORTED_MODULE_1__["default"](url);
  return __jsx(RestContext.Provider, {
    value: {
      client,
      isLoading,
      setIsLoading,
      setHasError,
      hasError
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (RestContext);

/***/ }),

/***/ "./hooks/useRestClient.tsx":
/*!*********************************!*\
  !*** ./hooks/useRestClient.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_RestContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/RestContext */ "./context/RestContext.tsx");



const useRest = () => react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_context_RestContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (useRest);

/***/ }),

/***/ "./hooks/useTableSearch.tsx":
/*!**********************************!*\
  !*** ./hooks/useTableSearch.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const createTableReducer = () => (state, action) => {
  switch (action.type) {
    case 'setRows':
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

function useSearchStateReducer() {
  const tableReducer = createTableReducer();
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](tableReducer, {
    skip: 0,
    limit: 50,
    count: 0,
    page: 0,
    rows: [],
    search: null
  });
  return {
    state,
    dispatch
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useSearchStateReducer);

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

/***/ "./pages/[locale]/visitor/register.tsx":
/*!*********************************************!*\
  !*** ./pages/[locale]/visitor/register.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_RegisterVisit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/RegisterVisit */ "./components/RegisterVisit/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_RegisterVisit__WEBPACK_IMPORTED_MODULE_0__["default"]);
/*const Visitors: React.FunctionComponent = () => {
  const { client, setIsLoading, setHasError } = useRestClient();
  const [createStatus, setCreateStatus] = React.useState<any>('');
  const [gebaeude, setGebaeude] = React.useState(null);
  React.useEffect(() => {
    async function getGebaude() {
      if (client) {
        const res = await client.getGebauede();
        if (res) setGebaeude(res);
      }
    }
    getGebaude();
  }, []);

  return (
    <>
      {createStatus === 'success' && (
        <Alert severity="success">Besuch erfolgreich angelegt.</Alert>
      )}
      <Register
        buildings={gebaeude}
        createNewVisitor={async props => {
          if (client) {
            setIsLoading(true);
            try {
              const res = await client.postBesucher({
                person: {
                  name: props.name,
                  vorname: props.firstName,
                  email: props.email,
                  telefon: props.phone,
                },
                gesundheitsstatus: 'gesund',
              });
              if (res && res.id) {
                await client.postBesuch({
                  besucher: [res.id],
                  raeume: props.rooms,
                });
              }
              setIsLoading(false);
              setCreateStatus('success');
            } catch (error) {
              setCreateStatus('error');
              setHasError(true);
            }
          }
        }}
      />
    </>
  );
};

export default Visitors;*/

/***/ }),

/***/ "./rest-client/index.tsx":
/*!*******************************!*\
  !*** ./rest-client/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RestClient; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function fetcher(baseURL) {
  async function fetchRessource(url, fetchOptions) {
    const u = `${baseURL}${url}`;

    try {
      const xhr = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(u, fetchOptions);
      if (xhr.ok) return xhr.json();
      throw new Error(`Unexpected error during fetch of URL ${u}: ${JSON.stringify(xhr)}`);
    } catch (error) {
      throw new Error(`Unexpected error during fetch of URL ${u}: ${error}`);
    }
  }

  return fetchRessource;
}

class RestClient {
  constructor(url) {
    _defineProperty(this, "fetcher", void 0);

    this.fetcher = fetcher(url);
  }

  async login(props) {
    return this.fetcher(`Auth/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    });
  }

  async register(props) {
    return this.fetcher(`Auth/Register`, {
      method: 'POST',
      hedaders: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    });
  }

  async postBesuch(props) {
    return this.fetcher(`Besuch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    });
  }

  async setBesuchEndzeitpunkt(input) {
    return this.fetcher(`Besuch/SetEndzeitpunkt`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/jsoon'
      },
      body: JSON.stringify(input)
    });
  }

  async getBesuchByFilter(input) {
    return this.fetcher(`Besuch/GetByFilter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
  }

  async getBesucherByFilter(input) {
    return this.fetcher(`Besucher/ByFilter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
  }

  async registerBesucher(input) {
    return this.fetcher(`Besucher`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
  }

  async registerBesuch(input) {
    return this.fetcher(`Besuch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
  }

  async getGebauede() {
    return this.fetcher(`Gebaeude`, {
      method: 'GET'
    });
  }

}

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
    'visitor-current-registered': 'Current visits',
    'start-date': 'Start date',
    'end-date': 'End date',
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
    register: 'Register',
    'table-general-rows-per-page': 'Rows per Page',
    'table-general-displayed-rows-of': 'of',
    'table-general-selected': 'selected',
    name: 'Name'
  },
  de: {
    administration: 'Verwaltung',
    'visitor-register': 'Besuch anmelden',
    'visitor-cancle': 'Besuch abmelden',
    'visitor-count-for-period': 'Anzahl Besuche im Zeitraum',
    'visitor-count-current-registered': 'Anzahl angemeldeter Besucher',
    'visitor-current-registered': 'Aktuelle Besuche',
    'start-date': 'Startdatum',
    'end-date': 'Enddatum',
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
    register: 'Registrieren',
    'table-general-rows-per-page': 'Zeilen pro Seite',
    'table-general-displayed-rows-of': 'von',
    'table-general-selected': 'ausgewählt',
    name: 'Name'
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

/***/ 3:
/*!***************************************************!*\
  !*** multi ./pages/[locale]/visitor/register.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephangilli/projects/besuchernachweis/frontend/pages/[locale]/visitor/register.tsx */"./pages/[locale]/visitor/register.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Input":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Input" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Input");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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
//# sourceMappingURL=register.js.map