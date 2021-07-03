// O filter é uma função de alta ordem que se assemelha bastante com o map, mas ao invés de retornar um valor manipulado, ele nos retorna um valor booleano: true ou false. De modo simples, ele filtra o conteúdo de um vetor a partir de uma condição.

console.log('***Filtrando números pares de um vetor:\n');

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Neste exemplo, a partir de nosso vetor inicial, estamos filtrando apenas os números pares que nele estão, ignorando os números ímpares.
const pares = vetor.filter((x) => x % 2 === 0);
console.log(pares);