const contentDiv = document.getElementById("content");

function loadPage(route) {
  fetch(`pages/${route}.html`)
    .then((response) => response.text())
    .then((pageContent) => {
      contentDiv.innerHTML = pageContent;
    })
    .catch((error) => {
      console.error(`Error loading ${route}:`, error);
    });
}

function handleNavigation() {
  const currentRoute = window.location.pathname;
  loadPage(currentRoute);
}

// Initial page load and back/forward navigation
window.addEventListener("popstate", handleNavigation);
handleNavigation();
