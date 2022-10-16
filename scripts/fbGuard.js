function guard() {

    firebase.auth().onAuthStateChanged((user) => {

       if(!user){

        window.location.href = "entrar.html"

       } 

    })

}

guard();