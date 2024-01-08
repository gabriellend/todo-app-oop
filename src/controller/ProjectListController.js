import { LocalStorageUtils } from "../utils/LocalStorageUtils";
export class ProjectListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.setOnAddButtonClick(this.addProject);
    this.view.setOnDeleteButtonClick(this.deleteProject);
  }

  addProject = (projectName) => {
    this.model.addProject(projectName);
    this.view.render();

    // Update local storage
    const existingProjectsJSON = LocalStorageUtils.get("projects");
    let projects = existingProjectsJSON ? JSON.parse(existingProjectsJSON) : [];

    projects.push(projectName);

    LocalStorageUtils.set("projects", JSON.stringify(projects));
  };

  deleteProject = (projectTitle) => {
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

  render() {
    this.view.render();
  }
}
