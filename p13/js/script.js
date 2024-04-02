document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === "usu@123" && password === "usu123") {
        localStorage.setItem('usuario', email);
        localStorage.setItem('contraseña', password);

        window.location.href = "usuario.html";
    }
    else if (email === "admin@123" && password === "admin123") {
        localStorage.setItem('usuario', email);
        localStorage.setItem('contraseña', password);

        window.location.href = "administrador.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
