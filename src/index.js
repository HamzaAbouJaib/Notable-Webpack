import Project from "./logic/project";
import Projects from "./logic/projects";
import "./styles/main.scss";
import { loadHeader } from "./ui/header";
import { loadProjectsTab } from "./ui/projectsTab";

function loadPage() {
  loadHeader();
  Projects.addProject(new Project("test"));
  Projects.addProject(new Project("test"));
  Projects.addProject(new Project("test"));
  Projects.addProject(new Project("test"));
  Projects.addProject(new Project("test"));
  loadProjectsTab(Projects.allProjects);
}

loadPage();
