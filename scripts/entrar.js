import {app, auth} from "../config/fireBase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

function login() {

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    console.log(email.value)
    console.log(senha.value)

    signInWithEmailAndPassword(auth, email.value, senha.value)
    .then((data) => {

        home();

    })

}

const btn = document.getElementById("btnLogin");

btn.addEventListener("click", () => {

    login();

})