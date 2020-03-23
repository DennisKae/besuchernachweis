webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Alert/index.tsx":
/*!************************************!*\
  !*** ./components/Alert/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _hooks_useRestClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useRestClient */ "./hooks/useRestClient.tsx");
var _this = undefined,
    _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Alert/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var MyAlert = function MyAlert() {
  var _useRestClient = Object(_hooks_useRestClient__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      hasError = _useRestClient.hasError,
      setHasError = _useRestClient.setHasError;

  if (hasError) {
    setTimeout(function () {
      setHasError(false);
    }, 3000);
    return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
      severity: "error",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, "Es ist ein unerwarteter Fehler aufgetreten");
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (MyAlert);

/***/ })

})
//# sourceMappingURL=_app.js.d14de40e673b7f5f02d9.hot-update.js.map