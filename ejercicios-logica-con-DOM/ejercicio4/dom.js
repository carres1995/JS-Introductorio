const input = document.getElementById('text')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', upperText)

function upperText(){
    const upper = input.value.toUpperCase()
    result.textContent = `Text length: ${upper}`
}