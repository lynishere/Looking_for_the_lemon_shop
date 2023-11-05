// Variables
let temporizador = false;
let pares = 0; // Contador de pares
let Timer = 40;
let tiemerinicial = 40;
let regresivetime = null;
let trajetassintapa = 0; // Contador de tarjetas destapadas
let trajeta1 = null; // null porque no lo sé
let trajeta2 = null;
let resultado1 = null;
let resultado2 = null;
let movimiento = 0;
let successes = 0; // Aciertos
// Extraer información del HTML
let mostmovimiento = document.getElementById("movimiento");
let rightguess = document.getElementById("puntaje1");
let seetime = document.getElementById("tiempo");
let score = document.getElementById("puntaje");
// Variables de los sonidos
let worngau = new Audio("../sounds/wrong.wav");
let rightau = new Audio("../sounds/right.mp3");
let clickau = new Audio("../sounds/click.wav");
// Arreglo que contiene los números/imagenes que se van a mostrar
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

let score1 = [8]; // Array del puntaje a superar
// Generamos una función que ordene aleatoriamente utilizando el método sort()
numeros = numeros.sort(() => Math.random() - 0.3);

// Función para el temporizador
function Tiempo() {
  regresivetime = setInterval(() => {
    seetime.innerHTML = `Tiempo: ${Timer} seg`;
    Timer--;

    if (Timer === 0) {
      clearInterval(regresivetime);
      desabledtrajeta();
      trajetassintapa = 2; // Establecer trajetassintapa en 2 para evitar la selección de más tarjetas
    }
  }, 1000);
}

function desabledtrajeta() {
  for (let i = 0; i <= 20; i++) {
    let desabledt = document.getElementById(i);
    desabledt.innerHTML = `<img src="../img/${numeros[i]}.png" alt="img1">`;
    desabledt.disabled = true;
  }
}

score.innerHTML = ` Score: ${score1}`;

// Función principal para voltear las cartas
function tapa(id) {
  if (temporizador === false) {
    Tiempo();
    temporizador = true; // Solo se inicia una vez
  }

  if (trajetassintapa === 0) {
    // Mostrar la primera carta
    trajeta1 = document.getElementById(id);
    resultado1 = numeros[id];
    trajeta1.innerHTML = `<img src="../img/${resultado1}.png" alt="img1">`;
    clickau.play();
    trajeta1.disabled = true;
    trajetassintapa++;
    primerid = id;
  } else if (trajetassintapa === 1) {
    // Mostrar la segunda carta
    trajeta2 = document.getElementById(id);
    resultado2 = numeros[id];
    trajeta2.innerHTML = `<img src="../img/${resultado2}.png" alt="img1">`;
    clickau.play();
    trajeta2.disabled = true;
    trajetassintapa++;
    segundoid = id;

    movimiento++;
    mostmovimiento.innerHTML = `Movimientos: ${movimiento}`;

    if (resultado1 === resultado2) {
      trajetassintapa = 0;
      pares++;
      successes++;
      rightguess.innerHTML = ` ${successes}`;
      rightau.play();
    } else {
      worngau.play();
      setTimeout(() => {
        trajeta1 = document.getElementById(primerid);
        trajeta2 = document.getElementById(segundoid);
        trajeta1.innerHTML = "";
        trajeta2.innerHTML = "";
        trajeta1.disabled = false;
        trajeta2.disabled = false;
        trajetassintapa = 0;
      }, 500);
    }
  }

  if (pares >= 8) {
    clearInterval(regresivetime);
    rightguess.innerHTML = ` ${successes} :)`;
    mostmovimiento.innerHTML = `Movimientos: ${movimiento} ;)`;
    seetime.innerHTML = `Bien, te llevó ${tiemerinicial - Timer} seg `;
  }
}
// Funcionalidad de los botones
let btnagin = document.getElementById("denuevo");
btnagin.addEventListener("click", () => {
  recargar();
});

function recargar() {
  window.location.href = "./Game.html";
}
let btnsiguiente = document.getElementById("siguiente");
btnsiguiente.addEventListener("click",()=>{
    rediriguir();
});
function rediriguir(){
 if (pares >= 8){
    window.location.href = "./win.html"; 
 }else{
    window.location.href = "./lose.html"; 
 }
}
