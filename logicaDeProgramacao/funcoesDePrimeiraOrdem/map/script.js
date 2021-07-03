// A função map é uma função específica de vetores, recebendo uma função como parâmetro e fazendo uma manipulação dos ítens do vetor. Podemos receber até 3 parâmetros, sendo: Um parâmetro para representar o valor de um elemento no vetor; Dois parâmetros para representar o valor de um elemento no vetor e sua posição; Três parâmetros para representar o valor de um elemento no vetor, sua posição e o vetor inteiro.

console.log('***Vetor em Strings:\n');
const vetorEmStrings = ["10", "20", "30"];
console.log(vetorEmStrings);

// O comando parseInt realiza a conversão de um valor do tipo string para o tipo integer.
console.log('\n***Vetor convertido em inteiros através do método .map():\n');
const stringToInteger = (x) => parseInt(x);

// Ao usar o map, não temos mais a necessidade de usar um laço de repetição for em nosso vetor
const vetorEmInteiros = vetorEmStrings.map(stringToInteger);
console.log(vetorEmInteiros);

// Provando que a conversão de string para integer ocorreu de forma correta, vamos elevar cada elemento à 2º potência
console.log('\n***Prova real de que os valores foram convertidos, elevando o vetor ao quadrado:\n');
const vetorElevadoAoQuadrado = vetorEmInteiros.map(x => x * x);
console.log(vetorElevadoAoQuadrado);