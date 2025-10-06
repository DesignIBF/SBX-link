console.log("✅ script-7.js is loaded");

window.addEventListener("load", () => {
  const hash = window.location.hash; // "#faq-create-custom-box"
  if (hash) {
    const target = document.querySelector(hash);
    if (target && target.tagName.toLowerCase() === "details") {
      target.setAttribute("open", "");
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});
