let canvas = document.getElementById('miCanvas');
let ctx = canvas.getContext('2d');
let personaje = new Image();
personaje.src = './.png'; 
ctx.fillStyle = 'red'; // Establece el color de relleno
ctx.fillRect(50, 50, 100, 100); // Dibuja un rectángulo
function gameLoop() {
    // Actualiza la lógica del juego
      // Dibujar en el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
      ctx.drawImage(personaje, personaje.x, personaje.y, 50, 50); // Dibuja al personaje
  
      requestAnimationFrame(gameLoop); // Llama a la función nuevamente para la animación
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        personaje.x -= personaje.velocidad; // Mover a la izquierda
    } else if (event.key === 'ArrowRight') {
        personaje.x += personaje.velocidad; // Mover a la derecha
    } else if (event.key === 'ArrowUp') {
        personaje.y -= personaje.velocidad; // Mover hacia arriba
    } else if (event.key === 'ArrowDown') {
        personaje.y += personaje.velocidad; // Mover hacia abajo
    };
});
gameLoop(); // Inicia la animación