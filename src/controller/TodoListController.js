import { Todo } from "../model/todo";

export class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.setOnAddButtonClick(this.addTodo);
  }

  addTodo = (description, dueDate, priority) => {
    const newTodo = new Todo(description, dueDate, priority);
    this.model.addTodo(newTodo);
    this.view.render();
  };
}
