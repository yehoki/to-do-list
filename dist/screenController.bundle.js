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

//   const getProjectsFromStorage = () => {
//     if (localStorage.getItem("projects")) {
//         console.log("it's there");
//         console.log(localStorage.getItem("projects"))
//     } else {
//         console.log('hehye');
//     }
//   };
  let task = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskController)();
  const projects = [Project("Default", [])];
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

  // based on the current project we are working in, we want to get the whole projec
  return {
    createProject,
    getProjects,
  };
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




const project = (0,_project__WEBPACK_IMPORTED_MODULE_1__.projectController)();

const displayProjects = (projectArea) => {
  if (document.getElementById("projects-area") === null) {
    populateProjectArea(projectArea);
  } else {
    document.getElementById("projects-area").innerHTML = ""; 
    populateProjectArea(document.getElementById("projects-area"));
  }
};

const populateProjectArea = (projectsArea) => {
  project
    .getProjects()
    .map((projectObject) => projectObject.projectName)
    .forEach((projectName) => {
      const projectEntry = document.createElement("div");
      projectEntry.classList.add("project-tab");
      projectEntry.id = projectName;
      projectEntry.textContent = projectName;
      projectsArea.appendChild(projectEntry);
    });
};

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
  console.log(document.getElementById("project-area") === null);
  // creates a new project on submitting the form
  newProjectForm.onsubmit = (e) => {
    e.preventDefault();
    if (project.createProject(projectNameInput.value)) {
      console.warn("New project added");
    }
    displayProjects();
  };
  return newProjectForm;
};

const makeSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  // sidebar button to add a new project

  // div which holds the project names

  const projectsArea = document.createElement("div");
  projectsArea.id = "projects-area";
  displayProjects(projectsArea);

  const addProjectButton = document.createElement("button");
  addProjectButton.setAttribute("id", "new-project");
  addProjectButton.textContent = "New Project";
  addProjectButton.addEventListener("click", () => {
    console.warn("Nothing");
    console.log(displayProjects());
    /*Add the logic for the following:
    1. Bring up an input for a new project
    2. Add the logic to the list of projects
    3. Set the new project as the 'current' one and render it out */
    displayProjects();
  });
  sidebar.appendChild(projectsArea);
  sidebar.appendChild(addProjectButton);
  sidebar.appendChild(makeProjectInput());

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
  taskButton.addEventListener("click", () => {
    // task.getTasks();a
    console.warn("We do a new task");
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEscURBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7QUN6RDdCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzJDO0FBQ0c7QUFDTjs7QUFFeEMsZ0JBQWdCLDJEQUFpQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG5BbGwgdGhpbmdzIHRvIGRvIHdpdGggcHJvamVjdHMgLVxuc2VwYXJhdGUgcHJvamVjdHMgd2lsbCBzdG9yZSBzZXBhcmF0ZSBsaXN0cyBvZiB0byBkbyB0YXNrc1xuRm9yIGV4YW1wbGU6IFdvcmsgdGFza3MsIGhvbWUgdGFza3MsIHNwb3J0IHRhc2tzIGV0Yy4gXG4qL1xuaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90YXNrXCI7XG5cbi8vIFByb2plY3QgZmFjdG9yeVxuY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgdGFza0xpc3QpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0TmFtZSxcbiAgICB0YXNrTGlzdCxcbiAgfTtcbn07XG5cbi8vIG91ciBsaXN0IG9mIGFsbCBwcm9qZWN0cywgaW5pdGlhbGl6ZWQgYXMgZW1wdHksIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYFByb2plY3RgIG9iamVjdHNcbi8vIHByb2plY3RDb250cm9sbGVyIE1vZHVsZVxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKSA9PiB7XG5cbi8vICAgY29uc3QgZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSA9ICgpID0+IHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIml0J3MgdGhlcmVcIik7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlaHllJyk7XG4vLyAgICAgfVxuLy8gICB9O1xuICBsZXQgdGFzayA9IHRhc2tDb250cm9sbGVyKCk7XG4gIGNvbnN0IHByb2plY3RzID0gW1Byb2plY3QoXCJEZWZhdWx0XCIsIFtdKV07XG4gIC8vIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IHdpdGggYSBuYW1lXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgLy8gZmlyc3Qgd2UgY2hlY2sgaWYgdGhlIHByb2plY3QgbmFtZSBleGlzdHMgYWxyZWFkeVxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBwcm9qZWN0cy5zb21lKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3RUaXRsZVxuICAgICk7XG4gICAgaWYgKCFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0VGl0bGUsIFtdKTtcbiAgICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIEFkZCBhIG5ldyBwcm9qZWN0IHRvIHRoZSBhcnJheSBvZiBwcm9qZWN0c1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgLy8gYmFzZWQgb24gdGhlIGN1cnJlbnQgcHJvamVjdCB3ZSBhcmUgd29ya2luZyBpbiwgd2Ugd2FudCB0byBnZXQgdGhlIHdob2xlIHByb2plY1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciB9O1xuIiwiLypcbldlIHdpbGwgYmUgdXNpbmcgdGFza3MgaW4gb3JkZXIgdG8gc3RvcmUsIGNyZWF0ZSBhbmQgbWFuaXB1bGF0ZSB0aGUgJ3RvZG8nIGxpc3Qgb2JqZWN0cy5cbiovXG5cbi8vIFRhc2sgZmFjdG9yeVxuXG5jb25zdCBUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsb2NhdGlvbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsIC8vIElmIHRoaXMgd2FzIGluIFRTLCBpdCB3b3VsZCBoYXZlIGEgc3RyaWN0IERhdGUgdHlwZSBmb3IgZXhhbXBsZS5cbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBsb2NhdGlvbixcbiAgfTtcbn07XG5cbmNvbnN0IHRhc2tDb250cm9sbGVyID0gKCkgPT4ge1xuICAvKiBIZXJlIHdlIHdpbGwgc3RvcmUgdGhlIHRhc2tzIHRoZW1zZWx2ZXMsIGZvciBub3cgd2UgaW5pdGlhbGl6ZSBhbiBlbXB0eSB0YXNrIGxpc3QgYXRcbiAgdGhlIGJlZ2lubmluZywgYW5kIHdpbGwgbW92ZSBvbiB0aGUgc2VtaS1wZXJtYW5lbnQgc3RvcmFnZSBhZnRlci5cblxuICBJIGhhdmUgdG8gcmVtZW1iZXIgdGhhdCBJIHdpbGwgc3RvcmUgZWFjaCBsaXN0IG9mIHRhc2tzIGluIGEgcHJvamVjdCxcbiAgc28gSSBzaG91bGQgTk9UIHN0b3JlIHRoZSB0YXNrcyBpbml0aWFsbHkgaW4gdGhlIHRhc2tDb250cm9sbGVyLFxuICBidXQgcmF0aGVyIGluIHRoZSBwcm9qZWN0Q29udHJvbGxlciBhcmVhLlxuICAgKi9cblxuICAvLyBDcmVhdGVzIGEgdGFza1xuICBjb25zdCBjcmVhdGVUYXNrID0gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgbG9jYXRpb25cbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgbm90ZXMsXG4gICAgICBsb2NhdGlvblxuICAgICk7XG4gICAgcmV0dXJuIG5ld1Rhc2s7XG4gIH07XG5cbiAgLy9cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICB9O1xufTtcbmV4cG9ydCB7IHRhc2tDb250cm9sbGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc2NyZWVuQ29udHJvbGxlciB3aWxsIGRpc3BsYXkgdGhlIHRhc2tzIHRvIHRoZSBET00sIHNvIGFueXRoaW5nIHRvIGRvIHdpdGggdGhlIERPTSBhbmQgbWFuaXB1bGF0aW5nIHdpbGwgYmUgZG9uZSBmcm9tIGhlcmVcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Yi1tYXJrLnN2Z1wiO1xuaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgcHJvamVjdCA9IHByb2plY3RDb250cm9sbGVyKCk7XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0QXJlYSkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpID09PSBudWxsKSB7XG4gICAgcG9wdWxhdGVQcm9qZWN0QXJlYShwcm9qZWN0QXJlYSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7IFxuICAgIHBvcHVsYXRlUHJvamVjdEFyZWEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0QXJlYSA9IChwcm9qZWN0c0FyZWEpID0+IHtcbiAgcHJvamVjdFxuICAgIC5nZXRQcm9qZWN0cygpXG4gICAgLm1hcCgocHJvamVjdE9iamVjdCkgPT4gcHJvamVjdE9iamVjdC5wcm9qZWN0TmFtZSlcbiAgICAuZm9yRWFjaCgocHJvamVjdE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0RW50cnkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIpO1xuICAgICAgcHJvamVjdEVudHJ5LmlkID0gcHJvamVjdE5hbWU7XG4gICAgICBwcm9qZWN0RW50cnkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgIHByb2plY3RzQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0RW50cnkpO1xuICAgIH0pO1xufTtcblxuY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVGFzayBsaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IG1ha2VNYWluID0gKHNpZGViYXIsIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IG1ha2VQcm9qZWN0SW5wdXQgPSAoZGlzcGxheU5vdyA9IGZhbHNlKSA9PiB7XG4gIC8vIENyZWF0aW5nIGFuZCBkaXNwbGF5aW5nIHRoZSBib3ggdG8gZGlzcGxheSB0aGUgJ25ldyBwcm9qZWN0JyBib3gsIGZhbHNlIGJ5IGRlZmF1bHRcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgbmFtZTpcIjtcbiAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSBcInByb2plY3QtbmFtZVwiO1xuICBwcm9qZWN0TmFtZUlucHV0LmlkID0gcHJvamVjdExhYmVsLmh0bWxGb3I7XG4gIHByb2plY3RTdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBwcm9qZWN0XCI7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0KTtcbiAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWFyZWFcIikgPT09IG51bGwpO1xuICAvLyBjcmVhdGVzIGEgbmV3IHByb2plY3Qgb24gc3VibWl0dGluZyB0aGUgZm9ybVxuICBuZXdQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwcm9qZWN0LmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk5ldyBwcm9qZWN0IGFkZGVkXCIpO1xuICAgIH1cbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgfTtcbiAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xufTtcblxuY29uc3QgbWFrZVNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiO1xuICAvLyBzaWRlYmFyIGJ1dHRvbiB0byBhZGQgYSBuZXcgcHJvamVjdFxuXG4gIC8vIGRpdiB3aGljaCBob2xkcyB0aGUgcHJvamVjdCBuYW1lc1xuXG4gIGNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RzQXJlYS5pZCA9IFwicHJvamVjdHMtYXJlYVwiO1xuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHNBcmVhKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFwiTm90aGluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdHMoKSk7XG4gICAgLypBZGQgdGhlIGxvZ2ljIGZvciB0aGUgZm9sbG93aW5nOlxuICAgIDEuIEJyaW5nIHVwIGFuIGlucHV0IGZvciBhIG5ldyBwcm9qZWN0XG4gICAgMi4gQWRkIHRoZSBsb2dpYyB0byB0aGUgbGlzdCBvZiBwcm9qZWN0c1xuICAgIDMuIFNldCB0aGUgbmV3IHByb2plY3QgYXMgdGhlICdjdXJyZW50JyBvbmUgYW5kIHJlbmRlciBpdCBvdXQgKi9cbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgfSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNBcmVhKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChtYWtlUHJvamVjdElucHV0KCkpO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufTtcblxuY29uc3QgbWFrZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJjb250ZW50XCI7XG4gIC8vICAgY3JlYXRlcyB0aGUgJ2FkZCB0YXNrJyBidXR0b24nO1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gdGFzay5nZXRUYXNrcygpO2FcbiAgICBjb25zb2xlLndhcm4oXCJXZSBkbyBhIG5ldyB0YXNrXCIpO1xuICB9KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBtYWtlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZ2l0aHViSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0aHViSW1hZ2Uuc3JjID0gR2l0aHViSWNvbjtcbiAgZ2l0aHViSW1hZ2UuYWx0ID0gXCJHaXRodWIgbG9nb1wiO1xuICBnaXRodWJJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3ZnXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS95ZWhva2kvXCI7XG4gIGZvb3RlclRleHQuaW5uZXJIVE1MID0gXCJDb3B5cmlnaHQgwqkgMjAyMyB5ZWhva2lcIjtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3Qgc2NyZWVuQ29udHJvbGxlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VIZWFkZXIoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFrZU1haW4obWFrZVNpZGViYXIoKSwgbWFrZUNvbnRlbnQoKSkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VGb290ZXIoKSk7XG59O1xuXG5leHBvcnQgeyBzY3JlZW5Db250cm9sbGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=