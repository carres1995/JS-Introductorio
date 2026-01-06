const input = document.getElementById('text')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', lastChar)
let lastLetter = []
function lastChar(){

    const text = input.value.split(' ').forEach(i => {
        return lastLetter.push(i[i.length-1])
    });
    result.textContent = `The last character from each word: ${lastLetter.join(', ')}`
}