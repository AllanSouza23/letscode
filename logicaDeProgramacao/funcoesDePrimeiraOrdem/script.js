// De forma simples, uma função de primeira ordem é uma função que utiliza de outras funções à seu favor

console.log('***Recebendo uma função como parâmetro:\n');
const subtrair = (a, b) => a - b;
const aplicaOperacao = (a, b, operacao) => operacao(a, b);

let resultado = aplicaOperacao(10, 3, subtrair);
console.log(`O resultado obtido foi: ${resultado}`);

console.log('\n***Retornando uma função:\n');

const somarX = (x) => (y) => x + y;

const somar2 = somarX(2);

console.log(`O resultado obtido foi: ${somar2(5)}`);