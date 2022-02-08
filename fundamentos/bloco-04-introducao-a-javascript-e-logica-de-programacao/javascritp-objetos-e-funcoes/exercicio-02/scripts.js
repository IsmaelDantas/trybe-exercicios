//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, 
//incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('EXERCICIO 01');
console.log('Bem vinda, ' + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, 
//em seguida, imprima o objeto no console. Valor esperado no console:
console.log('EXERCICIO 02');
info.recorrente = 'Sim';
console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
console.log('EXERCICIO 03');
for (let show in info){
    console.log(show);
}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// Valor esperado no console:
console.log('EXERCICIO 04');
for (let show2 in info){
    console.log(info[show2]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os 
// seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 
// 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada
//  uma das chaves. Valor esperado no console:

console.log('EXERCICIO 05');
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christimas on Bear Mountain, Dell\'s Four Color COmics #178',
    nota: 'O Último MacPatinhas',
    recorrente: 'Sim',
}

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
    console.log('Ambos recorrentes');
} else if (info.recorrente === 'Não' && info2.recorrente === 'Sim') {
    console.log('Margarida não recorrente');
} else if (info.recorrente === 'Sim' && info2.recorrente === 'Não') {
    console.log('Tio Patinhas não recorrente');
} else {
    console.log('Ambos não recorrentes');
}

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , 
// e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama
//  'O Pior Dia de Todos'".
console.log('EXERCICIO 06');
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro farotio de ' + leitor.nome + 
  ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

//7 -  Adicione um novo livro favorito na chave livrosFavoritos , que é um 
//array . Atribua a esta chave um objeto contendo as seguintes informações:

console.log('EXERCICIO 07');
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
console.log(leitor);

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato:
//  "Julia tem 2 livros favoritos".
console.log('EXERCICIO-08');
let countBooks = [leitor.livrosFavoritos[0].titulo, leitor.livrosFavoritos[1].titulo];
console.log(countBooks);

console.log(leitor.nome + ' tem ' + countBooks.length + ' livros favoritos');