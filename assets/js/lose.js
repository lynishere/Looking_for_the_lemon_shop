//--------------------------------- funcionalidad de los botones supereriores
// Obtén una referencia al elemento de audio y a los botones

let btnagain = document.getElementById("denuevo");
let song = document.getElementById("miCancion");
let btnhome = document.getElementById("casa");

// Agrega un controlador de eventos para el botón de reproducir

function play(){
  song.play(); // Comienza a reproducir la canción
}
// Agrega un controlador de eventos para el botón de detener
function stop(){
  song.pause(); // Detiene la reproducción de la canción
  song.currentTime = 0; // Reinicia la canción al principio
}
//----------------------------funcionalidad de los botones inferiores
btnagain.addEventListener("click", () => {
  recargar();
});
function recargar() {
  window.location.href = "./Game.html";
}
btnhome.addEventListener("click", () => {
  casa();
});
    function casa (){
      window.location.href="./Espera.html";
    }