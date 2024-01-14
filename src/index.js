import "./styles.css";

import { ProjectList } from "./model/ProjectList";
import { ProjectListView } from "./view/ProjectsView/ProjectListView";
import { ProjectListController } from "./controller/ProjectListController";

import { Todo } from "./model/Todo";
import { TodoList } from "./model/TodoList";
import { TodoListView } from "./view/TodoListView/TodoListView";
import { TodoListController } from "./controller/TodoListController";

import { LocalStorageUtils } from "./utils/LocalStorageUtils";

let projectInstances = [];
// LocalStorageUtils.clear();
// Check if there is anything in localStorage
const projectsJSON = LocalStorageUtils.get("projects");
const todosJSON = LocalStorageUtils.get("todos");
if (projectsJSON !== null && todosJSON !== null) {
  const projectNames = JSON.parse(projectsJSON);
  const todos = JSON.parse(todosJSON);

  projectInstances = projectNames.map((projectName) => {
    const todoList = new TodoList(projectName);
    const todoInstances = todos
      .filter((todo) => {
        if (projectName === "All Todos") {
          return true;
        } else {
          todo.project === projectName;
        }
      })
      .map((todo) => new Todo(todo.description, todo.dueDate, todo.priority));

    todoList.setTodos(todoInstances);
    return todoList;
  });
} else {
  // Initialize with default empty allTodos list
  const allTodosList = new TodoList("All Todos");
  projectInstances = [allTodosList];
  LocalStorageUtils.set("projects", JSON.stringify(["All Todos"]));
  LocalStorageUtils.set("todos", JSON.stringify([]));
}

// TodoList View - default to allTodos list
const todoListView = new TodoListView(projectInstances[0]);

// TodoList Controller
const todoListController = new TodoListController(
  projectInstances[0],
  todoListView
);

// ProjectList Model
const projectListModel = new ProjectList();
projectListModel.setProjects(projectInstances);

// ProjectList View
const projectListView = new ProjectListView(projectListModel);

// ProjectList Controller
const projectListController = new ProjectListController(
  projectListModel,
  projectListView,
  todoListController
);

projectListController.render();
todoListController.render();
