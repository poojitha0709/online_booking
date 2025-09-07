const seatContainer = document.getElementById("seatContainer");
const totalSeats = 40;
let selectedSeats = [];

// Generate seats dynamically
for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.textContent = i;
  seat.addEventListener("click", () => toggleSeat(seat, i));
  seatContainer.appendChild(seat);
}

function toggleSeat(seat, seatNumber) {
  seat.classList.toggle("selected");
  if (selectedSeats.includes(seatNumber)) {
    selectedSeats = selectedSeats.filter(s => s !== seatNumber);
  } else {
    selectedSeats.push(seatNumber);
  }
}

function confirmBooking() {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat!");
    return;
  }

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(selectedSeats);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert(`Booking Confirmed ✅ Seats: ${selectedSeats.join(", ")}`);
  selectedSeats = [];
  window.location.href = "payment.html";
}
