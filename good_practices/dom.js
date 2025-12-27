document.getElementById("btnLogin").addEventListener("click", function() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const correctUser = "admin";
    const correctPassword = "1234";

    const result = document.getElementById("result");

    if (user === correctUser && password === correctPassword) {
        result.textContent = "Access granted ✅";
    } else {
        result.textContent = "Incorrect username or password ❌";
    }
});
