// import something
import Project from "./project";
import Task from "./task";
import { parseISO } from "date-fns";
// const projectClass = new Project();


export default class Todos {
  constructor() {
    this.projects = [
      new Project(
        "Test",
        [
          new Task(
            "test task",
            "test",
            new Date(Date.parse(2023, 3, 12)),
            25
          ),
        ],
        true
      ),
    ];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
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
    this.projects = this.projects.filter((project) => project.projectName !== projectName);
  }

  getProjectIndexByName(projectTitle) {
    return this.projects
      .map((project) => project.projectName)
      .indexOf(projectTitle);
  }

  getCurrentTasks() {
    return this.projects[this.getActiveProjectIndex()].getTasks();
  }

  getActiveProjectIndex() {
    return this.projects.map((project) => project.active).indexOf(true);
  }

  getActiveProject() {
    if(this.projects.length > 0){
        return this.projects[this.getActiveProjectIndex()];
    }
    return false;
  }

  resetAllActive() {
    this.projects.forEach((project) => {
      project.active = false;
    });
  }

  setProjectActive(projectName) {
    this.resetAllActive();
    this.projects[this.getProjectIndexByName(projectName)].setActive();
  }
}
