import "./ProjectsView.css";

export class ProjectsView {
  constructor() {
    this.projectsViewContainer = document.createElement("nav");
    this.projectsViewContainer.className = "projects-container";

    this.projectsViewHeader = document.createElement("h2");
    this.projectsViewHeader.textContent = "Projects";

    this.projectsViewMessage = document.createElement("p");
    this.projectsViewMessage.textContent = "No projects yet!";

    this.addProjectButton = document.createElement("button");
    this.addProjectButton.className = "add-project-button";
    this.addProjectButton.textContent = "Add Project";
  }

  loadDefaultSideBar() {
    this.projectsViewContainer.append(
      this.projectsViewHeader,
      this.projectsViewMessage,
      this.addProjectButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.projectsViewContainer);
  }

  // render(projects) {}
}
