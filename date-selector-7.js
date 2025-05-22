(function initDateBlocker() {
  function setup() {
    console.log("🏗️ DOM ready, running setup…");

    // 1) grab the date input
    const input =
      document.querySelector('input[type="date"][name="start_date"]') ||
      document.querySelector('input[type="date"]');

    console.log("found date input:", input);
    if (!input) {
      console.warn("❗️ Date input not found—check your selector!");
      return;
    }

    // 2) constrain range
    input.min = "2025-06-09";
    input.max = "2025-07-09";

    // 3) block specific dates + all Thursdays (4) & Fridays (5)
    const blocked = new Set([
      "2025-06-12","2025-06-13",
      "2025-06-19","2025-06-20",
      "2025-06-26","2025-06-27",
      "2025-07-03","2025-07-04",
    ]);

    input.addEventListener("change", () => {
      const val = input.value; // always “YYYY-MM-DD”
      if (!val) return;
      const dow = new Date(val).getDay();
      if (blocked.has(val) || dow === 4 || dow === 5) {
        alert("That date is unavailable. Please choose another day.");
        input.value = "";
      }
    });
  }

  // If DOM is already loaded, run immediately; otherwise wait.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
