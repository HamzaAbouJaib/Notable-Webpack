import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, date, priority, isComplete) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.isComplete = isComplete;
    this.id = uuidv4();
  }
}

export default Todo;
