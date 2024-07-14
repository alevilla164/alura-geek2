async function listarArticulos(){
    const conexion = await fetch("https://66940d2bc6be000fa07e0273.mockapi.io/alurageek/articulos/articulo", {
      method:"GET",
      headers:{"Content-type":"application/json"}
    });
    const conexionConvertida = await conexion.json();
   return conexionConvertida;
}

async function crearArticulo(nombre, precio, imagen, id) {

      return await fetch("https://66940d2bc6be000fa07e0273.mockapi.io/alurageek/articulos/articulo",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ 
          nombre: nombre, 
          precio: precio,
          imagen: imagen,
          id: id
        })
      });

  }

  async function eliminarArticulo(id) {

    return await fetch(`https://66940d2bc6be000fa07e0273.mockapi.io/alurageek/articulos/articulo/${id}`,{
      method: "DELETE",
      })
    }


export const conexionAPI={
    listarArticulos, crearArticulo ,eliminarArticulo
}


