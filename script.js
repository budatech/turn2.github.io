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
