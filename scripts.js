document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector("#bookingForm");
  const bookedTimes = JSON.parse(localStorage.getItem("booked")) || [];

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (bookedTimes.includes(date + time)) {
      alert("Time slot already booked.");
      return;
    }

    bookedTimes.push(date + time);
    localStorage.setItem("booked", JSON.stringify(bookedTimes));
    alert("Appointment booked successfully!");
    bookingForm.reset();
  });
});