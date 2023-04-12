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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here




const todolist = new _Todos__WEBPACK_IMPORTED_MODULE_2__["default"]();

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
    screenController.displayProjects(projectsArea);

    const addProjectArea = document.createElement("div");
    addProjectArea.className = "add-project-area";
    addProjectArea.id = "add-project-area";

    addProjectArea.appendChild(screenController.makeNewProjectButton());
    sidebar.appendChild(projectsArea);
    sidebar.appendChild(addProjectArea);
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
  static displayProjects(projectArea) {
    if (document.getElementById("projects-area") === null) {
      screenController.populateProjectArea(projectArea);
    } else {
      document.getElementById("projects-area").innerHTML = "";
      screenController.populateProjectArea(
        document.getElementById("projects-area")
      );
    }
  }

  static populateProjectArea(projectArea) {
    todolist
      .getProjects()
      .map((projectObject) => projectObject.projectName)
      .forEach((projectName) => {
        const projectEntry = document.createElement("div");
        projectEntry.classList.add("project-tab");
        projectEntry.id = projectName;
        projectEntry.textContent = projectName;
        projectArea.appendChild(projectEntry);
      });
  }

  static makeNewProjectButton() {
    const addProjectButton = document.createElement("button");
    addProjectButton.id = "new-project";
    addProjectButton.textContent = "New Project";
    addProjectButton.addEventListener("click", () => {
      console.warn("Nothing");
      document.getElementById("add-project-area").innerHTML = "";
      document
        .getElementById("add-project-area")
        .appendChild(screenController.makeProjectInput());
      // display the new project form;
      /*
        WHEN WE CREATE A NEW PROJECT, THE BUTTON DISAPPEARS AND A FORM APPEARS
        ON SUBMIT FOR FORM THE FORM GETS SENT, DISAPPEARS AND THE BUTTON APPEARS
       */
      //   console.log(displayProjects());
      /*Add the logic for the following:
      1. Bring up an input for a new project
      2. Add the logic to the list of projects
      3. Set the new project as the 'current' one and render it out */
      screenController.displayProjects();
    });
    return addProjectButton;
  }

  static makeProjectInput() {
    // Creating and displaying the box to display the 'new project' box, false by default
    const newProjectForm = document.createElement("form");
    newProjectForm.id = "new-project-form";
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
      if (todolist.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectNameInput.value, []))) {
        console.warn(`NEW PROJECT AAAAAH: ${projectNameInput.value}`);
        console.log(todolist.getProjects());
      }

      //   if (project.createProject(projectNameInput.value)) {
      //     console.warn("New project added");
      //   }
      document.getElementById("add-project-area").innerHTML = "";
      document
        .getElementById("add-project-area")
        .appendChild(screenController.makeNewProjectButton());
        screenController.displayProjects();
    };
    return newProjectForm;
  }
}

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
  _Todos__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks().forEach((taskName) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUM7O0FBRWpDOztBQUVlO0FBQ2Y7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOztBQUViO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUlDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzJDO0FBQ1g7QUFDSjs7QUFFNUIscUJBQXFCLDhDQUFLOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdEQUFPO0FBQ3pDLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNvbWV0aGluZ1xuaW1wb3J0IFByb2plY3QgIGZyb20gXCIuL3Byb2plY3RcIjtcblxuLy8gY29uc3QgcHJvamVjdENsYXNzID0gbmV3IFByb2plY3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW25ldyBQcm9qZWN0KFwiVGVzdFwiLCBbXSldO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gdGhpcy5nZXRQcm9qZWN0cygpLnNvbWUoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE9iamVjdC5wcm9qZWN0TmFtZVxuICAgICk7XG4gICAgaWYgKCFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdE9iamVjdCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lICE9PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBnZXRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbHRlcihcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZVxuICAgIClbMF0udGFza0xpc3Q7XG4gIH1cbn1cbiIsIi8qIFxuQWxsIHRoaW5ncyB0byBkbyB3aXRoIHByb2plY3RzIC1cbnNlcGFyYXRlIHByb2plY3RzIHdpbGwgc3RvcmUgc2VwYXJhdGUgbGlzdHMgb2YgdG8gZG8gdGFza3NcbkZvciBleGFtcGxlOiBXb3JrIHRhc2tzLCBob21lIHRhc2tzLCBzcG9ydCB0YXNrcyBldGMuIFxuKi9cblxuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgdGFza0xpc3QgPSBbXSkge1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLnRhc2tMaXN0ID0gdGFza0xpc3Q7XG4gIH1cblxuXG4gIGdldFRpdGxlKHByb2plY3QpIHtcbiAgICByZXR1cm4gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0b2Rvc1xuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3RUaXRsZSlbMF07XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0b2Rvcy5nZXRQcm9qZWN0c1swXS50YXNrTGlzdC5wdXNoKHRhc2spO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gICAgUHJvamVjdFxufVxuXG4vLyBvdXIgbGlzdCBvZiBhbGwgcHJvamVjdHMsIGluaXRpYWxpemVkIGFzIGVtcHR5LCB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGBQcm9qZWN0YCBvYmplY3RzXG4vLyBwcm9qZWN0Q29udHJvbGxlciBNb2R1bGVcblxuLy8gTG9jYWwgU3RvcmFnZSBsb2dpYyB0byBiZSBhZGRlZCBpbiBsYXRlciBvbi5cbi8vICAgY29uc3QgZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSA9ICgpID0+IHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIml0J3MgdGhlcmVcIik7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlaHllJyk7XG4vLyAgICAgfVxuLy8gICB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHNjcmVlbkNvbnRyb2xsZXIgd2lsbCBkaXNwbGF5IHRoZSB0YXNrcyB0byB0aGUgRE9NLCBzbyBhbnl0aGluZyB0byBkbyB3aXRoIHRoZSBET00gYW5kIG1hbmlwdWxhdGluZyB3aWxsIGJlIGRvbmUgZnJvbSBoZXJlXG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi9naXRodWItbWFyay5zdmdcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvcyBmcm9tIFwiLi9Ub2Rvc1wiO1xuXG5jb25zdCB0b2RvbGlzdCA9IG5ldyBUb2RvcygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzY3JlZW5Db250cm9sbGVyIHtcbiAgLy8gRE9NIENSRUFUSU9OIE1FVEhPRFNcbiAgc3RhdGljIGxvYWRQYWdlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyZWVuQ29udHJvbGxlci5tYWtlSGVhZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4gICAgICBzY3JlZW5Db250cm9sbGVyLm1ha2VNYWluKFxuICAgICAgICBzY3JlZW5Db250cm9sbGVyLm1ha2VTaWRlYmFyKCksXG4gICAgICAgIHNjcmVlbkNvbnRyb2xsZXIubWFrZUNvbnRlbnQoKVxuICAgICAgKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VGb290ZXIoKSk7XG4gIH1cblxuICBzdGF0aWMgbWFrZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVGFzayBsaXN0XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBzdGF0aWMgbWFrZU1haW4oc2lkZWJhciwgY29udGVudCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgcmV0dXJuIG1haW47XG4gIH1cblxuICBzdGF0aWMgbWFrZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5jbGFzc05hbWUgPSBcInNpZGViYXJcIjtcblxuICAgIGNvbnN0IHByb2plY3RzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNBcmVhLmlkID0gXCJwcm9qZWN0cy1hcmVhXCI7XG4gICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdHMocHJvamVjdHNBcmVhKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0QXJlYS5jbGFzc05hbWUgPSBcImFkZC1wcm9qZWN0LWFyZWFcIjtcbiAgICBhZGRQcm9qZWN0QXJlYS5pZCA9IFwiYWRkLXByb2plY3QtYXJlYVwiO1xuXG4gICAgYWRkUHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQoc2NyZWVuQ29udHJvbGxlci5tYWtlTmV3UHJvamVjdEJ1dHRvbigpKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzQXJlYSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QXJlYSk7XG4gICAgLy8gc2lkZWJhci5hcHBlbmRDaGlsZChtYWtlUHJvamVjdElucHV0KCkpO1xuICAgIHJldHVybiBzaWRlYmFyO1xuICB9XG5cbiAgc3RhdGljIG1ha2VDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5cbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHRhc2tHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRUYXNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyAgIGZvciBub3csIGxlYXZlIGFzIGRlZmF1bHQgLSBsYXRlciBjaGFuZ2UgdG8gZGlzcGxheSB0aGUgc2VsZWN0ZWQgcHJvamVjdCBuYW1lXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJEZWZhdWx0XCI7XG4gICAgdGFza0dyaWQuaWQgPSBcInRhc2stZ3JpZFwiO1xuICAgIHRhc2tHcmlkLmNsYXNzTmFtZSA9IFwidGFzay1ncmlkXCI7XG4gICAgLy8gIHRoZSB0YXNrcyB3aWxsIGJlIGRpc3BsYXllZCBpbnNpZGUgb2YgdGhlIHRhc2tHcmlkIGVsZW1lbnRcbiAgICAvLyAgaW5zaWRlIHRoZSBhZGQgdGFzayBhcmVhIHdlIHdpbGwgaGF2ZSB0aGUgJ2FkZCB0YXNrJyBidXR0b24sXG4gICAgLy8gIG9uY2UgcHJlc3NlZCBpdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBmb3JtIHRvIGFkZCBhIG5ldyB0YXNrLlxuICAgIGFkZFRhc2tBcmVhLmlkID0gXCJhZGQtdGFzay1hcmVhXCI7XG4gICAgYWRkVGFza0FyZWEuY2xhc3NOYW1lID0gXCJhZGQtdGFzay1hcmVhXCI7XG4gICAgLy8gbW92ZSB0aGlzIGxhdGVyIHRvIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGJ1dHRvbiBpdHNlbGYsXG4gICAgLy8gZm9yIGl0IHRvIGJlIGNhbGxlZCB0byByZXBsYWNlIHRoZSB0YXNrIGZvcm0gb25jZSBzdWJtaXR0ZWRcbiAgICAvLyBhZGRUYXNrQXJlYS5hcHBlbmRDaGlsZChtYWtlTmV3VGFza0J1dHRvbigpKTtcbiAgICB0YXNrQXJlYS5pZCA9IFwidGFzay1hcmVhXCI7XG4gICAgdGFza0FyZWEuY2xhc3NOYW1lID0gXCJ0YXNrLWFyZWFcIjtcbiAgICAvLyBkaXNwbGF5VGFza3ModGFza0dyaWQpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0dyaWQpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKGFkZFRhc2tBcmVhKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0FyZWEpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIG1ha2VGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGdpdGh1YkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0aHViSW1hZ2Uuc3JjID0gR2l0aHViSWNvbjtcbiAgICBnaXRodWJJbWFnZS5hbHQgPSBcIkdpdGh1YiBsb2dvXCI7XG4gICAgZ2l0aHViSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS95ZWhva2kvXCI7XG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkNvcHlyaWdodCDCqSAyMDIzIHllaG9raVwiO1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxuXG4gIC8vIEhFTFBFUiBNRVRIT0QgRk9SIFJFUEVBVCBBQ1RJT05TXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdHMocHJvamVjdEFyZWEpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpID09PSBudWxsKSB7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLnBvcHVsYXRlUHJvamVjdEFyZWEocHJvamVjdEFyZWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWFyZWFcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucG9wdWxhdGVQcm9qZWN0QXJlYShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwb3B1bGF0ZVByb2plY3RBcmVhKHByb2plY3RBcmVhKSB7XG4gICAgdG9kb2xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAubWFwKChwcm9qZWN0T2JqZWN0KSA9PiBwcm9qZWN0T2JqZWN0LnByb2plY3ROYW1lKVxuICAgICAgLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RFbnRyeS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YWJcIik7XG4gICAgICAgIHByb2plY3RFbnRyeS5pZCA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0RW50cnkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEVudHJ5KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1ha2VOZXdQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uaWQgPSBcIm5ldy1wcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oXCJOb3RoaW5nXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VQcm9qZWN0SW5wdXQoKSk7XG4gICAgICAvLyBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCBmb3JtO1xuICAgICAgLypcbiAgICAgICAgV0hFTiBXRSBDUkVBVEUgQSBORVcgUFJPSkVDVCwgVEhFIEJVVFRPTiBESVNBUFBFQVJTIEFORCBBIEZPUk0gQVBQRUFSU1xuICAgICAgICBPTiBTVUJNSVQgRk9SIEZPUk0gVEhFIEZPUk0gR0VUUyBTRU5ULCBESVNBUFBFQVJTIEFORCBUSEUgQlVUVE9OIEFQUEVBUlNcbiAgICAgICAqL1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdHMoKSk7XG4gICAgICAvKkFkZCB0aGUgbG9naWMgZm9yIHRoZSBmb2xsb3dpbmc6XG4gICAgICAxLiBCcmluZyB1cCBhbiBpbnB1dCBmb3IgYSBuZXcgcHJvamVjdFxuICAgICAgMi4gQWRkIHRoZSBsb2dpYyB0byB0aGUgbGlzdCBvZiBwcm9qZWN0c1xuICAgICAgMy4gU2V0IHRoZSBuZXcgcHJvamVjdCBhcyB0aGUgJ2N1cnJlbnQnIG9uZSBhbmQgcmVuZGVyIGl0IG91dCAqL1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlUHJvamVjdElucHV0KCkge1xuICAgIC8vIENyZWF0aW5nIGFuZCBkaXNwbGF5aW5nIHRoZSBib3ggdG8gZGlzcGxheSB0aGUgJ25ldyBwcm9qZWN0JyBib3gsIGZhbHNlIGJ5IGRlZmF1bHRcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXctcHJvamVjdC1mb3JtXCI7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IG5hbWU6XCI7XG4gICAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSBwcm9qZWN0TGFiZWwuaHRtbEZvcjtcbiAgICBwcm9qZWN0U3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdCk7XG4gICAgLy8gY3JlYXRlcyBhIG5ldyBwcm9qZWN0IG9uIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAgICBuZXdQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9kb2xpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlLCBbXSkpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTkVXIFBST0pFQ1QgQUFBQUFIOiAke3Byb2plY3ROYW1lSW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9saXN0LmdldFByb2plY3RzKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyAgIGlmIChwcm9qZWN0LmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJOZXcgcHJvamVjdCBhZGRlZFwiKTtcbiAgICAgIC8vICAgfVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VOZXdQcm9qZWN0QnV0dG9uKCkpO1xuICAgICAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH07XG4gICAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xuICB9XG59XG5cbmNvbnN0IG1ha2VTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5jbGFzc05hbWUgPSBcInNpZGViYXJcIjtcbiAgLy8gc2lkZWJhciBidXR0b24gdG8gYWRkIGEgbmV3IHByb2plY3RcblxuICAvLyBkaXYgd2hpY2ggaG9sZHMgdGhlIHByb2plY3QgbmFtZXNcblxuICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0c0FyZWEuaWQgPSBcInByb2plY3RzLWFyZWFcIjtcbiAgZGlzcGxheVByb2plY3RzKHByb2plY3RzQXJlYSk7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcIk5vdGhpbmdcIik7XG4gICAgY29uc29sZS5sb2coZGlzcGxheVByb2plY3RzKCkpO1xuICAgIC8qQWRkIHRoZSBsb2dpYyBmb3IgdGhlIGZvbGxvd2luZzpcbiAgICAxLiBCcmluZyB1cCBhbiBpbnB1dCBmb3IgYSBuZXcgcHJvamVjdFxuICAgIDIuIEFkZCB0aGUgbG9naWMgdG8gdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICAzLiBTZXQgdGhlIG5ldyBwcm9qZWN0IGFzIHRoZSAnY3VycmVudCcgb25lIGFuZCByZW5kZXIgaXQgb3V0ICovXG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gIH0pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzQXJlYSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFrZVByb2plY3RJbnB1dCgpKTtcblxuICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICh0YXNrR3JpZCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikgPT09IG51bGwpIHtcbiAgICBwb3B1bGF0ZVRhc2tBcmVhKHRhc2tHcmlkKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZ3JpZFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHBvcHVsYXRlVGFza0FyZWEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVRhc2tBcmVhKHRhc2tHcmlkKSB7XG4gIFRvZG9zLmdldFRhc2tzKCkuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgdGFza0NhcmQuaWQgPSB0YXNrTmFtZS50aXRsZTtcbiAgICB0YXNrQ2FyZC50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnRpdGxlO1xuICAgIHRhc2tHcmlkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfSk7XG59XG5cbi8vICBnZW5lcmF0ZXMgYSBuZXcgZm9ybSBmb3IgaW5wdXR0aW5nIGEgbmV3IHRhc2tcbmZ1bmN0aW9uIG1ha2VOZXdUYXNrRW50cnkoKSB7XG4gIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0YXNrRW50cnkuaWQgPSBcInRhc2stZW50cnlcIjtcbiAgdGFza0VudHJ5LmNsYXNzTmFtZSA9IFwidGFzay1lbnRyeVwiO1xuICAvLyB0aXRsZVxuICBjb25zdCB0YXNrVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrVGl0bGUudHlwZSA9IFwidGVzdFwiO1xuICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gIHRhc2tUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tUaXRsZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza1RpdGxlLmlkID0gdGFza1RpdGxlTGFiZWwuaHRtbEZvcjtcbiAgLy8gZGVzY3JpcHRpb25cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbi4uLlwiO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi5pZCA9IHRhc2tEZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3I7XG4gIC8vIGR1ZURhdGVcbiAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrLWR1ZS1kYXRlXCI7XG4gIHRhc2tEdWVEYXRlLmlkID0gdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yO1xuXG4gIC8vICAgc3VibWl0IGZvcm0gYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAvLyAgIHN1Ym1pdFRhc2tCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgLy8gYWRkIGNhbmNlbCBmb3JtIGJ1dHRvblxuXG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVMYWJlbCk7XG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J1dHRvbik7XG4gIC8vIHN1Ym1pdCB0aGUgdGFza1xuICB0YXNrRW50cnkub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjcmVhdGUgYSBuZXcgdGFzayBvYmplY3RcbiAgICBjb25zdCBuZXdUYXNrID0gdGFzay5jcmVhdGVUYXNrKFxuICAgICAgdGFza1RpdGxlLnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGUudmFsdWUsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDBcbiAgICApO1xuICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBkaXNwbGF5VGFza3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYXJlYVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vIHB1c2ggdG8gdGFzayBsaXN0XG5cbiAgICAvLyByZXJlbmRlciB0YXNrc1xuICAgIC8vIHNob3cgYWRkIHRhc2sgYnV0dG9uIGFnYWluXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKG1ha2VOZXdUYXNrQnV0dG9uKCkpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKSk7XG4gIH07XG4gIHJldHVybiB0YXNrRW50cnk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdUYXNrQnV0dG9uKCkge1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKG1ha2VOZXdUYXNrRW50cnkoKSk7XG4gICAgLypcbiAgICAgICAgICAxLiBTaG93IHVwIGEgZm9ybSB3aXRoIGVudHJpZXMgZm9yIGFsbCBkZWZpbmVkIFRhc2sgcHJvcGVydGllc1xuICAgICAgICAgIDIuIERlZmF1bHQgXCJuby1lbnRyeVwiIHZhbHVlcyBmb3IgbW9zdCBvZiB0aGVtXG4gICAgICAqL1xuICAgIGNvbnNvbGUud2FybihcIldlIGRvIGEgbmV3IHRhc2tcIik7XG4gIH0pO1xuICByZXR1cm4gdGFza0J1dHRvbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==