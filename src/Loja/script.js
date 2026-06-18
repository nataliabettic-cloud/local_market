let produtos

window.onload = function(){
    var storeUser = localStorage.getItem("usuario")
    var user = JSON.parse (storeUser)
    var dataEntrada = new Date (user.dataEntrada)

    var dataFormatada = dataEntrada.toLocaleString("pt-BR", {
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour:"numeric",
        minute:"numeric"
    })

    document.getElementById("user").textContent = user.name
    document.getElementById("perfil").textContent = dataFormatada
    document.getElementById("IdPerfil").textContent = user.id

}
document.addEventListener("DOMContentLoaded", function (){
    fetch("../Dados/data.json")
        .then((response) => response.json())
        .then((data) => {
            produtos = data

            const produtosContainer = document.getElementById ("produtos-container")

            produtos.forEach((produto, index) => {
                const card = document.createElement("div")
                card.innerHTML =`
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
                produtosContainer.appendChild(card)
                

                }) 
            })
        }
    )

