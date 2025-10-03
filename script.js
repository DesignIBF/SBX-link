
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM loaded, script running...");

  const nav = document.getElementById("faq-nav");
  const content = document.getElementById("faq-content");

  if (!nav || !content) {
    console.error("❌ Could not find #faq-nav or #faq-content");
    return;
  }

  console.log("✅ Found nav and content containers");

  fetch("https://cdn.jsdelivr.net/gh/DesignIBF/SBX-link@main/faqs.json")
    .then((res) => res.json())
    .then((faqs) => {
      console.log("✅ Loaded FAQs:", faqs);

      nav.querySelectorAll("a").forEach((link) => {
        console.log("Binding link:", link.id);
        link.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("👉 Clicked:", link.id);
          const key = link.id;
          content.innerHTML = faqs[key] || "<p>No answer found.</p>";
        });
      });

      // Auto-load the first question
      const firstLink = nav.querySelector("a");
      if (firstLink) {
        console.log("Auto-loading:", firstLink.id);
        firstLink.click();
      }
    })
    .catch((err) => {
      console.error("❌ FAQ load failed:", err);
      content.innerHTML = "<p>Could not load FAQs.</p>";
    });
});
