// Ao declarar variáveis, podemos utilizar: var, let ou const. Para var, seu escopo escapa de uma função, podendo ser acessada em outras partes do código. Já para o let, o escopo é de bloco, ou seja, só existe dentro de um espaço como uma função e ao seu término no pode ser acessada de fora. Por fim, a variável declarada com o const, como o próprio nome já diz, possui um valor constante, não podendo ser alterado ao decorrer do código.

// Tipos numéricos
let a = 10;
let b = 13.5;

// Tipo texto
let c = "allan";

// Tipo booleano
let d = false;

// Exemplo da tipagem dinâmica sendo aplicada
d = 15;

// É possível salvar funções dentro de variáveis
a = function() {};

// Variáveis não definidas retornam undefined
let e;
console.log(e);

// Exemplo de const
const pi = 3.14;
//pi = 3.1415; -> retorna erro por alterar valor de uma variável constante