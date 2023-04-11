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

const displayTasks = (taskGrid) => {
  if (document.getElementById("task-grid") === null) {
    populateTaskArea(taskGrid);
  } else {
    document.getElementById("task-grid").innerHTML = "";
    populateTaskArea(document.getElementById("task-grid"));
  }
};

const populateTaskArea = (taskGrid) => {
  project.getTasks().forEach((taskName) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task");
    taskCard.id = taskName;
    taskCard.textContent = taskName;
    taskGrid.appendChild(taskCard);
  });
};

//  generates a new form for inputting a new task
const makeNewTaskEntry = () => {
  const taskEntry = document.createElement("form");
  taskEntry.id = "task-entry";
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

  taskEntry.appendChild(taskTitleLabel);
  taskEntry.appendChild(taskTitle);
  taskEntry.appendChild(taskDescriptionLabel);
  taskEntry.appendChild(taskDescription);
  taskEntry.appendChild(taskDueDateLabel);
  taskEntry.appendChild(taskDueDate);

  return taskEntry;
};

const makeNewTaskButton = () => {
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
};

const makeContent = () => {
  const content = document.createElement("div");
  const taskArea = document.createElement("div");
  const projectTitle = document.createElement("h3");
  const taskGrid = document.createElement("div");
  const addTaskArea = document.createElement("div");

  content.className = "content";

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

  addTaskArea.appendChild(makeNewTaskButton());

  taskArea.id = "task-area";
  taskArea.className = "task-area";
  displayTasks(taskGrid);

  taskArea.appendChild(projectTitle);
  taskArea.appendChild(taskGrid);
  taskArea.appendChild(addTaskArea);

  content.appendChild(taskArea);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXG5BbGwgdGhpbmdzIHRvIGRvIHdpdGggcHJvamVjdHMgLVxuc2VwYXJhdGUgcHJvamVjdHMgd2lsbCBzdG9yZSBzZXBhcmF0ZSBsaXN0cyBvZiB0byBkbyB0YXNrc1xuRm9yIGV4YW1wbGU6IFdvcmsgdGFza3MsIGhvbWUgdGFza3MsIHNwb3J0IHRhc2tzIGV0Yy4gXG4qL1xuaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90YXNrXCI7XG5cbi8vIFByb2plY3QgZmFjdG9yeVxuY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgdGFza0xpc3QpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0TmFtZSxcbiAgICB0YXNrTGlzdCxcbiAgfTtcbn07XG5cbi8vIG91ciBsaXN0IG9mIGFsbCBwcm9qZWN0cywgaW5pdGlhbGl6ZWQgYXMgZW1wdHksIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYFByb2plY3RgIG9iamVjdHNcbi8vIHByb2plY3RDb250cm9sbGVyIE1vZHVsZVxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKSA9PiB7XG4vLyBMb2NhbCBTdG9yYWdlIGxvZ2ljIHRvIGJlIGFkZGVkIGluIGxhdGVyIG9uLlxuLy8gICBjb25zdCBnZXRQcm9qZWN0c0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuLy8gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaXQncyB0aGVyZVwiKTtcbi8vICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVoeWUnKTtcbi8vICAgICB9XG4vLyAgIH07IFxuXG5cbiAgbGV0IHRhc2sgPSB0YXNrQ29udHJvbGxlcigpO1xuICBjb25zdCBwcm9qZWN0cyA9IFtQcm9qZWN0KFwiRGVmYXVsdFwiLCBbMSwyLDMsNF0pXTtcbiAgLy8gY3JlYXRlIGEgbmV3IHByb2plY3Qgd2l0aCBhIG5hbWVcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0VGl0bGUpID0+IHtcbiAgICAvLyBmaXJzdCB3ZSBjaGVjayBpZiB0aGUgcHJvamVjdCBuYW1lIGV4aXN0cyBhbHJlYWR5XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IHByb2plY3RzLnNvbWUoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdFRpdGxlXG4gICAgKTtcbiAgICBpZiAoIXByb2plY3RFeGlzdHMpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3RUaXRsZSwgW10pO1xuICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gQWRkIGEgbmV3IHByb2plY3QgdG8gdGhlIGFycmF5IG9mIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuLy8gICBHZXQgYWxsIHRoZSB0YXNrcyByZWxhdGVkIHRvIHRoZSBwcm9qZWN0XG4gIGNvbnN0IGdldFRhc2tzID0gKHByb2plY3RUaXRsZSA9ICdEZWZhdWx0JykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLm1hcChlbGVtZW50ID0+IGVsZW1lbnQucHJvamVjdE5hbWUpLmluZGV4T2YocHJvamVjdFRpdGxlKTtcbiAgICBpZihwcm9qZWN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tMaXN0O1xuICAgIH1cbiAgfTtcblxuICAvLyBiYXNlZCBvbiB0aGUgY3VycmVudCBwcm9qZWN0IHdlIGFyZSB3b3JraW5nIGluLCB3ZSB3YW50IHRvIGdldCB0aGUgd2hvbGUgcHJvamVjXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRUYXNrcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RDb250cm9sbGVyIH07XG4iLCIvKlxuV2Ugd2lsbCBiZSB1c2luZyB0YXNrcyBpbiBvcmRlciB0byBzdG9yZSwgY3JlYXRlIGFuZCBtYW5pcHVsYXRlIHRoZSAndG9kbycgbGlzdCBvYmplY3RzLlxuKi9cblxuLy8gVGFzayBmYWN0b3J5XG5cbmNvbnN0IFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxvY2F0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSwgLy8gSWYgdGhpcyB3YXMgaW4gVFMsIGl0IHdvdWxkIGhhdmUgYSBzdHJpY3QgRGF0ZSB0eXBlIGZvciBleGFtcGxlLlxuICAgIHByaW9yaXR5LFxuICAgIG5vdGVzLFxuICAgIGxvY2F0aW9uLFxuICB9O1xufTtcblxuY29uc3QgdGFza0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8qIEhlcmUgd2Ugd2lsbCBzdG9yZSB0aGUgdGFza3MgdGhlbXNlbHZlcywgZm9yIG5vdyB3ZSBpbml0aWFsaXplIGFuIGVtcHR5IHRhc2sgbGlzdCBhdFxuICB0aGUgYmVnaW5uaW5nLCBhbmQgd2lsbCBtb3ZlIG9uIHRoZSBzZW1pLXBlcm1hbmVudCBzdG9yYWdlIGFmdGVyLlxuXG4gIEkgaGF2ZSB0byByZW1lbWJlciB0aGF0IEkgd2lsbCBzdG9yZSBlYWNoIGxpc3Qgb2YgdGFza3MgaW4gYSBwcm9qZWN0LFxuICBzbyBJIHNob3VsZCBOT1Qgc3RvcmUgdGhlIHRhc2tzIGluaXRpYWxseSBpbiB0aGUgdGFza0NvbnRyb2xsZXIsXG4gIGJ1dCByYXRoZXIgaW4gdGhlIHByb2plY3RDb250cm9sbGVyIGFyZWEuXG4gICAqL1xuXG4gIC8vIENyZWF0ZXMgYSB0YXNrXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBub3RlcyxcbiAgICBsb2NhdGlvblxuICApID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayhcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBub3RlcyxcbiAgICAgIGxvY2F0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gbmV3VGFzaztcbiAgfTtcblxuICAvL1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRhc2ssXG4gIH07XG59O1xuZXhwb3J0IHsgdGFza0NvbnRyb2xsZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzY3JlZW5Db250cm9sbGVyIHdpbGwgZGlzcGxheSB0aGUgdGFza3MgdG8gdGhlIERPTSwgc28gYW55dGhpbmcgdG8gZG8gd2l0aCB0aGUgRE9NIGFuZCBtYW5pcHVsYXRpbmcgd2lsbCBiZSBkb25lIGZyb20gaGVyZVxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4vZ2l0aHViLW1hcmsuc3ZnXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgcHJvamVjdCA9IHByb2plY3RDb250cm9sbGVyKCk7XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChwcm9qZWN0QXJlYSkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpID09PSBudWxsKSB7XG4gICAgcG9wdWxhdGVQcm9qZWN0QXJlYShwcm9qZWN0QXJlYSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcG9wdWxhdGVQcm9qZWN0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWFyZWFcIikpO1xuICB9XG59O1xuXG5jb25zdCBwb3B1bGF0ZVByb2plY3RBcmVhID0gKHByb2plY3RzQXJlYSkgPT4ge1xuICBwcm9qZWN0XG4gICAgLmdldFByb2plY3RzKClcbiAgICAubWFwKChwcm9qZWN0T2JqZWN0KSA9PiBwcm9qZWN0T2JqZWN0LnByb2plY3ROYW1lKVxuICAgIC5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3RFbnRyeS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YWJcIik7XG4gICAgICBwcm9qZWN0RW50cnkuaWQgPSBwcm9qZWN0TmFtZTtcbiAgICAgIHByb2plY3RFbnRyeS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgcHJvamVjdHNBcmVhLmFwcGVuZENoaWxkKHByb2plY3RFbnRyeSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBtYWtlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJUYXNrIGxpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgbWFrZU1haW4gPSAoc2lkZWJhciwgY29udGVudCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgbWFrZVByb2plY3RJbnB1dCA9IChkaXNwbGF5Tm93ID0gZmFsc2UpID0+IHtcbiAgLy8gQ3JlYXRpbmcgYW5kIGRpc3BsYXlpbmcgdGhlIGJveCB0byBkaXNwbGF5IHRoZSAnbmV3IHByb2plY3QnIGJveCwgZmFsc2UgYnkgZGVmYXVsdFxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBuZXdQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBuYW1lOlwiO1xuICBwcm9qZWN0TGFiZWwuaHRtbEZvciA9IFwicHJvamVjdC1uYW1lXCI7XG4gIHByb2plY3ROYW1lSW5wdXQuaWQgPSBwcm9qZWN0TGFiZWwuaHRtbEZvcjtcbiAgcHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIjtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXQpO1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYXJlYVwiKSA9PT0gbnVsbCk7XG4gIC8vIGNyZWF0ZXMgYSBuZXcgcHJvamVjdCBvbiBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gIG5ld1Byb2plY3RGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb2plY3QuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTmV3IHByb2plY3QgYWRkZWRcIik7XG4gICAgfVxuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICB9O1xuICByZXR1cm4gbmV3UHJvamVjdEZvcm07XG59O1xuXG5jb25zdCBtYWtlU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NOYW1lID0gXCJzaWRlYmFyXCI7XG4gIC8vIHNpZGViYXIgYnV0dG9uIHRvIGFkZCBhIG5ldyBwcm9qZWN0XG5cbiAgLy8gZGl2IHdoaWNoIGhvbGRzIHRoZSBwcm9qZWN0IG5hbWVzXG5cbiAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHNBcmVhLmlkID0gXCJwcm9qZWN0cy1hcmVhXCI7XG4gIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c0FyZWEpO1xuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3RcIik7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXCJOb3RoaW5nXCIpO1xuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlQcm9qZWN0cygpKTtcbiAgICAvKkFkZCB0aGUgbG9naWMgZm9yIHRoZSBmb2xsb3dpbmc6XG4gICAgMS4gQnJpbmcgdXAgYW4gaW5wdXQgZm9yIGEgbmV3IHByb2plY3RcbiAgICAyLiBBZGQgdGhlIGxvZ2ljIHRvIHRoZSBsaXN0IG9mIHByb2plY3RzXG4gICAgMy4gU2V0IHRoZSBuZXcgcHJvamVjdCBhcyB0aGUgJ2N1cnJlbnQnIG9uZSBhbmQgcmVuZGVyIGl0IG91dCAqL1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICB9KTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0FyZWEpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1ha2VQcm9qZWN0SW5wdXQoKSk7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAodGFza0dyaWQpID0+IHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1ncmlkXCIpID09PSBudWxsKSB7XG4gICAgcG9wdWxhdGVUYXNrQXJlYSh0YXNrR3JpZCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWdyaWRcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwb3B1bGF0ZVRhc2tBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1ncmlkXCIpKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVUYXNrQXJlYSA9ICh0YXNrR3JpZCkgPT4ge1xuICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFza05hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgdGFza0NhcmQuaWQgPSB0YXNrTmFtZTtcbiAgICB0YXNrQ2FyZC50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgIHRhc2tHcmlkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfSk7XG59O1xuXG4vLyAgZ2VuZXJhdGVzIGEgbmV3IGZvcm0gZm9yIGlucHV0dGluZyBhIG5ldyB0YXNrXG5jb25zdCBtYWtlTmV3VGFza0VudHJ5ID0gKCkgPT4ge1xuICBjb25zdCB0YXNrRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdGFza0VudHJ5LmlkID0gXCJ0YXNrLWVudHJ5XCI7XG4gIC8vIHRpdGxlXG4gIGNvbnN0IHRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tUaXRsZS50eXBlID0gXCJ0ZXN0XCI7XG4gIHRhc2tUaXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgdGFza1RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGFza1RpdGxlTGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xuICB0YXNrVGl0bGUuaWQgPSB0YXNrVGl0bGVMYWJlbC5odG1sRm9yO1xuICAvLyBkZXNjcmlwdGlvblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrRGVzY3JpcHRpb24udHlwZSA9IFwidGV4dFwiO1xuICB0YXNrRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uLi4uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcbiAgdGFza0Rlc2NyaXB0aW9uLmlkID0gdGFza0Rlc2NyaXB0aW9uTGFiZWwuaHRtbEZvcjtcbiAgLy8gZHVlRGF0ZVxuICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0R1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICB0YXNrRHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stZHVlLWRhdGVcIjtcbiAgdGFza0R1ZURhdGUuaWQgPSB0YXNrRHVlRGF0ZUxhYmVsLmh0bWxGb3I7XG5cbiAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tUaXRsZUxhYmVsKTtcbiAgdGFza0VudHJ5LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICB0YXNrRW50cnkuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVMYWJlbCk7XG4gIHRhc2tFbnRyeS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgcmV0dXJuIHRhc2tFbnRyeTtcbn07XG5cbmNvbnN0IG1ha2VOZXdUYXNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrXCIpO1xuICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1hcmVhXCIpLmFwcGVuZENoaWxkKG1ha2VOZXdUYXNrRW50cnkoKSk7XG4gICAgLypcbiAgICAgICAgICAxLiBTaG93IHVwIGEgZm9ybSB3aXRoIGVudHJpZXMgZm9yIGFsbCBkZWZpbmVkIFRhc2sgcHJvcGVydGllc1xuICAgICAgICAgIDIuIERlZmF1bHQgXCJuby1lbnRyeVwiIHZhbHVlcyBmb3IgbW9zdCBvZiB0aGVtXG4gICAgICAqL1xuICAgIGNvbnNvbGUud2FybihcIldlIGRvIGEgbmV3IHRhc2tcIik7XG4gIH0pO1xuICByZXR1cm4gdGFza0J1dHRvbjtcbn07XG5cbmNvbnN0IG1ha2VDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkVGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5cbiAgLy8gICBmb3Igbm93LCBsZWF2ZSBhcyBkZWZhdWx0IC0gbGF0ZXIgY2hhbmdlIHRvIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHByb2plY3QgbmFtZVxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcbiAgdGFza0dyaWQuaWQgPSBcInRhc2stZ3JpZFwiO1xuICB0YXNrR3JpZC5jbGFzc05hbWUgPSBcInRhc2stZ3JpZFwiO1xuICAvLyAgdGhlIHRhc2tzIHdpbGwgYmUgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgdGFza0dyaWQgZWxlbWVudFxuICAvLyAgaW5zaWRlIHRoZSBhZGQgdGFzayBhcmVhIHdlIHdpbGwgaGF2ZSB0aGUgJ2FkZCB0YXNrJyBidXR0b24sXG4gIC8vICBvbmNlIHByZXNzZWQgaXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZm9ybSB0byBhZGQgYSBuZXcgdGFzay5cbiAgYWRkVGFza0FyZWEuaWQgPSBcImFkZC10YXNrLWFyZWFcIjtcbiAgYWRkVGFza0FyZWEuY2xhc3NOYW1lID0gXCJhZGQtdGFzay1hcmVhXCI7XG4gIFxuICAvLyBtb3ZlIHRoaXMgbGF0ZXIgdG8gYSBmdW5jdGlvbiB3aGljaCBkaXNwbGF5cyB0aGUgYnV0dG9uIGl0c2VsZixcbiAgLy8gZm9yIGl0IHRvIGJlIGNhbGxlZCB0byByZXBsYWNlIHRoZSB0YXNrIGZvcm0gb25jZSBzdWJtaXR0ZWRcblxuICBhZGRUYXNrQXJlYS5hcHBlbmRDaGlsZChtYWtlTmV3VGFza0J1dHRvbigpKTtcblxuICB0YXNrQXJlYS5pZCA9IFwidGFzay1hcmVhXCI7XG4gIHRhc2tBcmVhLmNsYXNzTmFtZSA9IFwidGFzay1hcmVhXCI7XG4gIGRpc3BsYXlUYXNrcyh0YXNrR3JpZCk7XG5cbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgdGFza0FyZWEuYXBwZW5kQ2hpbGQodGFza0dyaWQpO1xuICB0YXNrQXJlYS5hcHBlbmRDaGlsZChhZGRUYXNrQXJlYSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQXJlYSk7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuY29uc3QgbWFrZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGdpdGh1YkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1YkltYWdlLnNyYyA9IEdpdGh1Ykljb247XG4gIGdpdGh1YkltYWdlLmFsdCA9IFwiR2l0aHViIGxvZ29cIjtcbiAgZ2l0aHViSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20veWVob2tpL1wiO1xuICBmb290ZXJUZXh0LmlubmVySFRNTCA9IFwiQ29weXJpZ2h0IMKpIDIwMjMgeWVob2tpXCI7XG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IHNjcmVlbkNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlSGVhZGVyKCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VNYWluKG1ha2VTaWRlYmFyKCksIG1ha2VDb250ZW50KCkpKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlRm9vdGVyKCkpO1xufTtcblxuZXhwb3J0IHsgc2NyZWVuQ29udHJvbGxlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9