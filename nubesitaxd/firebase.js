import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, signInWithPopup, FacebookAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVdHz4x6PwNhEDiXgk05bi_Ljr9vvcx_Q",
  authDomain: "apiweb2024uwu.firebaseapp.com",
  projectId: "apiweb2024uwu",
  storageBucket: "apiweb2024uwu.appspot.com",
  messagingSenderId: "294780351250",
  appId: "1:294780351250:web:3705dd81ba03b460ee79cb",
  measurementId: "G-5EE7FS2M73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const login = document.getElementById('login');
const cerrar = document.getElementById('cerrar');
const facebookLogin = document.getElementById('fa-facebook');
const googleLogin = document.getElementById('login-google');
const recuperar = document.getElementById('recuperar');

recuperar.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Se ha enviado un correo electrónico para restablecer la contraseña');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

googleLogin.addEventListener('click', (e) => {  
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});

facebookLogin.addEventListener('click', (e) => {
    var provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...

            // Open the window
            window.open("https://www.google.com/");
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
});

login.addEventListener('click', (e) => {
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then((cred) => {
        alert('Usuario logueado');
        console.log(cred.user);
    }).catch((error) => {
        const errorCode = error.code;

        if (errorCode == 'auth/user-not-found') {
            alert('Usuario no encontrado');
        } else if (errorCode == 'auth/wrong-password') {
            alert('Contraseña incorrecta');
        } else if (errorCode == 'auth/invalid-email') {
            alert('Correo inválido');
        }
    });
});

cerrar.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        alert('Sesión cerrada');
    }).catch((error) => {
        alert('Error al cerrar sesión');
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('Usuario activo');
        var email = user.emailVerified;
        if (email) {
            window.open("https://www.google.com/");
        } else {
            signOut(auth);
        }
    } else {
        console.log('Usuario inactivo');
    }
});