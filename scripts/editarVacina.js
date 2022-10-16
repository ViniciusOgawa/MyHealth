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

const btnLogout = document.getElementById("btnLogout") 

btnLogout.addEventListener("click",() => {

    logout();

})

const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", () => {

    window.location.href = "home.html";

})

function getVacinaId() {
    const urlId = new URLSearchParams(window.location.search);
    return urlId.get("uid");
}

function searchVacina(uid) {

    firebase.firestore()
    .collection("Vacinas")
    .doc(uid)
    .get()
    .then(doc => {

        if(doc.exists) {

            atualizarVacina()

        }else {

            alert("Documento não encontrado");
            window.location.href = "home.html";

        }

    })

}

function atualizarVacina() {

    let radioBtn = document.getElementsByName("tipoDose");
    let check = "";

    radioBtn.forEach((element) => {

        if(element.checked) {

            check = element.value;

        }

    })
    

    firebase.auth().onAuthStateChanged(user => {

        if(user) {

            const newVacina =  {

                data: document.getElementById("dataVacina").value,
                dose: check,
                proxVacina: document.getElementById("dataProxVacina").value,
                vacina: document.getElementById("nomeVacina").value,
                user: {
        
                    uid: user.uid
        
                }
        
            }

            firebase.firestore()
            .collection("Vacinas")
            .doc(getVacinaId())
            .update(newVacina)
            .then(() => {

                window.location.href = "home.html"

            })
            .catch(() => {

                alert("Erro ao atualizar vacina");

            })

        }
    
    });

}

const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click",(() => {

    searchVacina(getVacinaId());

}));

function exluirVacina() {

    firebase.firestore()
            .collection("Vacinas")
            .doc(getVacinaId())
            .delete()
            .then(() => {

                window.location.href = "home.html"

            })
            .catch(() => {

                alert("Erro ao excluir vacina");

            })

}

const btnExcluir = document.getElementById("btnExcluir");

btnExcluir.addEventListener("click",() => {

    exluirVacina();

})