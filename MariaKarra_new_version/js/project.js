"use strict"

const url = window.location.href;
const project_id = url.split("?id=")[1];

const project = projects.find(x => x.id == project_id);
console.log(project);

const project_title_dom = document.querySelector(".project-title");
const main_image = document.getElementById("mainImage");
const thumbnails_dom = document.querySelector(".thumbnails");
const project_description_dom = document.querySelector(".project-description");

project_title_dom.textContent = project.title;
main_image.src = project.images[0];
main_image.alt = project.title;

project.images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.className = "thumbnail img-thumbnail";
    if (index === 0) img.className += "active-thumbnail";
    img.alt = project.title;
    img.dataset.index = index;
    thumbnails_dom.appendChild(img);
})

project_description_dom.textContent = project.description;