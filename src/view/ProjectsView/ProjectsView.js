import "./ProjectsView.css";

export class ProjectsView {
  constructor() {
    this.projectsContainer = document.createElement("nav");
    this.projectsContainer.className = "projects-container";

    this.projectsHeader = document.createElement("h2");
    this.projectsHeader.textContent = "Projects";

    this.projectsList = document.createElement("ul");
    this.projectsList.className = "projects-list";

    this.allTodosList = document.createElement("li");
    this.allTodosList.textContent = "All Todos";

    this.addProjectButton = document.createElement("button");
    this.addProjectButton.className = "add-project-button";
    this.addProjectButton.textContent = "Add Project";
  }

  loadInitialSideBar() {
    this.projectsList.append(this.allTodosList);
    this.projectsContainer.append(
      this.projectsHeader,
      this.projectsList,
      this.addProjectButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.projectsContainer);
  }

  // render(projects) {}
}
