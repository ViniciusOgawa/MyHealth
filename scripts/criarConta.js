function criarConta() {

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const reptSenha = document.getElementById("rept-senha");
    const validaSenha = document.getElementById("valida-senha");
    
    if(senha.value != reptSenha.value){

        validaSenha.style.display = "flex";

    }else {

        validaSenha.style.display = "none";

        firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
        .then((data) => {

            alert("Conta criada com sucesso!");

        })
        .catch((error) => {

            alert(error);

        })

    }

}

const btn = document.getElementById("btnCadastro");

btn.addEventListener("click", () => {

    criarConta();

})
