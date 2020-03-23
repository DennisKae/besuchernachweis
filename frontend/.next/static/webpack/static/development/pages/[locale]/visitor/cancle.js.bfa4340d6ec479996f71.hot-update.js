webpackHotUpdate("static/development/pages/[locale]/visitor/cancle.js",{

/***/ "./rest-client/index.tsx":
/*!*******************************!*\
  !*** ./rest-client/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RestClient; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);






function fetcher(baseURL) {
  function fetchRessource(url, fetchOptions) {
    var u, xhr;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function fetchRessource$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            u = "".concat(baseURL).concat(url);
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(u, fetchOptions));

          case 4:
            xhr = _context.sent;

            if (!xhr.ok) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", xhr.json());

          case 7:
            throw new Error("Unexpected error during fetch of URL ".concat(u, ": ").concat(JSON.stringify(xhr)));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            throw new Error("Unexpected error during fetch of URL ".concat(u, ": ").concat(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]], Promise);
  }

  return fetchRessource;
}

var RestClient = /*#__PURE__*/function () {
  function RestClient(url) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RestClient);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "fetcher", void 0);

    this.fetcher = fetcher(url);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RestClient, [{
    key: "login",
    value: function login(props) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.fetcher("Auth/Login", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "register",
    value: function register(props) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function register$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.fetcher("Auth/Register", {
                method: 'POST',
                hedaders: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "postBesuch",
    value: function postBesuch(props) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function postBesuch$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.fetcher("Besuch", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "setBesuchEndzeitpunkt",
    value: function setBesuchEndzeitpunkt(input) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function setBesuchEndzeitpunkt$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.fetcher("Besuch/SetEndzeitpunkt", {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/jsoon'
                },
                body: JSON.stringify(input)
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getBesuchByFilter",
    value: function getBesuchByFilter(input) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getBesuchByFilter$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.fetcher("Besuch/GetByFilter", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getBesucherByFilter",
    value: function getBesucherByFilter(input) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getBesucherByFilter$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.fetcher("Besucher/ByFilter", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
              }));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "postBesucher",
    value: function postBesucher(props) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function postBesucher$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.fetcher("Besucher", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(props)
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getGebauede",
    value: function getGebauede() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function getGebauede$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.fetcher("Gebaeude", {
                method: 'GET'
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);

  return RestClient;
}();



/***/ })

})
//# sourceMappingURL=cancle.js.bfa4340d6ec479996f71.hot-update.js.map