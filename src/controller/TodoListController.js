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
    const newTodo = this.model.addTodo(description, dueDate, priority, project);
    this.view.render();

    // Update local storage
    const existingTodosJSON = LocalStorageUtils.get("todos");
    let todos = existingTodosJSON ? JSON.parse(existingTodosJSON) : [];

    todos.push({
      id: newTodo.getId(),
      description: newTodo.getDescription(),
      project: newTodo.getProject(),
      dueDate: newTodo.getDueDate(),
      priority: newTodo.getPriority(),
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

  updateTodoList(projectName, todos) {
    this.model.setTitle(projectName);
    this.model.clearTodos();

    if (todos.length) {
      this.model.setTodos(todos);
    } else {
      this.model.clearTodos();
    }

    this.view.updateTodoList(this.model);
    this.view.render();
  }

  render() {
    this.view.render();
  }
}
