import { conexionAPI } from "./conexionAPI.js";

const deleteButton = producto.querySelector("[data-id]");
deleteButton.addEventListener("click", () => {
    Swal.fire({
        title: '¿Está seguro de borrar este producto?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, bórralo!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            await conexionAPI.eliminarArticulo(id);
            producto.remove();
            Swal.fire(
                '¡Borrado!',
                'El producto ha sido borrado.',
                'success'
            );
        }
    });
});



/*const deleteButton = document.querySelector("[data-id]");
    deleteButton.addEventListener("click", async () => {
    const result = await Swal.fire({
        title: '¿Está seguro de borrar este artículo?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, bórralo!'
    })
});
    if (result.isConfirmed) {
        const id = deleteButton.getAttribute("data-id");

        
        await conexionAPI.eliminarArticulo(articulo.id) }*/
