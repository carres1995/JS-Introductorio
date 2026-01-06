const welcome = "===SISTEMA DE GESTION DE PEDIDOD-CAFEBITES==="
const menu = "1.registrar pedido\n2. Ver informacion del pedido\n3.calcular estado del pedido\n4. Cambiar estado del pedido\n5. Exit\n"
let names
let product
let amount
let unitaryPrice
let typeConsumption
let orderStatus
let totalPrice


alert(welcome)
console.log(welcome)

let option=""

while (option !== "5"){
    alert(menu)
    console.log(menu)
    option = prompt("choose option: ").trim()

    if (option === "1") {

        names = prompt("Enter the name: ")

        product = prompt("Enter the product: ")

        amount = Number(prompt("Enter the amount: "))

        unitaryPrice = Number(prompt("Enter the price"))

        typeConsumption = prompt("Enter type of consumption: \n1. To go \n2. In the premises\n")

        if (typeConsumption === "1"){
            typeConsumption = "To go"
        } else if (typeConsumption === "2"){
            typeConsumption = "In the premises"
        } else{
            console.error("Invalid data!!")
            alert("Invalid data!!!")
            continue
        }
        orderStatus = "In preparing"
        alert("Customer successfully logged in!!!")
    }
    else if(option === "2"){
        if (!names){
            alert("Don't exist")
        }
        else{
            alert(`name: ${names}\n` +
                `product: ${product}\n` +
                `amount: ${amount}\n` +
                `unitary price: ${unitaryPrice}\n` +
                `type consumption: ${typeConsumption}\n` +
                `order status: ${orderStatus}`)
            console.log(`name: ${names}\n` +
                `product: ${product}\n` +
                `amount: ${amount}\n` +
                `unitary price: ${unitaryPrice}\n` +
                `type consumption: ${typeConsumption}\n` +
                `order status: ${orderStatus}`)    
        }        
    }
    else if (option === "3"){
        if (!names){
            console.log("Don't register")
            alert("Don't register")
        } else{
            totalPrice = unitaryPrice * amount
            console.log(`total to pay for order from  ${names} is: ${totalPrice}`)
            alert(`total to pay for order from  ${names} is: ${totalPrice}`)
        }
    }
    else if(option === "4"){
        if(!names){
            alert("No order registered")
        }
        else{
            console.log("Current state: " + orderStatus)
            alert("Current state: " + orderStatus)
            let newStatus= prompt("change status: \n1. In preparation\n2. Delivered")
            if (newStatus === "1"){
                orderStatus="In preparation"
            }else if(newStatus === "2"){
                orderStatus="Delivered"
            } else {
                alert("Invalid option")
            }
            alert("Status: " + orderStatus)
        }
    } 
    else if(option === "5"){
        console.log("thanks for your visit!!")
        alert("thanks for your visit!!")
    }
    else{
        alert("Invalid option")
    }
}