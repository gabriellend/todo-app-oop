import { Todo } from "../model/Todo";

export class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.setOnAddButtonClick(this.addTodo);
    this.view.setOnDeleteButtonClick(this.deleteTodo);
  }

  addTodo = (description, dueDate, priority) => {
    const newTodo = new Todo(description, dueDate, priority);
    this.model.addTodo(newTodo);
    this.view.render();
  };

  deleteTodo = (todoId) => {
    this.model.deleteTodo(todoId);
    this.view.render();
  };

  render() {
    this.view.render();
  }
}
