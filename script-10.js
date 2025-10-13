console.log("✅ script-10.js loaded");

// --- Core function: opens and scrolls to the <details> target ---
function openTargetFromHash() {
  const hash = window.location.hash;
  if (!hash) return;

  function tryOpen(attempt = 0) {
    const target = document.querySelector(hash);
    if (target && target.tagName.toLowerCase() === "details") {
      // Open the details
      target.setAttribute("open", "");

      // Scroll to it (after small delay for smooth placement)
      setTimeout(() => {
        const yOffset = -100; // adjust for sticky header height if needed
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 300);
    } else if (attempt < 40) {
      // Retry every 100ms for ~4s until HubSpot finishes rendering
      setTimeout(() => tryOpen(attempt + 1), 100);
    }
  }

  tryOpen();
}

// --- Run on page load (after HubSpot renders) ---
window.addEventListener("load", () => {
  // Delay ensures HubSpot content and lazy modules are in place
  setTimeout(openTargetFromHash, 900);
});

// --- Handle same-page anchor clicks ---
window.addEventListener("hashchange", openTargetFromHash);
