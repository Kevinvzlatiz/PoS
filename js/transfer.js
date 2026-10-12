console.log("transfer.js cargado");

var inputTarjeta = document.getElementById("numeroTarjeta");
var mostrarTarjeta = document.getElementById("tarjetaCensurada");
var inputConfirmar = document.getElementById("confirmarNumeroTarjeta"); // solo existe en el modal viejo

inputTarjeta.oninput = function () {
    var tarjeta = inputTarjeta.value;

    if (tarjeta.length === 16 && mostrarTarjeta) {
        var censura = "*".repeat(12);
        var ultimos = tarjeta.slice(12);
        mostrarTarjeta.value = censura + ultimos;
    }
};

// Confirmar tarjeta

var confirmarTarjeta = document.getElementById("confirmarTarjeta");

var modalTarjeta = document.getElementById("modalTarjeta");
var modalMonto = document.getElementById("modalMonto");


confirmarTarjeta.onclick = function () {

    var tarjeta = inputTarjeta.value;

    // si existe el campo "confirmar tarjeta", deben coincidir
    if (inputConfirmar && inputConfirmar.value !== tarjeta) {
        alert("Las tarjetas no coinciden");
        return;
    }

    if (tarjeta.length === 16) {
        modalTarjeta.style.display = "none";
        modalMonto.style.display = "block";
    }

    else {

        alert("Tarjeta inválida");

    }

};


// Confirmar monto

var confirmarMonto = document.getElementById("confirmarMonto");
var montoDeposito = document.getElementById("montoDeposito");
var carrito = document.getElementById("carrito");
var totalPantalla = document.getElementById("total");

confirmarMonto.onclick = function () {

    var comision = 12;
    var monto = Number(montoDeposito.value);
    var tarjeta = inputTarjeta.value;

    if (monto > 0) {

        // Agregar fila a la tabla del POS
        var fila = document.createElement("tr");

        var totalConComision = monto + comision;

        fila.innerHTML =
            "<td>1</td>" +
            "<td>Depósito tarjeta ****" + tarjeta.slice(12) + " (Comisión $12.00)</td>" +
            "<td>$" + monto.toFixed(2) + "</td>" +
            "<td>$" + totalConComision.toFixed(2) + "</td>";

        carrito.appendChild(fila);

        // Actualizar el total
        var totalActual = Number(totalPantalla.textContent.replace("$", "").replace(",", ""));
        totalPantalla.textContent = "$" + (totalActual + monto + comision).toFixed(2);

        // Limpiar y cerrar
        modalMonto.style.display = "none";
        montoDeposito.value = "";
        inputTarjeta.value = "";
        if (mostrarTarjeta) mostrarTarjeta.value = "";
        if (inputConfirmar) inputConfirmar.value = "";

    }

    else {

        alert("Monto inválido");

    }

};