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

  dateInput.addEventListener("input", function () {
    const selectedDate = new Date(this.value);
    const day = selectedDate.getDay(); // 0 = Sunday, 4 = Thursday, 5 = Friday

    const selectedStr = this.value;

    // Check min and max
    if (selectedDate < minDate || selectedDate > maxDate) {
      alert("Please select a date between June 9 and July 9, 2025.");
      this.value = "";
      return;
    }

    // Check if date is Thursday or Friday
    if (day === 4 || day === 5) {
      alert("Thursdays and Fridays are unavailable. Please pick another date.");
      this.value = "";
      return;
    }

    // Check if date is in blocked list
    if (blockedDates.includes(selectedStr)) {
      alert("This date is unavailable. Please choose another.");
      this.value = "";
      return;
    }
  });
});
