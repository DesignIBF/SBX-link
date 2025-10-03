console.log("✅ script-2.js is loaded");

const nav = document.getElementById("faq-nav");
const content = document.getElementById("faq-content");

if (!nav || !content) {
  console.error("❌ Could not find #faq-nav or #faq-content on the page");
} else {
  console.log("✅ Found nav and content containers");

  fetch("https://cdn.jsdelivr.net/gh/DesignIBF/SBX-link@main/faqs.json?v=2")
    .then((res) => res.json())
    .then((faqs) => {
      console.log("✅ FAQs loaded:", faqs);

      nav.querySelectorAll("a").forEach((link) => {
        console.log("Binding link:", link.id);

        link.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("👉 Clicked:", link.id);

          const key = link.id;
          content.innerHTML = faqs[key] || "<p>No answer found.</p>";

          nav
            .querySelectorAll("a")
            .forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        });
      });

      const firstLink = nav.querySelector("a");
      if (firstLink) {
        console.log("Auto-loading:", firstLink.id);
        firstLink.click();
      }
    })
    .catch((err) => {
      console.error("❌ Failed to load FAQs:", err);
      content.innerHTML = "<p>Could not load FAQs.</p>";
    });
}
