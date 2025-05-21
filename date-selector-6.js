document.addEventListener("DOMContentLoaded", () => {
  // grab your date‐picker by selector instead of by ID
  const input =
    document.querySelector('input[type="date"][name="start_date"]') ||
    document.querySelector("input[type=date]");
  console.log(input);

  if (!input) {
    console.warn("Date input not found!");
    return;
  }

  // apply your min/max
  input.min = "2025-06-09";
  input.max = "2025-07-09";

  // list of specific dates to block
  const blocked = new Set([
    "2025-06-12",
    "2025-06-13",
    "2025-06-19",
    "2025-06-20",
    "2025-06-26",
    "2025-06-27",
    "2025-07-03",
    "2025-07-04",
  ]);

  input.addEventListener("change", () => {
    const val = input.value; // always yyyy-mm-dd
    if (!val) return;

    const dow = new Date(val).getDay(); // 0=Sun … 4=Thu, 5=Fri

    if (blocked.has(val) || dow === 4 || dow === 5) {
      alert("That date is unavailable. Please choose another day.");
      input.value = ""; // clear the bad selection
    }
  });
});
