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
    this.projects = [
      new _project__WEBPACK_IMPORTED_MODULE_0__["default"](
        "Test",
        [new _task__WEBPACK_IMPORTED_MODULE_1__["default"]("test task", "test", "wqewq", "none")],
        true
      ),
    ];
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

  getCurrentTasks() {
    return this.projects[this.getActiveProjectIndex()].getTasks();
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here





const todolist = new _Todos__WEBPACK_IMPORTED_MODULE_3__["default"]();

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
    addTaskArea.appendChild(screenController.makeNewTaskButton());
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
  // CREATE A NEW PROJECT BUTTON  

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
  // GENERATES THE INPUT FOR A NEW PROJECT
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

  // GENERATES THE FORM FOR INPUTTING A NEW TASK
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
      todolist.getActiveProject().addTask(
        new _task__WEBPACK_IMPORTED_MODULE_2__["default"](
            taskTitle.value,
            taskDescription.value,
            taskDueDate.value,
            'None'
        )
      )
      screenController.displayTasks(document.getElementById("task-grid"));
      document.getElementById("add-task-area").innerHTML = "";
      // push to task list

      // rerender tasks
      // show add task button again
      document.getElementById("add-task-area").appendChild(screenController.makeNewTaskButton());
      console.log(todolist.getCurrentTasks());
    };
    return taskEntry;
  }
  // GENERATES A NEW TASK BUTTON
  static makeNewTaskButton() {
    const taskButton = document.createElement("button");
    taskButton.setAttribute("id", "add-task");
    taskButton.textContent = "Add Task";
    taskButton.addEventListener("click", () => {
      document.getElementById("add-task-area").innerHTML = "";
      document.getElementById("add-task-area").appendChild(screenController.makeNewTaskEntry());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdEQUFPO0FBQ3pDLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgc29tZXRoaW5nXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbi8vIGNvbnN0IHByb2plY3RDbGFzcyA9IG5ldyBQcm9qZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtcbiAgICAgIG5ldyBQcm9qZWN0KFxuICAgICAgICBcIlRlc3RcIixcbiAgICAgICAgW25ldyBUYXNrKFwidGVzdCB0YXNrXCIsIFwidGVzdFwiLCBcIndxZXdxXCIsIFwibm9uZVwiKV0sXG4gICAgICAgIHRydWVcbiAgICAgICksXG4gICAgXTtcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKS5zb21lKFxuICAgICAgKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3QucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgcHJvamVjdE9iamVjdC5wcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgICBpZiAoIXByb2plY3RFeGlzdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBhbGVydChcIlRoZXJlIGlzIGEgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgIT09IHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGdldFByb2plY3RJbmRleChwcm9qZWN0T2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUpXG4gICAgICAuaW5kZXhPZihwcm9qZWN0T2JqZWN0KTtcbiAgfVxuXG4gIGdldEN1cnJlbnRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1t0aGlzLmdldEFjdGl2ZVByb2plY3RJbmRleCgpXS5nZXRUYXNrcygpO1xuICB9XG5cbiAgZ2V0QWN0aXZlUHJvamVjdEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5hY3RpdmUpLmluZGV4T2YodHJ1ZSk7XG4gIH1cblxuICBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuZ2V0QWN0aXZlUHJvamVjdEluZGV4KCldO1xuICB9XG59XG4iLCIvKiBcbkFsbCB0aGluZ3MgdG8gZG8gd2l0aCBwcm9qZWN0cyAtXG5zZXBhcmF0ZSBwcm9qZWN0cyB3aWxsIHN0b3JlIHNlcGFyYXRlIGxpc3RzIG9mIHRvIGRvIHRhc2tzXG5Gb3IgZXhhbXBsZTogV29yayB0YXNrcywgaG9tZSB0YXNrcywgc3BvcnQgdGFza3MgZXRjLiBcbiovXG5cbmltcG9ydCBUb2RvcyBmcm9tIFwiLi9Ub2Rvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHRhc2tMaXN0ID0gW10sIGFjdGl2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRoaXMudGFza0xpc3QgPSB0YXNrTGlzdDtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIGdldFRpdGxlKHByb2plY3QpIHtcbiAgICByZXR1cm4gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gICAgUHJvamVjdFxufVxuXG4vLyBvdXIgbGlzdCBvZiBhbGwgcHJvamVjdHMsIGluaXRpYWxpemVkIGFzIGVtcHR5LCB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGBQcm9qZWN0YCBvYmplY3RzXG4vLyBwcm9qZWN0Q29udHJvbGxlciBNb2R1bGVcblxuLy8gTG9jYWwgU3RvcmFnZSBsb2dpYyB0byBiZSBhZGRlZCBpbiBsYXRlciBvbi5cbi8vICAgY29uc3QgZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSA9ICgpID0+IHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIml0J3MgdGhlcmVcIik7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlaHllJyk7XG4vLyAgICAgfVxuLy8gICB9O1xuIiwiLypcbldlIHdpbGwgYmUgdXNpbmcgdGFza3MgaW4gb3JkZXIgdG8gc3RvcmUsIGNyZWF0ZSBhbmQgbWFuaXB1bGF0ZSB0aGUgJ3RvZG8nIGxpc3Qgb2JqZWN0cy5cbiovXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlXG4gIH1cblxuXG5cbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc2NyZWVuQ29udHJvbGxlciB3aWxsIGRpc3BsYXkgdGhlIHRhc2tzIHRvIHRoZSBET00sIHNvIGFueXRoaW5nIHRvIGRvIHdpdGggdGhlIERPTSBhbmQgbWFuaXB1bGF0aW5nIHdpbGwgYmUgZG9uZSBmcm9tIGhlcmVcbmltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Yi1tYXJrLnN2Z1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XG5cbmNvbnN0IHRvZG9saXN0ID0gbmV3IFRvZG9zKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjcmVlbkNvbnRyb2xsZXIge1xuICAvLyBET00gQ1JFQVRJT04gTUVUSE9EU1xuICBzdGF0aWMgbG9hZFBhZ2UoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIubWFrZU1haW4oXG4gICAgICAgIHNjcmVlbkNvbnRyb2xsZXIubWFrZVNpZGViYXIoKSxcbiAgICAgICAgc2NyZWVuQ29udHJvbGxlci5tYWtlQ29udGVudCgpXG4gICAgICApXG4gICAgKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZUZvb3RlcigpKTtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJUYXNrIGxpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlTWFpbihzaWRlYmFyLCBjb250ZW50KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0FyZWEuaWQgPSBcInByb2plY3RzLWFyZWFcIjtcbiAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0FyZWEpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFByb2plY3RBcmVhLmNsYXNzTmFtZSA9IFwiYWRkLXByb2plY3QtYXJlYVwiO1xuICAgIGFkZFByb2plY3RBcmVhLmlkID0gXCJhZGQtcHJvamVjdC1hcmVhXCI7XG5cbiAgICBhZGRQcm9qZWN0QXJlYS5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VOZXdQcm9qZWN0QnV0dG9uKCkpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNBcmVhKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RBcmVhKTtcbiAgICAvLyBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VQcm9qZWN0SW5wdXQoKSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG4gIH1cblxuICBzdGF0aWMgbWFrZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcblxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgdGFza0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZFRhc2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vICAgZm9yIG5vdywgbGVhdmUgYXMgZGVmYXVsdCAtIGxhdGVyIGNoYW5nZSB0byBkaXNwbGF5IHRoZSBzZWxlY3RlZCBwcm9qZWN0IG5hbWVcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcbiAgICB0YXNrR3JpZC5pZCA9IFwidGFzay1ncmlkXCI7XG4gICAgdGFza0dyaWQuY2xhc3NOYW1lID0gXCJ0YXNrLWdyaWRcIjtcbiAgICAvLyAgdGhlIHRhc2tzIHdpbGwgYmUgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgdGFza0dyaWQgZWxlbWVudFxuICAgIC8vICBpbnNpZGUgdGhlIGFkZCB0YXNrIGFyZWEgd2Ugd2lsbCBoYXZlIHRoZSAnYWRkIHRhc2snIGJ1dHRvbixcbiAgICAvLyAgb25jZSBwcmVzc2VkIGl0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGZvcm0gdG8gYWRkIGEgbmV3IHRhc2suXG4gICAgYWRkVGFza0FyZWEuaWQgPSBcImFkZC10YXNrLWFyZWFcIjtcbiAgICBhZGRUYXNrQXJlYS5jbGFzc05hbWUgPSBcImFkZC10YXNrLWFyZWFcIjtcbiAgICAvLyBtb3ZlIHRoaXMgbGF0ZXIgdG8gYSBmdW5jdGlvbiB3aGljaCBkaXNwbGF5cyB0aGUgYnV0dG9uIGl0c2VsZixcbiAgICAvLyBmb3IgaXQgdG8gYmUgY2FsbGVkIHRvIHJlcGxhY2UgdGhlIHRhc2sgZm9ybSBvbmNlIHN1Ym1pdHRlZFxuICAgIGFkZFRhc2tBcmVhLmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZU5ld1Rhc2tCdXR0b24oKSk7XG4gICAgdGFza0FyZWEuaWQgPSBcInRhc2stYXJlYVwiO1xuICAgIHRhc2tBcmVhLmNsYXNzTmFtZSA9IFwidGFzay1hcmVhXCI7XG4gICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5VGFza3ModGFza0dyaWQpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0dyaWQpO1xuICAgIHRhc2tBcmVhLmFwcGVuZENoaWxkKGFkZFRhc2tBcmVhKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tBcmVhKTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBtYWtlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdGh1YkltYWdlLnNyYyA9IEdpdGh1Ykljb247XG4gICAgZ2l0aHViSW1hZ2UuYWx0ID0gXCJHaXRodWIgbG9nb1wiO1xuICAgIGdpdGh1YkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20veWVob2tpL1wiO1xuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gXCJDb3B5cmlnaHQgwqkgMjAyMyB5ZWhva2lcIjtcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICAgIHJldHVybiBmb290ZXI7XG4gIH1cblxuICAvLyBIRUxQRVIgTUVUSE9EIEZPUiBSRVBFQVQgQUNUSU9OU1xuICAvLyBESVNQTEFZSU5HIFBST0pFQ1RTXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdHMocHJvamVjdEFyZWEpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpID09PSBudWxsKSB7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLnBvcHVsYXRlUHJvamVjdEFyZWEocHJvamVjdEFyZWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWFyZWFcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucG9wdWxhdGVQcm9qZWN0QXJlYShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwb3B1bGF0ZVByb2plY3RBcmVhKHByb2plY3RBcmVhKSB7XG4gICAgdG9kb2xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAubWFwKChwcm9qZWN0T2JqZWN0KSA9PiBwcm9qZWN0T2JqZWN0LnByb2plY3ROYW1lKVxuICAgICAgLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RFbnRyeS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YWJcIik7XG4gICAgICAgIHByb2plY3RFbnRyeS5pZCA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0RW50cnkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEVudHJ5KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gICBESVNQTEFZSU5HIFRBU0tTXG4gIHN0YXRpYyBkaXNwbGF5VGFza3ModGFza0dyaWQpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikgPT09IG51bGwpIHtcbiAgICAgIHNjcmVlbkNvbnRyb2xsZXIucG9wdWxhdGVUYXNrQXJlYSh0YXNrR3JpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1ncmlkXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLnBvcHVsYXRlVGFza0FyZWEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcG9wdWxhdGVUYXNrQXJlYSh0YXNrR3JpZCkge1xuICAgIHRvZG9saXN0XG4gICAgICAuZ2V0QWN0aXZlUHJvamVjdCgpXG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ2FyZC5jbGFzc05hbWUgPSBcInRhc2tcIjtcbiAgICAgICAgdGFza0NhcmQuaWQgPSB0YXNrLnRpdGxlOyAvL0xhdGVyIGNoYW5nZSB0aGlzIHRvIHVuaXF1ZSBpZFxuICAgICAgICB0YXNrQ2FyZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRhc2tHcmlkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICAgIH0pO1xuICB9XG4gIC8vIENSRUFURSBBIE5FVyBQUk9KRUNUIEJVVFRPTiAgXG5cbiAgc3RhdGljIG1ha2VOZXdQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uaWQgPSBcIm5ldy1wcm9qZWN0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oXCJOb3RoaW5nXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1hcmVhXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChzY3JlZW5Db250cm9sbGVyLm1ha2VQcm9qZWN0SW5wdXQoKSk7XG4gICAgICAvLyBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCBmb3JtO1xuICAgICAgLypcbiAgICAgICAgV0hFTiBXRSBDUkVBVEUgQSBORVcgUFJPSkVDVCwgVEhFIEJVVFRPTiBESVNBUFBFQVJTIEFORCBBIEZPUk0gQVBQRUFSU1xuICAgICAgICBPTiBTVUJNSVQgRk9SIEZPUk0gVEhFIEZPUk0gR0VUUyBTRU5ULCBESVNBUFBFQVJTIEFORCBUSEUgQlVUVE9OIEFQUEVBUlNcbiAgICAgICAqL1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdHMoKSk7XG4gICAgICAvKkFkZCB0aGUgbG9naWMgZm9yIHRoZSBmb2xsb3dpbmc6XG4gICAgICAxLiBCcmluZyB1cCBhbiBpbnB1dCBmb3IgYSBuZXcgcHJvamVjdFxuICAgICAgMi4gQWRkIHRoZSBsb2dpYyB0byB0aGUgbGlzdCBvZiBwcm9qZWN0c1xuICAgICAgMy4gU2V0IHRoZSBuZXcgcHJvamVjdCBhcyB0aGUgJ2N1cnJlbnQnIG9uZSBhbmQgcmVuZGVyIGl0IG91dCAqL1xuICAgICAgc2NyZWVuQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbiAgfVxuICAvLyBHRU5FUkFURVMgVEhFIElOUFVUIEZPUiBBIE5FVyBQUk9KRUNUXG4gIHN0YXRpYyBtYWtlUHJvamVjdElucHV0KCkge1xuICAgIC8vIENyZWF0aW5nIGFuZCBkaXNwbGF5aW5nIHRoZSBib3ggdG8gZGlzcGxheSB0aGUgJ25ldyBwcm9qZWN0JyBib3gsIGZhbHNlIGJ5IGRlZmF1bHRcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXctcHJvamVjdC1mb3JtXCI7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IG5hbWU6XCI7XG4gICAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSBwcm9qZWN0TGFiZWwuaHRtbEZvcjtcbiAgICBwcm9qZWN0U3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdCk7XG4gICAgLy8gY3JlYXRlcyBhIG5ldyBwcm9qZWN0IG9uIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAgICBuZXdQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9kb2xpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBORVcgUFJPSkVDVCBBQUFBQUg6ICR7cHJvamVjdE5hbWVJbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb2xpc3QuZ2V0UHJvamVjdHMoKSk7XG4gICAgICB9XG5cbiAgICAgIC8vICAgaWYgKHByb2plY3QuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSkge1xuICAgICAgLy8gICAgIGNvbnNvbGUud2FybihcIk5ldyBwcm9qZWN0IGFkZGVkXCIpO1xuICAgICAgLy8gICB9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWFyZWFcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWFyZWFcIilcbiAgICAgICAgLmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZU5ld1Byb2plY3RCdXR0b24oKSk7XG4gICAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0cygpO1xuICAgIH07XG4gICAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xuICB9XG5cbiAgLy8gR0VORVJBVEVTIFRIRSBGT1JNIEZPUiBJTlBVVFRJTkcgQSBORVcgVEFTS1xuICBzdGF0aWMgbWFrZU5ld1Rhc2tFbnRyeSgpIHtcbiAgICBjb25zdCB0YXNrRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICB0YXNrRW50cnkuaWQgPSBcInRhc2stZW50cnlcIjtcbiAgICB0YXNrRW50cnkuY2xhc3NOYW1lID0gXCJ0YXNrLWVudHJ5XCI7XG4gICAgLy8gdGl0bGVcbiAgICBjb25zdCB0YXNrVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza1RpdGxlLnR5cGUgPSBcInRlc3RcIjtcbiAgICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgdGFza1RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0YXNrVGl0bGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrLXRpdGxlXCI7XG4gICAgdGFza1RpdGxlLmlkID0gdGFza1RpdGxlTGFiZWwuaHRtbEZvcjtcbiAgICAvLyBkZXNjcmlwdGlvblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb24uLi5cIjtcbiAgICB0YXNrRGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmlkID0gdGFza0Rlc2NyaXB0aW9uTGFiZWwuaHRtbEZvcjtcbiAgICAvLyBkdWVEYXRlXG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrRHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJ0YXNrLWR1ZS1kYXRlXCI7XG4gICAgdGFza0R1ZURhdGUuaWQgPSB0YXNrRHVlRGF0ZUxhYmVsLmh0bWxGb3I7XG5cbiAgICAvLyAgIHN1Ym1pdCBmb3JtIGJ1dHRvblxuICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vICAgc3VibWl0VGFza0J1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gICAgLy8gYWRkIGNhbmNlbCBmb3JtIGJ1dHRvblxuXG4gICAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tUaXRsZUxhYmVsKTtcbiAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUxhYmVsKTtcbiAgICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgIHRhc2tFbnRyeS5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnV0dG9uKTtcbiAgICAvLyBzdWJtaXQgdGhlIHRhc2tcbiAgICB0YXNrRW50cnkub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gY3JlYXRlIGEgbmV3IHRhc2sgb2JqZWN0XG4gICAgICB0b2RvbGlzdC5nZXRBY3RpdmVQcm9qZWN0KCkuYWRkVGFzayhcbiAgICAgICAgbmV3IFRhc2soXG4gICAgICAgICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICdOb25lJ1xuICAgICAgICApXG4gICAgICApXG4gICAgICBzY3JlZW5Db250cm9sbGVyLmRpc3BsYXlUYXNrcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZ3JpZFwiKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWFyZWFcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIC8vIHB1c2ggdG8gdGFzayBsaXN0XG5cbiAgICAgIC8vIHJlcmVuZGVyIHRhc2tzXG4gICAgICAvLyBzaG93IGFkZCB0YXNrIGJ1dHRvbiBhZ2FpblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKHNjcmVlbkNvbnRyb2xsZXIubWFrZU5ld1Rhc2tCdXR0b24oKSk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvbGlzdC5nZXRDdXJyZW50VGFza3MoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gdGFza0VudHJ5O1xuICB9XG4gIC8vIEdFTkVSQVRFUyBBIE5FVyBUQVNLIEJVVFRPTlxuICBzdGF0aWMgbWFrZU5ld1Rhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICAgIHRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWFyZWFcIikuYXBwZW5kQ2hpbGQoc2NyZWVuQ29udHJvbGxlci5tYWtlTmV3VGFza0VudHJ5KCkpO1xuICAgICAgLypcbiAgICAgICAgICAxLiBTaG93IHVwIGEgZm9ybSB3aXRoIGVudHJpZXMgZm9yIGFsbCBkZWZpbmVkIFRhc2sgcHJvcGVydGllc1xuICAgICAgICAgIDIuIERlZmF1bHQgXCJuby1lbnRyeVwiIHZhbHVlcyBmb3IgbW9zdCBvZiB0aGVtXG4gICAgICAqL1xuICAgICAgY29uc29sZS53YXJuKFwiV2UgZG8gYSBuZXcgdGFza1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFza0J1dHRvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9