const welcome = "=== SISTEMA DE GESTIÓN DE PEDIDOS - CAFÉBYTE ===";
const menu =
"1. Registrar pedido\n" +
"2. Ver información del pedido\n" +
"3. Calcular total a pagar\n" +
"4. Cambiar estado del pedido\n" +
"5. Salir";

let clientName = "";
let product = "";
let amount = 0;
let unitPrice = 0;
let consumptionType = "";
let orderStatus = "";
let totalPrice = 0;

alert(welcome);
console.log(welcome);

let option = "";

while (option !== "5") {

    alert(menu);
    option = prompt("Seleccione una opción:");
    option = option.trim();

    // OPCIÓN 1: REGISTRAR PEDIDO
    if (option === "1") {

        clientName = prompt("Nombre del cliente:").trim();
        product = prompt("Producto solicitado:").trim();

        amount = Number(prompt("Cantidad:"));
        unitPrice = Number(prompt("Precio unitario:"));

        if (isNaN(amount) || isNaN(unitPrice)) {
            alert("Cantidad y precio deben ser números");
            continue;
        }

        let consumptionOption = prompt(
            "Tipo de consumo:\n1. Para llevar\n2. En el local"
        ).trim();

        if (consumptionOption === "1") {
            consumptionType = "Para llevar";
        } else if (consumptionOption === "2") {
            consumptionType = "En el local";
        } else {
            alert("Tipo de consumo inválido");
            continue;
        }

        orderStatus = "En preparación";
        alert("Pedido registrado correctamente");
        console.log("Pedido registrado:", clientName, product);
    }

    // OPCIÓN 2: VER PEDIDO
    else if (option === "2") {

        if (!clientName) {
            alert("No hay ningún pedido registrado");
        } else {
            alert(
                `Cliente: ${clientName}\n` +
                `Producto: ${product}\n` +
                `Cantidad: ${amount}\n` +
                `Precio unitario: ${unitPrice}\n` +
                `Consumo: ${consumptionType}\n` +
                `Estado: ${orderStatus}`
            );

            console.log("Información del pedido:", {
                clientName,
                product,
                amount,
                unitPrice,
                consumptionType,
                orderStatus
            });
        }
    }

    // OPCIÓN 3: CALCULAR TOTAL
    else if (option === "3") {

        if (!clientName) {
            alert("No hay pedido registrado");
        } else {
            totalPrice = amount * unitPrice;
            alert(`Total a pagar: ${totalPrice}`);
            console.log("Total calculado:", totalPrice);
        }
    }

    // OPCIÓN 4: CAMBIAR ESTADO
    else if (option === "4") {

        if (!clientName) {
            alert("No hay pedido registrado");
        } else {
            alert("Estado actual: " + orderStatus);

            let newStatus = prompt(
                "Nuevo estado:\n1. En preparación\n2. Entregado"
            ).trim();

            if (newStatus === "1") {
                orderStatus = "En preparación";
            } else if (newStatus === "2") {
                orderStatus = "Entregado";
            } else {
                alert("Estado inválido");
            }
        }
    }

    // OPCIÓN 5: SALIR
    else if (option === "5") {
        alert("Gracias por usar CaféByte ☕");
        console.log("Sistema finalizado");
    }

    // OPCIÓN INVÁLIDA
    else {
        alert("Opción inválida, intente de nuevo");
    }
}
