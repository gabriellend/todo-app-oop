import { TodoList } from "./TodoList";
export class ProjectList {
  constructor() {
    // Initialize with default All Todos project
    this.projects = [new TodoList("All Todos")];
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
