import "./ProjectListView.css";

export class ProjectListView {
  static initialized = false;

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
    this.addProjectButton.addEventListener("click", this.showAddProjectForm);
  }

  createAddProjectForm() {
    const formLi = document.createElement("li");
    formLi.className = "project-form-li";
    const form = document.createElement("form");
    form.className = "project-form";
    form.addEventListener("submit", this.handleFormSubmit);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "project-name-input";
    input.placeholder = "Project name...";
    input.required = true;

    const buttonDiv = document.createElement("div");
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Add";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", this.render);
    buttonDiv.append(addButton, cancelButton);

    form.append(input, buttonDiv);
    formLi.append(form);

    input.focus();

    return formLi;
  }

  showAddProjectForm = () => {
    const form = this.createAddProjectForm();
    this.projectListEl.append(form);
    this.addProjectButton.classList.add("hidden");
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const projectName = event.target.querySelector("#project-name-input").value;

    if (this.onAddButtonClick) {
      this.onAddButtonClick(projectName);
    }
    event.target.parentElement.remove();
  };

  setOnAddButtonClick(listener) {
    this.onAddButtonClick = listener;
  }

  setOnDeleteButtonClick(listener) {
    this.onDeleteButtonClick = listener;
  }

  setOnProjectClick(listener) {
    this.onProjectClick = listener;
  }

  clearProjects() {
    this.projectListEl.innerHTML = "";
  }

  initializeProjectList() {
    this.projectsContainer.append(
      this.projectsHeader,
      this.projectListEl,
      this.addProjectButton
    );

    const contentContainer = document.querySelector(".content");
    contentContainer.append(this.projectsContainer);
  }

  render = () => {
    this.clearProjects();
    this.addProjectButton.classList.remove("hidden");

    if (!ProjectListView.initialized) {
      this.initializeProjectList();
      ProjectListView.initialized = true;
    }

    const projects = this.projectList.getProjects();
    for (let project of projects) {
      const projectListItem = document.createElement("li");
      projectListItem.className = "project";
      projectListItem.addEventListener("click", (event) => {
        // I tried project.title instead of the event but when
        // I would click on the All Todos project, it would
        // render the element I clicked just before instead.
        const projectName = event.target.firstChild.innerText;
        if (this.onProjectClick) {
          this.onProjectClick(projectName);
        }
      });

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.visibility =
        project.title === "All Todos" ? "hidden" : "visible";
      deleteButton.type = "button";
      deleteButton.addEventListener("click", () => {
        if (this.onDeleteButtonClick) {
          this.onDeleteButtonClick(project.getTitle());
        }
      });

      projectListItem.append(projectTitle, deleteButton);
      this.projectListEl.append(projectListItem);
    }
  };
}
