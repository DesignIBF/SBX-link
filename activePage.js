function waitForElements() {
    console.log("Checking for elements...");

    const activeSpan = document.querySelector("#i2q276 span");
    const links = document.querySelectorAll("#iq9l-2 a");

    if (!activeSpan || links.length === 0) {
        console.log("Elements not found yet, retrying...");
        setTimeout(waitForElements, 200); // Retry in 200ms
        return;
    }

    console.log("Elements found! Proceeding with class assignment...");
    applyActiveClass(activeSpan, links);
}

function applyActiveClass(activeSpan, links) {
    const activeText = activeSpan.textContent.trim();
    console.log("Active Span Text:", activeText);

    links.forEach(link => {
        const linkText = link.textContent.trim();
        console.log("Checking link text:", linkText);

        if (linkText === activeText) {
            console.log("Match found! Adding active class to:", link.href);
            link.classList.add("active");
        }
    });
}

// Ensure the script runs after full page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script is running, waiting for elements...");
    waitForElements();
});

console.log("🚀 Script is linked and running!");

// Try forcing a log every second to confirm execution
setInterval(() => {
    console.log("⏳ Script is still running...");
}, 1000);
