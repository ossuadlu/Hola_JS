


//rutina para declarar un click sobre un boton
let botonCambio=document.getElementById("boton")
botonCambio.addEventListener("click",cambiarArtista)

function cambiarArtista(){
    let etiquetaImagen=document.getElementById("imagen1")
etiquetaImagen.src="img/foto2.jpg"

let etiquetaVideo=document.getElementById("video1")
etiquetaVideo.src="video/video2.mp4"

let etiquetaFechaConcierto=document.getElementById("fechaconcierto")
etiquetaFechaConcierto.textContent="Se presentan en semana santa"
}
