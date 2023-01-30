document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "See? It'was really important!";
    document.body.appendChild(para);
  }
  const buttons = document.querySelectorAll("Button");
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
});
