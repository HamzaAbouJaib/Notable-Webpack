function createProjectsTab(projects) {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");

  const projectsDivTitle = document.createElement("h2");
  projectsDivTitle.innerText = "Projects";
  projectsDivTitle.classList.add("projects-title");
  projectsDiv.appendChild(projectsDivTitle);

  for (const project of projects) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    const projectName = document.createElement("h4");
    projectName.innerText = project.name;
    projectDiv.appendChild(projectName);
    projectsDiv.appendChild(projectDiv);
  }
  return projectsDiv;
}

export function loadProjectsTab(projects) {
  const content = document.querySelector("#content");
  content.appendChild(createProjectsTab(projects));
}
