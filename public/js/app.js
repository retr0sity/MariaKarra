 // Add shadow effect to navbar on scroll
 window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-shadow-thick');
    } else {
        navbar.classList.remove('navbar-shadow-thick');
    }
});