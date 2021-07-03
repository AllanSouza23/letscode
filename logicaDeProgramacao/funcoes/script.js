// Uma função, de forma simplificada, é uma maneira de escrever um código que possa ser reutilizado em uma ou mais partes de nosso programa, otimizando nosso código e reduzindo tempo gasto e linhas. Também chamadas de métodos, as funções podem ou não ter uma assinatura, ou seja, podem ser passados à ela parâmetros na sua chamada.

console.log('***Criando e executando uma função sem usar parâmetros:\n');
// Declarando uma função sem parâmetros
function imprimaOla() {
  console.log('Olá');
}

// Chamando nossa função
imprimaOla();

// Podemos incrementar nossa função, passando um parâmetro em sua declaração e em sua chamada
console.log('\n***Criando e executando uma função que possui parâmetros:\n');
function imprimirTexto(texto) {
  console.log(texto);
}

imprimirTexto('Bom dia, boa tarde, boa noite!');

// Desta forma, o código pode ser reutilizado com outros parâmetros, tornando nossa função dinâmica
imprimirTexto('Como vai seu dia?');

// Em determinados casos, podemos querer que nossa função nos retorne algum valor, e para isso usamos a palavra reservada return
console.log('\n***Criando função que possui retorno:\n');

function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 4);
console.log(`O resultado obtido foi: ${resultado}`);

// Podemos também criar funções anônimas, ou seja, que não possuem um nome, e associá-las a uma variável
console.log('\n***Criando uma função anônima:\n');

const somarFuncaoAnonima = function(a, b) {
  return a + b;
}

console.log(`O resultado obtido foi: ${somarFuncaoAnonima(3, 4)}`);

// Existe também um jeito mais sucinto de se escrever uma função anônima, conhecida como função de flecha ou arrow function. Nela, não precisamos sequer escrever as palavras reservadas function e return.
console.log('\n***Criando e executando uma Arrow Function:\n');

const somarArrowFunction = (a, b) => a + b; 

console.log(`O resultado obtido foi: ${somarArrowFunction(3, 4)}`);
