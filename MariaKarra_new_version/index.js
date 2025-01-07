const origin = "http://localhost:1234/";
const url = "http://localhost:1234/work";
const route = url.split(origin)[1];
const html_file = route + ".html";
console.log(route)
console.log(html_file);


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-shadow-thick');
    } else {
        navbar.classList.remove('navbar-shadow-thick');
    }
});