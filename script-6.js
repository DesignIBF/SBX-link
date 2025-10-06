console.log("✅ script-6.js is loaded");
document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash; // e.g. "#faq-buying-options"
  if (hash) {
    const target = document.querySelector(hash);
    if (target && target.tagName.toLowerCase() === "details") {
      target.setAttribute("open", ""); // expand the matching <details>
      target.scrollIntoView({ behavior: "smooth" }); // optional: scrolls to it
    }
  }
});
