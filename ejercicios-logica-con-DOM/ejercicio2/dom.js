const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('list')

btn.addEventListener('click', () => {
    const numbers = input.value.split(",").map(n => Number(n.trim())).filter(num => !isNaN(num))
    const even = numbers.filter(n => n % 2 === 0)

    result.innerHTML = ''
    

    even.forEach(num => {
        const list = document.createElement('li')
        list.textContent=num
        result.appendChild(list)
    });

    
    
})