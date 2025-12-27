🧠 DOM + JavaScript
Buenas prácticas explicadas desde cero
1️⃣ Consultar el DOM una sola vez
❓ ¿Qué pasa realmente?

Cada vez que haces:

document.getElementById("user")


el navegador:

Busca en todo el documento HTML

Recorre el árbol del DOM

Devuelve el nodo

Esto no es gratis, cuesta tiempo.

❌ Mal
document.getElementById("user").value
document.getElementById("user").disabled = true

✅ Bien
const userInput = document.getElementById("user")
userInput.value
userInput.disabled = true

🧠 Razón

Código más rápido

Código más corto

Menos errores

Más fácil de leer

2️⃣ Separar DOM, lógica y estado
❓ ¿Qué es el DOM?

El DOM solo representa la interfaz, no la lógica.

❌ Mal
if (user === "admin") {
    document.getElementById("result").textContent = "ok"
}

✅ Bien
function isValid(user) {
    return user === "admin"
}

function renderMessage(text) {
    result.textContent = text
}

🧠 Razón

Puedes cambiar el HTML sin romper la lógica

Puedes probar funciones sin navegador

Código más limpio

3️⃣ No poner lógica en el HTML
❌ Mal
<button onclick="login()">Login</button>

¿Qué problema tiene?

HTML conoce JS (acoplamiento)

Difícil de mantener

No escalable

✅ Bien
button.addEventListener("click", login)

🧠 Razón

HTML = estructura
JS = comportamiento

4️⃣ Funciones pequeñas (una responsabilidad)
❓ Qué pasa con funciones grandes

Difíciles de entender

Difíciles de depurar

Imposibles de reutilizar

❌ Mal
function login() {
    // valida
    // muestra errores
    // bloquea inputs
}

✅ Bien
validateUser()
showError()
lockForm()

🧠 Razón

Más legible

Más reutilizable

Más profesional

5️⃣ Evitar duplicar lógica
❌ Mal
msg.textContent = "Error"
msg.textContent = "Error again"

✅ Bien
function renderMessage(text) {
    msg.textContent = text
}

🧠 Razón

Si mañana cambias el diseño, lo cambias en un solo lugar.

6️⃣ Usar textContent y no innerHTML
❓ Por qué es peligroso innerHTML

Permite inyectar HTML y JS (XSS).

❌ Mal
msg.innerHTML = userInput

✅ Bien
msg.textContent = userInput

🧠 Razón

Más seguro

Más rápido

Menos errores

7️⃣ Delegación de eventos
❓ Qué pasa si tienes 100 botones

100 listeners = más memoria.

❌ Mal
buttons.forEach(b => b.addEventListener("click", fn))

✅ Bien
container.addEventListener("click", e => {
    if (e.target.matches(".btn")) fn()
})

🧠 Razón

Menos listeners

Funciona con elementos dinámicos

Escalable

8️⃣ No acoplar lógica al HTML
❌ Mal
if (input.id === "user") {}

✅ Bien
<input data-type="user">

if (input.dataset.type === "user") {}

🧠 Razón

Cambias HTML sin romper JS.

9️⃣ Usar clases CSS, no estilos directos
❌ Mal
el.style.display = "none"

✅ Bien
el.classList.add("hidden")

🧠 Razón

CSS controla diseño

JS controla lógica

Código limpio

🔟 Usar un objeto de estado
❌ Mal
let attempts = 3
let locked = false

✅ Bien
const state = {
    attempts: 3,
    locked: false
}

🧠 Razón

Todo el estado en un lugar

Más orden

Más escalable

1️⃣1️⃣ Validar antes de usar el DOM
❌ Mal
input.value = "test"

✅ Bien
if (!input) return

🧠 Razón

Evita errores que rompen la app.

1️⃣2️⃣ Usar DOMContentLoaded
❓ Qué problema evita

JS se ejecuta antes de que el HTML cargue.

✅ Bien
document.addEventListener("DOMContentLoaded", init)

1️⃣3️⃣ No usar while con el DOM
❌ Mal
while(attempts > 0) {}

🧠 Razón

Bloquea el navegador

El DOM funciona por eventos

1️⃣4️⃣ Nombrar bien
❓ Por qué importa

Tu código lo leerás más veces de las que lo escribirás.

Ejemplo
handleLogin()
renderError()

1️⃣5️⃣ Mentalidad correcta

El DOM es la pantalla, no el cerebro.

La lógica debe vivir separada.

🎯 Qué sigue para ti

Te recomiendo este orden de aprendizaje:

Eventos

Estado

Funciones puras

DOM + render

Separación de archivos