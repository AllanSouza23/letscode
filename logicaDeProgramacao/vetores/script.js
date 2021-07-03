// Vetor em JavaScript é uma lista dinâmica de informações (ou seja, seu tamanho pode aumentar conforme a execução do código), onde podemos ir populando seu interior com novas informações, podendo elas, inclusive, ser variáveis.

console.log('***Consultando vetor através de seu índice:\n');
let vetor = [10, 20, 30, 40, 50];
// Para acessar valores de um vetor, deve-se indicar sua posição (índice), lembrando que as posições começam no número 0. Abaixo estamos pegando o 3º valor
console.log(vetor[2]);

console.log('\n***Alterando valor e tipo de dado utilizando o índice:\n');
// Podemos, através do índice, alterar valores de nosso vetor
vetor[2] = '25';
console.log(vetor[2]);

console.log('\n***Criando um vetor vazio:\n');
// Podemos também criar um vetor vazio, ou seja, sem nenhum elemento
let vetor2 = [];
console.log(vetor2);

console.log('\n***Populando nosso vetor usando o método .push():\n');
// A partir disso, podemos popular este vetor de diversas maneiras, como por exemplo, usando um laço de repetição 
for (let i = 0; i < 10; i++) {
  // O método .push() adiciona um elemento ao fim do vetor. Além dele, existem outros métodos que podem ser bem úteis no dia-a-dia. São eles: .pop() -> remove o último elemento do vetor; .unshift(elemento) -> adiciona um elemento ao início de nosso vetor; .shift() -> remove o primeiro elemento de nosso vetor.
  vetor2.push(i); 
}
console.log(vetor2);

console.log('\n***Percorrendo nosso vetor usando .length como meio dinâmico de saber o tamanho dele:\n');
// Podemos usar um laço for para percorrer nosso vetor 
let vetor3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// O método .length verifica e nos retorna de forma dinâmica o tamanho do vetor
for (let j = 0; j < vetor3.length; j++) {
  console.log(vetor3[j]);
}

console.log('\n***Percorrendo o vetor usando o comando for of:\n');
// Podemos usar o for of para percorrer o vetor também, deste modo, o valor anterior ao of assume o valor de cada elemento dentro de nosso vetor, não precisando passar o índice.
for (let numero of vetor3) {
  console.log(numero);
}

console.log('\n***Percorrendo o vetor usando o comando for in:\n');
// Outro jeito de percorrer nosso vetor é usando o for in. Nesse caso, a variável antes do in verifica e retorna a posição de cada elemento dentro do vetor
for (let indice in vetor3) {
  console.log(vetor3[indice]);
}

console.log('\n***O que é matriz e como percorrê-la:\n');
// Existem também o que chamamos de matriz, costumeiramente chamada de vetor de vetores. Nela, que é um tipo mais complexo de vetor, possuímos uma espécie de tabela, onde temos valores em linhas (vetores) e colunas (índices)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Percorrendo a matriz, a primeira variável declarada equivale às linhas de nossa matriz, e a segunda variável, dentro de outro loop for of, equivale às colunas da matriz
for (let linha of matriz) {
  for (let coluna of linha) {
    console.log(coluna);
  }
}
