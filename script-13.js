console.log("✅ FAQ + Section anchor debug script loaded");

function openTargetAfterRender() {
  const hash = window.location.hash;
  console.log("📍 Current hash:", hash);
  if (!hash) return;

  let attempts = 0;
  const maxAttempts = 50;

  const checkExistence = setInterval(() => {
    const target = document.querySelector(hash);
    console.log(`🔍 Attempt ${attempts + 1}/${maxAttempts}:`, target);

    if (target) {
      clearInterval(checkExistence);
      console.log("✅ Target found:", target);

      const tag = target.tagName.toLowerCase();
      console.log("📂 Element tag:", tag);

      // If it's a <details>, open it
      if (tag === "details") {
        console.log("📖 Opening details element...");
        target.setAttribute("open", "");
      }

      setTimeout(() => {
        const headerOffset = 100;
        const y =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;
        console.log("📜 Scrolling to position (initial):", y);
        window.scrollTo({ top: y, behavior: "smooth" });

        // 🔁 Second scroll attempt after 1.5s to override HubSpot resets
        setTimeout(() => {
          const y2 =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;
          console.log("🔁 Re-scrolling to ensure visibility:", y2);
          window.scrollTo({ top: y2, behavior: "smooth" });
        }, 1500);
      }, 300);
    }

    attempts++;
    if (attempts > maxAttempts) {
      clearInterval(checkExistence);
      console.warn("⚠️ Stopped checking — element never found!");
    }
  }, 100);
}

// Run once page fully loads
window.addEventListener("load", () => {
  console.log("🌐 Window load fired — waiting 1s before checking hash...");
  setTimeout(openTargetAfterRender, 1000);
});

// Handle same-page anchor clicks too
window.addEventListener("hashchange", () => {
  console.log("🔄 Hash changed:", window.location.hash);
  openTargetAfterRender();
});
