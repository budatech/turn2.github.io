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

document.querySelectorAll('.social-media-icon').forEach(icon => {
    const originalSrc = icon.src;
    const hoverSrc = icon.getAttribute('data-hover');

    icon.addEventListener('mouseenter', () => {
        icon.src = hoverSrc; /* Switch to hover image */
    });

    icon.
    });
addEventListener('mouseleave', () => {
        icon.
        icon
src = originalSrc; /* Switch back to original image */
    });
});
