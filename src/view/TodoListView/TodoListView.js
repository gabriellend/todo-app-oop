import "./TodoListView.css";
import { TodoList } from "../../model/todo";

export class TodoListView {
  static todoListViewCreated = false;

  constructor(todoListModel) {
    this.mainContainer = document.createElement("main");

    this.todoListHeader = document.createElement("h1");
    this.todoListHeader.className = "todo-list-header";
    this.todoListHeader.textContent = todoListModel.getTitle();

    this.todoList = document.createElement("ul");
    this.todoList.className = "todo-list";

    this.addTodoButton = document.createElement("button");
    this.addTodoButton.className = "add-todo-button";
    this.addTodoButton.textContent = "Add todo";
    this.addTodoButton.addEventListener("click", () => {});
  }

  createTodoList() {
    this.mainContainer.append(
      this.todoListHeader,
      this.todoList,
      this.addTodoButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.mainContainer);
  }

  clearList() {
    this.todoList.innerHTML = "";
  }

  render(todoList) {
    if (!TodoListView.todoListViewCreated) {
      this.createTodoList();
      TodoListView.todoListViewCreated = true;
    }

    this.clearList();

    const todos = todoList.getTodos();
    if (!todos.length) {
      const todoListItem = document.createElement("li");
      todoListItem.textContent = TodoList.noTodosMessage;
      this.todoList.append(todoListItem);
    }

    for (let todo of todos) {
      const todoListItem = document.createElement("li");
      todoListItem.textContent = todo.getdescription();
      this.todoList.append(todoListItem);
    }
  }
}
