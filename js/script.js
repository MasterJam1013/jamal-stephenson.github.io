// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
// open sidebar funct
function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}
// close sidebar funct
function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// Contact
const form = document.getElementById("contact-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;
	const data = { name, email, message };
	// Replace the URL below with your server-side script to handle the form data
	fetch("http://example.com/contact.php", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(data => alert(data.message))
	.catch(error => console.error(error));
	form.reset();
}

// ENd Contact