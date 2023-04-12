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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
// import something



// const projectClass = new Project();

class Todos {
  constructor() {
    this.projects = [new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Test", [
        new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
            'test task', 'test', 'wqewq', 'none'
        )
    ], true)];
  }

  getProjects() {
    return this.projects;
  }

  addProject(projectObject) {
    const projectExists = this.getProjects().some(
      (project) =>
        project.projectName.toLowerCase() ===
        projectObject.projectName.toLowerCase()
    );
    if (!projectExists) {
      this.projects.push(projectObject);
      return true;
    }
    alert("There is a project with this name already!");
    return false;
  }

  deleteProject(projectName) {
    this.projects.filter((project) => project.projectName !== projectName);
  }

  getProjectIndex(projectObject) {
    return this.projects
      .map((project) => project.projectName)
      .indexOf(projectObject);
  }

  getTasks(projectObject) {
    return this.projects[this.getProjectIndex(projectObject)].getTasks();
  }

  getActiveProjectIndex() {
    return this.projects.map((project) => project.active).indexOf(true);
  }

  getActiveProject() {
    return this.projects[this.getActiveProjectIndex()];
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
  constructor(projectName, taskList = [], active = false) {
    this.projectName = projectName;
    this.taskList = taskList;
    this.active = active;
  }

  getTitle(project) {
    return project.projectName;
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task) {
    this.taskList.push(task);
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

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/*
We will be using tasks in order to store, create and manipulate the 'todo' list objects.
*/


class Task {
  constructor(title, description, dueDate = '', priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  getTitle() {
    return this.title
  }



}




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
    screenController.displayTasks(taskGrid);
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
  // DISPLAYING PROJECTS
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

  //   DISPLAYING TASKS
  static displayTasks(taskGrid) {
    if (document.getElementById("task-grid") === null) {
      screenController.populateTaskArea(taskGrid);
    } else {
      document.getElementById("task-grid").innerHTML = "";
      screenController.populateTaskArea(document.getElementById("task-grid"));
    }
  }

  static populateTaskArea(taskGrid) {
    todolist
      .getActiveProject()
      .getTasks()
      .forEach((task) => {
        const taskCard = document.createElement("div");
        taskCard.className = "task";
        taskCard.id = task.title; //Later change this to unique id
        taskCard.textContent = task.title;
        taskGrid.appendChild(taskCard);
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
      if (todolist.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectNameInput.value))) {
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

  static makeNewTaskEntry() {
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

  static makeNewTaskButton() {
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQU87QUFDekMsNENBQTRDLHVCQUF1QjtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNvbWV0aGluZ1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG4vLyBjb25zdCBwcm9qZWN0Q2xhc3MgPSBuZXcgUHJvamVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJUZXN0XCIsIFtcbiAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICAndGVzdCB0YXNrJywgJ3Rlc3QnLCAnd3Fld3EnLCAnbm9uZSdcbiAgICAgICAgKVxuICAgIF0sIHRydWUpXTtcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKS5zb21lKFxuICAgICAgKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3QucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgcHJvamVjdE9iamVjdC5wcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgICBpZiAoIXByb2plY3RFeGlzdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBhbGVydChcIlRoZXJlIGlzIGEgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgIT09IHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGdldFByb2plY3RJbmRleChwcm9qZWN0T2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUpXG4gICAgICAuaW5kZXhPZihwcm9qZWN0T2JqZWN0KTtcbiAgfVxuXG4gIGdldFRhc2tzKHByb2plY3RPYmplY3QpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t0aGlzLmdldFByb2plY3RJbmRleChwcm9qZWN0T2JqZWN0KV0uZ2V0VGFza3MoKTtcbiAgfVxuXG4gIGdldEFjdGl2ZVByb2plY3RJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QuYWN0aXZlKS5pbmRleE9mKHRydWUpO1xuICB9XG5cbiAgZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t0aGlzLmdldEFjdGl2ZVByb2plY3RJbmRleCgpXTtcbiAgfVxufSIsIi8qIFxuQWxsIHRoaW5ncyB0byBkbyB3aXRoIHByb2plY3RzIC1cbnNlcGFyYXRlIHByb2plY3RzIHdpbGwgc3RvcmUgc2VwYXJhdGUgbGlzdHMgb2YgdG8gZG8gdGFza3NcbkZvciBleGFtcGxlOiBXb3JrIHRhc2tzLCBob21lIHRhc2tzLCBzcG9ydCB0YXNrcyBldGMuIFxuKi9cblxuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgdGFza0xpc3QgPSBbXSwgYWN0aXZlID0gZmFsc2UpIHtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy50YXNrTGlzdCA9IHRhc2tMaXN0O1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgZ2V0VGl0bGUocHJvamVjdCkge1xuICAgIHJldHVybiBwcm9qZWN0LnByb2plY3ROYW1lO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgICBQcm9qZWN0XG59XG5cbi8vIG91ciBsaXN0IG9mIGFsbCBwcm9qZWN0cywgaW5pdGlhbGl6ZWQgYXMgZW1wdHksIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYFByb2plY3RgIG9iamVjdHNcbi8vIHByb2plY3RDb250cm9sbGVyIE1vZHVsZVxuXG4vLyBMb2NhbCBTdG9yYWdlIGxvZ2ljIHRvIGJlIGFkZGVkIGluIGxhdGVyIG9uLlxuLy8gICBjb25zdCBnZXRQcm9qZWN0c0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuLy8gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQncyB0aGVyZVwiKTtcbi8vICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVoeWUnKTtcbi8vICAgICB9XG4vLyAgIH07XG4iLCIvKlxuV2Ugd2lsbCBiZSB1c2luZyB0YXNrcyBpbiBvcmRlciB0byBzdG9yZSwgY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHRoZSAndG9kbycgbGlzdCBvYmplY3RzLlxuKi9cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gJycsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgfVxuXG5cblxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzY3JlZW5Db250cm9sbGVyIHdpbGwgZGlzcGxheSB0aGUgdGFza3MgdG8gdGhlIERPTSwgc28gYW55dGhpbmcgdG8gZG8gd2l0aCB0aGUgRE9NIGFuZCBtYW5pcHVsYXRpbmcgd2lsbCBiZSBkb25lIGZyb20gaGVyZVxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4vZ2l0aHViLW1hcmsuc3ZnXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVG9kb3MgZnJvbSBcIi4vVG9kb3NcIjtcblxuY29uc3QgdG9kb2xpc3QgPSBuZXcgVG9kb3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NyZWVuQ29udHJvbGxlciB7XG4gIC8vIERPTSBDUkVBVElPTiBNRVRIT0RTXG4gIHN0YXRpYyBsb2FkUGFnZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgc2NyZWVuQ29udHJvbGxlci5tYWtlTWFpbihcbiAgICAgICAgc2NyZWVuQ29udHJvbGxlci5tYWtlU2lkZWJhcigpLFxuICAgICAgICBzY3JlZW5Db250cm9sbGVyLm1ha2VDb250ZW50KClcbiAgICAgIClcbiAgICApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyZWVuQ29udHJvbGxlci5tYWtlRm9vdGVyKCkpO1xuICB9XG5cbiAgc3RhdGljIG1ha2VIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIlRhc2sgbGlzdFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9XG5cbiAgc3RhdGljIG1ha2VNYWluKHNpZGViYXIsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiBtYWluO1xuICB9XG5cbiAgc3RhdGljIG1ha2VTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gXCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0c0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzQXJlYS5pZCA9IFwicHJvamVjdHMtYXJlYVwiO1xuICAgIHNjcmVlbkNvbnRyb2xsZXIuZGlzcGxheVByb2plY3RzKHByb2plY3RzQXJlYSk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdEFyZWEuY2xhc3NOYW1lID0gXCJhZGQtcHJvamVjdC1hcmVhXCI7XG4gICAgYWRkUHJvamVjdEFyZWEuaWQgPSBcImFkZC1wcm9qZWN0LWFyZWFcIjtcblxuICAgIGFkZFByb2plY3RBcmVhLmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZU5ld1Byb2plY3RCdXR0b24oKSk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0FyZWEpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEFyZWEpO1xuICAgIC8vIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFrZVByb2plY3RJbnB1dCgpKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuXG4gICAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCB0YXNrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy8gICBmb3Igbm93LCBsZWF2ZSBhcyBkZWZhdWx0IC0gbGF0ZXIgY2hhbmdlIHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHByb2plY3QgbmFtZVxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xuICAgIHRhc2tHcmlkLmlkID0gXCJ0YXNrLWdyaWRcIjtcbiAgICB0YXNrR3JpZC5jbGFzc05hbWUgPSBcInRhc2stZ3JpZFwiO1xuICAgIC8vICB0aGUgdGFza3Mgd2lsbCBiZSBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSB0YXNrR3JpZCBlbGVtZW50XG4gICAgLy8gIGluc2lkZSB0aGUgYWRkIHRhc2sgYXJlYSB3ZSB3aWxsIGhhdmUgdGhlICdhZGQgdGFzaycgYnV0dG9uLFxuICAgIC8vICBvbmNlIHByZXNzZWQgaXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZm9ybSB0byBhZGQgYSBuZXcgdGFzay5cbiAgICBhZGRUYXNrQXJlYS5pZCA9IFwiYWRkLXRhc2stYXJlYVwiO1xuICAgIGFkZFRhc2tBcmVhLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYXJlYVwiO1xuICAgIC8vIG1vdmUgdGhpcyBsYXRlciB0byBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBidXR0b24gaXRzZWxmLFxuICAgIC8vIGZvciBpdCB0byBiZSBjYWxsZWQgdG8gcmVwbGFjZSB0aGUgdGFzayBmb3JtIG9uY2Ugc3VibWl0dGVkXG4gICAgLy8gYWRkVGFza0FyZWEuYXBwZW5kQ2hpbGQobWFrZU5ld1Rhc2tCdXR0b24oKSk7XG4gICAgdGFza0FyZWEuaWQgPSBcInRhc2stYXJlYVwiO1xuICAgIHRhc2tBcmVhLmNsYXNzTmFtZSA9IFwidGFzay1hcmVhXCI7XG4gICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5VGFza3ModGFza0dyaWQpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0dyaWQpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKGFkZFRhc2tBcmVhKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0FyZWEpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIG1ha2VGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGdpdGh1YkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0aHViSW1hZ2Uuc3JjID0gR2l0aHViSWNvbjtcbiAgICBnaXRodWJJbWFnZS5hbHQgPSBcIkdpdGh1YiBsb2dvXCI7XG4gICAgZ2l0aHViSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS95ZWhva2kvXCI7XG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkNvcHlyaWdodCDCqSAyMDIzIHllaG9raVwiO1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxuXG4gIC8vIEhFTFBFUiBNRVRIT0QgRk9SIFJFUEVBVCBBQ1RJT05TXG4gIC8vIERJU1BMQVlJTkcgUFJPSkVDVFNcbiAgc3RhdGljIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0QXJlYSkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWFyZWFcIikgPT09IG51bGwpIHtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucG9wdWxhdGVQcm9qZWN0QXJlYShwcm9qZWN0QXJlYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYXJlYVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5wb3B1bGF0ZVByb2plY3RBcmVhKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWFyZWFcIilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBvcHVsYXRlUHJvamVjdEFyZWEocHJvamVjdEFyZWEpIHtcbiAgICB0b2RvbGlzdFxuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5tYXAoKHByb2plY3RPYmplY3QpID0+IHByb2plY3RPYmplY3QucHJvamVjdE5hbWUpXG4gICAgICAuZm9yRWFjaCgocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdEVudHJ5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhYlwiKTtcbiAgICAgICAgcHJvamVjdEVudHJ5LmlkID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHByb2plY3RFbnRyeS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0RW50cnkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyAgIERJU1BMQVlJTkcgVEFTS1NcbiAgc3RhdGljIGRpc3BsYXlUYXNrcyh0YXNrR3JpZCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZ3JpZFwiKSA9PT0gbnVsbCkge1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5wb3B1bGF0ZVRhc2tBcmVhKHRhc2tHcmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucG9wdWxhdGVUYXNrQXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZ3JpZFwiKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBvcHVsYXRlVGFza0FyZWEodGFza0dyaWQpIHtcbiAgICB0b2RvbGlzdFxuICAgICAgLmdldEFjdGl2ZVByb2plY3QoKVxuICAgICAgLmdldFRhc2tzKClcbiAgICAgIC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG4gICAgICAgIHRhc2tDYXJkLmlkID0gdGFzay50aXRsZTsgLy9MYXRlciBjaGFuZ2UgdGhpcyB0byB1bmlxdWUgaWRcbiAgICAgICAgdGFza0NhcmQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0YXNrR3JpZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlTmV3UHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlkID0gXCJuZXctcHJvamVjdFwiO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKFwiTm90aGluZ1wiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYXJlYVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYXJlYVwiKVxuICAgICAgICAuYXBwZW5kQ2hpbGQoc2NyZWVuQ29udHJvbGxlci5tYWtlUHJvamVjdElucHV0KCkpO1xuICAgICAgLy8gZGlzcGxheSB0aGUgbmV3IHByb2plY3QgZm9ybTtcbiAgICAgIC8qXG4gICAgICAgIFdIRU4gV0UgQ1JFQVRFIEEgTkVXIFBST0pFQ1QsIFRIRSBCVVRUT04gRElTQVBQRUFSUyBBTkQgQSBGT1JNIEFQUEVBUlNcbiAgICAgICAgT04gU1VCTUlUIEZPUiBGT1JNIFRIRSBGT1JNIEdFVFMgU0VOVCwgRElTQVBQRUFSUyBBTkQgVEhFIEJVVFRPTiBBUFBFQVJTXG4gICAgICAgKi9cbiAgICAgIC8vICAgY29uc29sZS5sb2coZGlzcGxheVByb2plY3RzKCkpO1xuICAgICAgLypBZGQgdGhlIGxvZ2ljIGZvciB0aGUgZm9sbG93aW5nOlxuICAgICAgMS4gQnJpbmcgdXAgYW4gaW5wdXQgZm9yIGEgbmV3IHByb2plY3RcbiAgICAgIDIuIEFkZCB0aGUgbG9naWMgdG8gdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICAgIDMuIFNldCB0aGUgbmV3IHByb2plY3QgYXMgdGhlICdjdXJyZW50JyBvbmUgYW5kIHJlbmRlciBpdCBvdXQgKi9cbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIuZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFkZFByb2plY3RCdXR0b247XG4gIH1cblxuICBzdGF0aWMgbWFrZVByb2plY3RJbnB1dCgpIHtcbiAgICAvLyBDcmVhdGluZyBhbmQgZGlzcGxheWluZyB0aGUgYm94IHRvIGRpc3BsYXkgdGhlICduZXcgcHJvamVjdCcgYm94LCBmYWxzZSBieSBkZWZhdWx0XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5pZCA9IFwibmV3LXByb2plY3QtZm9ybVwiO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBuYW1lOlwiO1xuICAgIHByb2plY3RMYWJlbC5odG1sRm9yID0gXCJwcm9qZWN0LW5hbWVcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gcHJvamVjdExhYmVsLmh0bWxGb3I7XG4gICAgcHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXQpO1xuICAgIC8vIGNyZWF0ZXMgYSBuZXcgcHJvamVjdCBvbiBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gICAgbmV3UHJvamVjdEZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZG9saXN0LmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTkVXIFBST0pFQ1QgQUFBQUFIOiAke3Byb2plY3ROYW1lSW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9saXN0LmdldFByb2plY3RzKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyAgIGlmIChwcm9qZWN0LmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSkpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJOZXcgcHJvamVjdCBhZGRlZFwiKTtcbiAgICAgIC8vICAgfVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VOZXdQcm9qZWN0QnV0dG9uKCkpO1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9O1xuICAgIHJldHVybiBuZXdQcm9qZWN0Rm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlTmV3VGFza0VudHJ5KCkge1xuICAgIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIHRhc2tFbnRyeS5pZCA9IFwidGFzay1lbnRyeVwiO1xuICAgIHRhc2tFbnRyeS5jbGFzc05hbWUgPSBcInRhc2stZW50cnlcIjtcbiAgICAvLyB0aXRsZVxuICAgIGNvbnN0IHRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrVGl0bGUudHlwZSA9IFwidGVzdFwiO1xuICAgIHRhc2tUaXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgICB0YXNrVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRhc2tUaXRsZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgICB0YXNrVGl0bGUuaWQgPSB0YXNrVGl0bGVMYWJlbC5odG1sRm9yO1xuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvbi4uLlwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcbiAgICB0YXNrRGVzY3JpcHRpb24uaWQgPSB0YXNrRGVzY3JpcHRpb25MYWJlbC5odG1sRm9yO1xuICAgIC8vIGR1ZURhdGVcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tEdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stZHVlLWRhdGVcIjtcbiAgICB0YXNrRHVlRGF0ZS5pZCA9IHRhc2tEdWVEYXRlTGFiZWwuaHRtbEZvcjtcblxuICAgIC8vICAgc3VibWl0IGZvcm0gYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gICBzdWJtaXRUYXNrQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgICAvLyBhZGQgY2FuY2VsIGZvcm0gYnV0dG9uXG5cbiAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza1RpdGxlTGFiZWwpO1xuICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG4gICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdXR0b24pO1xuICAgIC8vIHN1Ym1pdCB0aGUgdGFza1xuICAgIHRhc2tFbnRyeS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBjcmVhdGUgYSBuZXcgdGFzayBvYmplY3RcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrLmNyZWF0ZVRhc2soXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgIGRpc3BsYXlUYXNrcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZ3JpZFwiKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWFyZWFcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIC8vIHB1c2ggdG8gdGFzayBsaXN0XG5cbiAgICAgIC8vIHJlcmVuZGVyIHRhc2tzXG4gICAgICAvLyBzaG93IGFkZCB0YXNrIGJ1dHRvbiBhZ2FpblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKG1ha2VOZXdUYXNrQnV0dG9uKCkpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICB9O1xuICAgIHJldHVybiB0YXNrRW50cnk7XG4gIH1cblxuICBzdGF0aWMgbWFrZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICAgIHRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWFyZWFcIikuYXBwZW5kQ2hpbGQobWFrZU5ld1Rhc2tFbnRyeSgpKTtcbiAgICAgIC8qXG4gICAgICAgICAgMS4gU2hvdyB1cCBhIGZvcm0gd2l0aCBlbnRyaWVzIGZvciBhbGwgZGVmaW5lZCBUYXNrIHByb3BlcnRpZXNcbiAgICAgICAgICAyLiBEZWZhdWx0IFwibm8tZW50cnlcIiB2YWx1ZXMgZm9yIG1vc3Qgb2YgdGhlbVxuICAgICAgKi9cbiAgICAgIGNvbnNvbGUud2FybihcIldlIGRvIGEgbmV3IHRhc2tcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhc2tCdXR0b247XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==