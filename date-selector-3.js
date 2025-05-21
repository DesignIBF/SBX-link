document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("i4ael");

  const minDate = new Date("2025-06-09");
  const maxDate = new Date("2025-07-09");

  const blockedDates = [
    "2025-06-12", "2025-06-13",
    "2025-06-19", "2025-06-20",
    "2025-06-26", "2025-06-27",
    "2025-07-03", "2025-07-04"
  ];

  function isDateBlocked(dateStr) {
    const day = new Date(dateStr).getDay(); // 0=Sun ... 6=Sat
    return blockedDates.includes(dateStr) || day === 4 || day === 5; // Thursday or Friday
  }

  dateInput.addEventListener("change", function () {
    const dateStr = this.value;
    if (!dateStr) return;

    const selected = new Date(dateStr);
    if (
      selected < minDate ||
      selected > maxDate ||
      isDateBlocked(dateStr)
    ) {
      alert("That date is not available. Please pick a valid weekday.");
      this.value = "";
    }
  });
});
