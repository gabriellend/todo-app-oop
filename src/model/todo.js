export class Todo {
  static id = 0;
  static noTodosMessage = "No todos yet!";

  constructor(description, dueDate, priority) {
    this.id = ++Todo.id;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
