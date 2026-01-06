const input = document.getElementById('word')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', average)

function average(){
    const numbers = input.value.trim().split(',')
    const list =numbers.map(n => Number(n)).filter(n => !isNaN(n))
    if(list.length === 0){
        result.textContent = 'please enter several numbers'    
    }
    const sum = list.reduce((acc, n) => (acc + n),0)
    const prom = sum / numbers.length
    result.textContent = `Prom is ${prom}`

}