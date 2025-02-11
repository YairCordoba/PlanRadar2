document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Datos del formulario
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Validar que ambos campos no estén vacíos
    if (!email || !password) {
        alert('Por favor, complete ambos campos.');
        return; // Detener la ejecución si hay campos vacíos
    }

    // Definir credenciales de prueba
    const adminCredentials = {
        email: 'admin@admin.com',
        password: 'admin123'
    };

    const userCredentials = {
        email: 'user@user.com',
        password: 'user123'
    };

    // Verificar si las credenciales coinciden con las de usuario
    if (email === userCredentials.email && password === userCredentials.password) {
        // Guardamos el estado del usuario
        localStorage.setItem('userRole', 'user');  // Guardamos el valor "user"
        window.location.href = 'user_dashboard.html'; // Redirigir al perfil de usuario
    } 
    // Verificar si las credenciales coinciden con las del administrador
    else if (email === adminCredentials.email && password === adminCredentials.password) {
        localStorage.setItem('userRole', 'admin');  // Guardamos el valor "admin"
        window.location.href = 'admin_dashboard.html'; // Redirigir al perfil de admin
    }
    else {
        alert('Correo o contraseña incorrectos');
    }
});