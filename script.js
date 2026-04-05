// TYPING
const text = ["Ethical Hacker", "SOC Analyst", "Security Researcher"];
let i = 0, j = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML = text[i].substring(0, j++);
    if (j > text[i].length) {
      i++; j = 0;
    }
  } else { i = 0; }
  setTimeout(type, 100);
}
type();

// MATRIX
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01<>[]{}";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height) drops[i] = 0;
    drops[i]++;
  });
}

setInterval(draw, 33);

// SAFE XSS DEMO
function runXSS() {
  let input = document.getElementById("userInput").value;
  document.getElementById("output").textContent = input;
}

// FLOATING WORDS
document.querySelectorAll(".floating-container span").forEach(el => {
  el.style.left = Math.random() * 100 + "vw";
});