// Laços de repetição permitem que se executem uma série de comandos uma ou mais vezes enquanto uma condição for satisfeita. 

// Exemplo 1: While (condição) -> faça. O while deve ser usado quando precisamos que algum comportamento se repita e não sabemos quantas vezes isso irá ocorrer até chegar no ponto desejado.
console.log('***Exemplo 1: while\n');

let count = 1;

// Enquanto a variável count for menor ou igual a 100, execute 
while (count <= 100) {
  console.log(count);
  // count++ é o mesmo que count = count + 1 ou count += 1
  count++;
}

// Exemplo 2: do while. Este laço deve ser usado quando não sabemos quantas vezes algo deve ser repetido, mas, diferente do while convencional, garante que o bloco seja executado ao menos uma vez.
console.log('\n***Exemplo 2: do while\n');

let count2 = 1;

// O laço de repetição do while primeiro executa o bloco de comandos e depois verifica a condição, repetindo o loop enquanto a condição se satisfazer
do {
  console.log(count2);
  count2++;
} while (count2 <= 100);

// Exemplo 3: for. O loop for deve ser utilizado quando sabemos quantas vezes queremos que um bloco de código seja repetido. Diferente de seus antecessores, ele pede que uma variável seja declarada dentro de sua assinatura, já com o comportamento de mudança (seja uma adição, subtração ou qualquer outra condição) em seu escopo.
console.log('\n***Exemplo 3: for\n');

// Para a variável i sendo igual a 1, enquanto for menor do que 100, faça algo, e ao fim faça i = i + 1.
for(let i = 1; i <= 100; i++) {
  console.log(i);
}