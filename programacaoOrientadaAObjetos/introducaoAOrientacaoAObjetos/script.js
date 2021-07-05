// Quando estamos usando a estrutura de dados tradicional, podemos ficar limitados em algumas de nossas abstrações. Para resolver este conflito, foi criada a orientação a objetos, onde podemos moldar e representar coisas do mundo real com maior facilidade e fidelidade em nossos códigos.
// Em Orientação a Objetos, temos atributos e métodos. De forma simples, os atributos são características do objeto representado, enquanto métodos são ações envolvendo o mesmo. Exemplificando com um carro, sua cor, marca e nome seriam seus atributos, e seus métodos podem se extender em ligar o carro, ir para frente, virar à esquerda, virar à direita, dentre muitos outros. 

console.log('***Criando nosso primeiro objeto:\n');

// Perceba que para criar um objeto usamos chaves e na sua declaração devemos colocar o nome do atributo, 'dois pontos' e o valor a ser guardado no atributo, sempre separados por vígula, seguindo o formato -> atributo1: valor1, atributo2: valor2
const pessoa = {
  nome: 'Allan',
  idade: 19
};

// Para acessar os valores de um objeto, devemos escrever seu nome, adicionar um ponto e em seguida escrever o nome do atributo desejado, seguindo o formato -> objeto.atributo
console.log(`O nome guardado no objeto pessoa é ${pessoa.nome}, e esta pessoa possui ${pessoa.idade} anos de idade.`);

console.log('\n***Além de atributos, os objetos podem ter métodos:\n');

// O this dentro da função abaixo faz uma referência ao próprio atributo do objeto, diferenciando de uma variável qualquer.
const quadrado = {
  base: 10,
  altura: 20,
  calculaArea: function() {
    return this.base * this.altura;
  }
}

console.log(`A área do quadrado, a partir das medidas: ${quadrado.altura} como altura e ${quadrado.base} como base é: ${quadrado.calculaArea()}`);

// Nós também podemos usar vetores dentro de objetos, e suas características podem se assemelhar bastante.

console.log('\n***Misturando vetores e objetos:\n');

const agenda = {
  contatos: [
    {
      nome: 'contato1',
      telefone: 'telefone 1',
      email: 'email1@teste.com'
    },
    {
      nome: 'contato2',
      telefone: 'telefone 2',
      email: 'email2@teste.com'
    },
    {
      nome: 'contato3',
      telefone: 'telefone 3',
      email: 'email3@teste.com'
    },
    {
      nome: 'contato4',
      telefone: 'telefone 4',
      email: 'email4@teste.com'
    }
  ],
  adicionar: function(contato) {
    this.contatos.push(contato);
  }
}

console.log(agenda.contatos);