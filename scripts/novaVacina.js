import { storage } from "../config/fireBase.js";
import { uploadBytes, ref } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-storage.js";

var file = null;

document.getElementById("fileInput").addEventListener("change",(e) => {

    file = e.target.files[0];
    console.log(file);

})

function criarVacina() {

    let radioBtn = document.getElementsByName("tipoDose");
    let check = "";
    const fileRef ="images/" + "comprovante.jpg";

    radioBtn.forEach((element) => {

        if(element.checked) {

            check = element.value;

        }

    })

    firebase.auth().onAuthStateChanged(user => {

        if(user) {

            // const vacina =  {

            //     data: document.getElementById("dataVacina").value,
            //     dose: check,
            //     proxVacina: document.getElementById("dataProxVacina").value,
            //     vacina: document.getElementById("nomeVacina").value,
            //     user: {
        
            //         uid: user.uid
        
            //     }
        
            // }

            // firebase.firestore()
            // .collection("Vacinas")
            // .add(vacina)
            // .then(() => {

            //     window.location.href = "home.html"

            // })
            // .catch(() => {

            //     alert("Erro ao salvar vacina");

            // })

            uploadBytes(ref(storage, fileRef), file)
            .then(() => {

                alert("Arquivo enviado com sucesso");

            })
            .catch((err) => {

                alert("Erro ao enviar arquivo" + err);

            })

        }
    
    });

}

function logout() {

    firebase.auth().signOut()
    .then(() => {

        alert("Deslogado com sucesso!");
        window.location.href = "entrar.html"

    })
    .catch((error) => {

        alert(error.code);

    });

}

const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click",(() => {

   criarVacina()

}))

const btnSair = document.getElementById("btnLogout") 

btnSair.addEventListener("click",() => {

    logout();

})

const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", () => {

    window.location.href = "home.html";

})