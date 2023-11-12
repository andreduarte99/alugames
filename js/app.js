function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');3
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //console.log(gameClicado);
    //console.log(imagem);
    //console.log(botao);
    //alert(nomeJogo.textContent);

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}   

/*
Analisar o código de uma página HTML para entender sua estrutura e planejar o código de sua funcionalidade;

Recuperar elementos da página com JavaScript, com o uso das funções document.querySelector() e document.getElementById();

Declarar variáveis no JavaScript para armazenar elementos recuperados da página;

Acessar a lista de classes que um elemento da página possui, via propriedade classList;

Verificar se um elemento da página possui uma determinada classe CSS, via função classList.contains();

Remover uma classe CSS de um elemento da página, via função classList.remove();

Adicionar uma classe CSS a um elemento da página, via função classList.add();

Alterar o texto de um elemento da página, via propriedade textContent;

Declarar um bloco condicional if/else, para implementar a funcionalidade de alterar o status de um jogo.

*/