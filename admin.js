document.addEventListener("DOMContentLoaded", function() {
    const login = prompt("Ingrese su login:");
    const password = prompt("Ingrese su password:");

    if (login === "Rosana" && password === "123465") {
        alert("Bienvenida, administradora");
    } else {
        alert("Acceso denegado. Redirigiendo al inicio...");
        window.location.href = "index.html";
    }
});
