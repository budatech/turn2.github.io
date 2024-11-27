function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load default page on initial load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html');
});

// Social media icon hover effect
document.querySelectorAll('.social-media-icon').forEach(icon => {
    const originalSrc = icon.src;
    const hoverSrc = icon.getAttribute('data-hover');

    // Change to hover image on mouse enter
    icon.addEventListener('mouseenter', () => {
        icon.src = hoverSrc;
    });

    // Change back to original image on mouse leave
    icon.addEventListener('mouseleave', () => {
        icon.src = originalSrc;
    });
});
