function createProjectsTab(projects) {
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projects-container");
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");

  const projectsDivTitle = document.createElement("h2");
  projectsDivTitle.innerText = "Projects";
  projectsDivTitle.classList.add("projects-title");
  projectsContainer.appendChild(projectsDivTitle);

  for (const project of projects) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    const projectName = document.createElement("h4");
    projectName.innerText = project.name;
    projectDiv.appendChild(projectName);
    projectsDiv.appendChild(projectDiv);
  }
  projectsContainer.appendChild(projectsDiv);

  // Add projects button
  const addButton = document.createElement("button");
  addButton.innerText = "Create new project";
  addButton.classList.add("projects-button");
  projectsContainer.appendChild(addButton);

  return projectsContainer;
}

export function loadProjectsTab(projects) {
  const content = document.querySelector("#content");
  content.appendChild(createProjectsTab(projects));
}
