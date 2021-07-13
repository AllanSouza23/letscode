# **Laços de Repetição**
- _Laços de repetição_ permitem que se executem uma série de comandos uma ou mais vezes enquanto uma condição for satisfeita. 
***
## **Exemplo 1: While (condição) -> faça.**
- O _while_ deve ser usado quando precisamos que algum comportamento se repita e não sabemos quantas vezes isso irá ocorrer até chegar no ponto desejado.
  
_console.log('***Exemplo 1: while\n');_

_let count = 1;_

#### **Abaixo, temos a instrução: enquanto a variável count for menor ou igual a 100, execute:** 
_while (count <= 100) {\
  console.log(count);_
  #### **Abaixo, temos uma instrução count++. Ela é o mesmo que dizer count = count + 1 ou count += 1**
  _count++;\
}_
***
## **Exemplo 2: do while.**
- Este laço deve ser usado quando não sabemos quantas vezes algo deve ser repetido, mas, diferente do while convencional, garante que o bloco seja executado ao menos uma vez.

_console.log('\n***Exemplo 2: do while\n');_

_let count2 = 1;_

#### **O laço de repetição do while primeiro executa o bloco de comandos e depois verifica a condição, repetindo o loop enquanto a condição se satisfazer.**
_do {\
  console.log(count2);\
  count2++;\
} while (count2 <= 100);_
***
## **Exemplo 3: for.**
- O loop for deve ser utilizado quando sabemos quantas vezes queremos que um bloco de código seja repetido. Diferente de seus antecessores, ele pede que uma variável seja declarada dentro de sua assinatura, já com o comportamento de mudança (seja uma adição, subtração ou qualquer outra condição) em seu escopo.

_console.log('\n***Exemplo 3: for\n');_

#### **Abaixo, temos a seguinte instrução: para a variável i sendo igual a 1, enquanto for menor do que 100, faça algo, e ao fim faça i = i + 1.**
_for(let i = 1; i <= 100; i++) {\
  console.log(i);\
}_