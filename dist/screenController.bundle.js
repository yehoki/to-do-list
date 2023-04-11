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


class Todos {
  constructor() {
    this.projects = [];
  }

  static getProjects() {
      return this.projects;
  }

  static addProject(project) {
    this.projects.push(project);
  }

  static deleteProject(projectName) {
    this.projects.filter((project) => project.projectName !== projectName);
  }

  static getTasks(projectName) {
    return this.projects.filter(project => project.projectName === projectName)[0].taskList;
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
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
/* 
All things to do with projects -
separate projects will store separate lists of to do tasks
For example: Work tasks, home tasks, sport tasks etc. 
*/



class Project {
    constructor(projectName, taskList = []){
        this.projectName = projectName
        this.taskList = taskList
    }

    createProject(projectTitle) {
        const projectExists = todos.getProjects().some(
            (project) => project.projectName === projectTitle);
        if (!projectExists) {
            const newProject = Project(projectTitle, []);
            _Todos__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject);
            return true;
        }
        return false;
    }

    getTasks(projectTitle) {
        return todos.getProjects().filter(project => project.projectName === projectTitle)[0];
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
/* harmony export */   "default": () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.svg */ "./src/github-mark.svg");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here



const todolist = new _Todos__WEBPACK_IMPORTED_MODULE_1__["default"]();

class screenController {
  // DOM CREATION METHODS
  static loadPage() {
    document.body.appendChild(screenController.makeHeader());
    document.body.appendChild(
      screenController.makeMain(
        screenController.makeSidebar(),
        screenController.makeContent()
      )
    );
    document.body.appendChild(screenController.makeFooter());
  }

  static makeHeader() {
    const header = document.createElement("header");
    const headerText = document.createElement("h1");
    headerText.textContent = "Task list";
    header.appendChild(headerText);
    return header;
  }

  static makeMain(sidebar, content) {
    const main = document.createElement("main");
    main.appendChild(sidebar);
    main.appendChild(content);
    return main;
  }

  static makeSidebar() {
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    const projectsArea = document.createElement("div");
    projectsArea.id = "projects-area";
    // displayProjects(projectsArea);

    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("id", "new-project");
    addProjectButton.textContent = "New Project";
    addProjectButton.addEventListener("click", () => {
      console.warn("Nothing");
      //   console.log(displayProjects());
      /*Add the logic for the following:
      1. Bring up an input for a new project
      2. Add the logic to the list of projects
      3. Set the new project as the 'current' one and render it out */
      //   displayProjects();
    });
    sidebar.appendChild(projectsArea);
    sidebar.appendChild(addProjectButton);
    // sidebar.appendChild(makeProjectInput());
    return sidebar;
  }

  static makeContent() {
    const content = document.createElement("div");
    content.className = "content";
    
    const taskArea = document.createElement("div");
    const projectTitle = document.createElement("h3");
    const taskGrid = document.createElement("div");
    const addTaskArea = document.createElement("div");

    //   for now, leave as default - later change to display the selected project name
    projectTitle.textContent = "Default";
    taskGrid.id = "task-grid";
    taskGrid.className = "task-grid";
    //  the tasks will be displayed inside of the taskGrid element
    //  inside the add task area we will have the 'add task' button,
    //  once pressed it will be replaced by the form to add a new task.
    addTaskArea.id = "add-task-area";
    addTaskArea.className = "add-task-area";
    // move this later to a function which displays the button itself,
    // for it to be called to replace the task form once submitted
    // addTaskArea.appendChild(makeNewTaskButton());
    taskArea.id = "task-area";
    taskArea.className = "task-area";
    // displayTasks(taskGrid);
    taskArea.appendChild(projectTitle);
    taskArea.appendChild(taskGrid);
    taskArea.appendChild(addTaskArea);

    content.appendChild(taskArea);
    return content;
  }

  static makeFooter() {
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
  }

  // HELPER METHOD FOR REPEAT ACTIONS


}

const displayProjects = (projectArea) => {
  console.log(document.getElementById("projects-area"), projectArea);
  console.log(_Todos__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects());
  if (document.getElementById("projects-area") === null) {
    populateProjectArea(projectArea);
  } else {
    document.getElementById("projects-area").innerHTML = "";
    populateProjectArea(document.getElementById("projects-area"));
  }
};

const populateProjectArea = (projectsArea) => {
  todolist
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

const displayTasks = (taskGrid) => {
  if (document.getElementById("task-grid") === null) {
    populateTaskArea(taskGrid);
  } else {
    document.getElementById("task-grid").innerHTML = "";
    populateTaskArea(document.getElementById("task-grid"));
  }
};

function populateTaskArea(taskGrid) {
  _Todos__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks().forEach((taskName) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task");
    taskCard.id = taskName.title;
    taskCard.textContent = taskName.title;
    taskGrid.appendChild(taskCard);
  });
}

//  generates a new form for inputting a new task
function makeNewTaskEntry() {
  const taskEntry = document.createElement("form");
  taskEntry.id = "task-entry";
  taskEntry.className = "task-entry";
  // title
  const taskTitleLabel = document.createElement("label");
  const taskTitle = document.createElement("input");
  taskTitle.type = "test";
  taskTitle.placeholder = "Title";
  taskTitle.required = true;
  taskTitleLabel.htmlFor = "task-title";
  taskTitle.id = taskTitleLabel.htmlFor;
  // description
  const taskDescriptionLabel = document.createElement("label");
  const taskDescription = document.createElement("input");
  taskDescription.type = "text";
  taskDescription.placeholder = "Description...";
  taskDescriptionLabel.htmlFor = "task-description";
  taskDescription.id = taskDescriptionLabel.htmlFor;
  // dueDate
  const taskDueDateLabel = document.createElement("label");
  const taskDueDate = document.createElement("input");
  taskDueDate.type = "date";
  taskDueDateLabel.htmlFor = "task-due-date";
  taskDueDate.id = taskDueDateLabel.htmlFor;

  //   submit form button
  const submitTaskButton = document.createElement("button");
  //   submitTaskButton.type = "submit";
  submitTaskButton.textContent = "Add task";

  // add cancel form button

  taskEntry.appendChild(taskTitleLabel);
  taskEntry.appendChild(taskTitle);
  taskEntry.appendChild(taskDescriptionLabel);
  taskEntry.appendChild(taskDescription);
  taskEntry.appendChild(taskDueDateLabel);
  taskEntry.appendChild(taskDueDate);
  taskEntry.appendChild(submitTaskButton);
  // submit the task
  taskEntry.onsubmit = (e) => {
    e.preventDefault();
    // create a new task object
    const newTask = task.createTask(
      taskTitle.value,
      taskDescription.value,
      taskDueDate.value,
      0,
      0,
      0
    );
    project.addTask(newTask);
    displayTasks(document.getElementById("task-grid"));
    document.getElementById("add-task-area").innerHTML = "";
    // push to task list

    // rerender tasks
    // show add task button again
    document.getElementById("add-task-area").appendChild(makeNewTaskButton());
    console.log(project.getTasks());
  };
  return taskEntry;
}

function makeNewTaskButton() {
  const taskButton = document.createElement("button");
  taskButton.setAttribute("id", "add-task");
  taskButton.textContent = "Add Task";
  taskButton.addEventListener("click", () => {
    document.getElementById("add-task-area").innerHTML = "";
    document.getElementById("add-task-area").appendChild(makeNewTaskEntry());
    /*
          1. Show up a form with entries for all defined Task properties
          2. Default "no-entry" values for most of them
      */
    console.warn("We do a new task");
  });
  return taskButton;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0M7O0FBRWpCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzJDO0FBQ2Y7O0FBRTVCLHFCQUFxQiw4Q0FBSzs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsMERBQWlCO0FBQy9CO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsdURBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JlZW5Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzb21ldGhpbmdcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lICE9PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGFza3MocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSlbMF0udGFza0xpc3Q7XG4gIH1cbn1cbiIsIi8qIFxuQWxsIHRoaW5ncyB0byBkbyB3aXRoIHByb2plY3RzIC1cbnNlcGFyYXRlIHByb2plY3RzIHdpbGwgc3RvcmUgc2VwYXJhdGUgbGlzdHMgb2YgdG8gZG8gdGFza3NcbkZvciBleGFtcGxlOiBXb3JrIHRhc2tzLCBob21lIHRhc2tzLCBzcG9ydCB0YXNrcyBldGMuIFxuKi9cblxuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCB0YXNrTGlzdCA9IFtdKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lXG4gICAgICAgIHRoaXMudGFza0xpc3QgPSB0YXNrTGlzdFxuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSB0b2Rvcy5nZXRQcm9qZWN0cygpLnNvbWUoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0VGl0bGUsIFtdKTtcbiAgICAgICAgICAgIFRvZG9zLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0b2Rvcy5nZXRQcm9qZWN0cygpLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3RUaXRsZSlbMF07XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRvZG9zLmdldFByb2plY3RzWzBdLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxufVxuXG5cblxuLy8gb3VyIGxpc3Qgb2YgYWxsIHByb2plY3RzLCBpbml0aWFsaXplZCBhcyBlbXB0eSwgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBgUHJvamVjdGAgb2JqZWN0c1xuLy8gcHJvamVjdENvbnRyb2xsZXIgTW9kdWxlXG5cbi8vIExvY2FsIFN0b3JhZ2UgbG9naWMgdG8gYmUgYWRkZWQgaW4gbGF0ZXIgb24uXG4vLyAgIGNvbnN0IGdldFByb2plY3RzRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4vLyAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJpdCdzIHRoZXJlXCIpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWh5ZScpO1xuLy8gICAgIH1cbi8vICAgfTsgXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzY3JlZW5Db250cm9sbGVyIHdpbGwgZGlzcGxheSB0aGUgdGFza3MgdG8gdGhlIERPTSwgc28gYW55dGhpbmcgdG8gZG8gd2l0aCB0aGUgRE9NIGFuZCBtYW5pcHVsYXRpbmcgd2lsbCBiZSBkb25lIGZyb20gaGVyZVxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4vZ2l0aHViLW1hcmsuc3ZnXCI7XG5pbXBvcnQgVG9kb3MgZnJvbSBcIi4vVG9kb3NcIjtcblxuY29uc3QgdG9kb2xpc3QgPSBuZXcgVG9kb3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NyZWVuQ29udHJvbGxlciB7XG4gIC8vIERPTSBDUkVBVElPTiBNRVRIT0RTXG4gIHN0YXRpYyBsb2FkUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgc2NyZWVuQ29udHJvbGxlci5tYWtlTWFpbihcbiAgICAgICAgc2NyZWVuQ29udHJvbGxlci5tYWtlU2lkZWJhcigpLFxuICAgICAgICBzY3JlZW5Db250cm9sbGVyLm1ha2VDb250ZW50KClcbiAgICAgIClcbiAgICApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyZWVuQ29udHJvbGxlci5tYWtlRm9vdGVyKCkpO1xuICB9XG5cbiAgc3RhdGljIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIlRhc2sgbGlzdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9XG5cbiAgc3RhdGljIG1ha2VNYWluKHNpZGViYXIsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiBtYWluO1xuICB9XG5cbiAgc3RhdGljIG1ha2VTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gXCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzQXJlYS5pZCA9IFwicHJvamVjdHMtYXJlYVwiO1xuICAgIC8vIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0FyZWEpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0XCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKFwiTm90aGluZ1wiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGlzcGxheVByb2plY3RzKCkpO1xuICAgICAgLypBZGQgdGhlIGxvZ2ljIGZvciB0aGUgZm9sbG93aW5nOlxuICAgICAgMS4gQnJpbmcgdXAgYW4gaW5wdXQgZm9yIGEgbmV3IHByb2plY3RcbiAgICAgIDIuIEFkZCB0aGUgbG9naWMgdG8gdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICAgIDMuIFNldCB0aGUgbmV3IHByb2plY3QgYXMgdGhlICdjdXJyZW50JyBvbmUgYW5kIHJlbmRlciBpdCBvdXQgKi9cbiAgICAgIC8vICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0FyZWEpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gc2lkZWJhci5hcHBlbmRDaGlsZChtYWtlUHJvamVjdElucHV0KCkpO1xuICAgIHJldHVybiBzaWRlYmFyO1xuICB9XG5cbiAgc3RhdGljIG1ha2VDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG4gICAgXG4gICAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCB0YXNrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gICBmb3Igbm93LCBsZWF2ZSBhcyBkZWZhdWx0IC0gbGF0ZXIgY2hhbmdlIHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHByb2plY3QgbmFtZVxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xuICAgIHRhc2tHcmlkLmlkID0gXCJ0YXNrLWdyaWRcIjtcbiAgICB0YXNrR3JpZC5jbGFzc05hbWUgPSBcInRhc2stZ3JpZFwiO1xuICAgIC8vICB0aGUgdGFza3Mgd2lsbCBiZSBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSB0YXNrR3JpZCBlbGVtZW50XG4gICAgLy8gIGluc2lkZSB0aGUgYWRkIHRhc2sgYXJlYSB3ZSB3aWxsIGhhdmUgdGhlICdhZGQgdGFzaycgYnV0dG9uLFxuICAgIC8vICBvbmNlIHByZXNzZWQgaXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZm9ybSB0byBhZGQgYSBuZXcgdGFzay5cbiAgICBhZGRUYXNrQXJlYS5pZCA9IFwiYWRkLXRhc2stYXJlYVwiO1xuICAgIGFkZFRhc2tBcmVhLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYXJlYVwiO1xuICAgIC8vIG1vdmUgdGhpcyBsYXRlciB0byBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBidXR0b24gaXRzZWxmLFxuICAgIC8vIGZvciBpdCB0byBiZSBjYWxsZWQgdG8gcmVwbGFjZSB0aGUgdGFzayBmb3JtIG9uY2Ugc3VibWl0dGVkXG4gICAgLy8gYWRkVGFza0FyZWEuYXBwZW5kQ2hpbGQobWFrZU5ld1Rhc2tCdXR0b24oKSk7XG4gICAgdGFza0FyZWEuaWQgPSBcInRhc2stYXJlYVwiO1xuICAgIHRhc2tBcmVhLmNsYXNzTmFtZSA9IFwidGFzay1hcmVhXCI7XG4gICAgLy8gZGlzcGxheVRhc2tzKHRhc2tHcmlkKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHRhc2tHcmlkKTtcbiAgICB0YXNrQXJlYS5hcHBlbmRDaGlsZChhZGRUYXNrQXJlYSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tBcmVhKTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdGh1YkltYWdlLnNyYyA9IEdpdGh1Ykljb247XG4gICAgZ2l0aHViSW1hZ2UuYWx0ID0gXCJHaXRodWIgbG9nb1wiO1xuICAgIGdpdGh1YkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20veWVob2tpL1wiO1xuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gXCJDb3B5cmlnaHQgwqkgMjAyMyB5ZWhva2lcIjtcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICAgIHJldHVybiBmb290ZXI7XG4gIH1cblxuICAvLyBIRUxQRVIgTUVUSE9EIEZPUiBSRVBFQVQgQUNUSU9OU1xuXG5cbn1cblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RBcmVhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYXJlYVwiKSwgcHJvamVjdEFyZWEpO1xuICBjb25zb2xlLmxvZyhUb2Rvcy5nZXRQcm9qZWN0cygpKTtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYXJlYVwiKSA9PT0gbnVsbCkge1xuICAgIHBvcHVsYXRlUHJvamVjdEFyZWEocHJvamVjdEFyZWEpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYXJlYVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHBvcHVsYXRlUHJvamVjdEFyZWEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0QXJlYSA9IChwcm9qZWN0c0FyZWEpID0+IHtcbiAgdG9kb2xpc3RcbiAgICAuZ2V0UHJvamVjdHMoKVxuICAgIC5tYXAoKHByb2plY3RPYmplY3QpID0+IHByb2plY3RPYmplY3QucHJvamVjdE5hbWUpXG4gICAgLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdEVudHJ5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhYlwiKTtcbiAgICAgIHByb2plY3RFbnRyeS5pZCA9IHByb2plY3ROYW1lO1xuICAgICAgcHJvamVjdEVudHJ5LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICBwcm9qZWN0c0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEVudHJ5KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IG1ha2VQcm9qZWN0SW5wdXQgPSAoZGlzcGxheU5vdyA9IGZhbHNlKSA9PiB7XG4gIC8vIENyZWF0aW5nIGFuZCBkaXNwbGF5aW5nIHRoZSBib3ggdG8gZGlzcGxheSB0aGUgJ25ldyBwcm9qZWN0JyBib3gsIGZhbHNlIGJ5IGRlZmF1bHRcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgbmFtZTpcIjtcbiAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSBcInByb2plY3QtbmFtZVwiO1xuICBwcm9qZWN0TmFtZUlucHV0LmlkID0gcHJvamVjdExhYmVsLmh0bWxGb3I7XG4gIHByb2plY3RTdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBwcm9qZWN0XCI7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0KTtcbiAgLy8gY3JlYXRlcyBhIG5ldyBwcm9qZWN0IG9uIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAgbmV3UHJvamVjdEZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvamVjdC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lSW5wdXQudmFsdWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJOZXcgcHJvamVjdCBhZGRlZFwiKTtcbiAgICB9XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gIH07XG4gIHJldHVybiBuZXdQcm9qZWN0Rm9ybTtcbn07XG5cbmNvbnN0IG1ha2VTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc05hbWUgPSBcInNpZGViYXJcIjtcbiAgLy8gc2lkZWJhciBidXR0b24gdG8gYWRkIGEgbmV3IHByb2plY3RcblxuICAvLyBkaXYgd2hpY2ggaG9sZHMgdGhlIHByb2plY3QgbmFtZXNcblxuICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0c0FyZWEuaWQgPSBcInByb2plY3RzLWFyZWFcIjtcbiAgZGlzcGxheVByb2plY3RzKHByb2plY3RzQXJlYSk7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcIk5vdGhpbmdcIik7XG4gICAgY29uc29sZS5sb2coZGlzcGxheVByb2plY3RzKCkpO1xuICAgIC8qQWRkIHRoZSBsb2dpYyBmb3IgdGhlIGZvbGxvd2luZzpcbiAgICAxLiBCcmluZyB1cCBhbiBpbnB1dCBmb3IgYSBuZXcgcHJvamVjdFxuICAgIDIuIEFkZCB0aGUgbG9naWMgdG8gdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICAzLiBTZXQgdGhlIG5ldyBwcm9qZWN0IGFzIHRoZSAnY3VycmVudCcgb25lIGFuZCByZW5kZXIgaXQgb3V0ICovXG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gIH0pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzQXJlYSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFrZVByb2plY3RJbnB1dCgpKTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICh0YXNrR3JpZCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikgPT09IG51bGwpIHtcbiAgICBwb3B1bGF0ZVRhc2tBcmVhKHRhc2tHcmlkKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZ3JpZFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHBvcHVsYXRlVGFza0FyZWEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVRhc2tBcmVhKHRhc2tHcmlkKSB7XG4gIFRvZG9zLmdldFRhc2tzKCkuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgdGFza0NhcmQuaWQgPSB0YXNrTmFtZS50aXRsZTtcbiAgICB0YXNrQ2FyZC50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnRpdGxlO1xuICAgIHRhc2tHcmlkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfSk7XG59XG5cbi8vICBnZW5lcmF0ZXMgYSBuZXcgZm9ybSBmb3IgaW5wdXR0aW5nIGEgbmV3IHRhc2tcbmZ1bmN0aW9uIG1ha2VOZXdUYXNrRW50cnkoKSB7XG4gIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0YXNrRW50cnkuaWQgPSBcInRhc2stZW50cnlcIjtcbiAgdGFza0VudHJ5LmNsYXNzTmFtZSA9IFwidGFzay1lbnRyeVwiO1xuICAvLyB0aXRsZVxuICBjb25zdCB0YXNrVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrVGl0bGUudHlwZSA9IFwidGVzdFwiO1xuICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gIHRhc2tUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tUaXRsZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza1RpdGxlLmlkID0gdGFza1RpdGxlTGFiZWwuaHRtbEZvcjtcbiAgLy8gZGVzY3JpcHRpb25cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbi4uLlwiO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi5pZCA9IHRhc2tEZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3I7XG4gIC8vIGR1ZURhdGVcbiAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrLWR1ZS1kYXRlXCI7XG4gIHRhc2tEdWVEYXRlLmlkID0gdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yO1xuXG4gIC8vICAgc3VibWl0IGZvcm0gYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAvLyAgIHN1Ym1pdFRhc2tCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgLy8gYWRkIGNhbmNlbCBmb3JtIGJ1dHRvblxuXG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVMYWJlbCk7XG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J1dHRvbik7XG4gIC8vIHN1Ym1pdCB0aGUgdGFza1xuICB0YXNrRW50cnkub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjcmVhdGUgYSBuZXcgdGFzayBvYmplY3RcbiAgICBjb25zdCBuZXdUYXNrID0gdGFzay5jcmVhdGVUYXNrKFxuICAgICAgdGFza1RpdGxlLnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGUudmFsdWUsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDBcbiAgICApO1xuICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBkaXNwbGF5VGFza3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYXJlYVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vIHB1c2ggdG8gdGFzayBsaXN0XG5cbiAgICAvLyByZXJlbmRlciB0YXNrc1xuICAgIC8vIHNob3cgYWRkIHRhc2sgYnV0dG9uIGFnYWluXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKG1ha2VOZXdUYXNrQnV0dG9uKCkpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKSk7XG4gIH07XG4gIHJldHVybiB0YXNrRW50cnk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdUYXNrQnV0dG9uKCkge1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKG1ha2VOZXdUYXNrRW50cnkoKSk7XG4gICAgLypcbiAgICAgICAgICAxLiBTaG93IHVwIGEgZm9ybSB3aXRoIGVudHJpZXMgZm9yIGFsbCBkZWZpbmVkIFRhc2sgcHJvcGVydGllc1xuICAgICAgICAgIDIuIERlZmF1bHQgXCJuby1lbnRyeVwiIHZhbHVlcyBmb3IgbW9zdCBvZiB0aGVtXG4gICAgICAqL1xuICAgIGNvbnNvbGUud2FybihcIldlIGRvIGEgbmV3IHRhc2tcIik7XG4gIH0pO1xuICByZXR1cm4gdGFza0J1dHRvbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==