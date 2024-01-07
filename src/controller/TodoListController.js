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
    const existingTodosJSON = LocalStorageUtils.get("todos");
    let todos = existingTodosJSON ? JSON.parse(existingTodosJSON) : [];

    todos.push({
      id: newTodo.id,
      description: newTodo.description,
      project: newTodo.project,
      dueDate: newTodo.dueDate,
      priority: newTodo.priority,
    });

    LocalStorageUtils.set("todos", JSON.stringify(todos));
  };

  deleteTodo = (todoId) => {
    this.model.deleteTodo(todoId);
    this.view.render();

    // Update local storage
    const existingTodosJSON = LocalStorageUtils.get("todos");
    let newTodos = JSON.parse(existingTodosJSON).filter(
      (todo) => todo.id !== todoId
    );
    if (newTodos.length === 0) {
      LocalStorageUtils.clear();
    } else {
      LocalStorageUtils.set("todos", JSON.stringify(newTodos));
    }
  };

  render() {
    this.view.render();
  }
}
