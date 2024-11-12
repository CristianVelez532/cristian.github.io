document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nombreError = document.getElementById('nombreError');
    const apellidoError = document.getElementById('apellidoError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateName(input, errorElement) {
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!nameRegex.test(input.value)) {
            errorElement.textContent = 'No se permiten números o caracteres especiales';
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    function validateEmail(input, errorElement) {
        if (!input.value.endsWith('@lajoseroberto.edu.co')) {
            errorElement.textContent = 'El correo debe ser del dominio @lajoseroberto.edu.co';
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    function validatePassword(input, errorElement) {
        if (input.value.length < 8) {
            errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres';
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    nombreInput.addEventListener('input', () => validateName(nombreInput, nombreError));
    apellidoInput.addEventListener('input', () => validateName(apellidoInput, apellidoError));
    emailInput.addEventListener('input', () => validateEmail(emailInput, emailError));
    passwordInput.addEventListener('input', () => validatePassword(passwordInput, passwordError));

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isNombreValid = validateName(nombreInput, nombreError);
        const isApellidoValid = validateName(apellidoInput, apellidoError);
        const isEmailValid = validateEmail(emailInput, emailError);
        const isPasswordValid = validatePassword(passwordInput, passwordError);

        if (isNombreValid && isApellidoValid && isEmailValid && isPasswordValid) {
            alert('Formulario enviado correctamente');
            
        }
    });
});