console.log("botones.js cargado");

function abrirModalProducto() {

    var btn1 = document.getElementById("btn1");
    var modal = document.getElementById("modalProductos");
    var cerrar = document.getElementById("cerrar");


    // BOTÓN 1 ABRE EL MODAL
    btn1.onclick = function () {

        modal.style.display = "block";

    }


    // CERRAR MODAL
    cerrar.onclick = function () {

        modal.style.display = "none";

    }


    // SELECCIONAR PAPITA Y AGREGAR AL CARRITO
    var papitas = document.querySelectorAll(".papita");

    papitas.forEach(function (papita) {

        papita.onclick = function () {

            var nombre = papita.dataset.nombre;
            var precio = Number(papita.dataset.precio);

            agregarProductoModal(nombre, precio);

            modal.style.display = "none";

        }

    });
}


window.onload = function () {

    abrirModalProducto();

};