// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
// open sidebar funct
function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}
// close sidebar funct
function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

var sidebar = document.getElementById("sidebar");
var burgerBtn = document.getElementById("desktop-burgerbtn");

function toggleSidebar() {
  sidebar.classList.toggle("visible");
  burgerBtn.textContent = sidebar.classList.contains("visible") ? "X" : "☰";
}

burgerBtn.addEventListener("click", toggleSidebar);
