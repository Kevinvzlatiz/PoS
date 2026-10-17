console.log("pagoDebito.js cargado");

var btnDebito = document.getElementById("btn4");
var modalDebito = document.getElementById("pagoDebito");
var cerrarDebito = document.getElementById("cerrarDebito");
var numeroTarjetaDebito = document.getElementById("numeroTarjetaDebito");
var confirmarNumeroTarjetaDebito = document.getElementById("confirmarNumeroTarjetaDebito");
var confirmarDebito = document.getElementById("confirmarDebito");

var tarjetaReal = "";
var tarjetaConfirmacionReal = "";

btnDebito.onclick = function() {

    if(total <= 0) {
        alert("Agrega un producto antes de pagar");
        return;
    }

    limpiarPago();
    modalDebito.style.display = "block";
    numeroTarjetaDebito.focus();
};

cerrarDebito.onclick = function() {
    modalDebito.style.display = "none";
    limpiarPago();
};

numeroTarjetaDebito.addEventListener("input", function() {
    tarjetaReal = numeroTarjetaDebito.value.replace(/\D/g, "");
    numeroTarjetaDebito.value = tarjetaReal;
});

confirmarNumeroTarjetaDebito.addEventListener("input", function() {
    tarjetaConfirmacionReal = confirmarNumeroTarjetaDebito.value.replace(/\D/g, "");
    confirmarNumeroTarjetaDebito.value = tarjetaConfirmacionReal;
});

confirmarDebito.onclick = function() {

    if(tarjetaReal.length !== 16) {
        alert("La tarjeta debe tener 16 dígitos");
        return;
    }

    if(tarjetaReal !== tarjetaConfirmacionReal) {
        alert("Las tarjetas no coinciden");
        return;
    }

    var monto = prompt("Total a pagar: $" + total.toFixed(2) + "\nIngrese monto:");

    if(parseFloat(monto) !== total) {
        alert("El monto debe ser igual al total");
        return;
    }

    alert("Pago realizado correctamente");

    modalDebito.style.display = "none";

    limpiarPago();

    reiniciarVenta();
};

function limpiarPago() {
    numeroTarjetaDebito.value = "";
    confirmarNumeroTarjetaDebito.value = "";
    tarjetaReal = "";
    tarjetaConfirmacionReal = "";
}