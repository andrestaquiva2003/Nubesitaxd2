const logout = () => {
    // Eliminar el token u otro dato de sesión si es necesario
    // Ejemplo: sessionStorage.removeItem('token');
    
    // Redireccionar al archivo index.html
    window.location.href = 'login.html';
};

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);
