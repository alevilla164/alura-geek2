import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre,precio,imagen,id){
    const articulo = document.createElement("div");
    
    articulo.className="card";
    articulo.innerHTML= `
                            <img id="imagenArticulo" src="${imagen}"/>
                            <h2 id="precio">${precio}</h2>
                            <h2 id="nombre">${nombre}</h2>
                            <button class ="deleteButton" data-id="${id}"><img src="basurero.png" alt="eliminar"/></button>
                        `;

                        return articulo;
}

async function listarArticulos(){
    const listaAPI = await conexionAPI.listarArticulos();

    listaAPI.forEach(articulo=>lista.appendChild(crearCard(articulo.nombre,articulo.precio,articulo.imagen)))
}
listarArticulos();
