/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Todos.js":
/*!**********************!*\
  !*** ./src/Todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
// import something


// const projectClass = new Project();

class Todos {
  constructor() {
    this.projects = [new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Test", [])];
  }

  getProjects() {
    return this.projects;
  }

  addProject(projectObject) {
    const projectExists = this.getProjects().some(
      (project) => project.projectName === projectObject.projectName
    );
    if (!projectExists) {
      this.projects.push(projectObject);
      return true;
    }
    return false;
  }

  deleteProject(projectName) {
    this.projects.filter((project) => project.projectName !== projectName);
  }

  getTasks(projectName) {
    return this.projects.filter(
      (project) => project.projectName === projectName
    )[0].taskList;
  }
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
/* 
All things to do with projects -
separate projects will store separate lists of to do tasks
For example: Work tasks, home tasks, sport tasks etc. 
*/



class Project {
  constructor(projectName, taskList = []) {
    this.projectName = projectName;
    this.taskList = taskList;
  }


  getTitle(project) {
    return project.projectName;
  }

  getTasks(projectTitle) {
    return todos
      .getProjects()
      .filter((project) => project.projectName === projectTitle)[0];
  }

  addTask(task) {
    todos.getProjects[0].taskList.push(task);
  }
}



// our list of all projects, initialized as empty, will be populated with `Project` objects
// projectController Module

// Local Storage logic to be added in later on.
//   const getProjectsFromStorage = () => {
//     if (localStorage.getItem("projects")) {
//         console.log("it's there");
//         console.log(localStorage.getItem("projects"))
//     } else {
//         console.log('hehye');
//     }
//   };


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUM7O0FBRWpDOztBQUVlO0FBQ2Y7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUlDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7VUM3Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzb21ldGhpbmdcbmltcG9ydCBQcm9qZWN0ICBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbi8vIGNvbnN0IHByb2plY3RDbGFzcyA9IG5ldyBQcm9qZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtuZXcgUHJvamVjdChcIlRlc3RcIiwgW10pXTtcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKS5zb21lKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3RPYmplY3QucHJvamVjdE5hbWVcbiAgICApO1xuICAgIGlmICghcHJvamVjdEV4aXN0cykge1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3RPYmplY3QpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSAhPT0gcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgZ2V0VGFza3MocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApWzBdLnRhc2tMaXN0O1xuICB9XG59XG4iLCIvKiBcbkFsbCB0aGluZ3MgdG8gZG8gd2l0aCBwcm9qZWN0cyAtXG5zZXBhcmF0ZSBwcm9qZWN0cyB3aWxsIHN0b3JlIHNlcGFyYXRlIGxpc3RzIG9mIHRvIGRvIHRhc2tzXG5Gb3IgZXhhbXBsZTogV29yayB0YXNrcywgaG9tZSB0YXNrcywgc3BvcnQgdGFza3MgZXRjLiBcbiovXG5cbmltcG9ydCBUb2RvcyBmcm9tIFwiLi9Ub2Rvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHRhc2tMaXN0ID0gW10pIHtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy50YXNrTGlzdCA9IHRhc2tMaXN0O1xuICB9XG5cblxuICBnZXRUaXRsZShwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3QucHJvamVjdE5hbWU7XG4gIH1cblxuICBnZXRUYXNrcyhwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdG9kb3NcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0VGl0bGUpWzBdO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdG9kb3MuZ2V0UHJvamVjdHNbMF0udGFza0xpc3QucHVzaCh0YXNrKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICAgIFByb2plY3Rcbn1cblxuLy8gb3VyIGxpc3Qgb2YgYWxsIHByb2plY3RzLCBpbml0aWFsaXplZCBhcyBlbXB0eSwgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBgUHJvamVjdGAgb2JqZWN0c1xuLy8gcHJvamVjdENvbnRyb2xsZXIgTW9kdWxlXG5cbi8vIExvY2FsIFN0b3JhZ2UgbG9naWMgdG8gYmUgYWRkZWQgaW4gbGF0ZXIgb24uXG4vLyAgIGNvbnN0IGdldFByb2plY3RzRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4vLyAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJpdCdzIHRoZXJlXCIpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWh5ZScpO1xuLy8gICAgIH1cbi8vICAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcHJvamVjdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==