const input = document.getElementById("text")
const result = document.getElementById("result")
const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    const text = input.value.toLowerCase()
    const vowels = ['a','e','i','o','u']
    const count = [...text].filter(i => vowels.includes(i)).length

    result.textContent = `Vowels Amount: ${count}`
})