function login() {

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const alert = document.getElementById("alert");

    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
    .then(() => {

        window.location.href = "home.html"

    })
    .catch(() => {

        alert.style.display = "flex"

    })

}

const btn = document.getElementById("btnLogin");

btn.addEventListener("click", () => {

    login();

})