let Timer = 10;
let tiemerinicial = 10;
let regresivetime = null;
let seetime = document.getElementById("Tiempo");
let btn = document.getElementById("btn");
function Tiempo() {
  regresivetime = setInterval(() => {

    Timer--;
    seetime.innerHTML = `Tiempo: ${Timer} seg`;
    if (Timer === 0) { 
      clearInterval(regresivetime);  
      seetime.innerHTML = ` Tiempo ${Timer}  <br> Ya puedes pasar a la siguiente pagina `;
      MostrarBoton();// mostramos el boton para pasar ala pagina final
    }
  }, 1000);
}
function MostrarBoton(){
 btn.style.display="block";
}

regresivetime=true;
Tiempo();