export class ProjectList {
  constructor() {
    this.title = "Projects";
    this.projects = [];
  }

  getTitle() {
    return this.title;
  }

  addProject(project) {
    this.projects.push(project);
    console.log("Project added");
  }

  deleteProject(projectId) {
    this.projects = this.projects.filter((project) => project.id !== projectId);
    console.log("Project deleted");
  }

  moveProject(projectId, toIndex) {}
}
