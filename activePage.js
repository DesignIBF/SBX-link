// document.addEventListener("DOMContentLoaded", function () {
//     // Get the current page URL
//     const currentPage = window.location.href;

//     // Select all links inside the div
//     const links = document.querySelectorAll("#iq9l-2 a");

//     links.forEach(link => {
//         if (link.href === currentPage) {
//             link.classList.add("active");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL without query parameters
    const currentPage = window.location.origin + window.location.pathname;

    // Select all links inside the div
    const links = document.querySelectorAll("#iq9l-2 a");

    links.forEach(link => {
        // Get the link's href without query parameters
        const linkUrl = new URL(link.href);
        const cleanLinkUrl = linkUrl.origin + linkUrl.pathname; 

        // Compare and add active class
        if (cleanLinkUrl === currentPage) {
            link.classList.add("active");
        }
    });
});

console.log("Custom Script is active")
