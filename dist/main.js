/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../Dropbox/PC/Desktop/Practice/RestaurantPage/src/home.js":
/*!***********************************************************************!*\
  !*** ../../../Dropbox/PC/Desktop/Practice/RestaurantPage/src/home.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const element = document.createElement("div");
  element.classList.add("content");
  element.innerHTML = `<h1>Panda's</h1>
  <div class="About">
    <p>
      Bamboo Delights is a delightful choice for a panda-themed restaurant!
      🐼🎋 It conjures images of serene bamboo forests where pandas happily
      munch on their favorite bamboo shoots. Here’s to a cozy and charming
      dining experience at Bamboo Delights! 🍽️🎉
    </p>
  </div>
  <div class="timings">
    <h2>Hours</h2>
    <ul>
      <li>Monday: 10am - 10pm</li>
      <li>Tuesday: 10am - 10pm</li>
      <li>Wednesday: 10am - 10pm</li>
      <li>Thursday: 10am - 10pm</li>
      <li>Friday: 10am - 11pm</li>
      <li>Saturday: 10am - 11pm</li>
    </ul>
  </div>
  <div class="location">
    <h2>Location</h2>
    <p>
      Bamboo Delights Restaurant 57, Place Bertrand Dias Roussel City Munoz
      State Zip Code: 56 824 Country: France
    </p>
  </div>`;
  return element;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************!*\
  !*** ../../../Dropbox/PC/Desktop/Practice/RestaurantPage/src/index.js ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "../../../Dropbox/PC/Desktop/Practice/RestaurantPage/src/home.js");


const btn = document.querySelector("#home");
const cont = document.querySelector("#content");
cont.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
function component() {
  cont.innerHTML = "";
  cont.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}
btn.addEventListener("click", component);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFJO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQUk7QUFDdkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4uLy4uLy4uL0Ryb3Bib3gvUEMvRGVza3RvcC9QcmFjdGljZS9SZXN0YXVyYW50UGFnZS9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4uLy4uLy4uL0Ryb3Bib3gvUEMvRGVza3RvcC9QcmFjdGljZS9SZXN0YXVyYW50UGFnZS9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGgxPlBhbmRhJ3M8L2gxPlxyXG4gIDxkaXYgY2xhc3M9XCJBYm91dFwiPlxyXG4gICAgPHA+XHJcbiAgICAgIEJhbWJvbyBEZWxpZ2h0cyBpcyBhIGRlbGlnaHRmdWwgY2hvaWNlIGZvciBhIHBhbmRhLXRoZW1lZCByZXN0YXVyYW50IVxyXG4gICAgICDwn5C88J+OiyBJdCBjb25qdXJlcyBpbWFnZXMgb2Ygc2VyZW5lIGJhbWJvbyBmb3Jlc3RzIHdoZXJlIHBhbmRhcyBoYXBwaWx5XHJcbiAgICAgIG11bmNoIG9uIHRoZWlyIGZhdm9yaXRlIGJhbWJvbyBzaG9vdHMuIEhlcmXigJlzIHRvIGEgY296eSBhbmQgY2hhcm1pbmdcclxuICAgICAgZGluaW5nIGV4cGVyaWVuY2UgYXQgQmFtYm9vIERlbGlnaHRzISDwn42977iP8J+OiVxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0aW1pbmdzXCI+XHJcbiAgICA8aDI+SG91cnM8L2gyPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+TW9uZGF5OiAxMGFtIC0gMTBwbTwvbGk+XHJcbiAgICAgIDxsaT5UdWVzZGF5OiAxMGFtIC0gMTBwbTwvbGk+XHJcbiAgICAgIDxsaT5XZWRuZXNkYXk6IDEwYW0gLSAxMHBtPC9saT5cclxuICAgICAgPGxpPlRodXJzZGF5OiAxMGFtIC0gMTBwbTwvbGk+XHJcbiAgICAgIDxsaT5GcmlkYXk6IDEwYW0gLSAxMXBtPC9saT5cclxuICAgICAgPGxpPlNhdHVyZGF5OiAxMGFtIC0gMTFwbTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxyXG4gICAgPGgyPkxvY2F0aW9uPC9oMj5cclxuICAgIDxwPlxyXG4gICAgICBCYW1ib28gRGVsaWdodHMgUmVzdGF1cmFudCA1NywgUGxhY2UgQmVydHJhbmQgRGlhcyBSb3Vzc2VsIENpdHkgTXVub3pcclxuICAgICAgU3RhdGUgWmlwIENvZGU6IDU2IDgyNCBDb3VudHJ5OiBGcmFuY2VcclxuICAgIDwvcD5cclxuICA8L2Rpdj5gO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5cclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xyXG5jb25zdCBjb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5jb250LmFwcGVuZENoaWxkKGhvbWUoKSk7XHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICBjb250LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29udC5hcHBlbmRDaGlsZChob21lKCkpO1xyXG59XHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29tcG9uZW50KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9