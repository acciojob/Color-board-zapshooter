//your JS code here. If required.
const container = document.getElementById('container');

const colors = [
  '#e74c3c', '#e67e22', '#f39c12',
  '#2ecc71', '#1abc9c', '#3498db',
  '#9b59b6', '#e91e63', '#00bcd4',
  '#ff5722', '#8bc34a', '#ff9800'
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor();
    square.style.transition = 'background-color 0s';

    // After a tiny frame, start the fade-out transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        square.style.transition = 'background-color 1s ease-out';
        square.style.backgroundColor = '#1a1a1a';
      });
    });
  });

  container.appendChild(square);
}