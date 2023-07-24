class Projects {
  static allProjects = [];

  static getProjects() {
    return Projects.allProjects;
  }

  static addProject(project) {
    return Projects.allProjects.push(project);
  }

  static removeProject(project) {
    return Projects.allProjects.filter((p) => project.id !== p.id);
  }
}

export default Projects;
