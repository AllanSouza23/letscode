// Método é uma função do objeto, que visa representar algo que este objeto possa fazer na vida real. A ideia de escrevermos métodos em Programação Orientada a Objetos é evitar programas extensos e confusos, tornando-os segmentados e modulares. Assim sendo, em objetos, os métodos realizam a manipulação interna de seus atributos.

console.log('***Criando métodos dentro de uma classe:\n');
class Quadrado {
  constructor(base, altura) {
    if (isNaN(base) || isNaN(altura)) throw "Informação inválida: Não é um número!";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
  // Para escrevermos métodos dentro de nossas classes não precisamos utilizar a palavra reservada function em sua declaração.
  calculaArea() {
    return this.base * this.altura;
  }

  // Esta função altera o atributo base, multiplicando-o por 2
  duplicaBase() {
    this.base = 2 * this.base;
  }

  /*
  // Esta função permite que dentro de uma página html nosso quadrado passa ser renderizado (desenhado) em tela.
  imprimir(){
    return `<div style='width:${this.base}px;height:${this.altura}px background-color:${this.cor || "blue"}'></div>`;
  }*/
}

const quadrado = new Quadrado(10, 7);
console.log(`O valor da área do quadrado que tem ${quadrado.altura} de altura e ${quadrado.base} de base é: ${quadrado.calculaArea()}`);

console.log('\n***Duplicando o valor da base:');
quadrado.duplicaBase();
console.log(`\nO valor da área do quadrado que tem ${quadrado.altura} de altura e ${quadrado.base} de base é: ${quadrado.calculaArea()}`);