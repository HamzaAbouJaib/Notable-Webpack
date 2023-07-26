export function createTodos(todos) {
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todos-container");

  for (const todo of todos) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoTitle = document.createElement("h4");
    todoTitle.innerText = todo.title;
    todoDiv.appendChild(todoTitle);
    const datePriorityContainer = document.createElement("div");
    const todoDate = document.createElement("p");
    todoDate.innerText = todo.date;
    datePriorityContainer.appendChild(todoDate);
    const seperator = document.createElement("p");
    seperator.innerText = "-";
    datePriorityContainer.appendChild(seperator);
    const todoPriority = document.createElement("p");
    todoPriority.innerText = todo.priority;
    datePriorityContainer.appendChild(todoPriority);
    todoDiv.appendChild(datePriorityContainer);
    const todoDesc = document.createElement("p");
    todoDesc.innerText =
      todo.description.length > 100
        ? todo.description.slice(0, 100) + "..."
        : todo.description;
    todoDiv.appendChild(todoDesc);
    todosContainer.appendChild(todoDiv);
  }

  return todosContainer;
}
