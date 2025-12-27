const boton = document.getElementById("btn")
const body = document.body
const colors = ["bg-green", "bg-blue", "bg-red"]
let index = 0

boton.addEventListener("click", toggleBackground)

function toggleBackground(){
    body.classList.remove(colors)
    body.classList.add(colors[index])
    index = (index + 1) % colors.length
}