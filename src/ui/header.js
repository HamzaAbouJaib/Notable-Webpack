import "../styles/header.scss";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const headerText = document.createElement("h1");
  headerText.innerText = "Notable";
  header.appendChild(headerText);

  return header;
}

export function loadHeader() {
  const content = document.querySelector("#content");
  content.appendChild(createHeader());
}
