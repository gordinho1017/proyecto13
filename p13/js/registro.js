document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var id = document.getElementById('id').value;

    // Validar el nombre, la contraseña, el email y el ID (igual que antes)

    // Si todos los campos son válidos
    if (nombre && password && email && id) {
        // Guardar los datos en el localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        localStorage.setItem('id', id);

        // Mostrar un mensaje de éxito
        alert('Registro exitoso. Los datos han sido guardados en el localStorage.');

        // Limpiar el formulario
        document.getElementById('registroForm').reset();
    } else {
        // Mostrar un mensaje de error si algún campo está vacío o no es válido
        alert('Por favor, completa todos los campos correctamente.');
    }
});

// Para recuperar los datos del localStorage y mostrarlos en algún lugar de tu aplicación
var storedNombre = localStorage.getItem('nombre');
var storedPassword = localStorage.getItem('password');
var storedEmail = localStorage.getItem('email');
var storedId = localStorage.getItem('id');

// Por ejemplo, podrías mostrar los datos en algún elemento HTML
document.getElementById('nombreGuardado').textContent = storedNombre;
document.getElementById('passwordGuardado').textContent = storedPassword;
document.getElementById('emailGuardado').textContent = storedEmail;
document.getElementById('idGuardado').textContent = storedId;
