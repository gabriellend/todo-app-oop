export class ProjectListController {
    constructor(model, view) {
        this.model = model
        this.view = view;
    }

    addProject(project) {
        this.model.addProject(project);
        this.view.render();
    }

    render() {
        this.view.render();
    }
}