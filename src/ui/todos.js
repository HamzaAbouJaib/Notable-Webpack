import Projects from "../logic/projects";
import Todo from "../logic/todo";
import { loadTodoTab } from "./TodoTab";
import { loadModal, removeModal } from "./modal";

export function createTodos(project) {
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todos-container");

  for (const todo of project.todos) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoTitle = document.createElement("h4");
    todoTitle.innerText = todo.title;
    todoDiv.appendChild(todoTitle);
    const datePriorityContainer = document.createElement("span");
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
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("todo-button-container");
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      loadModal(createEditTodoInput(project, todo));
    });
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      //Delete the todo
    });
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    todoDiv.appendChild(buttonContainer);
    todosContainer.appendChild(todoDiv);
  }

  return todosContainer;
}

function createEditTodoInput(project, todo) {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("add-todo-container");

  // title input
  const titleLabel = document.createElement("label");
  titleLabel.innerText = "Title *";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Todo title");
  titleInput.setAttribute("required", true);
  titleInput.value = todo.title;
  contentDiv.appendChild(titleLabel);
  contentDiv.appendChild(titleInput);

  // Description input
  const descLabel = document.createElement("label");
  descLabel.innerText = "Description *";
  const descInput = document.createElement("textarea");
  descInput.setAttribute("placeholder", "Todo description");
  descInput.setAttribute("required", true);
  descInput.value = todo.description;
  contentDiv.appendChild(descLabel);
  contentDiv.appendChild(descInput);

  // Date input
  const dateLabel = document.createElement("label");
  dateLabel.innerText = "Date *";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("required", true);
  dateInput.value = todo.date;
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
  priorityInput.value = todo.priority;
  contentDiv.appendChild(priorityLabel);
  contentDiv.appendChild(priorityInput);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-container");
  const addButton = document.createElement("button");
  addButton.innerText = "Edit Todo";
  addButton.addEventListener("click", (e) => {
    const title = titleInput.value;
    const description = descInput.value;
    const date = dateInput.value;
    const priority = priorityInput.value;

    project.updateTodo(new Todo(title, description, date, priority, todo.id));
    Projects.updateProjects(project);
    removeModal();
    loadTodoTab(project);
  });
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => removeModal());
  buttonDiv.appendChild(addButton);
  buttonDiv.appendChild(cancelButton);

  contentDiv.appendChild(buttonDiv);

  return contentDiv;
}
