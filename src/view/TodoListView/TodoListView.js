import "./TodoListView.css";
import { TodoList } from "../../model/TodoList";

export class TodoListView {
  static initialized = false;

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
    this.addTodoButton.addEventListener("click", this.showAddTodoForm);
  }

  showAddTodoForm() {
    // create li
    // put form inside it
    // add the onAddButtonClick to that button's event listener
    // this.addButton.addEventListener("click", () => {
    //   if (this.onAddButtonClick) {
    //     this.onAddButtonClick();
    //   }
    // });
    console.log("clicked");
  }

  setOnAddButtonClick(listener) {
    this.onAddButtonClick = listener;
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

    if (!TodoListView.initialized) {
      this.createTodoList();
      TodoListView.initialized = true;
    }

    const todos = this.todoList.getTodos();
    if (!todos.length) {
      const todoListItem = document.createElement("li");
      todoListItem.textContent = TodoList.noTodosMessage;
      this.todoListEl.append(todoListItem);
    }

    for (let todo of todos) {
      const todoListItem = document.createElement("li");
      todoListItem.textContent = todo.getDescription();
      this.todoListEl.append(todoListItem);
    }
  }
}
