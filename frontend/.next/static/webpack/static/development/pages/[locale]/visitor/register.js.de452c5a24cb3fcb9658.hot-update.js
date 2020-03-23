webpackHotUpdate("static/development/pages/[locale]/visitor/register.js",{

/***/ "./components/Table/index.tsx":
/*!************************************!*\
  !*** ./components/Table/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./components/Table/style.tsx");



var _this = undefined,
    _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Table/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];







function formatValue(val) {
  if (Array.isArray(val)) return val.join(', ');
  return val;
}

var EnhancedTable = function EnhancedTable(_ref) {
  var rows = _ref.rows,
      rowsPerPageOptions = _ref.rowsPerPageOptions,
      count = _ref.count,
      rowsPerPage = _ref.rowsPerPage,
      page = _ref.page,
      onChangePage = _ref.onChangePage,
      onChangeRowsPerPage = _ref.onChangeRowsPerPage,
      onRowClick = _ref.onRowClick,
      uniqueId = _ref.uniqueId,
      toolbarSettings = _ref.toolbarSettings;
  if (rows.length === 0) return null; // state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1]; // hooks


  var _useTranslations = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      t = _useTranslations.t;

  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var cells = Object.keys(rows[0]).filter(function (r) {
    return r !== uniqueId;
  }).map(function (r) {
    return {
      key: r,
      label: t(r)
    };
  });

  var EnhancedTableHead = function EnhancedTableHead() {
    var numSelected = selected.length;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableHead"], {
      style: {
        background: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_5___default.a[200]
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      padding: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }), cells.map(function (cell) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
        key: cell.key,
        align: "left",
        padding: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, cell.label);
    })));
  };

  var EnhancedTableToolbar = function EnhancedTableToolbar() {
    var numSelected = selected.length;
    var classes = Object(_style__WEBPACK_IMPORTED_MODULE_7__["useToolbarStyles"])();
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.highlight, numSelected > 0)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, numSelected > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      className: classes.title,
      color: "inherit",
      variant: "subtitle1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, numSelected, " ", t('table-general-selected')) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      className: classes.title,
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, toolbarSettings.title), !onRowClick && __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, toolbarSettings.tooltipSelected && numSelected > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      title: toolbarSettings.tooltipSelected.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
      onClick: function onClick() {
        return toolbarSettings.tooltipSelected.onClick(selected);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, toolbarSettings.tooltipSelected.icon)), toolbarSettings.tooltipUnselected && numSelected === 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      title: toolbarSettings.tooltipUnselected.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
      onClick: function onClick() {
        return toolbarSettings.tooltipUnselected.onClick();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, toolbarSettings.tooltipUnselected.icon))));
  };

  var EnhancedTableCell = function EnhancedTableCell(_ref2) {
    var children = _ref2.children;
    var classes = Object(_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      className: classes.cell,
      component: "th",
      scope: "row",
      padding: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }
    }, children);
  };

  var handleRowClick = function handleRowClick(id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];
    if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);else if (selectedIndex === 0) newSelected = newSelected.concat(selected.slice(1));else if (selectedIndex === selected.length - 1) newSelected = newSelected.concat(selected.slice(0, -1));else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx(EnhancedTableToolbar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    className: classes.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(EnhancedTableHead, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, rows.map(function (row, index) {
    var checked = selected.indexOf(row[uniqueId]) !== -1;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: index,
      onClick: function onClick() {
        var id = row[uniqueId];
        if (onRowClick) onRowClick(id);else handleRowClick(id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, !onRowClick && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      padding: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      checked: checked,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }
    })), cells.map(function (c, index) {
      if (c.key !== uniqueId) {
        // @ts-ignore
        var value = formatValue(row[c.key]);
        return __jsx(EnhancedTableCell, {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 27
          }
        }, value);
      }
    }));
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TablePagination"], {
    rowsPerPageOptions: rowsPerPageOptions,
    labelRowsPerPage: t('table-general-rows-per-page'),
    count: count,
    rowsPerPage: rowsPerPage,
    page: page,
    component: "div",
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    labelDisplayedRows: function labelDisplayedRows(_ref3) {
      var from = _ref3.from,
          to = _ref3.to,
          count = _ref3.count;
      return "".concat(from, "-").concat(to, " ").concat(t('table-general-displayed-rows-of'), " ").concat(count);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EnhancedTable);

/***/ })

})
//# sourceMappingURL=register.js.de452c5a24cb3fcb9658.hot-update.js.map