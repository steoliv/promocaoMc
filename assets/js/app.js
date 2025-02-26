let windowWidth = window.innerWidth;
let produtosMac = document.querySelector(".items");


fetch('../../api/api.json').then((response) => {
    response.json().then((dados) => {
        dados.produtos.map((produtos, index) => {
           produtosMac.innerHTML +=  `
            <div class="items-item item-${index}">
                <div class="item-info">
                    <p>${produtos.nome}</p>
                    <p class="item-preco">
                        <span class="item-preco-sifrao">R$</span>
                        <span class="item-preco-diferente">${produtos.preco}</span>
                        <u class="item-preco-centavos">,${produtos.centavos}</u> 
                        <span class="item-preco-texto">Cada combo</span> 
                    </p>
                </div>
                <img src="assets/images/${windowWidth <= 1080 ? produtos.imagem_v : produtos.imagem_h}" alt="">
            </div>`;
        })
    })
})


