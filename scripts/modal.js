const btn = document.querySelectorAll("[data-modal-control]")

btn.forEach((element) => {

    element.addEventListener("click",() => {

        document.getElementById("modal-excluir").classList.toggle("show-modal");
    
    })

})
