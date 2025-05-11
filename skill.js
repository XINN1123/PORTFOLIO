let angle = 0;
let currentIndex = 0;
const rim = document.getElementById("rim");
const labels = document.querySelectorAll(".label");

function updateLabels() {
  labels.forEach((label, idx) => {
    label.classList.remove("visible");
    if (idx === currentIndex) {
      label.classList.add("visible");
    }
  });
}

function rotateRim(direction) {
  if (direction === "left") {
    angle -= 60;
    currentIndex = (currentIndex + 1) % 6;
  } else {
    angle += 60;
    currentIndex = (currentIndex - 1 + 6) % 6;
  }
  rim.style.transform = `rotate(${angle}deg)`;
  updateLabels();
}

updateLabels();
