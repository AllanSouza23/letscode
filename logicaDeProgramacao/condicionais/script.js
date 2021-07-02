// Condicionais são meios de fazer com que o código tome decisões sozinho e execute ações, a partir de uma situação (condição). Para isso, temos: if -> verifica se uma condição é verdadeira; else if -> caso a condição de if não seja satisfeita, pode-se querer avaliar alguma outra condição, para isso usamos o else if; else -> caso nenhuma condição anterior seja satisfeita, pode-se ter uma condição para tal, o else; Há também o switch/case, que verifica a partir de uma variável alguns casos onde seu valor se modifique.

// Exemplo 1: if e else 
console.log('***Exemplo 1: if e else\n');
let estaSol = false;

// Se estiver sol, faça uma ação
if (estaSol) {
  console.log('Vou para a praia');
} 

// Senão, faça outra ação
else {
  console.log('Vou para o campo');
}

// Exemplo 2 usando else if -> senão se (condição), faça
console.log('\n***Exemplo 2: else if\n');
let numero = 1;

if (numero > 0) {
  console.log(`O número ${numero} é positivo`);
} else if (numero === 0) {
  console.log(`O número ${numero} é igual a zero`);
} else {
  console.log(`O número ${numero} é negativo`);
}

// Exemplo 3: operadores ternários (if e else)
console.log('\n***Exemplo 3: Operadores Ternários\n');

let numero2 = 3;
let paridade = numero2 % 2 === 0 ? `O número ${numero2} é par` : `O número ${numero2} é ímpar`;
console.log(paridade);

// Exemplo 4: switch e case
console.log('\n***Exemplo 4: Switch e Case');

let sinal = 'vermelho';

// Faz uma verificação do valor da variável sinal
switch (sinal) {
  // Caso ela seja 'verde', executa um bloco
  case 'verde':
    console.log('Pode passar');
    // O break encerra a execução / verificação do switch case
    break;
  // Caso ela seja 'amarelo', executa outro bloco
  case 'amarelo':
    console.log('Prestes a fechar, cuidado...');
    break;
  // Caso ela seja 'vermelho', executa outro bloco
  case 'vermelho':
    console.log('Fechado, não passe');
    break;
  // Caso não atenda nenhum dos valores esperados, podemos definir uma resposta default
  default:
    console.log('Sinal inválido');
    break;
}

// Exemplo usando o valor do dia atual, sendo mudado dinamicamente
console.log('\n***Exemplo 5: Switch Case\n');

// O new Date() instancia uma variável do tipo Date, uma classe do JavaScript. o comando .getDay() nos retorna um número de 0 a 6, um para cada dia da semana, sendo 0 para domingo, 1 para segunda e assim por diante. 
let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}

console.log(`Hoje é: ${dia}`);

