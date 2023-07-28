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
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.innerHTML = "&#10006;";
    deleteProjectButton.addEventListener("click", () => {
      loadModal(createDeleteProjectInput(project));
    });
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteProjectButton);
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
    loadProjectsTab(Projects.getProjects());
  });
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => removeModal());
  buttonDiv.appendChild(addButton);
  buttonDiv.appendChild(cancelButton);

  contentDiv.appendChild(buttonDiv);

  return contentDiv;
}

function createDeleteProjectInput(project) {
  const deleteProjectDiv = document.createElement("div");
  deleteProjectDiv.classList.add("delete-project-container");
  const title = document.createElement("h4");
  title.innerText = "Are you sure you want to delete " + project.name + "?";
  deleteProjectDiv.appendChild(title);
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-container");
  const addButton = document.createElement("button");
  addButton.innerText = "Delete";
  addButton.addEventListener("click", (e) => {
    const oldProjects = Projects.getProjects();
    Projects.removeProject(project);
    removeModal();
    loadProjectsTab(Projects.getProjects());
    const projectIndex = Projects.getProjectIndex(oldProjects, project);
    loadTodoTab(projectIndex >= 0 ? oldProjects[projectIndex - 1] : null);
  });
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => removeModal());
  buttonDiv.appendChild(addButton);
  buttonDiv.appendChild(cancelButton);

  deleteProjectDiv.appendChild(buttonDiv);
  return deleteProjectDiv;
}
