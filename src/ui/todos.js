export function createTodos(todos) {
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todos-container");

  for (const todo of todos) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoTitle = document.createElement("h4");
    todoTitle.innerText = todo.title;
    todoDiv.appendChild(todoTitle);
    todosContainer.appendChild(todoDiv);
  }

  return todosContainer;
}

function clearTodos() {
  const content = document.querySelector(".project-container");
  const todos = document.querySelector(".todos-container");
  if (content && tabs) content.removeChild(tabs);
}
