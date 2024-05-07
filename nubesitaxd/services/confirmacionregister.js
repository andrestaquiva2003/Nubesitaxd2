const userNameField = document.querySelector("#edtuser");
const passwordField = document.querySelector("#edtpassword");
const registerButton = document.querySelector("#registerBtn");
const edtconfirmuserField = document.querySelector("#edtconfirmuser");
const edtconfirmarpasswordField = document.querySelector("#edtconfirmarpassword");
console.log(userNameField, passwordField, edtconfirmuserField, edtconfirmarpasswordField);

// Función para validar el campo de usuario
const validateEmptyField = (field) => {
    const fieldValue = field.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco
    if (fieldValue.length === 0) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Campo requerido";
        return false; // Indicar que el campo no está válido
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        return true; // Indicar que el campo está válido
    }
};

const validateEmailFormat = (field) => {
    const fieldValue = field.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (fieldValue.length > 0 && !regex.test(fieldValue)) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Formato de correo inválido";
        return false; // Indicar que el campo no está válido
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        return true; // Indicar que el campo está válido
    }
};

// Función para validar la contraseña
const validatePassword = () => {
    const passwordValue = passwordField.value.trim();
    const regexUpperCase = /[A-Z]/; // Al menos una letra mayúscula
    const regexLowerCase = /[a-z]/; // Al menos una letra minúscula
    const regexDigit = /[0-9]/; // Al menos un dígito
    const regexSpecialChar = /[$&+,:;=?@#|'<>.^*()%!-]/; // Al menos un carácter especial

    let isValid = true;
    let message = "La contraseña debe cumplir con las siguientes características:\n";

    if (passwordValue.length < 8) {
        isValid = false;
        message += "- Tener al menos 8 caracteres\n";
    }

    if (passwordValue.length > 64) {
        isValid = false;
        message += "- Tener como máximo 64 caracteres\n";
    }

    if (!regexUpperCase.test(passwordValue)) {
        isValid = false;
        message += "- Contener al menos una letra mayúscula\n";
    }

    if (!regexLowerCase.test(passwordValue)) {
        isValid = false;
        message += "- Contener al menos una letra minúscula\n";
    }

    if (!regexDigit.test(passwordValue)) {
        isValid = false;
        message += "- Contener al menos un dígito\n";
    }

    if (!regexSpecialChar.test(passwordValue)) {
        isValid = false;
        message += "- Contener al menos un carácter especial\n";
    }

    if (!isValid) {
        alert(message);
    }

    return isValid;
};



// Función para validar todos los campos y habilitar o deshabilitar el botón de registro
const validateFields = () => {
    const emailValid = validateEmailFormat(userNameField);
    const userNameValid = validateEmptyField(userNameField);
    const passwordValid = validateEmptyField(passwordField) && validatePassword();
    const confirmpasswordValid = validateEmptyField(edtconfirmarpasswordField);
    const confirmuser= validateEmptyField(edtconfirmuserField);
    return userNameValid && passwordValid && confirmpasswordValid && confirmuser && emailValid; // Devolver true si todos los campos son válidos
};

// Función para redireccionar si todos los campos son válidos
const redirect = () => {
    if (validateFields()) {
        window.location.href = "home.html";
    } else {
        alert("Por favor, complete el formulario correctamente.");
    }
};

// Llamar a la función de validación automáticamente cuando se carga la página
window.addEventListener("load", () => {
    validateFields(); // Validar los campos al cargar la página
    // Agregar el evento click al botón de registro
    registerButton.addEventListener("click", redirect);
});

// Llamar a las funciones de validación en un intervalo de tiempo específico

