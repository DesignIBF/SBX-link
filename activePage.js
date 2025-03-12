document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Script running after DOMContentLoaded");

    // Select the span inside #i2q276
    const activeSpan = document.querySelector("#i2q276 span");

    if (!activeSpan) {
        console.log("❌ SPAN element not found!");
        return;
    }

    console.log("✅ SPAN element found:", activeSpan);

    // Get the text from the span and trim spaces
    const activeText = activeSpan.textContent.trim();
    console.log("Active Span Text:", activeText);

    // Select all <a> elements inside the navigation div
    const links = document.querySelectorAll("#iq9l-2 a");

    links.forEach(link => {
        const linkText = link.textContent.trim();
        console.log("Checking link text:", linkText);

        if (linkText === activeText) {
            console.log("🎯 Match found! Adding active class to:", link.href);
            link.classList.add("active");
        }
    });
});

console.log("🚀 Script is linked and running!");

// Try forcing a log every second to confirm execution
setInterval(() => {
    console.log("⏳ Script is still running...");
}, 1000);

setTimeout(() => {
    console.log("🔍 Checking for elements NOW...");
    console.log("SPAN element:", document.querySelector("#i2q276 span"));
    console.log("A elements:", document.querySelectorAll("#iq9l-2 a"));
}, 3000); // Wait 3 seconds before checking
