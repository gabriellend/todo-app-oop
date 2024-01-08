import { LocalStorageUtils } from "../utils/LocalStorageUtils";
export class ProjectListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.setOnAddButtonClick(this.addProject);
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

  render() {
    this.view.render();
  }
}
