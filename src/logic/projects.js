class Projects {
  static projects = [];

  static getProjects() {
    return Projects.projects;
  }

  static addProject(project) {
    return Projects.projects.push(project);
  }

  static removeProject(project) {
    return Projects.projects.filter((p) => project.id !== p.id);
  }
}
