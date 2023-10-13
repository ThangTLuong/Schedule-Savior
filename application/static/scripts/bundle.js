/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_time_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/time-interval */ \"./application/src/components/time-interval.js\");\n/* harmony import */ var _src_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/button */ \"./application/src/components/button.js\");\n/* harmony import */ var _src_components_text_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/text-bar */ \"./application/src/components/text-bar.js\");\n/* harmony import */ var _src_components_timesheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/timesheet */ \"./application/src/components/timesheet.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var scheduler = document.getElementById('scheduler');\n  generateElements(scheduler);\n  generateTimesheet();\n});\nfunction generateElements(scheduler) {\n  var textBars = (0,_src_components_text_bar__WEBPACK_IMPORTED_MODULE_2__.textBar)(scheduler);\n  var buttons = (0,_src_components_button__WEBPACK_IMPORTED_MODULE_1__.button)(scheduler);\n  var container = document.createElement('div');\n  container.setAttribute('id', 'main-container');\n  container.appendChild(textBars);\n  container.appendChild(buttons);\n  scheduler.appendChild(container);\n  (0,_src_components_timesheet__WEBPACK_IMPORTED_MODULE_3__.timesheet)(scheduler);\n}\nfunction generateTimesheet() {\n  var timesheetContainer = document.getElementById('timesheet-container');\n  for (var i = 0; i < 5; i++) {\n    (0,_src_components_time_interval__WEBPACK_IMPORTED_MODULE_0__.createColorBox)(timesheetContainer, 'timesheet');\n  }\n  var timesheets = document.querySelectorAll('#timesheet');\n  timesheets.forEach(function (timesheet) {\n    for (var _i = 0; _i < 52; _i++) {\n      (0,_src_components_time_interval__WEBPACK_IMPORTED_MODULE_0__.createColorBox)(timesheet, 'colorBox');\n    }\n  });\n}\n\n//# sourceURL=webpack://schedule-savior/./application/index.js?");

/***/ }),

/***/ "./application/src/components/button.js":
/*!**********************************************!*\
  !*** ./application/src/components/button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   button: () => (/* binding */ button)\n/* harmony export */ });\nfunction button(scheduler) {\n  var goBack = createButton('go-back', '⬅️');\n  var submit = createButton('submit', '➡️');\n  var clear = createButton('clear', '❌');\n  var goBackContainer = document.createElement('div');\n  goBackContainer.setAttribute('id', 'go-back-container');\n  goBackContainer.appendChild(goBack);\n  scheduler.appendChild(goBackContainer);\n  var bundle = document.createElement('div');\n  bundle.setAttribute('id', 'submit-clear-container');\n  bundle.appendChild(submit);\n  bundle.appendChild(clear);\n  return bundle;\n}\nfunction createButton(name, symbol) {\n  var button = document.createElement('button');\n  button.setAttribute('id', name);\n  button.textContent = symbol;\n  return button;\n}\n\n//# sourceURL=webpack://schedule-savior/./application/src/components/button.js?");

/***/ }),

/***/ "./application/src/components/text-bar.js":
/*!************************************************!*\
  !*** ./application/src/components/text-bar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   textBar: () => (/* binding */ textBar)\n/* harmony export */ });\nfunction textBar() {\n  var firstNameTextBar = createTextBar('firstname', 'First name');\n  var lastNameTextBar = createTextBar('lastname', 'Last name');\n  var bundle = document.createElement('div');\n  bundle.setAttribute('id', 'first-last-name-container');\n  bundle.appendChild(firstNameTextBar);\n  bundle.appendChild(lastNameTextBar);\n  return bundle;\n}\nfunction createTextBar(name, placeholder) {\n  var textBar = document.createElement('input');\n  textBar.setAttribute('type', 'text');\n  textBar.setAttribute('placeholder', placeholder);\n  textBar.setAttribute('id', name);\n  return textBar;\n}\n\n//# sourceURL=webpack://schedule-savior/./application/src/components/text-bar.js?");

/***/ }),

/***/ "./application/src/components/time-interval.js":
/*!*****************************************************!*\
  !*** ./application/src/components/time-interval.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createColorBox: () => (/* binding */ createColorBox)\n/* harmony export */ });\nfunction createColorBox(container, id) {\n  var colorBox = document.createElement('div');\n  colorBox.setAttribute('id', id);\n  if (container !== 'timesheet') {\n    colorBox.style.backgroundColor = 'rgb(173, 216, 230)';\n    var isClicked = false;\n    colorBox.addEventListener('mousedown', function () {\n      toggleColor(colorBox);\n    });\n    container.addEventListener('mousedown', function (e) {\n      e.preventDefault();\n      isClicked = true;\n    });\n    container.addEventListener('mouseup', function () {\n      isClicked = false;\n    });\n    colorBox.addEventListener('mouseover', function () {\n      if (isClicked) toggleColor(colorBox);\n    });\n  }\n  container.appendChild(colorBox);\n}\nfunction toggleColor(colorBox) {\n  var currentColor = colorBox.style.backgroundColor;\n  var newColor = currentColor === 'rgb(173, 216, 230)' ? 'rgb(144, 238, 144)' : 'rgb(173, 216, 230)';\n  colorBox.style.backgroundColor = newColor;\n}\n\n//# sourceURL=webpack://schedule-savior/./application/src/components/time-interval.js?");

/***/ }),

/***/ "./application/src/components/timesheet.js":
/*!*************************************************!*\
  !*** ./application/src/components/timesheet.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timesheet: () => (/* binding */ timesheet)\n/* harmony export */ });\nfunction timesheet(scheduler) {\n  var timesheetContainer = document.createElement('div');\n  timesheetContainer.setAttribute('id', 'timesheet-container');\n  scheduler.appendChild(timesheetContainer);\n}\n\n//# sourceURL=webpack://schedule-savior/./application/src/components/timesheet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./application/index.js");
/******/ 	
/******/ })()
;