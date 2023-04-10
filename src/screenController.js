// screenController will display the tasks to the DOM, so anything to do with the DOM and manipulating will be done from here
import GithubIcon from "./github-mark.svg";
import { taskController } from "./task";



const makeHeader = () => {
  const header = document.createElement("header");
  header.textContent = "Testing";
  return header;
};

const makeMain = (sidebar, content) => {
  const main = document.createElement("main");
  main.appendChild(sidebar);
  main.appendChild(content);
  return main;
};

const makeSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebar.textContent = "sidebar";
  return sidebar;
};

const makeContent = () => {
  const content = document.createElement("div");
  content.className = "content";
  content.textContent = "content";

  const taskButton = document.createElement("button");
  taskButton.setAttribute("id", "add-task");
  taskButton.textContent = "testbutton";
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