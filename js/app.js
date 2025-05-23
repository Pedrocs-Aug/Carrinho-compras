
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
  document.getElementById('lista-produtos').innerHTML = ''; // Limpa o conteúdo
  document.getElementById('valor-total').innerHTML = 'R$0'; // Define o valor total inicial para R$0
  valorTotal = 0; // Zera a variável de controle
  document.getElementById('quantidade').value = '1'; // Reseta a quantidade para um valor padrão, por exemplo, 1
}