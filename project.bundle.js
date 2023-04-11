/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskController": () => (/* binding */ taskController)
/* harmony export */ });
/*
We will be using tasks in order to store, create and manipulate the 'todo' list objects.
*/

// Task factory

const Task = (title, description, dueDate, priority, notes, location) => {
  return {
    title,
    description,
    dueDate, // If this was in TS, it would have a strict Date type for example.
    priority,
    notes,
    location,
  };
};

const taskController = () => {
  /* Here we will store the tasks themselves, for now we initialize an empty task list at
  the beginning, and will move on the semi-permanent storage after.

  I have to remember that I will store each list of tasks in a project,
  so I should NOT store the tasks initially in the taskController,
  but rather in the projectController area.
   */

  // Creates a task
  const createTask = (
    title,
    description,
    dueDate,
    priority,
    notes,
    location
  ) => {
    const newTask = Task(
      title,
      description,
      dueDate,
      priority,
      notes,
      location
    );
    return newTask;
  };

  //
  return {
    createTask,
  };
};



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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* 
All things to do with projects -
separate projects will store separate lists of to do tasks
For example: Work tasks, home tasks, sport tasks etc. 
*/


// Project factory
const Project = (projectName, taskList) => {
  return {
    projectName,
    taskList,
  };
};

// our list of all projects, initialized as empty, will be populated with `Project` objects
// projectController Module
const projectController = () => {
// Local Storage logic to be added in later on.
//   const getProjectsFromStorage = () => {
//     if (localStorage.getItem("projects")) {
//         console.log("it's there");
//         console.log(localStorage.getItem("projects"))
//     } else {
//         console.log('hehye');
//     }
//   }; 


  let task = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskController)();
  const projects = [Project("Default", [1,2,3,4])];
  // create a new project with a name
  const createProject = (projectTitle) => {
    // first we check if the project name exists already
    const projectExists = projects.some(
      (project) => project.projectName === projectTitle
    );
    if (!projectExists) {
      const newProject = Project(projectTitle, []);
      addProject(newProject);
      return true;
    }
    return false;
  };

  // Add a new project to the array of projects
  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

//   Get all the tasks related to the project
  const getTasks = (projectTitle = 'Default') => {
    const projectIndex = projects.map(element => element.projectName).indexOf(projectTitle);
    if(projectIndex !== -1) {
        return projects[projectIndex].taskList;
    }
  };

  // based on the current project we are working in, we want to get the whole projec
  return {
    createProject,
    getProjects,
    getTasks,
  };
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7VUNuRDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYSxxREFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5XZSB3aWxsIGJlIHVzaW5nIHRhc2tzIGluIG9yZGVyIHRvIHN0b3JlLCBjcmVhdGUgYW5kIG1hbmlwdWxhdGUgdGhlICd0b2RvJyBsaXN0IG9iamVjdHMuXG4qL1xuXG4vLyBUYXNrIGZhY3RvcnlcblxuY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgbG9jYXRpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLCAvLyBJZiB0aGlzIHdhcyBpbiBUUywgaXQgd291bGQgaGF2ZSBhIHN0cmljdCBEYXRlIHR5cGUgZm9yIGV4YW1wbGUuXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgbG9jYXRpb24sXG4gIH07XG59O1xuXG5jb25zdCB0YXNrQ29udHJvbGxlciA9ICgpID0+IHtcbiAgLyogSGVyZSB3ZSB3aWxsIHN0b3JlIHRoZSB0YXNrcyB0aGVtc2VsdmVzLCBmb3Igbm93IHdlIGluaXRpYWxpemUgYW4gZW1wdHkgdGFzayBsaXN0IGF0XG4gIHRoZSBiZWdpbm5pbmcsIGFuZCB3aWxsIG1vdmUgb24gdGhlIHNlbWktcGVybWFuZW50IHN0b3JhZ2UgYWZ0ZXIuXG5cbiAgSSBoYXZlIHRvIHJlbWVtYmVyIHRoYXQgSSB3aWxsIHN0b3JlIGVhY2ggbGlzdCBvZiB0YXNrcyBpbiBhIHByb2plY3QsXG4gIHNvIEkgc2hvdWxkIE5PVCBzdG9yZSB0aGUgdGFza3MgaW5pdGlhbGx5IGluIHRoZSB0YXNrQ29udHJvbGxlcixcbiAgYnV0IHJhdGhlciBpbiB0aGUgcHJvamVjdENvbnRyb2xsZXIgYXJlYS5cbiAgICovXG5cbiAgLy8gQ3JlYXRlcyBhIHRhc2tcbiAgY29uc3QgY3JlYXRlVGFzayA9IChcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIGxvY2F0aW9uXG4gICkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIG5vdGVzLFxuICAgICAgbG9jYXRpb25cbiAgICApO1xuICAgIHJldHVybiBuZXdUYXNrO1xuICB9O1xuXG4gIC8vXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVGFzayxcbiAgfTtcbn07XG5leHBvcnQgeyB0YXNrQ29udHJvbGxlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBcbkFsbCB0aGluZ3MgdG8gZG8gd2l0aCBwcm9qZWN0cyAtXG5zZXBhcmF0ZSBwcm9qZWN0cyB3aWxsIHN0b3JlIHNlcGFyYXRlIGxpc3RzIG9mIHRvIGRvIHRhc2tzXG5Gb3IgZXhhbXBsZTogV29yayB0YXNrcywgaG9tZSB0YXNrcywgc3BvcnQgdGFza3MgZXRjLiBcbiovXG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3Rhc2tcIjtcblxuLy8gUHJvamVjdCBmYWN0b3J5XG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3ROYW1lLCB0YXNrTGlzdCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3ROYW1lLFxuICAgIHRhc2tMaXN0LFxuICB9O1xufTtcblxuLy8gb3VyIGxpc3Qgb2YgYWxsIHByb2plY3RzLCBpbml0aWFsaXplZCBhcyBlbXB0eSwgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBgUHJvamVjdGAgb2JqZWN0c1xuLy8gcHJvamVjdENvbnRyb2xsZXIgTW9kdWxlXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgpID0+IHtcbi8vIExvY2FsIFN0b3JhZ2UgbG9naWMgdG8gYmUgYWRkZWQgaW4gbGF0ZXIgb24uXG4vLyAgIGNvbnN0IGdldFByb2plY3RzRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4vLyAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJpdCdzIHRoZXJlXCIpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWh5ZScpO1xuLy8gICAgIH1cbi8vICAgfTsgXG5cblxuICBsZXQgdGFzayA9IHRhc2tDb250cm9sbGVyKCk7XG4gIGNvbnN0IHByb2plY3RzID0gW1Byb2plY3QoXCJEZWZhdWx0XCIsIFsxLDIsMyw0XSldO1xuICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIGEgbmFtZVxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgIC8vIGZpcnN0IHdlIGNoZWNrIGlmIHRoZSBwcm9qZWN0IG5hbWUgZXhpc3RzIGFscmVhZHlcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gcHJvamVjdHMuc29tZShcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0VGl0bGVcbiAgICApO1xuICAgIGlmICghcHJvamVjdEV4aXN0cykge1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdFRpdGxlLCBbXSk7XG4gICAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBBZGQgYSBuZXcgcHJvamVjdCB0byB0aGUgYXJyYXkgb2YgcHJvamVjdHNcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4vLyAgIEdldCBhbGwgdGhlIHRhc2tzIHJlbGF0ZWQgdG8gdGhlIHByb2plY3RcbiAgY29uc3QgZ2V0VGFza3MgPSAocHJvamVjdFRpdGxlID0gJ0RlZmF1bHQnKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5wcm9qZWN0TmFtZSkuaW5kZXhPZihwcm9qZWN0VGl0bGUpO1xuICAgIGlmKHByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza0xpc3Q7XG4gICAgfVxuICB9O1xuXG4gIC8vIGJhc2VkIG9uIHRoZSBjdXJyZW50IHByb2plY3Qgd2UgYXJlIHdvcmtpbmcgaW4sIHdlIHdhbnQgdG8gZ2V0IHRoZSB3aG9sZSBwcm9qZWNcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIGdldFRhc2tzLFxuICB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==