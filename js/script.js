var sidebar = document.getElementById("sidebar");
var burgerBtn = document.getElementById("desktop-burgerbtn");

function toggleSidebar() {
  sidebar.classList.toggle("visible");
  burgerBtn.textContent = sidebar.classList.contains("visible") ? "X" : "☰";
}

burgerBtn.addEventListener("click", toggleSidebar);
