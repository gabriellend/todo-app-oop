import "./styles.css";
import { ProjectsView } from "./view/ProjectsView/ProjectsView";
import { TodoListView } from "./view/TodoListView/TodoListView";

const projectsView = new ProjectsView();
projectsView.loadInitialSideBar();

const todoListView = new TodoListView();
todoListView.loadInitialTodoList();
