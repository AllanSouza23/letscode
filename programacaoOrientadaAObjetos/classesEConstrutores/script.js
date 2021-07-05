// Classes são uma forma de padronizar um objeto, ou com outras palavras, a ideia de um objeto. Pensemos num objeto pessoa que guarde os atributos -> nome: 'João', idade: 27; Se por ventura fosse necessário construir um outro objeto com os mesmos atributos do objeto pessoa, porém com nome e idade diferentes, seria necessário reescrever novamente todo o código usado em pessoa, o que torna nosso código final menos reutilizável e mais repetitivo.
// Por sua vez, um construtor é um meio de construir um objeto a partir de uma classe.

console.log('***Criando nossa primeira classe:\n');

// Por convenção, os nomes das classes começam com letra maiúscula. Como toda classe visa construir um objeto, deve ter dentro dela um método construtor.
class Pessoa {
  // Dentro dos parêntesis colocamos os parâmetros para construir este objeto
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

// Quando aplicamos as características de uma classe à uma variável, dizemos que estamos instanciando a classe. O new indica que estamos instanciando um novo objeto.
const pessoa1 = new Pessoa('Allan', 19);
console.log(`Veja que dentro de pessoa1.nome temos ${pessoa1.nome} e dentro de pessoa1.idade temos ${pessoa1.idade}`);

// Para alterar um atributo de um objeto, podemos fazer de maneira igual a como fazíamos com as variáveis. Suponhamos que agora em pessoa1, a idade deva ser 20.
console.log('\n***Alterando um atributo:\n');
pessoa1.idade = 20;
console.log(`Nova idade de ${pessoa1.nome} é ${pessoa1.idade} anos.`);

// A partir das classes, podemos criar diversos objetos de forma muito mais simples e objetiva.
console.log('\n***Criando mais objetos a partir de uma mesma classe:\n');
const pessoa2 = new Pessoa('João', 32);
console.log(`Em pessoa2.nome temos ${pessoa2.nome} e em pessoa2.idade temos ${pessoa2.idade}`);