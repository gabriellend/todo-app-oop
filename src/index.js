import "./styles.css";

import { ProjectList } from "./model/ProjectList";
import { ProjectListView } from "./view/ProjectsView/ProjectListView";
import { ProjectListController } from "./controller/ProjectListController";

import { TodoList } from "./model/TodoList";
import { TodoListView } from "./view/TodoListView/TodoListView";
import { TodoListController } from "./controller/TodoListController";

// TodoList Model
const allTodosListModel = new TodoList("All Todos");

// ProjectList Model
const projectListModel = new ProjectList();

// ProjectList View
const projectListView = new ProjectListView(projectListModel);

// ProjectList Controller
const projectListController = new ProjectListController(projectListModel, projectListView);
projectListController.render();

// TodoList View
const todoListView = new TodoListView(allTodosListModel);

// TodoList Controller
const todoListController = new TodoListController(
  allTodosListModel,
  todoListView
);
todoListController.render();
