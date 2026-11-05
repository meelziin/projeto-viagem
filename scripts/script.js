/* scroll suave
const link = document.querySelector("a[href=#destinos']")
const destino = document.querySelector("#destinos")

link.addEventListener("click", function(event){
    event.preventDefault()
    destino.scrollIntoView({
        behavior: "smooth"
    })
}) 
*/

const btn = document.querySelector("#menu-btn")
const menu = document.querySelector("#menu")

btn.addEventListener("click", () => { 
    menu.classList.toggle("ativo")
    btn.classList.toggle('ativo')
})  

/*
addEventListener()	Aguarda o clique
classList.toggle()	Adiciona ou remove uma classe
O toggle() é a parte principal!
- Primeiro clique: adiciona a classe ativo.
- Segundo clique: remove a classe ativo.
*/