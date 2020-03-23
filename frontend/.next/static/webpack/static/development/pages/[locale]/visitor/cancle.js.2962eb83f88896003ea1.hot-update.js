webpackHotUpdate("static/development/pages/[locale]/visitor/cancle.js",{

/***/ "./components/CancleVisit/index.tsx":
/*!******************************************!*\
  !*** ./components/CancleVisit/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Input */ "./node_modules/@material-ui/icons/Input.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useRestClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useRestClient */ "./hooks/useRestClient.tsx");
/* harmony import */ var _hooks_useVisitorSearchReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useVisitorSearchReducer */ "./hooks/useVisitorSearchReducer.tsx");
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Table */ "./components/Table/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./components/CancleVisit/style.tsx");


var _this = undefined,
    _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/CancleVisit/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











function mapStateToReqBody(state) {
  return {
    name: state.search.name,
    vorname: state.search.firstName,
    skip: state.skip,
    take: state.limit,
    startzeit: state.search.startDate,
    endzeit: state.search.endDate
  };
}

var CancleVisit = function CancleVisit() {
  var reducer = Object(_hooks_useVisitorSearchReducer__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useRestClient = Object(_hooks_useRestClient__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      client = _useRestClient.client,
      setIsLoading = _useRestClient.setIsLoading,
      setHasError = _useRestClient.setHasError;

  if (!reducer) return null;
  var state = reducer.state,
      dispatch = reducer.dispatch;

  function getBesucherByFilter() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getBesucherByFilter$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getBesucherByFilter(mapStateToReqBody(state)));

          case 2:
            res = _context.sent;
            if (res) dispatch({
              type: 'setVisitors',
              payload: {
                rows: res,
                count: res.length
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function setBesuchEndzeitpunkt(ids) {
    var _iterator, _step, id, res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function setBesuchEndzeitpunkt$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setIsLoading(true);
            _context2.prev = 1;
            _iterator = _createForOfIteratorHelper(ids);
            _context2.prev = 3;

            _iterator.s();

          case 5:
            if ((_step = _iterator.n()).done) {
              _context2.next = 11;
              break;
            }

            id = _step.value;
            _context2.next = 9;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.setBesuchEndzeitpunkt({
              besuchId: Number(id),
              endzeit: moment__WEBPACK_IMPORTED_MODULE_2___default()().toISOString()
            }));

          case 9:
            _context2.next = 5;
            break;

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](3);

            _iterator.e(_context2.t0);

          case 16:
            _context2.prev = 16;

            _iterator.f();

            return _context2.finish(16);

          case 19:
            _context2.next = 21;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getBesucherByFilter(mapStateToReqBody(state)));

          case 21:
            res = _context2.sent;
            if (res) dispatch({
              type: 'setVisitors',
              payload: {
                rows: res,
                count: res.length
              }
            });
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t1 = _context2["catch"](1);
            setIsLoading(false);
            setHasError(true);

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 25], [3, 13, 16, 19]], Promise);
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    getBesucherByFilter();
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    getBesucherByFilter();
  }, [state.page, state.limit]);
  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var _useTranslations = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      t = _useTranslations.t;

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, t('administration')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, t('visitor-cancle')))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    rows: state.rows,
    rowsPerPageOptions: [25, 50, 100],
    count: state.count,
    rowsPerPage: state.limit,
    page: state.page,
    onChangePage: function onChangePage(_, newPage) {
      var newSkip = newPage > state.page ? state.skip + state.limit : state.skip - state.limit;
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
    uniqueId: "id",
    toolbarSettings: {
      title: t('visitor-current-registered'),
      tooltipSelected: {
        title: t('visitor-cancle'),
        icon: __jsx(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 23
          }
        }),
        onClick: function onClick(ids) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onClick$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", setBesuchEndzeitpunkt(ids));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, null, null, Promise);
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CancleVisit);

/***/ })

})
//# sourceMappingURL=cancle.js.2962eb83f88896003ea1.hot-update.js.map