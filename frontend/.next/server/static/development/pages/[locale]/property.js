module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dialog/index.tsx":
/*!*************************************!*\
  !*** ./components/Dialog/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ */ "@material-ui/core/");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Dialog/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const MyDialog = ({
  open,
  onClose,
  title,
  content,
  onAgree,
  onDisagree
}) => {
  const {
    t
  } = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: open,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, title && __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, title), content && __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["DialogContentText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, content)), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["DialogActions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onAgree,
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, t('yes')), __jsx(_material_ui_core___WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onDisagree,
    color: "primary",
    autoFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, t('no'))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyDialog);

/***/ }),

/***/ "./components/Modal/index.tsx":
/*!************************************!*\
  !*** ./components/Modal/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Modal/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Modal/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const MyModal = ({
  open,
  onClose,
  children
}) => {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    className: classes.modal,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Backdrop"],
    BackdropProps: {
      timeout: 500
    },
    open: open,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fade"], {
    in: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (MyModal);

/***/ }),

/***/ "./components/Modal/style.tsx":
/*!************************************!*\
  !*** ./components/Modal/style.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
})));

/***/ }),

/***/ "./components/Property/index.tsx":
/*!***************************************!*\
  !*** ./components/Property/index.tsx ***!
  \***************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTranslations */ "./hooks/useTranslations.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.tsx");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Dialog */ "./components/Dialog/index.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./components/Property/style.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/components/Property/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];











const ModalContent = ({
  id,
  title,
  onSaveClick,
  onExitClick
}) => {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    t
  } = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](title);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, t('add-description')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: t('description'),
    className: classes.input,
    value: value,
    onChange: event => setValue(event.target.value),
    style: {
      marginTop: '24px',
      marginBottom: '24px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    disabled: value === title,
    onClick: () => onSaveClick({
      title: value,
      id
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, t('save')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: onExitClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, t('cancle'))));
};

const Property = ({
  properties,
  onDelete,
  onEdit,
  onCreate
}) => {
  const [showCreateModal, setShowCreateModal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    status: false,
    type: null
  });
  const [showEditModal, setShowEditModal] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [showDeleteDialog, setShowDeleteDialog] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [activeElement, setActiveElement] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    t
  } = Object(_hooks_useTranslations__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const minMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(theme.breakpoints.up('md'));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, activeElement && __jsx(_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: showDeleteDialog,
    onClose: () => setShowDeleteDialog(false),
    title: activeElement.title,
    content: t('are-you-sure-to-delete'),
    onAgree: () => onDelete({
      id: activeElement.id
    }),
    onDisagree: () => setShowDeleteDialog(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: showEditModal,
    onClose: () => setShowEditModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, activeElement && __jsx(ModalContent, {
    id: activeElement.id,
    title: activeElement.title,
    onSaveClick: props => onEdit(props),
    onExitClick: () => setShowEditModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  })), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: showCreateModal.status,
    onClose: () => setShowCreateModal({
      status: false,
      type: null
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(ModalContent, {
    id: "",
    title: "",
    onSaveClick: props => {
      onCreate({
        title: props.title
      });
    },
    onExitClick: () => setShowCreateModal({
      status: false,
      type: null
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 9,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, t('administration')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, t('property-properties-rooms'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 3,
    sm: 6,
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fab"], {
    variant: "extended",
    color: "secondary",
    onClick: () => setShowCreateModal({
      status: true,
      type: 'building'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }), minMd && t('property-properties')))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, properties.map((property, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanel"], {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanelSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 52
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, property.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanelDetails"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, property.rooms.map((room, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    key: index,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.panelDetails, {
      [classes.oddPanelDetail]: !(index % 2)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    key: index,
    variant: "body1",
    style: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 'auto',
      fontWeight: 500
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, room.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    variant: "outlined",
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 27
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => {
      setShowEditModal(true);
      setActiveElement(room);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 29
    }
  }, t('edit')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }, t('delete')))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanelActions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fab"], {
    variant: "extended",
    color: "secondary",
    onClick: () => setShowCreateModal({
      status: true,
      type: 'room'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }), minMd && t('property-rooms')))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Property);

/***/ }),

/***/ "./components/Property/style.tsx":
/*!***************************************!*\
  !*** ./components/Property/style.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4)
    }
  },
  paper: {
    padding: theme.spacing(5),
    position: 'relative'
  },
  panelDetails: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '40px'
    },
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  oddPanelDetail: {
    background: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default.a[200]
  },
  input: {
    width: '100%',
    minWidth: '250px'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
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

/***/ "./pages/[locale]/property/index.tsx":
/*!*******************************************!*\
  !*** ./pages/[locale]/property/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useRestClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useRestClient */ "./hooks/useRestClient.tsx");
/* harmony import */ var _components_Property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Property */ "./components/Property/index.tsx");
var _jsxFileName = "/Users/stephangilli/projects/besuchernachweis/frontend/pages/[locale]/property/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const PropertyPage = () => {
  const {
    client,
    setIsLoading
  } = Object(_hooks_useRestClient__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (client && setIsLoading) return __jsx(_components_Property__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onEdit: props => console.log(props),
    onDelete: props => console.log(props),
    onCreate: async () => {
      setIsLoading(true);
    },
    properties: [{
      id: '1',
      title: 'Gebäude 1',
      rooms: [{
        id: '2',
        title: 'Room 2'
      }]
    }, {
      id: '2',
      title: 'Gebäude 2',
      rooms: [{
        id: '3',
        title: 'Room 1'
      }, {
        id: '4',
        title: 'Room 4'
      }]
    }, {
      id: '3',
      title: 'Gebäude 3',
      rooms: [{
        id: '7',
        title: 'Room 7'
      }]
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  });
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (PropertyPage);

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

/***/ 6:
/*!*************************************************!*\
  !*** multi ./pages/[locale]/property/index.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephangilli/projects/besuchernachweis/frontend/pages/[locale]/property/index.tsx */"./pages/[locale]/property/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/":
/*!*************************************!*\
  !*** external "@material-ui/core/" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/");

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

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

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
//# sourceMappingURL=property.js.map