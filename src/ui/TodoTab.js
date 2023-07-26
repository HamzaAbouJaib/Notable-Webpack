import { loadModal, removeModal } from "./modal";

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
  addTodoButton.addEventListener("click", () => {
    loadModal(createAddTodoInput());
  });
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

function createAddTodoInput() {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("add-todo-container");

  // title input
  const titleLabel = document.createElement("label");
  titleLabel.innerText = "Title *";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Todo title");
  titleInput.setAttribute("required", true);
  contentDiv.appendChild(titleLabel);
  contentDiv.appendChild(titleInput);

  // Description input
  const descLabel = document.createElement("label");
  descLabel.innerText = "Description *";
  const descInput = document.createElement("textarea");
  descInput.setAttribute("placeholder", "Todo description");
  descInput.setAttribute("required", true);
  contentDiv.appendChild(descLabel);
  contentDiv.appendChild(descInput);

  // Date input
  const dateLabel = document.createElement("label");
  dateLabel.innerText = "Date *";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("required", true);
  contentDiv.appendChild(dateLabel);
  contentDiv.appendChild(dateInput);

  // Priority input
  const priorityLabel = document.createElement("label");
  priorityLabel.innerText = "Priority *";
  const priorityInput = document.createElement("select");
  const lowOption = document.createElement("option");
  lowOption.text = "Low Priority";
  lowOption.value = "low";
  const midOption = document.createElement("option");
  midOption.text = "Medium Priority";
  midOption.value = "medium";
  const highOption = document.createElement("option");
  highOption.text = "High Priority";
  highOption.value = "high";
  priorityInput.add(lowOption);
  priorityInput.add(midOption);
  priorityInput.add(highOption);
  contentDiv.appendChild(priorityLabel);
  contentDiv.appendChild(priorityInput);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-container");
  const addButton = document.createElement("button");
  addButton.innerText = "Add Todo";
  addButton.addEventListener("click", (e) => {
    // Create a new Todo
  });
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => removeModal());
  buttonDiv.appendChild(addButton);
  buttonDiv.appendChild(cancelButton);

  contentDiv.appendChild(buttonDiv);

  return contentDiv;
}
