webpackHotUpdate("static/development/pages/[locale]/visitor/register.js",{

/***/ "./components/RegisterVisit/index.tsx":
/*!********************************************!*\
  !*** ./components/RegisterVisit/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Input */ "./node_modules/@material-ui/icons/Input.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Table */ "./components/Table/index.tsx");
/* harmony import */ var _hooks_useRestClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useRestClient */ "./hooks/useRestClient.tsx");
/* harmony import */ var _hooks_useTableSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useTableSearch */ "./hooks/useTableSearch.tsx");
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "./components/RegisterVisit/style.tsx");




var _this = undefined,
    _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/RegisterVisit/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var INITIAL_FORM_STATE = {
  firstName: '',
  name: '',
  email: '',
  phone: '',
  building: 0,
  rooms: [],
  permissionGranted: false
};

var RegisterVisit = function RegisterVisit() {
  // hooks
  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var reducer = Object(_hooks_useTableSearch__WEBPACK_IMPORTED_MODULE_8__["default"])();

  var _useTranslations = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      t = _useTranslations.t;

  var _useRestClient = Object(_hooks_useRestClient__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      client = _useRestClient.client;

  if (!reducer) return null;
  var state = reducer.state,
      dispatch = reducer.dispatch;

  function getBesucherByFilter() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getBesucherByFilter$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(client.getBesucherByFilter({
              skip: state.skip,
              take: state.limit
            }));

          case 2:
            res = _context.sent;
            if (res) dispatch({
              type: 'setRows',
              payload: {
                rows: res.map(function (r) {
                  return {
                    id: r.id,
                    vorname: 'Max',
                    nachname: 'Mustermann',
                    email: 'max@mustermann.de'
                  };
                }),
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

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    getBesucherByFilter();
  }, [state.page, state.limit]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      buildings = _React$useState2[0],
      setBuildings = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    function getGebauede() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getGebauede$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(client.getGebauede());

            case 2:
              res = _context2.sent;
              if (res) setBuildings(res);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }

    getGebauede();
  }, []);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      rooms = _React$useState4[0],
      setRooms = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](INITIAL_FORM_STATE),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      formState = _React$useState6[0],
      setFormState = _React$useState6[1];

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, t('administration')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, t('visitor-register'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Registrieter Besucher"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Besucher ausw\xE4hlen"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    className: classes.contentContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    className: classes.input,
    placeholder: t('register-first-name'),
    value: formState.firstName,
    onChange: function onChange(event) {
      return setFormState(_objectSpread({}, formState, {
        firstName: event.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    className: classes.input,
    placeholder: t('register-name'),
    value: formState.name,
    onChange: function onChange(event) {
      return setFormState(_objectSpread({}, formState, {
        name: event.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    className: classes.input,
    type: "email",
    placeholder: t('register-email'),
    value: formState.email,
    onChange: function onChange(event) {
      return setFormState(_objectSpread({}, formState, {
        email: event.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    className: classes.input,
    placeholder: t('register-phone'),
    value: formState.phone,
    onChange: function onChange(event) {
      return setFormState(_objectSpread({}, formState, {
        phone: event.target.value
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, "Geb\xE4ude"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    value: formState.building,
    onChange: function onChange(event) {
      setFormState(_objectSpread({}, formState, {
        building: event.target.value
      }));
      var rooms = buildings.filter(function (b) {
        return b.id === event.target.value;
      }).map(function (v) {
        return v.raeume;
      });
      if (rooms) setRooms(rooms[0]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, buildings && buildings.length > 0 && buildings.map(function (building, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
      key: index,
      value: building.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, building.bezeichnung);
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }, t('property-rooms')), rooms && rooms.length > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    value: formState.rooms,
    onChange: function onChange(event) {
      setFormState(_objectSpread({}, formState, {
        rooms: event.target.value
      }));
    },
    input: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 30
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, rooms.map(function (room, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
      key: index,
      value: room.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 27
      }
    }, room.bezeichnung);
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      setFormState(INITIAL_FORM_STATE);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, t('register')))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      title: 'Besucher',
      tooltipSelected: {
        title: 'Besucher auswählen',
        icon: __jsx(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 23
          }
        }),
        onClick: function onClick(ids) {
          if (ids.length) {
            var id = ids[0];
            var user = state.rows.filter(function (u) {
              return u.id === id;
            });
            if (user.length) setFormState({
              firstName: user[0].vorname,
              name: user[0].nachname,
              email: user[0].email
            });
          }
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterVisit);

/***/ })

})
//# sourceMappingURL=register.js.36c0eeb93024d99f7aca.hot-update.js.map