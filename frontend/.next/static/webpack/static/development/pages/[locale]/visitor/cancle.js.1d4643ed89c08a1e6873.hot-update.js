webpackHotUpdate("static/development/pages/[locale]/visitor/cancle.js",{

/***/ "./components/CancleVisit/index.tsx":
/*!******************************************!*\
  !*** ./components/CancleVisit/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hooks_useVisitorSearchReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useVisitorSearchReducer */ "./hooks/useVisitorSearchReducer.tsx");
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Table */ "./components/Table/index.tsx");
/* harmony import */ var _StatsCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StatsCard */ "./components/StatsCard/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./components/CancleVisit/style.tsx");



var _this = undefined,
    _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/CancleVisit/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Dashboard = function Dashboard() {
  var reducer = Object(_hooks_useVisitorSearchReducer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  if (!reducer) return null;
  var _reducer$state = reducer.state,
      skip = _reducer$state.skip,
      limit = _reducer$state.limit,
      count = _reducer$state.count,
      page = _reducer$state.page,
      rows = _reducer$state.rows,
      search = _reducer$state.search,
      dispatch = reducer.dispatch;
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    function getVisitors() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getVisitors$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://ec2-3-127-244-90.eu-central-1.compute.amazonaws.com/api/Besuch/GetByFilter', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: 'Mustermann'
                })
              }));

            case 3:
              res = _context.sent;

              if (!res.ok) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

            case 7:
              data = _context.sent;
              console.log(data);

            case 9:
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 11]], Promise);
    }

    getVisitors();
  }, []);
  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var _useTranslations = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      t = _useTranslations.t;

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, t('administration')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, t('visitor-cancle'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: t('visitor-count-for-period'),
    value: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_StatsCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: t('visitor-count-current-registered'),
    value: "".concat(rows.length),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: t('search-name'),
    style: {
      width: '100%'
    },
    value: search.firstName,
    onChange: function onChange(event) {
      return dispatch({
        type: 'setSearch',
        payload: _objectSpread({}, search, {
          firstName: event.target.value
        })
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginTop: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: t('search-first-name'),
    style: {
      width: '100%'
    },
    value: search.name,
    onChange: function onChange(event) {
      return dispatch({
        type: 'setSearch',
        payload: _objectSpread({}, search, {
          name: event.target.value
        })
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginTop: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, t('search-apply'))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    xl: 3,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justify: "flex-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    style: {
      paddingRight: '12px'
    },
    label: t('search-start-date'),
    type: "datetime-local",
    defaultValue: search.startDate,
    onChange: function onChange(event) {
      return dispatch({
        type: 'setSearch',
        payload: _objectSpread({}, search, {
          startDate: event.target.value
        })
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    label: t('search-end-date'),
    type: "datetime-local",
    defaultValue: search.endDate,
    onChange: function onChange(event) {
      dispatch({
        type: 'setSearch',
        payload: _objectSpread({}, search, {
          endDate: event.target.value
        })
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  })))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    rows: rows,
    rowsPerPageOptions: [25, 50, 100],
    count: count,
    rowsPerPage: limit,
    page: page,
    onChangePage: function onChangePage(_, newPage) {
      var newSkip = newPage > page ? skip + limit : skip - limit;
      dispatch({
        type: 'changePage',
        payload: {
          skip: newSkip,
          page: newPage
        }
      });
    },
    onChangeRowsPerPage: function onChangeRowsPerPage(event) {
      var limit = Number(event.target.value);
      dispatch({
        type: 'changeRowsPerPage',
        payload: {
          limit: limit
        }
      });
    },
    displayOnly: false,
    onClickRow: function onClickRow(val) {
      return console.log(val);
    },
    buttonLabel: "Abmelden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=cancle.js.1d4643ed89c08a1e6873.hot-update.js.map