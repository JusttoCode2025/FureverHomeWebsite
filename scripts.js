"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Validate Form
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      return false;
    }
    if (phone && !/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  }
  // Character Countdown for Form
  const textarea = document.getElementById("contact-message");
  const charCount = document.getElementById("charCount");
  const maxLength = 500;

  if (textarea && charCount) {
    textarea.addEventListener("input", () => {
      const remaining = maxLength - textarea.value.length;
      charCount.textContent = `${remaining} characters remaining`;
    });
  }

  // Countdown Timer for Adoption Day
  const eventDate = new Date("August 25, 2025 00:00:00").getTime();
  const timer = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
      clearInterval(timer);
      const timeHead = document.getElementById("TimeHead");
      if (timeHead) timeHead.innerHTML += "<br>(The event has started!)";

      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);
  // star rating 
  const stars = document.querySelectorAll("#starRating span");
  const ratingMessage = document.getElementById("ratingMessage");
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      highlightStars(index);
    });

    star.addEventListener("mouseout", () => {
      highlightStars(selectedRating - 1);
    });

    star.addEventListener("click", () => {
      selectedRating = index + 1;
      highlightStars(index);
      ratingMessage.textContent = `You rated this site ${selectedRating} star${selectedRating > 1 ? 's' : ''}!`;
    });
  });

  function highlightStars(index) {
    stars.forEach((star, i) => {
      star.classList.toggle("selected", i <= index);
    });
  }

  
});
