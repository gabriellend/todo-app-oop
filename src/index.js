import "./styles.css";

import { ProjectList } from "./model/ProjectList";
import { ProjectListView } from "./view/ProjectsView/ProjectListView";

import { TodoList } from "./model/todoList";
import { TodoListView } from "./view/TodoListView/TodoListView";
import { TodoListController } from "./controller/TodoListController";

// create default All Todos Project
const allTodosListModel = new TodoList("All Todos");

const projectListModel = new ProjectList();
projectListModel.addProject(allTodosListModel);

const projectListView = new ProjectListView(projectListModel);
projectListView.render();

// create default All Todos List
const todoListView = new TodoListView(allTodosListModel);
todoListView.render();

// Todo Controller
const todoListController = new TodoListController(
  allTodosListModel,
  todoListView
);
