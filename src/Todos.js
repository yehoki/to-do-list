// import something
import Project from "./project";
import Task from "./task";

// const projectClass = new Project();

export default class Todos {
  constructor() {
    this.projects = [new Project("Test", [
        new Task(
            'test task', 'test', 'wqewq', 'none'
        )
    ], true)];
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

  getTasks(projectObject) {
    return this.projects[this.getProjectIndex(projectObject)].getTasks();
  }

  getActiveProjectIndex() {
    return this.projects.map((project) => project.active).indexOf(true);
  }

  getActiveProject() {
    return this.projects[this.getActiveProjectIndex()];
  }
}