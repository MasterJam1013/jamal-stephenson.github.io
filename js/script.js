var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var burgerBtn = document.getElementById("desktop-burgerbtn");

// Open sidebar function
function openSidebar() {
  sidebar.classList.add("sidebar-responsive");
  sidebarOpen = true;
  burgerBtn.textContent = "X"; // Update to 'X' when sidebar is open
}

// Close sidebar function
function closeSidebar() {
  sidebar.classList.remove("sidebar-responsive");
  sidebarOpen = false;
  burgerBtn.textContent = "☰"; // Update to '☰' when sidebar is closed
}

// Improved toggle function
function improvedToggleSidebar() {
  if (!sidebarOpen) {
    openSidebar();
  } else {
    closeSidebar();
  }
}

burgerBtn.addEventListener("click", improvedToggleSidebar);
