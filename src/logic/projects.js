import Project from "./project";

class Projects {
  static allProjects = [];

  static initializeProjects() {
    Projects.allProjects =
      JSON.parse(localStorage.getItem("allProjects")) || [];
  }

  static getProjects() {
    const projects = JSON.parse(localStorage.getItem("allProjects"));
    const p2 = [];
    for (const project of projects) {
      p2.push(new Project(project.name, project.todos, project.id));
    }
    Projects.allProjects = p2;
    return Projects.allProjects;
  }

  static updateProjects(project) {
    Projects.allProjects = Projects.getProjects().map((p) => {
      if (project.id !== p.id) return p;
      return project;
    });
    localStorage.setItem("allProjects", JSON.stringify(Projects.allProjects));
  }

  static addProject(project) {
    Projects.allProjects = Projects.getProjects().push(project);
    localStorage.setItem("allProjects", JSON.stringify(Projects.allProjects));
  }

  static removeProject(project) {
    Projects.allProjects = Projects.getProjects().filter(
      (p) => project.id !== p.id
    );
    localStorage.setItem("allProjects", JSON.stringify(Projects.allProjects));
  }
}

export default Projects;
