// import something
import Project from "./project";
import Task from "./task";

// const projectClass = new Project();

export default class Todos {
  constructor() {
    this.projects = [
      new Project(
        "Test",
        [new Task("test task", "test", "wqewq", "none")],
        true
      ),
    ];
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
    return this.projects[this.getActiveProjectIndex()];
  }
  
  resetAllActive(){
    this.projects.forEach((project) =>{
        project.active = false;
    })
  }

  setProjectActive(projectName){
    this.resetAllActive();
    this.projects[this.getProjectIndexByName(projectName)].setActive();
  }

}
