{/* <article class="item" onclick="removeItem(event)"></article>

<button id="botao" onclick="adicionaItem(event)">Adicionar mais um item</button>
<button id="botao" onclick="estilizacao(event)">Estilização</button> */}

function adicionaItem() {
    const $container = document.querySelector(".container")
    const $newObj = document.createElement("div")
    $newObj.setAttribute('class','newObj')
    $newObj.setAttribute('onclick','removeItem(event)')
    $newObj.innerHTML =
    `
        <p>criado pelo JS</p>
        
    `
    $container.appendChild($newObj)
}

function estilizacao(){
    $estilizar = document.querySelectorAll('.newObj')
    $estilizar.forEach(element => {
        element.classList.remove('newObj')
        element.classList.add('item')        
    });
}

function removeItem(event) {
    event.target.remove()
    
}