/* 
All things to do with projects -
separate projects will store separate lists of to do tasks
For example: Work tasks, home tasks, sport tasks etc. 
*/

import Todos from "./Todos";

export default class Project {
    constructor(projectName, taskList = []){
        this.projectName = projectName
        this.taskList = taskList
    }

    createProject(projectTitle) {
        const projectExists = todos.getProjects().some(
            (project) => project.projectName === projectTitle);
        if (!projectExists) {
            const newProject = Project(projectTitle, []);
            Todos.addProject(newProject);
            return true;
        }
        return false;
    }

    getTasks(projectTitle) {
        return todos.getProjects().filter(project => project.projectName === projectTitle)[0];
    }

    addTask(task) {
        todos.getProjects[0].taskList.push(task);
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

