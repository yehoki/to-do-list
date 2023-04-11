/*
We will be using tasks in order to store, create and manipulate the 'todo' list objects.
*/


export default class Task {
  constructor(title, description, dueDate = '', priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
}


