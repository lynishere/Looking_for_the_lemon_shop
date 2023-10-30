/*----- PARTE DEL POPUP DEL PERFIL DE PERSONAJE  */
let close = document.getElementById("closebtn");
let open = document.getElementById("btnperfil");
let popupcontainer = document.getElementById("Pp");
 open.addEventListener("click", () => {
    popupcontainer.style.display = "block";
});
close.addEventListener("click", () => {
    popupcontainer.style.display = "none";
});
popupcontainer.addEventListener("click", (e) => {
    if (e.target === popupcontainer) {
        popupcontainer.style.display = "none";
    }
});
/*----- PARTE DEL POPUP DEL MODO DE JUEGO  */
let abrir = document.getElementById("btn_mas");
let cerrar= document.getElementById("btnclosee");
let contenido= document.getElementById("popupContainer");
abrir.addEventListener("click",()=>{
contenido.style.display="block";
});
cerrar.addEventListener("click",()=>{
    contenido.style.display="none";
});
contenido.addEventListener("click", (e)=>{
    if (e.target === contenido) {
        contenido.style.display="none";
    }
});