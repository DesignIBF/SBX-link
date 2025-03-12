document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentPage = window.location.href;

    // Select all links inside the div
    const links = document.querySelectorAll("#iq9l-2 a");

    links.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("active");
        }
    });
});

console.log("Custom Script is active")
