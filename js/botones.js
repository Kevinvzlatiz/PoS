function abrirModalProducto() {

    var btn1 = document.getElementById("btn1");

    var modal = document.getElementById("modalProductos");

    var cerrar = document.getElementById("cerrar");


    // Abrir modal con botón 1
    btn1.onclick = function(){

        modal.style.display = "block";

    }


    // Cerrar modal
    cerrar.onclick = function(){

        modal.style.display = "none";

    }


    // Seleccionar producto
    var papitas = document.querySelectorAll(".papita");


    papitas.forEach(function(papita){

        papita.onclick = function(){

            var nombre = papita.dataset.nombre;

            var precio = Number(papita.dataset.precio);


            agregarProducto(nombre, precio);


            modal.style.display = "none";

        }

    });

}