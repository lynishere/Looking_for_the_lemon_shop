//variables
let temporizador =false;
let pares =0; // contadador de pares 
let Timer =40;
let tiemerinicial=40;
let regresivetime=null;
let trajetassintapa=0;  //contador de trajetas destapadas esdecir que esto va ayudar aque cada que se destape una trajeta se va a contar y si se preciona una trajet que es para entonces se queda como una muestra
let trajeta1 = null; // null porque no lo se
let trajeta2 = null;
let resultado1= null;
let resultado2 =null;
let movimiento = 0;
let successes =0; // aciertos
// sacra informacion del html
let mostmovimiento = document.getElementById("movimiento");
let rightguess = document.getElementById("puntaje1");
let seetime = document.getElementById("tiempo");
let score = document.getElementById("puntaje"); // variable que llama al id = "puntaje"

let loseau = new Audio('../sounds/lose.mp3');
let worngau = new Audio('../sounds/wrong.wav');
let rightau = new Audio('../sounds/right.mp3');
let clickau = new Audio('../sounds/click.wav');
//arreglo  que continen los numeros/imagenes que se van a mostrar
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

let score1 = [8]; //arrray del puntaje a susperra
//generamos una funcion que ordene aletoriemte que sera el parametro para el metoo  sort()
numeros=numeros.sort(()=>{ return Math.random()-0.3});
//funcion para el temporizador
function Tiempo(){ //utilizamos sen interval que hace un retroceso
     regresivetime=setInterval(()=>{
      seetime.innerHTML=`Tiempo: ${Timer} seg`
      Timer--;
     if(Timer==0){ //si lelga a0 se detiene el temporisador
          clearInterval(regresivetime);
          desabledtrajeta(numeros);
 loseau.play();
        }
    }, 1000, Timer);
}

function desabledtrajeta(numeros){ // esto solo pasa cuando el timer llega a 0
    for (let i = 0; i<=20; i++){
        let desabledt = document.getElementById(i); //lo que hara que cuando llege se podra visualizar
       desabledt.innerHTML=`<img src="../img/${numeros[i]}.png" alt="img1">`; // mostramos lo que hay
       desabledt.desabled=true; //desabilitamos el boton
    }
}
score.innerHTML=` Score: ${score1}`;
//funcion principal para gira las cartas
function tapa(id){
if (temporizador==false){
    Tiempo();
    temporizador=true; //solo inicio una ves
}

if(trajetassintapa == 0){ // mostra el prime 
trajeta1 = document.getElementById(id);
resultado1=numeros[id]; // en el resultado1 se guarda para ver si el otro resultado es igual
trajeta1.innerHTML=`<img src="../img/${resultado1}.png" alt="img1">`; //se muestra en el html
clickau.play();
trajeta1.disabled =true;//desabilitar el boton presionado para que no se siga 
trajetassintapa++; //incrementamos las trajetas volteadas
primerid=id;

}else if(trajetassintapa ==1){
//se muestra la segunda imagen / numero
trajeta2= document.getElementById(id);
resultado2=numeros[id];
trajeta2.innerHTML=`<img src="../img/${resultado2}.png" alt="img1">`;
clickau.play();
//desabilitamos el boton
trajeta2.disabled=true;
trajetassintapa++;
segundoid=id;

//incrementamos los moviento es decir la cantidad de veces que mueve o destapa una trajeta
movimiento++;
mostmovimiento.innerHTML=`Movimientos: ${movimiento}`;

if(resultado1 == resultado2){ //vemos si la tarjeta 1 y la 2 son iguales
trajetassintapa=0; // esto premitira que se vuelva a contar
pares++;
successes++;//aumentra la el puntaje
rightguess.innerHTML=` ${successes}`;
rightau.play()
}else{
    worngau.play()
    //mostrar los valoares por unos segundos y volver a tapar
    setTimeout(()=>{
        trajeta1=document.getElementById(primerid);
        trajeta2=document.getElementById(segundoid);
        trajeta1.innerHTML=' ';
        trajeta2.innerHTML=' ';
        trajeta1.disabled=false;
        trajeta2.disabled=false;
        trajetassintapa=0; // me premite volver a selecciononar
 },500);
}
}
if (pares>=8){ // aqui vemos si el puntaje obtenido es igual o mayor al puntaje a superar
   
    clearInterval(regresivetime);
    rightguess.innerHTML=` ${successes} :)`;
    mostmovimiento.innerHTML=`Movimientos: ${movimiento} ;)`;
    seetime.innerHTML=`muy bien, te llevo ${ tiemerinicial-Timer} seg `;
}
}
//funcionalidad de los botones
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
//  en esta parte se supone que tiene que hacer el botn para ir a otra pagina que te muestre dos casoso 
//posible: si supero el puntaje se muestre un html que diga felicidades y de la pista, el otro caso que 
//cuando presione el boton y no supero el puntaje entonces muestre un html que muestre que perdio 