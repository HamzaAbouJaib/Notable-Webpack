import Project from "../logic/project";
import Projects from "../logic/projects";
import { loadTodoTab } from "./TodoTab";
import { loadModal, removeModal } from "./modal";

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
    projectDiv.addEventListener("click", () => loadTodoTab(project));
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
  addButton.addEventListener("click", () => {
    loadModal(createAddProjectInput());
  });
  projectsContainer.appendChild(addButton);

  return projectsContainer;
}

export function loadProjectsTab(projects) {
  clearProjectsTab();
  const content = document.querySelector(".tab-container");
  content.appendChild(createProjectsTab(projects));
  if (projects.length === 1) loadTodoTab(projects[0]);
}

export function clearProjectsTab() {
  const content = document.querySelector(".tab-container");
  const tabs = document.querySelector(".projects-container");
  if (content && tabs) content.removeChild(tabs);
}

function createAddProjectInput() {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("add-project-container");
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name *";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Project name");
  nameInput.setAttribute("required", true);
  contentDiv.appendChild(nameLabel);
  contentDiv.appendChild(nameInput);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-container");
  const addButton = document.createElement("button");
  addButton.innerText = "Add Project";
  addButton.addEventListener("click", (e) => {
    const name = nameInput.value;
    const project = new Project(name);
    Projects.addProject(project);
    removeModal();
    loadProjectsTab(Projects.allProjects);
  });
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => removeModal());
  buttonDiv.appendChild(addButton);
  buttonDiv.appendChild(cancelButton);

  contentDiv.appendChild(buttonDiv);

  return contentDiv;
}
