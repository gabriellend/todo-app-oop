export class TodoList {
  static id = 0;
  static noTodosMessage = "No todos yet!";

  constructor(title) {
    this.id = ++TodoList.id;
    this.title = title;
    this.todos = [];
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    console.log("Todo added");
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    console.log("Todo deleted");
  }

  moveTodo(todoId, toIndex) {
    const fromIndex = this.todos.findIndex((todo) => todo.id === todoId);
    console.log({ fromIndex });
    console.log({ toIndex });
    if (fromIndex === -1) {
      console.log("Todo not found");
      return;
    } else if (fromIndex === toIndex) {
      console.log("Todo not moved");
      return;
    }

    // const indexAdjustmentNeeded = toIndex > fromIndex;
    // console.log(indexAdjustmentNeeded)
    // const index = indexAdjustmentNeeded ? --toIndex : toIndex
    const todo = this.todos[fromIndex];
    this.deleteTodo(todoId);
    this.todos.splice(toIndex, 0, todo);
    console.log("Todo moved");
  }
}
