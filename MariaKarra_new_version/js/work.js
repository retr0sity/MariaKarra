"use strict"

projects.forEach(project => {
    const div = document.createElement('div');
    div.className = "col-md-4 mb-4";

    div.innerHTML = ` <a href="./project.html?id=${project.id}">
                        <img src=${project.images[0]} class="img-fluid img-shadow" alt=${project.title}>
                        <h5 class="text-center mt-2">${project.title}</h5>
                    </a>`;

    document.querySelector(".row").appendChild(div);
})