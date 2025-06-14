const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  // Pegando dimensões do container do Bootstrap
  const container = document.querySelector(".animation-container");
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight; // Agora respeita 30vh

  const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const fontSize = 20;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(0);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);
});



function setupMatrixEffect() {
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const fontSize = 20;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(0);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);
}

