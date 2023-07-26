function createTodoTab(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  const projectName = document.createElement("h3");
  projectName.innerText = project.name;
  projectHeader.appendChild(projectName);

  const addTodoButton = document.createElement("button");
  addTodoButton.innerText = "Create a new todo";
  projectHeader.appendChild(addTodoButton);

  projectContainer.appendChild(projectHeader);

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
