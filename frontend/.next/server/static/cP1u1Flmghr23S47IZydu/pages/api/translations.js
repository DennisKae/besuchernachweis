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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ENhl");


/***/ }),

/***/ "ENhl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gEm2");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(_translations__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));
});

/***/ }),

/***/ "gEm2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const t = {
  en: {
    administration: 'Administration',
    'visitor-register': 'Register visitor',
    'visitor-cancle': 'Cancle visitor',
    'visitor-count-for-period': 'Visitor count for period',
    'visitor-count-current-registered': 'Current visitor count',
    'search-start-date': 'Start date',
    'search-end-date': 'End date',
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
    register: 'Register'
  },
  de: {
    administration: 'Verwaltung',
    'visitor-register': 'Besuch anmelden',
    'visitor-cancle': 'Besuch abmelden',
    'visitor-count-for-period': 'Anzahl Besuche im Zeitraum',
    'visitor-count-current-registered': 'Anzahl angemeldeter Besucher',
    'search-start-date': 'Startdatum',
    'search-end-date': 'Enddatum',
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
    register: 'Registrieren'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (t);

/***/ })

/******/ });