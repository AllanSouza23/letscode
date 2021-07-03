// Diferentemente da função map e da função filter, que manipulam vetores e ao fim retornam um vetor, a função reduce coleta dados de um vetor e agrega e reduz eles a um valor ou a um objeto. O reduce exige ao menos dois parâmetros ao ser utilizado, sendo eles o estado e o item do vetor a ser reduzido.

console.log('***Entendendo como a função reduce trabalha:\n');

const vetor = [1, 2, 3, 4, 5, 6];

// Ao usar reduce, podemos querer adicionar um estado inicial, que escrevemos da seguinte maneira: const soma = vetor.reduce((estado, item) => estado + item, 0);
// Desta forma, o estado inicial será o número 0.
const soma = vetor.reduce((estado, item) => estado + item);

console.log(`Vetor inicial: ${vetor}`);
console.log(`Soma do vetor: ${soma}`);

console.log('\n***Utilizando o reduce de uma forma mais complexa:\n');
console.log('- Suponhamos que queremos somar a matriz abaixo:\n');

const matriz = [
  [1, 2, 3, 4, 5, 6],
  [6, 5, 4, 3, 2, 1],
  [6, 1, 5, 2, 3, 4]
]; 

console.log(matriz);

const somaColuna = (estado, item) => {
  return [estado[0] + item[0] + item[1], estado[1] + item[2] + item[3], estado[2] + item[4] + item[5]];
};

const vetor2 = matriz.reduce(somaColuna, [0, 0, 0]);  // Nota-se que definimos o estado incial como sendo [0, 0, 0]
console.log(`\nVetor com soma dos elementos de duas em dus colunas: ${vetor2}`);