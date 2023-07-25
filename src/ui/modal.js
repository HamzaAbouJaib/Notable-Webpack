function createModal(content) {
  const background = document.createElement("div");
  background.classList.add("modal-background");
  background.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-background")) {
      removeModal();
    }
  });
  const modal = document.createElement("div");
  modal.classList.add("modal");
  background.appendChild(modal);
  modal.appendChild(content);
  return background;
}

export function loadModal(modalContent) {
  const content = document.querySelector("#content");
  content.appendChild(createModal(modalContent));
}

export function removeModal() {
  const modal = document.querySelector(".modal-background");
  const content = document.querySelector("#content");
  if (modal) {
    content.removeChild(modal);
  }
}
