export class ProjectList {
  constructor() {
    this.projects = [];
  }

  getTitle() {
    return this.title;
  }

  getProjects() {
    return this.projects;
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
