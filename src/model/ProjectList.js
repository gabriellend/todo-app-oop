import { TodoList } from "./TodoList";
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

  setProjects(projects) {
    for (let project of projects) {
      this.projects.push(project);
    }
    console.log("Projects set");
  }

  addProject(projectName) {
    const project = new TodoList(projectName);
    this.projects.push(project);
    console.log("Project added");
  }

  deleteProject(projectTitle) {
    this.projects = this.projects.filter(
      (project) => project.title !== projectTitle
    );
    console.log("Project deleted");
  }

  moveProject(projectId, toIndex) {}
}
