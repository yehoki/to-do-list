/*
We will be using tasks in order to store, create and manipulate the 'todo' list objects.
*/

// Task factory

const Task = (title, description, dueDate, priority, notes, location) => {
  return {
    title,
    description,
    dueDate, // If this was in TS, it would have a strict Date type for example.
    priority,
    notes,
    location,
  };
};

const taskController = () => {
  const tasks = [1,2,3,4];
  /* Here we will store the tasks themselves, for now we initialize an empty task list at
  the beginning, and will move on the semi-permanent storage after.

  I have to remember that I will store each list of tasks in a project,
  so I should NOT store the tasks initially in the taskController,
  but rather in the projectController area.
   */

  // Creates a task
  const createTask = (
    title,
    description,
    dueDate,
    priority,
    notes,
    location
  ) => {
    const newTask = Task(
      title,
      description,
      dueDate,
      priority,
      notes,
      location
    );
    return newTask;
  };

  // Adds a task to the task array
  const addTask = (task) => {
    tasks.push(task);
  };

  // retrieves the task array
  const getTasks = () => console.log(tasks);

  //
  return {
    addTask,
    getTasks,
  };
};
export { taskController };
