// import something
import Project from "./project";

export default class Todos {
  constructor() {
    this.projects = [];
  }

  static getProjects() {
      return this.projects;
  }

  static addProject(project) {
    this.projects.push(project);
  }

  static deleteProject(projectName) {
    this.projects.filter((project) => project.projectName !== projectName);
  }

  static getTasks(projectName) {
    return this.projects.filter(project => project.projectName === projectName)[0].taskList;
  }
}
