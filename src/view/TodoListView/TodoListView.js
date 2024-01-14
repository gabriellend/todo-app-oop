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

    this.noTodosListItem = document.createElement("li");
    this.noTodosListItem.id = "no-todos-list-item";
    this.noTodosListItem.textContent = TodoList.noTodosMessage;

    this.addTodoButton = document.createElement("button");
    this.addTodoButton.className = "add-todo-button";
    this.addTodoButton.textContent = "Add todo";
    this.addTodoButton.addEventListener("click", this.showAddTodoForm);
  }

  createAddTodoForm() {
    const formLi = document.createElement("li");
    formLi.classList.add("formLi");

    const form = document.createElement("form");
    form.id = "todo-form";
    form.addEventListener("submit", this.handleFormSubmit);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("form-div");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    descriptionLabel.htmlFor = "description";
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.placeholder = "Write your todo...";
    descriptionDiv.append(descriptionLabel, descriptionInput);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("form-div");
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.htmlFor = "priority";
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose...";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    prioritySelect.append(defaultOption);
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach((priority) => {
      const option = document.createElement("option");
      option.value = priority.toLowerCase();
      option.textContent = priority;
      prioritySelect.append(option);
    });
    priorityDiv.append(priorityLabel, prioritySelect);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("form-div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date: ";
    dueDateLabel.htmlFor = "dueDate";
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "dueDate";
    dueDateDiv.append(dueDateLabel, dueDateInput);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("form-div");
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Add";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", this.render);
    buttonDiv.append(addButton, cancelButton);

    form.append(descriptionDiv, priorityDiv, dueDateDiv, buttonDiv);
    formLi.append(form);

    descriptionInput.focus();

    return formLi;
  }

  showAddTodoForm = () => {
    this.addTodoButton.classList.add("hidden");

    if (this.noTodosListItem) {
      this.noTodosListItem.remove();
    }

    const form = this.createAddTodoForm();

    this.todoListEl.append(form);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const description = event.target.querySelector("#description").value;
    const priority = event.target.querySelector("#priority").value;
    const dueDate = event.target.querySelector("#dueDate").value;
    const project =
      this.todoList.getTitle() !== "All Todos"
        ? this.todoList.getTitle()
        : undefined;

    if (description && priority && dueDate && this.onAddButtonClick) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = new Date(dueDate).toLocaleDateString(
        "en-US",
        options
      );

      this.onAddButtonClick(description, formattedDate, priority, project);
    } else {
      alert("Something is missing...");
      return;
    }
  };

  setOnAddButtonClick(listener) {
    this.onAddButtonClick = listener;
  }

  setOnDeleteButtonClick(listener) {
    this.onDeleteButtonClick = listener;
  }

  updateTodoList(newTodoList) {
    this.todoList = newTodoList;
    this.todoListHeader.textContent = this.todoList.getTitle();
    this.render();
  }

  initializeTodoList() {
    this.mainContainer.append(
      this.todoListHeader,
      this.todoListEl,
      this.addTodoButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.mainContainer);
  }

  clearTodoList() {
    this.todoListEl.innerHTML = "";
  }

  render = () => {
    this.clearTodoList();
    this.addTodoButton.classList.remove("hidden");

    if (!TodoListView.initialized) {
      this.initializeTodoList();
      TodoListView.initialized = true;
    }

    this.todoListHeader.textContent = this.todoList.getTitle();

    const todos = this.todoList.getTodos();
    if (!todos.length) {
      this.todoListEl.append(this.noTodosListItem);
    }

    for (let todo of todos) {
      this.todoListItem = document.createElement("li");
      this.todoListItem.className = "todo-list-item";

      const description = document.createElement("p");
      description.textContent = todo.getDescription();

      const dueDate = document.createElement("time");
      dueDate.textContent = todo.getDueDate();

      const priority = document.createElement("span");
      priority.textContent = todo.getPriority();

      const deleteButton = document.createElement("button");
      deleteButton.className = "todo-delete-button";
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", () => {
        if (this.onDeleteButtonClick) {
          this.onDeleteButtonClick(todo.getId());
        }
      });

      this.todoListItem.append(description, dueDate, priority, deleteButton);
      this.todoListEl.append(this.todoListItem);
    }
  };
}
