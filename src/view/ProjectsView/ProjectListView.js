import "./ProjectListView.css";

export class ProjectListView {
  static sideBarCreated = false;

  constructor(projectListModel) {
    this.projectsContainer = document.createElement("nav");
    this.projectsContainer.className = "projects-container";

    this.projectsHeader = document.createElement("h2");
    this.projectsHeader.textContent = projectListModel.getTitle();

    this.projectList = document.createElement("ul");
    this.projectList.className = "projects-list";

    this.addProjectButton = document.createElement("button");
    this.addProjectButton.className = "add-project-button";
    this.addProjectButton.textContent = "Add Project";
  }

  createSideBar() {
    this.projectsContainer.append(
      this.projectsHeader,
      this.projectList,
      this.addProjectButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.projectsContainer);
  }

  render(projects) {
    if (!ProjectListView.sideBarCreated) {
      this.createSideBar();
      ProjectListView.sideBarCreated = true;
    }

    for (let project of projects) {
      const projectListItem = document.createElement("li");
      projectListItem.textContent = project.title;
      this.projectList.append(projectListItem);
    }
  }
}
