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
  const projects = [];
  let project = taskController();

  // Initialize a new empty list of tasks
  const tasks = project.getTasks();

  // create a new project with a name
  const createProject = (projectName) => {
    const newProject = new Project(projectName, (taskList = []));
    return newProject;
  };

  // Add a new project to the array of projects
  const addProject = (project) => {
    projects.push(project);
  };
  // based on the current project we are working in, we want to get the whole projec
};