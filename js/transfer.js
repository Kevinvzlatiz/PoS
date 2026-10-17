document.addEventListener("DOMContentLoaded", function(){

console.log("transferenciaT.js cargado");

var btn5 = document.getElementById("btn5");
var modalTransferenciaT = document.getElementById("modalTransferenciaT");
var cerrarTransferenciaT = document.getElementById("cerrarTransferenciaT");
var confirmarTransferenciaT = document.getElementById("confirmarTransferenciaT");

var tarjetaOrigen = document.getElementById("tarjetaOrigen");
var tarjetaDestino = document.getElementById("tarjetaDestino");
var montoTransferencia = document.getElementById("montoTransferencia");


btn5.onclick = function(){
    modalTransferenciaT.style.display = "block";
};


cerrarTransferenciaT.onclick = function(){
    modalTransferenciaT.style.display = "none";
    limpiarTransferencia();
};


confirmarTransferenciaT.onclick = function(){

    var origen = tarjetaOrigen.value.trim();
    var destino = tarjetaDestino.value.trim();
    var monto = Number(montoTransferencia.value);

    if(origen == "" || destino == "" || monto <= 0){
        alert("Completa todos los campos");
        return;
    }

    if(origen.length != 16 || destino.length != 16){
        alert("Las tarjetas deben tener 16 dígitos");
        return;
    }

    if(origen == destino){
        alert("Las tarjetas no pueden ser iguales");
        return;
    }

    var comision = 12;
    var totalTransferencia = monto + comision;

    var producto = {
        codigo: "TRANS001",
        nombre: "Transferencia tarjeta a tarjeta",
        precio: totalTransferencia
    };

    agregarProducto(producto);

    alert(
        "Transferencia realizada\n" +
        "Monto: $" + monto.toFixed(2) +
        "\nComisión: $12.00" +
        "\nTotal: $" + totalTransferencia.toFixed(2)
    );

    modalTransferenciaT.style.display = "none";
    limpiarTransferencia();
};


function limpiarTransferencia(){
    tarjetaOrigen.value = "";
    tarjetaDestino.value = "";
    montoTransferencia.value = "";
}

});