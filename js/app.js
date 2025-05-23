
let sectionListaProdutos = document.getElementById('lista-produtos');
let spanValorTotal = document.getElementById('valor-total');

sectionListaProdutos.innerHTML = '<section class="carrinho__produtos__produto"><span class="texto-azul"></span><span class="texto-azul"></span></section>'

spanValorTotal.innerHTML = 'R$'

let valorTotal = 0

function adicionar(){
  let selectProduto = document.getElementById('produto');
  let nomeProduto = selectProduto.value.split('-')[0];
  let valorProduto = selectProduto.value.split('R$')[1];
  let inputQuantidade = document.getElementById('quantidade');

  let somaValorxQtd = parseInt(inputQuantidade.value) * parseInt(valorProduto);

  valorTotal = valorTotal + somaValorxQtd;

  if (sectionListaProdutos.innerHTML == '<section class="carrinho__produtos__produto"><span class="texto-azul"></span><span class="texto-azul"></span></section>') {
    sectionListaProdutos.innerHTML = `<section class="carrinho__produtos__produto">${inputQuantidade.value}x<span class="texto-azul">${nomeProduto}</span><span class="texto-azul">R$:${somaValorxQtd}</span></section>`;
    spanValorTotal.innerHTML = `R$:${valorTotal} `;
  } else {
    sectionListaProdutos.innerHTML = sectionListaProdutos.innerHTML + `<section class="carrinho__produtos__produto">${inputQuantidade.value}x<span class="texto-azul">${nomeProduto}</span><span class="texto-azul">R$:${somaValorxQtd}</span></section>`;
    spanValorTotal.innerHTML = `R$:${valorTotal} `;
  }
}

function limpar(){
  
sectionListaProdutos = document.getElementById('lista-produtos').innerHTML = '<section class="carrinho__produtos__produto"><span class="texto-azul"></span><span class="texto-azul"></span></section>';
spanValorTotal = document.getElementById('valor-total').innerHTML = 'R$';
valorTotal = 0
inputQuantidade = document.getElementById('quantidade').value = '';
}