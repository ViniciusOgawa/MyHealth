function recoverPassword() {

    const email = document.getElementById("email");

    firebase.auth().sendPasswordResetEmail(email.value)
    .then(() => {

        alert("Email enviado com sucesso!")
        window.location.href = "entrar.html"

    })
    .catch((error) => {

        alert(error.code)

    })

}

const btn = document.getElementById("recoverBtn");

btn.addEventListener("click",() => {

    recoverPassword();

})