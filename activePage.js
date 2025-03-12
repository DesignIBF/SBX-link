function applyActiveClass() {
    // Select the span with the active text
    const activeSpan = document.querySelector("#i2q276 span");

    // Select all <a> elements inside the navigation div
    const links = document.querySelectorAll("#iq9l-2 a");

    // If elements aren't ready, retry in 200ms
    if (!activeSpan || links.length === 0) {
        console.log("Elements not ready yet, retrying...");
        setTimeout(applyActiveClass, 200);
        return;
    }

    // Get the active text from the span
    const activeText = activeSpan.textContent.trim();
    console.log("Active Span Text:", activeText);

    // Loop through links to find a match
    links.forEach(link => {
        const linkText = link.textContent.trim();
        console.log("Checking link text:", linkText);

        if (linkText === activeText) {
            console.log("Match found! Adding active class to:", link.href);
            link.classList.add("active");
        }
    });
}

// Run the function after page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(applyActiveClass, 500); // Start checking after initial delay
});

console.log("Custom Script is active");
