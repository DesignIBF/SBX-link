document.addEventListener("DOMContentLoaded", function () {
    // Select the span that contains the active text
    const activeSpan = document.querySelector("#i2q276 span");

    if (!activeSpan) {
        console.log("No active span found.");
        return;
    }

    // Get the text inside the span, trimming spaces
    const activeText = activeSpan.textContent.trim();
    console.log("Active Span Text:", activeText);

    // Select all <a> elements inside the navigation div
    const links = document.querySelectorAll("#iq9l-2 a");

    links.forEach(link => {
        // Get the text inside the <a> element and trim spaces
        const linkText = link.textContent.trim();
        console.log("Checking link text:", linkText);

        // Compare the text content
        if (linkText === activeText) {
            console.log("Match found! Adding active class to:", link.href);
            link.classList.add("active");
        }
    });
});

console.log("Custom Script is active");
