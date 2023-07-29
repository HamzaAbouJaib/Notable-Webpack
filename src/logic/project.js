import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(name, todos, id) {
    this.name = name;
    this.todos = todos || [];
    this.id = id || uuidv4();
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  updateTodo(todo) {
    this.todos = this.todos.map((t) => {
      if (t.id === todo.id) return todo;
      return t;
    });
  }
}

export default Project;
