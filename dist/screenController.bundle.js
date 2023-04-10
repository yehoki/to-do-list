/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  const projects = [];
  let project = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskController)();

  // Initialize a new empty list of tasks
  const tasks = project.getTasks();

  // create a new project with a name
  const createProject = (projectName) => {
    const newProject = Project(projectName, []);
    addProject(newProject);
  };

  // Add a new project to the array of projects
  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

  // based on the current project we are working in, we want to get the whole projec
  return {
    createProject,
    getProjects,
  }
};



/***/ }),

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
  const tasks = [1,2,3,4];
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

  // Adds a task to the task array
  const addTask = (task) => {
    tasks.push(task);
  };

  // retrieves the task array
  const getTasks = () => console.log(tasks);

  //
  return {
    addTask,
    getTasks,
  };
};



/***/ }),

/***/ "./src/github-mark.svg":
/*!*****************************!*\
  !*** ./src/github-mark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fe6486fb13b13a23173.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "screenController": () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.svg */ "./src/github-mark.svg");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here




const task = (0,_task__WEBPACK_IMPORTED_MODULE_2__.taskController)();
const project = (0,_project__WEBPACK_IMPORTED_MODULE_1__.projectController)();

const makeHeader = () => {
  const header = document.createElement("header");
  const headerText = document.createElement("h1");
  headerText.textContent = "Task list";
  header.appendChild(headerText);
  return header;
};

const makeMain = (sidebar, content) => {
  const main = document.createElement("main");
  main.appendChild(sidebar);
  main.appendChild(content);
  return main;
};

const makeProjectInput = (displayNow = false) => {
    // Creating and displaying the box to display the 'new project' box, false by default
    const newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("id", "new-project-form");
    const projectLabel = document.createElement("label");
    const projectNameInput = document.createElement("input");
    const projectSubmit = document.createElement("button");
    projectLabel.textContent = "Project name:";
    projectLabel.htmlFor = "project-name";
    projectNameInput.id = projectLabel.htmlFor;
    projectSubmit.textContent = "Add project";
    newProjectForm.appendChild(projectLabel);
    newProjectForm.appendChild(projectNameInput);
    newProjectForm.appendChild(projectSubmit);
    newProjectForm.onsubmit = (e) => {
        e.preventDefault();
        project.createProject(projectNameInput.value);
        console.log(projectNameInput.value);
        console.log(project.getProjects());
    }
    return newProjectForm;
}

const makeSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebar.textContent = "sidebar";
// sidebar button to add a new project
  const addProjectButton = document.createElement("button");
  addProjectButton.setAttribute("id", "new-project");
  addProjectButton.textContent = "New Project";
  addProjectButton.addEventListener("click", () => {
    /*Add the logic for the following:
    1. Bring up an input for a new project
    2. Add the logic to the list of projects
    3. Set the new project as the 'current' one and render it out */
  })
  sidebar.appendChild(makeProjectInput());
  sidebar.appendChild(addProjectButton);

  return sidebar;
};

const makeContent = () => {
  const content = document.createElement("div");
  content.className = "content";
  content.textContent = "content";
//   creates the 'add task' button';
  const taskButton = document.createElement("button");
  taskButton.setAttribute("id", "add-task");
  taskButton.textContent = "Add Task";
  taskButton.addEventListener('click', () => {
    task.getTasks();
  })
  content.appendChild(taskButton);
  return content;
};

const makeFooter = () => {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  const githubLink = document.createElement("a");
  const githubImage = new Image();
  githubImage.src = _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;
  githubImage.alt = "Github logo";
  githubImage.classList.add("svg");
  githubLink.href = "https://github.com/yehoki/";
  footerText.innerHTML = "Copyright © 2023 yehoki";
  githubLink.appendChild(githubImage);
  footer.appendChild(footerText);
  footer.appendChild(githubLink);
  return footer;
};

const screenController = () => {
  document.body.innerHTML = "";
  document.body.appendChild(makeHeader());
  document.body.appendChild(makeMain(makeSidebar(), makeContent()));
  document.body.appendChild(makeFooter());
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQWM7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDMkM7QUFDRztBQUNOOztBQUV4QyxhQUFhLHFEQUFjO0FBQzNCLGdCQUFnQiwyREFBaUI7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbkFsbCB0aGluZ3MgdG8gZG8gd2l0aCBwcm9qZWN0cyAtXG5zZXBhcmF0ZSBwcm9qZWN0cyB3aWxsIHN0b3JlIHNlcGFyYXRlIGxpc3RzIG9mIHRvIGRvIHRhc2tzXG5Gb3IgZXhhbXBsZTogV29yayB0YXNrcywgaG9tZSB0YXNrcywgc3BvcnQgdGFza3MgZXRjLiBcbiovXG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3Rhc2tcIjtcblxuLy8gUHJvamVjdCBmYWN0b3J5XG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3ROYW1lLCB0YXNrTGlzdCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2plY3ROYW1lLFxuICAgIHRhc2tMaXN0LFxuICB9O1xufTtcblxuLy8gb3VyIGxpc3Qgb2YgYWxsIHByb2plY3RzLCBpbml0aWFsaXplZCBhcyBlbXB0eSwgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBgUHJvamVjdGAgb2JqZWN0c1xuLy8gcHJvamVjdENvbnRyb2xsZXIgTW9kdWxlXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHByb2plY3QgPSB0YXNrQ29udHJvbGxlcigpO1xuXG4gIC8vIEluaXRpYWxpemUgYSBuZXcgZW1wdHkgbGlzdCBvZiB0YXNrc1xuICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcblxuICAvLyBjcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIGEgbmFtZVxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUsIFtdKTtcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICB9O1xuXG4gIC8vIEFkZCBhIG5ldyBwcm9qZWN0IHRvIHRoZSBhcnJheSBvZiBwcm9qZWN0c1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgLy8gYmFzZWQgb24gdGhlIGN1cnJlbnQgcHJvamVjdCB3ZSBhcmUgd29ya2luZyBpbiwgd2Ugd2FudCB0byBnZXQgdGhlIHdob2xlIHByb2plY1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdENvbnRyb2xsZXJcbn0iLCIvKlxuV2Ugd2lsbCBiZSB1c2luZyB0YXNrcyBpbiBvcmRlciB0byBzdG9yZSwgY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHRoZSAndG9kbycgbGlzdCBvYmplY3RzLlxuKi9cblxuLy8gVGFzayBmYWN0b3J5XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxvY2F0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSwgLy8gSWYgdGhpcyB3YXMgaW4gVFMsIGl0IHdvdWxkIGhhdmUgYSBzdHJpY3QgRGF0ZSB0eXBlIGZvciBleGFtcGxlLlxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIGxvY2F0aW9uLFxuICB9O1xufTtcblxuY29uc3QgdGFza0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gWzEsMiwzLDRdO1xuICAvKiBIZXJlIHdlIHdpbGwgc3RvcmUgdGhlIHRhc2tzIHRoZW1zZWx2ZXMsIGZvciBub3cgd2UgaW5pdGlhbGl6ZSBhbiBlbXB0eSB0YXNrIGxpc3QgYXRcbiAgdGhlIGJlZ2lubmluZywgYW5kIHdpbGwgbW92ZSBvbiB0aGUgc2VtaS1wZXJtYW5lbnQgc3RvcmFnZSBhZnRlci5cblxuICBJIGhhdmUgdG8gcmVtZW1iZXIgdGhhdCBJIHdpbGwgc3RvcmUgZWFjaCBsaXN0IG9mIHRhc2tzIGluIGEgcHJvamVjdCxcbiAgc28gSSBzaG91bGQgTk9UIHN0b3JlIHRoZSB0YXNrcyBpbml0aWFsbHkgaW4gdGhlIHRhc2tDb250cm9sbGVyLFxuICBidXQgcmF0aGVyIGluIHRoZSBwcm9qZWN0Q29udHJvbGxlciBhcmVhLlxuICAgKi9cblxuICAvLyBDcmVhdGVzIGEgdGFza1xuICBjb25zdCBjcmVhdGVUYXNrID0gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgbG9jYXRpb25cbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgbm90ZXMsXG4gICAgICBsb2NhdGlvblxuICAgICk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG4gIH07XG5cbiAgLy8gQWRkcyBhIHRhc2sgdG8gdGhlIHRhc2sgYXJyYXlcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICAvLyByZXRyaWV2ZXMgdGhlIHRhc2sgYXJyYXlcbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBjb25zb2xlLmxvZyh0YXNrcyk7XG5cbiAgLy9cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLFxuICAgIGdldFRhc2tzLFxuICB9O1xufTtcbmV4cG9ydCB7IHRhc2tDb250cm9sbGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc2NyZWVuQ29udHJvbGxlciB3aWxsIGRpc3BsYXkgdGhlIHRhc2tzIHRvIHRoZSBET00sIHNvIGFueXRoaW5nIHRvIGRvIHdpdGggdGhlIERPTSBhbmQgbWFuaXB1bGF0aW5nIHdpbGwgYmUgZG9uZSBmcm9tIGhlcmVcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Yi1tYXJrLnN2Z1wiO1xuaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgdGFzayA9IHRhc2tDb250cm9sbGVyKCk7XG5jb25zdCBwcm9qZWN0ID0gcHJvamVjdENvbnRyb2xsZXIoKTtcblxuY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVGFzayBsaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IG1ha2VNYWluID0gKHNpZGViYXIsIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IG1ha2VQcm9qZWN0SW5wdXQgPSAoZGlzcGxheU5vdyA9IGZhbHNlKSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgYW5kIGRpc3BsYXlpbmcgdGhlIGJveCB0byBkaXNwbGF5IHRoZSAnbmV3IHByb2plY3QnIGJveCwgZmFsc2UgYnkgZGVmYXVsdFxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBuYW1lOlwiO1xuICAgIHByb2plY3RMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0LW5hbWVcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gcHJvamVjdExhYmVsLmh0bWxGb3I7XG4gICAgcHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXQpO1xuICAgIG5ld1Byb2plY3RGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0LmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFByb2plY3RzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3UHJvamVjdEZvcm07XG59XG5cbmNvbnN0IG1ha2VTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc05hbWUgPSBcInNpZGViYXJcIjtcbiAgc2lkZWJhci50ZXh0Q29udGVudCA9IFwic2lkZWJhclwiO1xuLy8gc2lkZWJhciBidXR0b24gdG8gYWRkIGEgbmV3IHByb2plY3RcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8qQWRkIHRoZSBsb2dpYyBmb3IgdGhlIGZvbGxvd2luZzpcbiAgICAxLiBCcmluZyB1cCBhbiBpbnB1dCBmb3IgYSBuZXcgcHJvamVjdFxuICAgIDIuIEFkZCB0aGUgbG9naWMgdG8gdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICAzLiBTZXQgdGhlIG5ldyBwcm9qZWN0IGFzIHRoZSAnY3VycmVudCcgb25lIGFuZCByZW5kZXIgaXQgb3V0ICovXG4gIH0pXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFrZVByb2plY3RJbnB1dCgpKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmNvbnN0IG1ha2VDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiY29udGVudFwiO1xuLy8gICBjcmVhdGVzIHRoZSAnYWRkIHRhc2snIGJ1dHRvbic7XG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2tcIik7XG4gIHRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFzay5nZXRUYXNrcygpO1xuICB9KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuICByZXR1cm4gY29udGVudDtcbn07XG5cbmNvbnN0IG1ha2VGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWJJbWFnZS5zcmMgPSBHaXRodWJJY29uO1xuICBnaXRodWJJbWFnZS5hbHQgPSBcIkdpdGh1YiBsb2dvXCI7XG4gIGdpdGh1YkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3llaG9raS9cIjtcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkNvcHlyaWdodCDCqSAyMDIzIHllaG9raVwiO1xuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBzY3JlZW5Db250cm9sbGVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFrZUhlYWRlcigpKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlTWFpbihtYWtlU2lkZWJhcigpLCBtYWtlQ29udGVudCgpKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFrZUZvb3RlcigpKTtcbn07XG5cbmV4cG9ydCB7XG4gICAgc2NyZWVuQ29udHJvbGxlclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==