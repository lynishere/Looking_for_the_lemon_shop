//variables
let temporizador =false;
let Timer =30;
let regresivetime=null;
let trajetassintapa=0;  //contador de trajetas destapadas esdecir que esto va ayudar aque cada que se destape una trajeta se va a contar y si se preciona una trajet que es para entonces se queda como una muestra
let trajeta1 = null; // null porque no lo se
let trajeta2 = null;
let resultado1= null;
let resultado2 =null;
let movimiento = 0;
let successes =0; // aciertos
let Score =0; //puntaje a superar
// sacra informacion del html
let mostmovimiento = document.getElementById("movimiento");
let rightguess = document.getElementById("puntaje1");
let seetime = document.getElementById("tiempo");
let puntaje1 = document.getElementById("puntaje"); // para 
//arreglo  que continen los numeros/imagenes que se van a mostrar
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
let puntaje = [4,5,6,7,8,9];
//generamos una funcion que ordene aletoriemte que sera el parametro para el metoo  sort()
numeros=numeros.sort(()=>{ return Math.random()-0.5});
console.log(numeros);
puntaje=puntaje.sort(()=>{return Math.random()-0.5});
//funcion para el temporizador
function Tiempo(){ //utilizamos sen interval que hace un retroceso
   regresivetime=setInterval(()=>{
Timer--;
seetime.innerHTML=`Tiempo: ${Timer} seg`
if(Timer==0){ //si lelga a0 se detiene el temporisador
clearInterval(regresivetime);
desabledtrajeta();
}
    }, 1000);
}
function desabledtrajeta(){ // esto solo pasa cuando el timer llega a 0
    for (let i = 0; i<=20; i++){
        let desabledt = document.getElementById(i); //lo que hara que cuando llege se podra visualizar
       desabledt.innerHTML= numeros[i]; // mostramos lo que hay
       desabledt.desabled=true; //desabilitamos el boton
    }
}
//funcion principal
function tapa(id){
if (temporizador==false){
    Tiempo();
    temporizador=true; //solo inicio una ves
}
trajetassintapa++; //incrementamos las trajetas volteadas
console.log(trajetassintapa);
if(trajetassintapa == 1){ // mostra el prime 
trajeta1 = document.getElementById(id);
resultado1=numeros[id]; // en el resultado1 se guarda para ver si el otro resultado es igual
trajeta1.innerHTML=resultado1; //se muestra en el html
//desabilitar el boton presionado para que no se siga 
trajeta1.disabled =true;
}else if(trajetassintapa ==2){
//se muestra la segunda imagen / numero
trajeta2= document.getElementById(id);
resultado2=numeros[id];
trajeta2.innerHTML=resultado2;
//desabilitamos el boton
trajeta2.disabled=true;
//incrementamos los moviento es decir la cantidad de veces que mueve o destapa una trajeta
movimiento++;
mostmovimiento.innerHTML=`Movimientos: ${movimiento}`;
if(resultado1 == resultado2){ //vemos si la tarjeta 1 y la 2 son iguales
trajetassintapa=0; // esto premitira que se vuelva a contar
successes++;//aumentra la el puntaje
rightguess.innerHTML=` ${successes}`;
puntaje1.innerHTML=` Score: ${puntaje}`
if (successes>= 8){ // aqui vemos si el puntaje obtenido es igual o mayor al puntaje a superar
    rightguess.innerHTML=` ${successes} :)`;
    mostmovimiento.innerHTML=`Movimientos: ${movimiento} ;)`;
}
}else{
    //mostrar los valoares por unos segundos y volver a tapar
    setTimeout(()=>{
        trajeta1.innerHTML=' ';
        trajeta2.innerHTML=' ';
        trajeta1.disabled=false;
        trajeta2.disabled=false;
        trajetassintapa=0; // me premite volver a selecciononar
 },1000);
}
}
}
let btnsiguiente = document.getElementById("siguiente");
//  en esta parte se supone que tiene que hacer el botn para ir a otra pagina que te muestre dos casoso 
//posible: si supero el puntaje se muestre un html que diga felicidades y de la pista, el otro caso que 
//cuando presione el boton y no supero el puntaje entonces muestre un html que muestre que perdio 