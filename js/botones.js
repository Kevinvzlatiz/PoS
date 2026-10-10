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

    // Botón 2

    var btn2 = document.getElementById("btn2");
    var modal2 = document.getElementById("modalCafe");
    var cerrarBtn2 = document.getElementById("cerrarBtn2");

    // BOTÓN 2 ABRE EL MODAL
    btn2.onclick = function () {

        modal2.style.display = "block";

    }

    // CERRAR MODAL 2
    cerrarBtn2.onclick = function () {

        modal2.style.display = "none";

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

    // Seleccionar tamaño de café

    var tamanoCafe = document.querySelectorAll(".tamanoCafe");

    tamanoCafe.forEach(function (cafe) {

        cafe.onclick = function () {

            var nombre = cafe.dataset.nombre;
            var precio = Number(cafe.dataset.precio);

            agregarProductoModal(nombre, precio);

            modal2.style.display = "none";

        }

    });

}

window.onload = function () {

    abrirModalProducto();

};