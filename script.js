
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const content = document.getElementById('content');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    menu.addEventListener('click', function() {
        menu.classList.remove('active');
    });

    // Function to load page content
    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading the page:', error);
            });
    }

    // Initial page load
    loadPage('bored.html');

    // Event listeners for navigation links
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            loadPage(href);
        });
    });
});