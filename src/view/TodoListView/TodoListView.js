import "./TodoListView.css";

export class TodoListView {
  constructor() {
    this.mainContainer = document.createElement("main");

    this.todoListHeader = document.createElement("h1");
    this.todoListHeader.className = "todo-list-header";

    this.todoList = document.createElement("ul");
    this.todoList.className = "todo-list";

    this.todo = document.createElement("li");

    this.addTodoButton = document.createElement("button");
    this.addTodoButton.className = "add-todo-button";
    this.addTodoButton.textContent = "Add todo";
  }

  loadInitialTodoList() {
    this.todo.textContent = "No todos yet!";
    this.todoListHeader.textContent = "All Todos";

    this.todoList.append(this.todo);
    this.mainContainer.append(
      this.todoListHeader,
      this.todoList,
      this.addTodoButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.mainContainer);
  }
}
