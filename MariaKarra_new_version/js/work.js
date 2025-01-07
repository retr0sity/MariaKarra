"use strict";

// Function to render projects based on category
function renderProjects(category) {
    const row = document.querySelector(".row");
    row.innerHTML = ""; // Clear previous projects

    // Filter projects by the selected category
    const filteredProjects = projects.filter(project => project.category === category);

    // Render filtered projects
    filteredProjects.forEach(project => {
        const div = document.createElement("div");
        div.className = "col-md-4 mb-4";

        div.innerHTML = `
            <a href="./project.html?id=${project.id}">
                <img src="${project.images[0]}" class="img-fluid img-shadow project-image" alt="${project.title}">
                <h5 class="project-title">${project.title}</h5>
            </a>`;
        
        row.appendChild(div);
    });

    // Update active link in link-section
    updateActiveLink(category);
}

// Function to update active link
function updateActiveLink(category) {
    const links = document.querySelectorAll(".link-section a");
    links.forEach(link => {
        if (link.id === category) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Add event listeners to category links
document.getElementById("art").addEventListener("click", () => renderProjects("art"));
document.getElementById("game-art").addEventListener("click", () => renderProjects("game-art"));
document.getElementById("music").addEventListener("click", () => renderProjects("music"));


// Default category to load on page load
renderProjects("art");


