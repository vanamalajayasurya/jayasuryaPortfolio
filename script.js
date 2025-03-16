const card = document.querySelector('.flip-card');

card.addEventListener("click", () => {
  card.classList.toggle('flipped');
});

const elements = [
  "<html>", "<head>", "<body>", "<div>", "<p>", "<span>", "<h1>", "<h2>", "<h3>", "<a>", 
  "<ul>", "<li>", "<table>", "<tr>", "<td>", "<script>", "<style>", "<meta>", "<form>", "<input>",
  "CTRL", "ALT", "SHIFT", "ESC", "ENTER", "TAB", "BACKSPACE", "CAPS LOCK", "DELETE", "INSERT", 
  "HOME", "END", "PAGE UP", "PAGE DOWN", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"
];
const numCopies = 50; // Increased number of floating tags & keys
const container = document.body;

for (let i = 0; i < numCopies; i++) {
  const span = document.createElement("span");
  span.classList.add("tag");
  span.style.setProperty("--hue", Math.random());
  span.textContent = elements[Math.floor(Math.random() * elements.length)];
  span.style.left = `${Math.random() * 100}vw`;
  span.style.top = `${Math.random() * 100}vh`;
  span.style.animationDuration = `${8 + Math.random() * 5}s`; // Slower animation
  container.appendChild(span);
}

const toggleNightModeButton = document.getElementById('toggle-night-mode');
toggleNightModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
