const form = document.getElementById("emailForm")
const emailInput = document.getElementById("email")
const message = document.getElementById("message")
form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault()

    const email = emailInput.value.trim()

    if (!isValidEmail(email)) {
        renderMessage("Invalid email format", "error")
        return
    }

    renderMessage("Email sent successfully", "success")
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
function renderMessage(text, type) {
    message.textContent = text
    message.classList.remove("success", "error")
    message.classList.add(type)
}
