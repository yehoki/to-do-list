// import something
import Project  from "./project";

// const projectClass = new Project();

export default class Todos {
  constructor() {
    this.projects = [new Project("Test", [])];
  }

  getProjects() {
    return this.projects;
  }

  addProject(projectObject) {
    const projectExists = this.getProjects().some(
      (project) => project.projectName === projectObject.projectName
    );
    if (!projectExists) {
      this.projects.push(projectObject);
      return true;
    }
    return false;
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
