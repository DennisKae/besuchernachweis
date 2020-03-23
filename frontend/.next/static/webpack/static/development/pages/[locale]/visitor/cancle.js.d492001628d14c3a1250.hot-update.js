webpackHotUpdate("static/development/pages/[locale]/visitor/cancle.js",{

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
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6__);
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
      uniqueId = _ref.uniqueId;
  if (rows.length === 0) return null;
  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var cells = Object.keys(rows[0]); // state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  console.log(selected);

  var EnhancedTableHead = function EnhancedTableHead(_ref2) {
    var cells = _ref2.cells,
        numSelected = _ref2.numSelected,
        rowCount = _ref2.rowCount;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableHead"], {
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
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      indeterminate: numSelected > 0 && numSelected < rowCount,
      checked: rowCount > 0 && numSelected === rowCount,
      onChange: function onChange(event) {
        if (event.target.checked) setSelected(rows.map(function (row) {
          return row[uniqueId];
        }));
        setSelected([]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    })), cells.map(function (cell) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
        key: cell,
        align: "left",
        padding: "default",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, cell);
    })));
  };

  var EnhancedTableToolbar = function EnhancedTableToolbar(_ref3) {
    var numSelected = _ref3.numSelected;
    var classes = Object(_style__WEBPACK_IMPORTED_MODULE_7__["useToolbarStyles"])();
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.highlight, numSelected > 0)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, numSelected > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      className: classes.title,
      color: "inherit",
      variant: "subtitle1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, numSelected, " ausgew\xE4hlt") : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      className: classes.title,
      variant: "h6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, "Besuche"), numSelected > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      title: "L\xF6schen",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      title: "Filter Liste",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }))));
  };

  var EnhancedTableCell = function EnhancedTableCell(_ref4) {
    var children = _ref4.children;
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

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(EnhancedTableToolbar, {
    numSelected: selected.length,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    className: classes.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(EnhancedTableHead, {
    cells: cells,
    numSelected: selected.length,
    rowCount: rowsPerPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, rows.map(function (row, index) {
    var keys = Object.keys(row);
    var checked = selected.indexOf(row[uniqueId]) !== -1;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: index,
      onClick: function onClick() {
        var id = row[uniqueId];
        var selectedIndex = selected.indexOf(id);
        var newSelected = [];
        if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);else if (selectedIndex === 0) newSelected = newSelected.concat(selected.slice(1));else if (selectedIndex === selected.length - 1) newSelected = newSelected.concat(selected.slice(0, -1));else if (selectedIndex > 0) newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1)), setSelected(newSelected);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
      padding: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      checked: checked,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 23
      }
    })), keys.map(function (k, index) {
      // @ts-ignore
      var value = formatValue(row[k]);
      return __jsx(EnhancedTableCell, {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 25
        }
      }, value);
    }));
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TablePagination"], {
    rowsPerPageOptions: rowsPerPageOptions,
    labelRowsPerPage: "Datens\xE4tze pro Seite",
    count: count,
    rowsPerPage: rowsPerPage,
    page: page,
    component: "div",
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    labelDisplayedRows: function labelDisplayedRows(_ref5) {
      var from = _ref5.from,
          to = _ref5.to,
          count = _ref5.count;
      return "".concat(from, "-").concat(to, " von ").concat(count);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EnhancedTable);

/***/ })

})
//# sourceMappingURL=cancle.js.d492001628d14c3a1250.hot-update.js.map