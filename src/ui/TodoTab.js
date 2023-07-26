function createTodoTab(project) {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("project-container");

  const projectName = document.createElement("h3");
  projectName.innerText = project.name;
  todoContainer.appendChild(projectName);

  return todoContainer;
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
