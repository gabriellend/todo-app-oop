import { LocalStorageUtils } from "../utils/LocalStorageUtils";
export class ProjectListController {
  constructor(projectList, projectListView, todoListController) {
    this.model = projectList;
    this.view = projectListView;
    this.controller = todoListController;

    this.view.setOnAddButtonClick(this.handleAddProject);
    this.view.setOnDeleteButtonClick(this.handleDeleteProject);
    this.view.setOnProjectClick(this.handleProjectClick);
  }

  handleAddProject = (projectName) => {
    this.model.addProject(projectName);
    this.view.render();

    // Update local storage
    const existingProjectsJSON = LocalStorageUtils.get("projects");
    let projects = existingProjectsJSON ? JSON.parse(existingProjectsJSON) : [];

    projects.push(projectName);

    LocalStorageUtils.set("projects", JSON.stringify(projects));
  };

  handleDeleteProject = (projectTitle) => {
    this.model.deleteProject(projectTitle);
    this.view.render();

    // Update local storage
    const existingProjectsJSON = LocalStorageUtils.get("projects");
    const newProjectsList = JSON.parse(existingProjectsJSON).filter(
      (project) => project.title !== projectTitle
    );

    const existingTodosJSON = LocalStorageUtils.get("todos");
    const newTodos = JSON.parse(existingTodosJSON).filter(
      (todo) => todo.project !== projectTitle
    );

    LocalStorageUtils.set("projects", JSON.stringify(newProjectsList));
    LocalStorageUtils.set("todos", JSON.stringify(newTodos));
  };

  handleProjectClick = (projectId) => {
    // Logic to update TodoListController based on the selected project
  };

  render() {
    this.view.render();
  }
}
