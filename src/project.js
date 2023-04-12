/* 
All things to do with projects -
separate projects will store separate lists of to do tasks
For example: Work tasks, home tasks, sport tasks etc. 
*/

import Todos from "./Todos";

export default class Project {
  constructor(projectName, taskList = [], active = false) {
    this.projectName = projectName;
    this.taskList = taskList;
    this.active = active;
  }

  getTitle(project) {
    return project.projectName;
  }

  getName() {
    return this.projectName;
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  setTasks(tasks) {
    this.taskList = tasks;
  }

  setActive() {
    if(this.active === false){
        this.active = true;
    }
  }
  
  deleteTask(taskName){
    this.taskList = this.taskList.filter((task) => task.title !== taskName);
  }
}

// our list of all projects, initialized as empty, will be populated with `Project` objects
// projectController Module

// Local Storage logic to be added in later on.
//   const getProjectsFromStorage = () => {
//     if (localStorage.getItem("projects")) {
//         console.log("it's there");
//         console.log(localStorage.getItem("projects"))
//     } else {
//         console.log('hehye');
//     }
//   };
