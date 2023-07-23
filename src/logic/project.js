import { v4 as uuidv4 } from "uuid";

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = uuidv4();
  }
}

export default Project;
