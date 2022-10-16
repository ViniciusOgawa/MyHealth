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

const btnLogout = document.getElementById("logoutBtn");

btnLogout.addEventListener("click",() => {

    logout();

})

const btnNovaVacina = document.getElementById("btnNovaVacina");

btnNovaVacina.addEventListener("click",() => {

    window.location.href = "novaVacina.html"

})

function listarCard(database) {

    const ul = document.getElementById("ul");

    ul.innerHTML = "";

    database.forEach((element) => {

        let li = criarCard(element);

        ul.appendChild(li);

    });

}

function criarCard(element) {

    const li = document.createElement("li");
    const pNome = document.createElement("p");
    const pDose = document.createElement("p");
    const pData = document.createElement("p");
    const pInf = document.createElement("p");
    const img = document.createElement("img");
    const div = document.createElement("div");

    li.classList.add("li-vacinas");
    li.dataset.id = element.id;
    pNome.classList.add("nome");
    pDose.classList.add("dose");
    pData.classList.add("data");
    img.classList.add("img");
    div.classList.add("box-inf");
    pInf.classList.add("inf");

    pNome.innerText = element.vacina;
    pDose.innerText = element.dose;
    pData.innerText = element.data;

    if(element.proxVacina) {

        pInf.innerText = `Próxima dose em ${element.proxVacina}`;

    }else {

        pInf.innerText = "Não há próxima dose";

    }

    li.addEventListener("click",() => {

        window.location.href = "editarVacina.html?uid=" + element.uid;

    })

    div.appendChild(pInf);
    li.appendChild(pNome);
    li.appendChild(pDose);
    li.appendChild(pData);
    li.appendChild(img);
    li.appendChild(div);

    return li;

}

firebase.auth().onAuthStateChanged(user => {

    if(user) {

        carregarVacinas(user)

    }

});

function carregarVacinas(user) {
    firebase.firestore()
        .collection("Vacinas")
        .where("user.uid", "==", user.uid)
        .get()
        .then(snapshot => {

            snapshot.docs.forEach(doc => {

                listarCard(snapshot.docs.map(doc => ({
                    ...doc.data(),
                    uid: doc.id
                })));

            });

        });
}

/*

<li class="li-vacinas">
    <p class="nome">BCG</p>
    <p class="dose">Dose única</p>
    <p class="data">11/06/2022</p>
    <img src="./img/image-comprovante.png" alt="Comprovante" class="img">
    <div class="box-inf">
        <p class="inf">Nao ha proxima dose</p>
    </div>
</li>

*/