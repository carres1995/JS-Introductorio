const inputNumbers = document.getElementById('numbers')
const inputNum = document.getElementById('num')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const result2 = document.getElementById('titleNum')

btn.addEventListener('click', countNum)

function countNum(){
    const numbers = inputNumbers.value.trim().split(',').map(Number).filter(n => !isNaN(n))
    const num = Number(inputNum.value)
    if (isNaN(num)){
        result.textContent = 'It Should be a number'
        return
    }
    const largest = numbers.filter(n => n > num)

    result.innerHTML = ""

    result2.textContent = `Numbers greater than ${num}`
    const list = document.createElement('li')
    list.textContent = largest.join(', ')
    result.appendChild(list)

}