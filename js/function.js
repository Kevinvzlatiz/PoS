

var total = 0;



function buscarProducto(event) {


    if (event.keyCode === 27) {

        var tabla = document.getElementById("carrito");

        if (tabla.rows.length > 0) {
            var ultimaFila = tabla.rows[tabla.rows.length - 1];

            ultimaFila.cells[3].textContent
            var subtotal = Number(ultimaFila.cells[3].textContent);
            total -= subtotal;

            document.getElementById("total").textContent = "$" + total.toFixed(2);

            ultimaFila.remove();

        }
    }


    else if (event.keyCode === 82 || event.keyCode === 114) {

        var tabla = document.getElementById("carrito");

        if (tabla.rows.length > 0) {

            var ultimaFila = tabla.rows[tabla.rows.length - 1];

            var precio = Number(ultimaFila.cells[2].textContent);
            var cantidad = Number(ultimaFila.cells[0].textContent);
            var subtotalAnterior = Number(ultimaFila.cells[3].textContent);

            cantidad = cantidad + 1;

            ultimaFila.cells[0].textContent = cantidad;

            var subtotalNuevo = precio * cantidad;

            ultimaFila.cells[3].textContent = subtotalNuevo;

            total = total - subtotalAnterior + subtotalNuevo;

            document.getElementById("total").textContent = "$" + total.toFixed(2);

        }

    }


    else if (event.keyCode === 13) {

        var codigo = document.getElementById("codigoProducto").value;
        var cantidad = 1;

        // Si el codigo incluye un asterisco se va multiplicar la cantidad
        if (codigo.includes("*")) {

            var entradaProducto = codigo.split("*");

            cantidad = Number(entradaProducto[0]);
            codigo = entradaProducto[1]

        }



        for (let i = 0; i < productos.length; i++) {
            if (codigo === productos[i][0]) {

                var tabla = document.getElementById("carrito");
                var row = tabla.insertRow();

                var c1 = row.insertCell(0);
                var c2 = row.insertCell(1);
                var c3 = row.insertCell(2);
                var c4 = row.insertCell(3);

                c1.setAttribute("style", "text-align:center;");
                c2.setAttribute("style", "text-align:center;");
                c3.setAttribute("style", "text-align:center;");
                c4.setAttribute("style", "text-align:center;");

                c1.innerHTML = cantidad;
                c2.innerHTML = productos[i][1];
                c3.innerHTML = productos[i][2];
                c4.innerHTML = productos[i][2] * cantidad;
                alert(productos[i][1]);

                total += productos[i][2] * cantidad;
                document.getElementById("total").textContent = "$" + total.toFixed(2);
                break;

            }



        }
    }

}