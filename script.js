var score = 0;

document.getElementById('circle').addEventListener('click', function() {
  score++;
  document.getElementById('scoreValue').textContent = score;
  moveCircle();
});

function moveCircle() {
  var circle = document.getElementById('circle');
  var container = document.getElementById('game-container');
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var circleSize = circle.offsetWidth;
  var maxX = containerWidth - circleSize;
  var maxY = containerHeight - circleSize;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  circle.style.left = randomX + 'px';
  circle.style.top = randomY + 'px';
}
