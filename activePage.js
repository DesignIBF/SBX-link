document.addEventListener("DOMContentLoaded", function () {
    // Select the active span inside the div (modify selector if needed)
    const activeSpan = document.querySelector("#i2q276-2 span");
    
    if (!activeSpan) {
        console.log("No active span found.");
        return;
    }

    const activeText = activeSpan.textContent.trim();
    console.log("Active Span Text:", activeText);

    // Select all <a> elements inside the same div
    const links = document.querySelectorAll("#iq9l-2 a");

    links.forEach(link => {
        const linkText = link.textContent.trim();
        console.log("Checking link text:", linkText);

        // Compare text and add active class if they match
        if (linkText === activeText) {
            console.log("Match found! Adding active class to:", link.href);
            link.classList.add("active");
        }
    });
});

console.log("Custom Script is active");
console.log(activeSpan);
console.log(activeText);
console.log(links);
