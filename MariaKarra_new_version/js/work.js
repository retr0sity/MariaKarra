"use strict"

projects.forEach(project => {
    const div = document.createElement('div');
    div.className = "col-md-4 mb-4";

    div.innerHTML = ` <a href="./project.html?id=${project.id}">
                        <img src=${project.images[0]} class="img-fluid img-shadow project-image" alt=${project.title}>
                        <h5 class="project-title">${project.title}</h5>
                    </a>`;

    document.querySelector(".row").appendChild(div);
})