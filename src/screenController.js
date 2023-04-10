// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here
import GithubIcon from "./github-mark.svg";
import { projectController } from "./project";
import { taskController } from "./task";

const task = taskController();
const project = projectController();

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
    // creates a new project on submitting the form
    newProjectForm.onsubmit = (e) => {
        e.preventDefault();
        if(project.createProject(projectNameInput.value)){
            console.log(projectNameInput.value);
            console.log(project.getProjects());
        }
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
  githubImage.src = GithubIcon;
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

export {
    screenController
}