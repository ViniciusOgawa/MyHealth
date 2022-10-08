import {app, auth} from "../config/fireBase.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

function criarConta() {

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const reptSenha = document.getElementById("rept-senha");
    const validaSenha = document.getElementById("valida-senha");
    
    if(senha.value != reptSenha.value){

        validaSenha.style.display = "flex";

    }else {

        validaSenha.style.display = "none";

        createUserWithEmailAndPassword(auth, email.value, senha.value)
        .then((data) => {

            console.log(data.user.uid);

        })

    }

}

const btn = document.getElementById("btnCadastro");

btn.addEventListener("click", () => {

    criarConta();

})
