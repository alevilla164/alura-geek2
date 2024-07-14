import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearArticulo(evento){
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    
    await conexionAPI.crearArticulo(nombre,precio,imagen);
}

formulario,addEventListener("submit",evento=>crearArticulo(evento));


