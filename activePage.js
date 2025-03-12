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
    console.log("Current Page (cleaned):", currentPage); // Log the cleaned current page URL

    // Select all links inside the div
    const links = document.querySelectorAll("#iq9l-2 a");

    links.forEach(link => {
        // Get the link's href without query parameters
        const linkUrl = new URL(link.href);
        const cleanLinkUrl = linkUrl.origin + linkUrl.pathname;
        
        // Log both values for debugging
        console.log("Checking link:", link.href);
        console.log("Clean Link URL:", cleanLinkUrl);

        // Compare and add active class
        if (cleanLinkUrl === currentPage) {
            console.log("Match found! Adding active class to:", link.href);
            link.classList.add("active");
        }
    });
});

console.log("Custom Script is active")
