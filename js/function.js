

var total = 0;

function buscarProducto(event) {
    if (event.keyCode === 13) {

        var codigo = document.getElementById("codigoProducto").value;
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
                c1.innerHTML = "1";
                c2.innerHTML = productos[i][1];
                c3.innerHTML = productos[i][2];
                c4.innerHTML = productos[i][2];
                alert (productos[i][1]);  
                             
                total += c3;
                document.getElementById("total").value = total;
                break;
                
            }
            
        }    
    }

}