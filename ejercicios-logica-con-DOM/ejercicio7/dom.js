const input = document.getElementById('word')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', reverseWord)

function reverseWord(){
    const word = input.value.trim()
    if (!word) {
        result.textContent = "Please enter a word"
        return
    }
    const arr = [...word].reverse().join("").toUpperCase()

    result.textContent = arr
}