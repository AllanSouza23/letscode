# **Variáveis em JavaScript**
- Variáveis são espaços que podemos alocar em memória, que podem ser ou não alterados conforme o programa seja executado.
-  Ao declarar variáveis, podemos utilizar: **_var_**, **_let_** ou **_const_**. 
-  Para _var_, seu escopo escapa de uma função, podendo ser acessada em outras partes do código.
-  Já para o _let_, o escopo é de bloco, ou seja, só existe dentro de um espaço como uma função e ao seu término no pode ser acessada de fora. 
-  Por fim, a variável declarada com o _const_, como o próprio nome já diz, possui um valor constante, não podendo ser alterado ao decorrer do código (apesar de chamarmos muitas vezes de variáveis, ao usar const não há esta dinâmica de alteração de valor).
***
## Exemplos:
### **Tipos numéricos**
_let a = 10;_\
_let b = 13.5;_

### **Tipo texto**
_let c = "allan";_

### **Tipo booleano**
_let d = false;_

### **Exemplo da tipagem dinâmica sendo aplicada**
_d = 15;_
***
### **É possível salvar funções dentro de variáveis**
_a = function() {};_
***
### **Variáveis não definidas retornam undefined**
_let e;_\
_console.log(e);_
***
### **Exemplo de _const_**
_const pi = 3.14;_\

**Caso haja tentativa de se alterar o valor retorna ao console uma mensagem de erro:**\
pi = 3.1415; -> retorna erro por alterar valor de uma variável constante.