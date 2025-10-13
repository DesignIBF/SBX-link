console.log("✅ script-8.js is loaded");

function openTargetFromHash() {
  const hash = window.location.hash;
  if (!hash) return;

  function tryOpen(attempt = 0) {
    const target = document.querySelector(hash);
    if (target && target.tagName.toLowerCase() === "details") {
      // Open and scroll smoothly
      target.setAttribute("open", "");
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else if (attempt < 30) {
      // Retry up to 30 times (≈3 seconds)
      setTimeout(() => tryOpen(attempt + 1), 100);
    }
  }

  tryOpen();
}

// Run after everything is really ready
window.addEventListener("load", () => {
  // Give HubSpot modules time to render fully
  setTimeout(openTargetFromHash, 600);
});

// Also handle same-page anchor clicks
window.addEventListener("hashchange", openTargetFromHash);
