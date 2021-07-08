// Encapsulamento é uma maneira de negar acesso de leitura e/ou escrita de algum atributo dentro de uma classe. Desta maneira, protege este atributo, podendo ele ser um dado sensível como uma senha, por exemplo. Assim, este atributo só poderá ser alterado através de um método próprio da classe no qual ele está localizado. Dizemos então que um atributo encapsulado é uma propriedade privada da classe. Um fato interessante é que como o JavaScript não foi criado diretamente com intenção de ser uma linguagem de programação orientada à objetos, apesar de possuir a palavra reservada 'class', por baixo dos panos na verdade o funcionamento seria próximo de uma função

console.log('***Exemplo de um atributo encapsulado:\n');

// Percebe-se que o atributo cor não é acessado ao se pedir para imprimir seu valor fora da função Quadrado. Desta forma, podemos pensar que ele é um atributo privado de Quadrado.
function QuadradoFunction(base, altura) {
  this.base = base;
  this.altura = altura;
  let cor = 'blue';
}

const quadrado = new QuadradoFunction(3, 4);
console.log(`Tentando acessar o atributo cor com valor: ${quadrado.cor}`);

// Abaixo, criamos um atributo cor para nosso objeto quadrado, apesar de ele não ter qualquer relação com o atributo definido na função, que desta forma, permanece protegida.
quadrado.cor = 'red';
console.log(`\nInduzindo um novo atributo cor, com valor definido como: ${quadrado.cor}`);

// Há também uma outra estratégia de interagir com um atributo, mas protegê-lo, na qual chamamos de factory function, que fabrica um objeto para nós.
console.log('\n***Exemplo de factory function:\n');

function criaQuadrado(base, altura) {
  let cor = 'blue';

  // Para poder acessar o atributo cor, podemos enviar dentro do return uma método.
  return {
    altura, 
    base,
    getCor: () => cor
  };
}

// Desta forma, podemos acessar a variável encapsulada sem maiores problemas 
const quadrado2 = new criaQuadrado(3, 4);

// Vale destacar que este método é de leitura apenas, ou seja, mesmo que declarássemos -> quadrado2.cor = 'red'; <- o atributo original cor não seria afetado, retornando o valor blue ao acessarmos o método getCor()
console.log(`Dessa vez, conseguimos acessar o atributo cor, de valor: ${quadrado2.getCor()}`);

// Agora, vamos analisar como retornamos um valor privado de dentro de uma classe
console.log('\n***Exemplo de atributo privado dentro de uma classe:\n');

// Vemos que o conteúdo que colocamos dentro do método está dentro do construtor de Quadrado
class Quadrado {
  constructor(base, altura) {
    let cor = 'green';
    this.base = base;
    this.altura = altura;
    this.getCor = () => cor;
  }
}

// Desta maneira, protegemos nosso atributo de alterações, permitindo apenas sua leitura.
const quadradoClasse = new Quadrado(3, 4);
console.log(`Utilizando classes, podemos também acessar estes atributos privados. Neste caso, o atributo cor tem valor: ${quadradoClasse.getCor()}`);