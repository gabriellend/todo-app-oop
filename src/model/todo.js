export class Todo {
  static id = 0;

  constructor(description, dueDate, priority, project = undefined) {
    this.id = ++Todo.id;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  getId() {
    return this.id;
  }

  setDueDate(dueDate) {
    // error check
    this.dueDate = dueDate;
  }

  getDueDate() {
    return this.dueDate;
  }

  setPriority(priority) {
    // error check
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}
