(function observeForDateInput() {
  const selector = 'input[type="date"][name="start_date"]';
  const observer = new MutationObserver((entries, obs) => {
    const input = document.querySelector(selector);
    if (!input) return;
    obs.disconnect();                 // stop watching
    console.log("✨ Date input injected", input);
    initDateBlocker(input);
  });

  observer.observe(document.body, {
    childList: true,
    subtree:   true
  });

  function initDateBlocker(input) {
    input.min = "2025-06-09";
    input.max = "2025-07-09";
    const blocked = new Set([
      "2025-06-12","2025-06-13",
      "2025-06-19","2025-06-20",
      "2025-06-26","2025-06-27",
      "2025-07-03","2025-07-04",
    ]);
    input.addEventListener("change", () => {
      const val = input.value;
      const day = new Date(val).getDay();
      if (blocked.has(val) || day === 4 || day === 5) {
        alert("That date is unavailable. Please choose another day.");
        input.value = "";
      }
    });
  }
})();
