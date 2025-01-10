"use strict";

// Function to render projects based on category
function renderProjects(category) {
    const row = document.querySelector(".row");
    row.innerHTML = ""; // Clear previous projects

    if (category === "music") {
        // Create music section with Spotify embed and styling
        const musicDiv = document.createElement("div");
        musicDiv.className = "col-12 col-md-8 col-lg-6 mx-auto mt-4";
        musicDiv.innerHTML = `
            <div class="music-container text-center" style="min-height: 500px;">
                <div class="ratio ratio-1x1 mb-5">
                    <iframe style="border-radius:12px" 
                            src="https://open.spotify.com/embed/artist/6lfL1zlYt8OfR49FD6Cmbn?utm_source=generator&theme=0" 
                            width="100%" 
                            frameBorder="0" 
                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                    </iframe>
                </div>
                </div>
            </div>
        `;
        row.appendChild(musicDiv);
    } else {
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
    }

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


