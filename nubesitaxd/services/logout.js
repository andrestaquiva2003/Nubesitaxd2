const logout = () => {

    // Redireccionar al login
    window.location.href = 'login.html';
};

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);
