import Project from "./logic/project";
import Projects from "./logic/projects";
import "./styles/main.scss";
import { loadHeader } from "./ui/header";
import { loadProjectsTab } from "./ui/projectsTab";

function loadPage() {
  loadHeader();
  loadProjectsTab(Projects.allProjects);
}

loadPage();
