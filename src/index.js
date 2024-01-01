import "./styles.css";

import { ProjectList } from "./model/ProjectList";
// import { Project } from "./model/Project";
import { ProjectListView } from "./view/ProjectsView/ProjectListView";

import { TodoList } from "./model/todoList";
import { TodoListView } from "./view/TodoListView/TodoListView";

// create default All Todos Project
const allTodosProject = new TodoList("All Todos");

const projectListModel = new ProjectList();
projectListModel.addProject(allTodosProject);

const projectListView = new ProjectListView(projectListModel);
projectListView.render(projectListModel.projects);
console.log(allTodosProject);
// create default All Todos List
const todoListView = new TodoListView(allTodosProject);
todoListView.render(allTodosProject);
