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


// JavaScript function to fetch data from an API endpoint with headers
async function fetchData() {
  // Define the API URL
  const url = 'https://api.example.com/data';

  // Setup headers for the API request
  const headers = {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Token for authentication
      'Content-Type': 'application/json',          // Specifies that we expect JSON
      'Accept-Language': 'en-US'                   // Optional: Specifies language for response
  };

  try {
      // Fetch data from the API using GET method
      const response = await fetch(url, {
          method: 'GET',
          headers: headers
      });

      // Check if response is OK (status code 200-299)
      if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Log or return the data
      console.log('Data received:', data);
      return data;
  } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Error fetching data:', error);
  }
}

// Call the function
fetchData();
