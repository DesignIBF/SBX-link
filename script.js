document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ FAQ script loaded");

  const nav = document.getElementById("faq-nav");
  const content = document.getElementById("faq-content");

  if (!nav || !content) {
    console.error("❌ Could not find #faq-nav or #faq-content on the page");
    return;
  }

  // Fetch the JSON with FAQs
  fetch("https://cdn.jsdelivr.net/gh/DesignIBF/SBX-link@main/faqs.json")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(faqs => {
      console.log("✅ FAQs loaded:", faqs);

      // Attach click handlers to all nav links
      nav.querySelectorAll("a").forEach(link => {
        console.log("Binding link:", link.id);

        link.addEventListener("click", e => {
          e.preventDefault();

          const key = link.id;
          console.log("👉 Clicked:", key);

          // Swap in FAQ answer
          content.innerHTML = faqs[key] || "<p>No answer found.</p>";

          // Highlight active link
          nav.querySelectorAll("a").forEach(a => a.classList.remove("active"));
          link.classList.add("active");

          // Scroll to top of content (optional)
          content.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      // Auto-load first question
      const firstLink = nav.querySelector("a");
      if (firstLink) {
        console.log("Auto-loading:", firstLink.id);
        firstLink.click();
      }
    })
    .catch(err => {
      console.error("❌ Failed to load FAQs:", err);
      content.innerHTML = "<p>Could not load FAQs.</p>";
    });
});
