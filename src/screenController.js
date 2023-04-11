// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here
import GithubIcon from "./github-mark.svg";
import Todos from "./Todos";

const todolist = new Todos();

export default class screenController {
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
    githubImage.src = GithubIcon;
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
  console.log(Todos.getProjects());
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
  Todos.getTasks().forEach((taskName) => {
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
