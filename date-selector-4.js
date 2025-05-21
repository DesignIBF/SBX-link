document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("i4ael");

  // Set min and max limits (in ISO format)
  const minDateStr = "2025-06-09";
  const maxDateStr = "2025-07-09";

  dateInput.min = minDateStr;
  dateInput.max = maxDateStr;

  // Dates to block (Thursdays, Fridays, and specific dates)
  const blockedExactDates = [
    "2025-06-12", "2025-06-13",
    "2025-06-19", "2025-06-20",
    "2025-06-26", "2025-06-27",
    "2025-07-03", "2025-07-04"
  ];

  function isBlocked(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDay(); // 0 = Sunday, 4 = Thursday, 5 = Friday
    return (
      blockedExactDates.includes(dateStr) ||
      day === 4 || // Thursday
      day === 5    // Friday
    );
  }

  dateInput.addEventListener("change", function () {
    const val = this.value;
    if (!val) return;

    const date = new Date(val);
    const minDate = new Date(minDateStr);
    const maxDate = new Date(maxDateStr);

    // Check if within range
    if (date < minDate || date > maxDate || isBlocked(val)) {
      alert("This date is not available. Please choose a different one.");
      this.value = "";
    }
  });
});
