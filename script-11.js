console.log("✅ script-8.js loaded (final fix)");

function openTargetAfterRender() {
  const hash = window.location.hash;
  if (!hash) return;

  let attempts = 0;
  const maxAttempts = 50; // tries for ~5 seconds

  const checkExistence = setInterval(() => {
    const target = document.querySelector(hash);

    if (target && target.tagName.toLowerCase() === "details") {
      clearInterval(checkExistence);

      // Open <details>
      target.setAttribute("open", "");

      // Scroll after HubSpot reflows
      setTimeout(() => {
        const headerOffset = 100; // adjust to your sticky header height
        const y =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 300);
    }

    attempts++;
    if (attempts > maxAttempts) clearInterval(checkExistence);
  }, 100);
}

// Run after page fully loads
window.addEventListener("load", () => {
  // Wait extra time to let HubSpot inject content
  setTimeout(openTargetAfterRender, 1000);
});

// Also run when clicking links within the same page
window.addEventListener("hashchange", openTargetAfterRender);
