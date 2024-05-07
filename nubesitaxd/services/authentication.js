import { login_auth } from "../services/firebase.js"

const recibir = document.getElementById('loginobtn')

async function validar() {

    const email = document.getElementById('edtuser').value
    const password = document.getElementById('edtpassword').value

    const verificar = login_auth(email, password)
    const validation = await verificar

    if (validation != null) {
        alert("User authentication succesfull " + email)
        window.location.href = "../home.html"
    }
    else {
        alert("Error de usuario verifique usuario y/o contraseña")
        console.log("Sesion " + email + " not validation")
    }
}

window.addEventListener('DOMContentLoaded', () => {
    recibir.addEventListener('click', validar);
});