console.log("transferenciaT.js cargado");


var btn5 = document.getElementById("btn5");
var modalTransferenciaT = document.getElementById("modalTransferenciaT");
var cerrarTransferenciaT = document.getElementById("cerrarTransferenciaT");
var confirmarTransferenciaT = document.getElementById("confirmarTransferenciaT");

var tarjetaOrigen = document.getElementById("tarjetaOrigen");
var tarjetaDestino = document.getElementById("tarjetaDestino");
var montoTransferencia = document.getElementById("montoTransferencia");


if (btn5) {

    btn5.onclick = function () {

        modalTransferenciaT.style.display = "block";

    };

}


if (cerrarTransferenciaT) {

    cerrarTransferenciaT.onclick = function () {

        modalTransferenciaT.style.display = "none";

        limpiarTransferencia();

    };

}



if (confirmarTransferenciaT) {

    confirmarTransferenciaT.onclick = function () {


        console.log("Confirmar transferencia");


        var origen = tarjetaOrigen.value;

        var destino = tarjetaDestino.value;

        var monto = Number(montoTransferencia.value);



        if (origen == "" || destino == "" || monto <= 0) {

            alert("Completa todos los campos");

            return;

        }



        if (origen.length != 16 || destino.length != 16) {

            alert("Las tarjetas deben tener 16 dígitos");

            return;

        }



        var comision = 12;


        var transferencia = {

            codigo: "TRANS001",

            nombre: "Transferencia tarjeta a tarjeta",

            precio: monto + comision

        };


        console.log(transferencia);



        agregarProducto(transferencia);



        alert("Transferencia agregada al carrito");



        modalTransferenciaT.style.display = "none";


        limpiarTransferencia();


    };

}



function limpiarTransferencia() {

    tarjetaOrigen.value = "";

    tarjetaDestino.value = "";

    montoTransferencia.value = "";

}