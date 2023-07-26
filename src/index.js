import Projects from "./logic/projects";
import "./styles/main.scss";
import { loadTodoTab } from "./ui/TodoTab";
import { loadHeader } from "./ui/header";
import { loadProjectsTab } from "./ui/projectsTab";

function loadPage() {
  loadHeader();
  createTabContainer();
  loadProjectsTab(Projects.allProjects);
  Projects.allProjects.length > 0 && loadTodoTab(Projects.allProjects[0]);
}

function createTabContainer() {
  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab-container");
  const content = document.querySelector("#content");
  content.appendChild(tabContainer);
}

loadPage();
