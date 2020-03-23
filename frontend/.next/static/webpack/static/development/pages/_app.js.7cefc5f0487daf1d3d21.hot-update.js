webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Sidebar/index.tsx":
/*!**************************************!*\
  !*** ./components/Sidebar/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Input */ "./node_modules/@material-ui/icons/Input.js");
/* harmony import */ var _material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "./node_modules/@material-ui/icons/PersonAdd.js");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Domain */ "./node_modules/@material-ui/icons/Domain.js");
/* harmony import */ var _material_ui_icons_Domain__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Domain__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _utils_locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/locales */ "./utils/locales.ts");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Profile */ "./components/Profile/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "./components/Sidebar/style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Sidebar/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];












var SidebarNav = function SidebarNav(_ref) {
  var items = _ref.items;
  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    className: classes.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, items.map(function (item, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      className: classes.item,
      disableGutters: true,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.link.href,
      as: item.link.as,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: classes.button,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: classes.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, item.icon), item.title)));
  }));
};

var Sidebar = function Sidebar(_ref2) {
  var open = _ref2.open,
      variant = _ref2.variant,
      onClose = _ref2.onClose;
  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_10__["default"])();

  var _useTranslations = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      locale = _useTranslations.locale,
      t = _useTranslations.t;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var items = [{
    title: t('navigation-register-visitor'),
    link: {
      href: "/[locale]/visitor/register",
      as: "/".concat(locale, "/visitor/register")
    },
    icon: __jsx(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    })
  }, {
    title: t('navigation-cancle-visitor'),
    link: {
      href: "/[locale]/visitor/cancle",
      as: "/".concat(locale, "/visitor/cancle")
    },
    icon: __jsx(_material_ui_icons_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    })
  }, {
    title: t('navigation-property-management'),
    link: {
      href: "/[locale]/property",
      as: "/".concat(locale, "/property")
    },
    icon: __jsx(_material_ui_icons_Domain__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    })
  }];
  var handleLocaleChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (val) {
    var regex = new RegExp("^/(".concat(_utils_locales__WEBPACK_IMPORTED_MODULE_8__["locales"].join('|'), ")"));
    router.push(router.pathname, router.asPath.replace(regex, "/".concat(val)));
  }, [router]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    anchor: "left",
    classes: {
      paper: classes.drawer
    },
    onClose: onClose,
    open: open,
    variant: variant,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    value: locale,
    onChange: function onChange(event) {
      return handleLocaleChange(event.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, _utils_locales__WEBPACK_IMPORTED_MODULE_8__["locales"].map(function (locale) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      key: locale,
      value: locale,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, locale.toUpperCase());
  })), __jsx(_Profile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "Stephan Gilli",
    role: "Angestellter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(SidebarNav, {
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./node_modules/@material-ui/icons/Dashboard.js":
false

})
//# sourceMappingURL=_app.js.7cefc5f0487daf1d3d21.hot-update.js.map