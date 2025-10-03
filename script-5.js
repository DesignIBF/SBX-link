console.log("✅ script-5.js is loaded");

// Keep trying until nav + content exist
const initFAQ = () => {
  const nav = document.getElementById("faq-nav");
  const content = document.getElementById("faq-content");

  if (!nav || !content) {
    console.log("⏳ Waiting for #faq-nav and #faq-content...");
    setTimeout(initFAQ, 200); // try again in 200ms
    return;
  }

  console.log("✅ Found nav and content containers");

  fetch("https://cdn.jsdelivr.net/gh/DesignIBF/SBX-link@main/faqs.json?v=3")
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
};

// Start polling
initFAQ();
