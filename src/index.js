import "./styles.css";

import { ProjectList } from "./model/ProjectList";
import { ProjectListView } from "./view/ProjectsView/ProjectListView";
import { ProjectListController } from "./controller/ProjectListController";

import { Todo } from "./model/Todo";
import { TodoList } from "./model/TodoList";
import { TodoListView } from "./view/TodoListView/TodoListView";
import { TodoListController } from "./controller/TodoListController";

// TodoList Model
const allTodosListModel = new TodoList("All Todos");

const allTodosJson = localStorage.getItem("allTodos");
if (allTodosJson !== null) {
  const allTodosObjects = JSON.parse(allTodosJson);
  const allTodosInstances = allTodosObjects.map(
    (allTodosObject) =>
      new Todo(
        allTodosObject.description,
        allTodosObject.dueDate,
        allTodosObject.priority,
        allTodosObject.project
      )
  );
  allTodosListModel.setTodos(allTodosInstances);
}

// ProjectList Model
const projectListModel = new ProjectList();

// ProjectList View
const projectListView = new ProjectListView(projectListModel);

// ProjectList Controller
const projectListController = new ProjectListController(
  projectListModel,
  projectListView
);
projectListController.render();

// TodoList View
const todoListView = new TodoListView(allTodosListModel);

// TodoList Controller
const todoListController = new TodoListController(
  allTodosListModel,
  todoListView
);
todoListController.render();
