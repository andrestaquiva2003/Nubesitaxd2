const userNameField = document.querySelector("#edtuser");
const passwordField = document.querySelector("#edtpassword");
const loginButton = document.querySelector("#loginbtn");

console.log(userNameField, passwordField);

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

// Función para validar el formato del correo electrónico
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

// Función para validar todos los campos y habilitar o deshabilitar el botón de inicio de sesión
const validateFields = () => {
    const userNameValid = validateEmptyField(userNameField);
    const passwordValid = validateEmptyField(passwordField);
    return userNameValid && passwordValid; // Devolver true si todos los campos son válidos
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
    // Agregar el evento click al botón de inicio de sesión
    loginButton.addEventListener("click", redirect);
});

// Llamar a las funciones de validación en un intervalo de tiempo específico
setInterval(validateFields, 1000); // Validar los campos cada segundo (1000 ms)
