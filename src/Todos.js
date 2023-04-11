// import something
import Project from "./project";

export default class Todos {
  constructor() {
    this.projects = [(new Project('Test', []))];
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
    this.projects.push(project);
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
