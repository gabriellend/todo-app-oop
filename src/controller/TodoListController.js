import { Todo } from "../model/Todo";
import { LocalStorageUtils } from "../utils/LocalStorageUtils";

export class TodoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.setOnAddButtonClick(this.addTodo);
    this.view.setOnDeleteButtonClick(this.deleteTodo);
  }

  addTodo = (description, dueDate, priority, project) => {
    const newTodo = new Todo(description, dueDate, priority, project);
    this.model.addTodo(newTodo);
    this.view.render();

    // Update local storage
    const existingTodosJSON = LocalStorageUtils.get("allTodos");
    let existingTodos = [];

    if (existingTodosJSON) {
      existingTodos = JSON.parse(existingTodosJSON);
    }

    existingTodos.push(newTodo);

    LocalStorageUtils.setItem("allTodos", JSON.stringify(existingTodos));
  };

  deleteTodo = (todoId) => {
    this.model.deleteTodo(todoId);
    this.view.render();

    // Update local storage
    const existingTodosJSON = LocalStorageUtils.get("allTodos");
    let existingTodos = [];

    if (existingTodosJSON) {
      existingTodos = JSON.parse(existingTodosJSON);
    }

    existingTodos = existingTodos.filter((todo) => todo.id !== todoId);
    if (existingTodos.length === 0) {
      LocalStorageUtils.clear();
    } else {
      LocalStorageUtils.set("allTodos", JSON.stringify(existingTodos));
    }
  };

  render() {
    this.view.render();
  }
}
