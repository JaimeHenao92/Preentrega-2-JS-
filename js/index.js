// Array global para almacenar los productos en el carrito
let carrito = [];

function mostrarprecio(codigo) {
    let precio = 0;
    let nombreProducto = "";

    switch (codigo) {
        case 1:
            precio = 17000;
            nombreProducto = "Alitas Finas Hierbas 800gr";
            alert("Tiene un valor de $17000");
            break;
        case 2:
            precio = 17000;
            nombreProducto = "Alitas Picantes 800gr";
            alert("Tiene un valor de $17000");
            break;
        case 3:
            precio = 17000;
            nombreProducto = "Alitas BBQ Grande 800gr";
            alert("Tiene un valor de $17000");
            break;
        case 4:
            precio = 15000;
            nombreProducto = "Arepollo 5ud";
            alert("Tiene un valor de $15000");
            break;
        case 5:
            precio = 57000;
            nombreProducto = "Chuzo Bucanero x10";
            alert("Tiene un valor de $57000");
            break;
        case 6:
            precio = 8000;
            nombreProducto = "Consomé 500gr";
            alert("Tiene un valor de $8000");
            break;
        case 7:
            precio = 8000;
            nombreProducto = "Corazones 500gr";
            alert("Tiene un valor de $8000");
            break;
        case 8:
            precio = 6000;
            nombreProducto = "Alas Campesinas Libra";
            alert("Tiene un valor de $6000");
            break;
        case 9:
            precio = 7500;
            nombreProducto = "Contramuslo Libra";
            alert("Tiene un valor de $7500");
            break;
        case 10:
            precio = 7500;
            nombreProducto = "Muslo Libra";
            alert("Tiene un valor de $7500");
            break;
        case 11:
            precio = 9000;
            nombreProducto = "Pechuga Libra";
            alert("Tiene un valor de $9000");
            break;
        default:
            alert("Selecciona una opción");
            return;
    }

    // Añadir el producto al carrito
    carrito.push({
        codigo: codigo,
        nombre: nombreProducto,
        precio: precio
    });
}

function mostrarcuotas() {
    console.log("Paga en:");
    for (let i = 1; i <= 3; i++) {
        console.log(i + " Cuota(s) sin interés");
    }
}

function calcularCuota(total, cantidad) {
    return total / cantidad;
}

function comprarproducto() {
    let totalCarrito = 0;
    let cuotasFinalizar;

    do {
        let codigoproducto = prompt("Ingresa código del producto");

        // código es un número y está en la lista
        if (!isNaN(codigoproducto) && codigoproducto >= 1 && codigoproducto <= 11) {
            mostrarprecio(parseInt(codigoproducto));
            mostrarcuotas();

            // productos en el carrito utilizando console.table()
            console.log("Productos en el carrito:");
            console.table(carrito);

            // mostrar el total del carrito
            totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0);
            console.log("Total del carrito: $" + totalCarrito);

            //  quiere agregar otro producto?
            if (!confirm("¿Quieres agregar otro producto?")) {
                // Preguntar el número de cuotas antes de finalizar
                cuotasFinalizar = prompt("¿A cuántas cuotas quieres llevar tu compra?");
                break;  // Salir del bucle
            }
        } else {
            console.warn("Ingresa un código válido.");
        }
    } while (true);

    // Verificar que el número de cuotas sea válido
    if (cuotasFinalizar.match(/^[0-9]+$/)) {
        //  valor de cada cuota al finalizar
        let total_cuota_finalizar = calcularCuota(totalCarrito, cuotasFinalizar);

        // Mostrar información final
        console.log("Número de cuotas al finalizar: " + cuotasFinalizar);
        console.log("Valor de cada cuota al finalizar: $" + total_cuota_finalizar);
        console.log("Gracias por su compra");

        // Limpiar la consola
        console.clear();

        // Mostrar los productos finales en el carrito
        console.log("Productos en el carrito:");
        console.table(carrito);
        console.log("Total del carrito: $" + totalCarrito);
        console.log("Valor de cada cuota: $" + total_cuota_finalizar);
        console.log("Gracias por su compra");
    } else {
        console.warn("La cantidad de cuotas debe ser un número. Gracias por su compra.");
    }
}


