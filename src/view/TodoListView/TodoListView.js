import "./TodoListView.css";
import { TodoList } from "../../model/todoList";

export class TodoListView {
  static todoListViewCreated = false;

  constructor(todoListModel) {
    this.todoList = todoListModel;

    this.mainContainer = document.createElement("main");

    this.todoListHeader = document.createElement("h1");
    this.todoListHeader.className = "todo-list-header";
    this.todoListHeader.textContent = todoListModel.getTitle();

    this.todoListEl = document.createElement("ul");
    this.todoListEl.className = "todo-list";

    this.addTodoButton = document.createElement("button");
    this.addTodoButton.className = "add-todo-button";
    this.addTodoButton.textContent = "Add todo";
    this.addTodoButton.addEventListener("click", () => {});
  }

  createTodoList() {
    this.mainContainer.append(
      this.todoListHeader,
      this.todoListEl,
      this.addTodoButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.mainContainer);
  }

  clearTodos() {
    this.todoList.innerHTML = "";
  }

  render() {
    this.clearTodos();

    if (!TodoListView.todoListViewCreated) {
      this.createTodoList();
      TodoListView.todoListViewCreated = true;
    }

    const todos = this.todoList.getTodos();
    if (!todos.length) {
      const todoListItem = document.createElement("li");
      todoListItem.textContent = TodoList.noTodosMessage;
      this.todoListEl.append(todoListItem);
    }

    for (let todo of todos) {
      const todoListItem = document.createElement("li");
      todoListItem.textContent = todo.getdescription();
      this.todoListEl.append(todoListItem);
    }
  }
}
