/*document.addEventListener("DOMContentLoaded", function() {
    const login = prompt("Ingrese su login:");
    const password = prompt("Ingrese su password:");

    if (login === "Rosana" && password === "123465") {
        alert("Bienvenida, administradora");
    } else {
        alert("Acceso denegado. Redirigiendo al inicio...");
        window.location.href = "index.html";
    }
});
*/

document.addEventListener("DOMContentLoaded", function() {
    async function getCredentials() {
        const { value: login } = await Swal.fire({
            title: 'Ingrese su login',
            input: 'text',
            inputPlaceholder: 'Login',
            showCancelButton: true,
            confirmButtonText: 'Siguiente',
            cancelButtonText: 'Cancelar'
        });

        if (!login) {
            Swal.fire('Acceso cancelado', '', 'info');
            return;
        }

        const { value: password } = await Swal.fire({
            title: 'Ingrese su password',
            input: 'password',
            inputPlaceholder: 'Password',
            showCancelButton: true,
            confirmButtonText: 'Ingresar',
            cancelButtonText: 'Cancelar'
        });

        if (!password) {
            Swal.fire('Acceso cancelado', '', 'info');
            return;
        }

        if (login === "Rosana" && password === "123465") {
            Swal.fire({
                title: 'Bienvenida',
                text: 'Bienvenida, administradora',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Acceso Denegado',
                text: 'Acceso denegado. Redirigiendo al inicio...',
                icon: 'error',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = "index.html";
            });
        }
    }

    getCredentials();
});
