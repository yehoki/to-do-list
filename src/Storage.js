import Todos from "./Todos";
import Project from "./project";
import Task from "./task";

export default class Storage {
  storageDataAvailable() {
    return localStorage.getItem("todos");
  }

  static setStorageData(storageData) {
    localStorage.setItem("todos", JSON.stringify(storageData));
  }

  static getTodos() {
    const todos = Object.assign(
      new Todos(),
      JSON.parse(localStorage.getItem("todos"))
    );

    todos.setProjects(
      todos
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    todos
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      );
    return todos;
  }

  static addProject(project) {
    const todos = Storage.getTodos();
    todos.addProject(project);
    Storage.setStorageData(todos);
  }

  static deleteProject(projectName) {
    const todos = Storage.getTodos();
    todos.deleteProject(projectName);
    Storage.setStorageData(todos);
  }

  static setProjectActive(projectName){
    const todos = Storage.getTodos();
    todos.setProjectActive(projectName);
    Storage.setStorageData(todos);
  }

  static addTask(task) {
    const todos = Storage.getTodos();
    todos.getActiveProject().addTask(task);
    Storage.setStorageData(todos);
  }

  static deleteTask(taskName) {
    const todos = Storage.getTodos();
    todos.getActiveProject().deleteTask(taskName);
    Storage.setStorageData(todos);
  }
}
