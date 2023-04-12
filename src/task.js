/*
We will be using tasks in order to store, create and manipulate the 'todo' list objects.
*/

import { format, parseISO } from 'date-fns';
import toDate from 'date-fns/toDate'


export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate === "" ? "" : Date.parse(dueDate);
    this.priority = priority
  }

  getTitle() {
    return this.title
  }

  getFormattedDate() {
    return this.dueDate === "" ? "" : format(toDate(this.dueDate), 'E, do MMM YYY');
  }



}


