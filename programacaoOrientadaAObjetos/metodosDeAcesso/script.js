// Dentro do conteúdo de encapsulamento, vimos que podemos acessar um atributo privado através de um método, que chamamos de getCor(). Pensando no quesito de alterar um atributo privado, podemos pensar de forma semelhante, mas desta vez precisamos passar um conteúdo de parâmetro para podermos associar ao atributo privado e alterá-lo.

console.log('***Acessando, lendo e alterando um atributo privado em JavaScript:\n');

class Quadrado {
  constructor(base, altura) {
    let cor = 'green';
    this.base = base;
    this.altura = altura;
    this.getCor = () => cor;
    this.setCor = (novaCor) => cor = novaCor;
  }
}

const quadrado = new Quadrado(3, 4);
console.log(`Atributo privado cor ANTES de ser alterado: ${quadrado.getCor()}`);

// Através da método setCor(), podemos alterar um valor privado, pois este método foi definido dentro da classe Quadrado, assim conseguindo enxergar seu valor.
quadrado.setCor('red');
console.log(`Atributo privado cor DEPOIS de ser alterado: ${quadrado.getCor()}`);

// Apesar de funcionar, esta maneira pode causar alguns problemas, já que o usuário poderia tentar alterar o valor do atributo cor de forma direta -> quadrado.cor = 'gray'; <- por exemplo. Para sanar esse problema, foram criados os chamados métodos de acesso, que fazem com que métodos de leitura e sobrescrita possam ser acessados como se fossem atributos 'normais' dentro da classe, não sendo passados mais dentro do nosso construtor.

console.log('\n***Exemplo de uso dos métodos de acesso:\n');

class QuadradoReformulado {
  constructor(base, altura) {

    // Uma das convenções que temos ao declarar um atributo privado é utilizar o underscore (underline) antes do nome do atributo, como abaixo
    this._cor = 'blue';
    this.base = base;
    this.altura = altura;
  }

  // As palavras reservadas get e set manipulam nosso atributo privado.
  get cor() { return this._cor; }
  set cor(novaCor) { this._cor = novaCor; }
}

const quadrado2 = new QuadradoReformulado(3, 4);
console.log(`Atributo cor ANTES de ser alterado tem valor: ${quadrado2.cor}`);

// Perceba que agora acessamos o valor do atributo privado cor como se ele fosse um atributo publico, graças ao método get. De forma parecida, vamos manipular seu valor com o atributo set, como se fosse também um atributo público de mesmo nome.
quadrado2.cor = 'black';
console.log(`Atributo cor DEPOIS de ser alterado tem valor: ${quadrado2.cor}`);