const input = document.getElementById('text')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', lengthText)

function lengthText(){
    const length = input.value.length
    result.textContent = `Text length: ${length}`
}