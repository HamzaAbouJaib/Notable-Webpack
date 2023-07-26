function createTodoTab(project) {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  todoContainer.innerHTML = "<h1>Todo List</h1>";

  return todoContainer;
}

export function loadTodoTab(project) {
  const content = document.querySelector(".tab-container");
  content.appendChild(createTodoTab(project));
}

export function clearTodoTab() {
  const content = document.querySelector(".tab-container");
  const tabs = document.querySelector(".todo-container");
  content.removeChild(tabs);
}
