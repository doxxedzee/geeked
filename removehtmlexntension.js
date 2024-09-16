// Function to remove .html from URLs in the browser address bar
function removeHtmlFromUrl() {
    const url = window.location.pathname;
    
    // Check if the URL ends with ".html"
    if (url.endsWith('.html')) {
        const newUrl = url.slice(0, -5); // Remove the ".html" part

        // Use the History API to update the browser's address bar
        window.history.replaceState(null, '', newUrl);
    }
}

// Function to update links on the page to remove .html in their href attributes
function updateLinks() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        if (link.href.endsWith('.html')) {
            link.href = link.href.slice(0, -5); // Remove the ".html" from each link
        }
    });
}

// Run the functions after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    removeHtmlFromUrl();
    updateLinks();
});
