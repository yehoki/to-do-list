/* 
All things to do with projects -
separate projects will store separate lists of to do tasks
For example: Work tasks, home tasks, sport tasks etc. 
*/
import { taskController } from "./task";

// Project factory
const Project = (projectName, taskList) => {
  return {
    projectName,
    taskList,
  };
};

// our list of all projects, initialized as empty, will be populated with `Project` objects
// projectController Module
const projectController = () => {
// Local Storage logic to be added in later on.
//   const getProjectsFromStorage = () => {
//     if (localStorage.getItem("projects")) {
//         console.log("it's there");
//         console.log(localStorage.getItem("projects"))
//     } else {
//         console.log('hehye');
//     }
//   }; 


  let task = taskController();
  const projects = [Project("Default", [1,2,3,4])];
  // create a new project with a name
  const createProject = (projectTitle) => {
    // first we check if the project name exists already
    const projectExists = projects.some(
      (project) => project.projectName === projectTitle
    );
    if (!projectExists) {
      const newProject = Project(projectTitle, []);
      addProject(newProject);
      return true;
    }
    return false;
  };

  // Add a new project to the array of projects
  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

//   Get all the tasks related to the project
  const getTasks = (projectTitle = 'Default') => {
    const projectIndex = projects.map(element => element.projectName).indexOf(projectTitle);
    if(projectIndex !== -1) {
        return projects[projectIndex].taskList;
    }
  };

  // based on the current project we are working in, we want to get the whole projec
  return {
    createProject,
    getProjects,
    getTasks,
  };
};

export { projectController };
