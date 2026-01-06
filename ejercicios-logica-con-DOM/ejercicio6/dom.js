const inputText = document.getElementById('text')
const inputLetter = document.getElementById('letter')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', countLetter)

function countLetter(){
    let counts = 0
    const l = inputLetter.value
    const count = inputText.value
    
    count.split("").forEach(i => {
        if (i === l){
            counts ++
        }
    });
    result.textContent = `Letter ${l} is written ${counts} time`
}