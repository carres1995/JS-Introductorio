const list = document.getElementById('inputArray')
const btn = document.getElementById('btn')
const result = document.getElementById('result')


btn.addEventListener('click',getDoubles)

function getDoubles() {
    const numbers = list.value
        .split(',')
        .map(n => n.trim())

    const unique = [...new Set(numbers)]

    result.textContent = unique.join(', ')
}