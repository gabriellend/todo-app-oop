import { TodoList } from "./todoList";

export class Project {
  static id = 0;

  constructor(title) {
    this.id = ++Project.id;
    this.title = title;
    this.todoList = new TodoList(this.title);
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getTodos() {
    return this.todoList.getTodos();
  }

  addTodo(todo) {
    this.todoList.addTodo(todo);
  }

  deleteTodo(todoId) {
    this.todoList.deleteTodo(todoId);
  }

  moveTodo(todoId, toIndex) {
    this.todoList.moveTodo(todoId, toIndex);
  }
}
