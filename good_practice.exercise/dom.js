const task = document.getElementById("task");
const btn = document.getElementById("btn")
const taskList = document.getElementById("taskList")
btn.addEventListener("click", addTask)

function addTask() {
    const taskText = task.value.trim();
    if (taskText === "") return

    createTask(taskText)
    task.value = ""
}
function createTask(text) {
    const li = document.createElement("li")
    li.textContent = text
    taskList.appendChild(li)
}