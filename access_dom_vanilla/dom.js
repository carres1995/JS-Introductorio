// 🔹 Conexión con el DOM
const form = document.getElementById("formLogin")
const userInput = document.getElementById("name")
const passwordInput = document.getElementById("password")
const result = document.getElementById("result")

// 🔹 Configuración
const MAX_ATTEMPTS = 3

const users = {
    user: {
        password: "12345",
        role: "user"
    },
    admin: {
        password: "admin123",
        role: "admin"
    }
}

// 🔹 Estado del sistema
const state = {
    attempts: MAX_ATTEMPTS,
    locked: false
}

// 🔹 Evento principal
form.addEventListener("submit", handleLogin)

// 🔹 Función de login
function handleLogin(e) {
    e.preventDefault()

    if (state.locked) return

    const username = userInput.value.trim()
    const password = passwordInput.value.trim()

    if (!username || !password) {
        showMessage("Complete all fields")
        return
    }

    const user = users[username]

    if (!user) {
        processError()
        return
    }

    if (user.password === password) {
        showMessage(`Welcome ${user.role}`)
        return
    }

    // 🔑 Regla especial del administrador
    if (user.role === "admin") {
        showMessage("Admin access granted despite error")
        return
    }

    processError()
}

// 🔹 Manejo de errores
function processError() {
    state.attempts--

    if (state.attempts === 0) {
        lockForm()
        showMessage("Access blocked")
    } else {
        showMessage(`Incorrect data. Attempts left: ${state.attempts}`)
    }
}

// 🔹 Bloqueo del formulario
function lockForm() {
    state.locked = true
    form.querySelectorAll("input, button").forEach(el => el.disabled = true)
}

// 🔹 Mostrar mensajes
function showMessage(message) {
    result.textContent = message
}
