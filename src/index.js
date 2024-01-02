import "./styles.css";

import { ProjectList } from "./model/ProjectList";
import { ProjectListView } from "./view/ProjectsView/ProjectListView";

import { TodoList } from "./model/todoList";
import { TodoListView } from "./view/TodoListView/TodoListView";
import { TodoListController } from "./controller/TodoListController";

// TodoListModel
const allTodosListModel = new TodoList("All Todos");

// TodoList View
const todoListView = new TodoListView(allTodosListModel);
todoListView.render();

// TodoList Controller
const todoListController = new TodoListController(
  allTodosListModel,
  todoListView
);

// ProjectList Model
const projectListModel = new ProjectList();
projectListModel.addProject(allTodosListModel);

// ProjectList View
const projectListView = new ProjectListView(projectListModel);
projectListView.render();

// ProjectList Controller
