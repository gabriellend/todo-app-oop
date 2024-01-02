import "./ProjectListView.css";

export class ProjectListView {
  static sideBarCreated = false;

  constructor(projectListModel) {
    this.projectList = projectListModel;
    this.projectsContainer = document.createElement("nav");
    this.projectsContainer.className = "projects-container";

    this.projectsHeader = document.createElement("h2");
    this.projectsHeader.textContent = "Projects";

    this.projectListEl = document.createElement("ul");
    this.projectListEl.className = "projects-list";

    this.addProjectButton = document.createElement("button");
    this.addProjectButton.className = "add-project-button";
    this.addProjectButton.textContent = "Add Project";
    this.addProjectButton.addEventListener("click", () => {});
  }

  clearProjects() {
    this.projectListEl.innerHTML = "";
  }

  createSideBar() {
    this.projectsContainer.append(
      this.projectsHeader,
      this.projectListEl,
      this.addProjectButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.projectsContainer);
  }

  render() {
    this.clearProjects();

    if (!ProjectListView.sideBarCreated) {
      this.createSideBar();
      ProjectListView.sideBarCreated = true;
    }

    const projects = this.projectList.getProjects();
    for (let project of projects) {
      const projectListItem = document.createElement("li");
      projectListItem.textContent = project.title;
      this.projectListEl.append(projectListItem);
    }
  }
}
