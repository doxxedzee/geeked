document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.href = link.href.replace('.html', '');
    });

    if (window.location.pathname.endsWith(".html")) {
        const newUrl = window.location.pathname.replace("zee.html", "poisz.html");
        window.history.replaceState({}, '', newUrl);
    }
});
