console.log("✅ script-8.js is loaded");

window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (!hash) return;

  function openTarget() {
    try {
      const target = document.querySelector(hash);
      if (target && target.tagName.toLowerCase() === "details") {
        target.setAttribute("open", "");
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        setTimeout(openTarget, 150); // keep retrying until it appears
      }
    } catch (err) {
      console.error("FAQ opener failed:", err);
    }
  }

  openTarget();
});
