function createTodoTab(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const projectName = document.createElement("h3");
  projectName.innerText = project.name;
  projectContainer.appendChild(projectName);

  return projectContainer;
}

export function loadTodoTab(project) {
  clearTodoTab();
  const content = document.querySelector(".tab-container");
  content.appendChild(createTodoTab(project));
}

export function clearTodoTab() {
  const content = document.querySelector(".tab-container");
  const tabs = document.querySelector(".project-container");
  if (content && tabs) content.removeChild(tabs);
}
