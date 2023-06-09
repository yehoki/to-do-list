// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here
import GithubIcon from "./github-mark.svg";
import Project from "./project";
import Storage from "./Storage";
import Task from "./task";

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
    
    console.log(Storage.getTodos().getProjects());
    console.log(Storage.getTodos().getActiveProject());
    // if (Storage.getTodos().getProjects().length > 0){
        // console.log("Test", Storage.getTodos().getActiveProject().getName());
        // projectTitle.textContent = Storage.getTodos().getActiveProject().getName();
    // }
    projectTitle.id = "project-title";
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
    Storage.getTodos()
      .getProjects()
      .map((projectObject) => projectObject.projectName)
      .forEach((projectName) => {
        const projectEntry = document.createElement("div");
        const projectButton = document.createElement("button");
        const deleteProjectButton = document.createElement("button");
        projectEntry.classList.add("project-tab");
        projectEntry.id = projectName;
        projectButton.textContent = projectName;
        projectButton.addEventListener("click", () => {
          Storage.setProjectActive(projectName);
          screenController.displayTasks();
          document.getElementById("project-title").textContent =
            Storage.getTodos().getActiveProject().projectName;
        });
        deleteProjectButton.textContent = "X";
        deleteProjectButton.addEventListener("click", () => {
          Storage.deleteProject(projectEntry.id);
          this.displayProjects();
          screenController.displayTasks();
        });
        projectEntry.appendChild(projectButton);
        projectEntry.appendChild(deleteProjectButton);
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
    if (!Storage.getTodos().getActiveProject()) {
      return;
    }
    Storage.getTodos()
      .getActiveProject()
      .getTasks()
      .forEach((task) => {
        const taskCard = document.createElement("div");
        const taskTitle = document.createElement("h4");
        const taskDescription = document.createElement("div");
        const taskDueDate = document.createElement("div");
        const deleteTaskButton = document.createElement("button");
        taskCard.className = "task";
        taskCard.id = task.title; //Later change this to unique id
        taskCard.style.backgroundColor = this.getPriorityColour(task.priority);
        taskTitle.textContent = task.title;
        taskDescription.textContent =
          task.description === "" ? "  " : task.description;
        taskDueDate.textContent = task.getFormattedDate();
        deleteTaskButton.textContent = "X";
        deleteTaskButton.id = task.title;
        deleteTaskButton.addEventListener("click", () => {
          Storage.deleteTask(deleteTaskButton.id);
          screenController.displayTasks();
        });
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(deleteTaskButton);
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
      /*Add the logic for the following:
      1. Bring up an input for a new project DONE
      2. Add the logic to the list of projects DONE
      3. Set the new project as the 'current' one and render it out DONE */
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
      const newProject =
        Storage.getTodos().getProjects().length > 0
          ? new Project(projectNameInput.value)
          : new Project(projectNameInput.value, [], true);
      Storage.addProject(newProject);
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
    // priority

    const taskPriorityLabel = document.createElement("label");
    const taskPriority = document.createElement("input");
    taskPriority.type = "range";
    taskPriority.min = "0";
    taskPriority.max = "255";
    taskPriorityLabel.htmlFor = "task-priority";
    taskPriority.id = taskPriorityLabel.htmlFor;
    taskPriorityLabel.textContent = "Priority";
    taskPriority.addEventListener("input", () => {
      this.changeColour(taskPriority);
    });
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
    taskEntry.appendChild(taskPriorityLabel);
    taskEntry.appendChild(taskPriority);
    taskEntry.appendChild(submitTaskButton);
    // submit the task
    taskEntry.onsubmit = (e) => {
      e.preventDefault();
      // create a new task object
      if (Storage.getTodos().getProjects().length > 0) {
        Storage.addTask(
          new Task(
            taskTitle.value,
            taskDescription.value,
            taskDueDate.value,
            taskPriority.value
          )
        );
      } else {
        alert("Please make a new project first");
      }

      screenController.displayTasks(document.getElementById("task-grid"));
      document.getElementById("add-task-area").innerHTML = "";
      document.getElementById("add-task-area").style.backgroundColor = "white";
      // push to task list
      // show add task button again
      document
        .getElementById("add-task-area")
        .appendChild(screenController.makeNewTaskButton());
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
      document
        .getElementById("add-task-area")
        .appendChild(screenController.makeNewTaskEntry());
      /*
          1. Show up a form with entries for all defined Task properties
          2. Default "no-entry" values for most of them
      */
      console.warn("We do a new task");
    });
    return taskButton;
  }

  static getPriorityColour(priorityValue) {
    return `rgb(
        255,
        ${255 - parseInt(priorityValue)},
        ${255 - parseInt(priorityValue)},
        0.75
    )`;
  }

  static changeColour(taskPriority) {
    document.getElementById("add-task-area").style.backgroundColor =
      this.getPriorityColour(taskPriority.value);
  }
}
