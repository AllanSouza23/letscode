// Herança, de forma simples, é a passagem de atributos e métodos de uma classe à outra classe. A classe que herda os atributos e métodos é chamada de classe-pai/classe-mãe, enquanto a classe que os recebe são chamadas de classes-filhas. 

console.log('***Exemplo de aplicação de herança em JavaScript:\n');

// Classe-pai Pessoa
class Pessoa {
  constructor (nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

// A palavra reservada extends indica que uma classe está herdando todos os atributos e métodos de outra classe. Abaixo, a classe Cidadao está herdando os atributos da classe Pessoa
class Cidadao extends Pessoa {
  // Como a classe CIdadao está herdando de Pessoa, é necessário passar os atributos presentes no construtor de Pessoa, além dos atributos próprios da classe Cidadao
  constructor (nome, idade, rg, cpf) {
    // O método super realiza a chamada do método construtor da classe-pai
    super(nome, idade);
    this.rg = rg;
    this.cpf = cpf;
  }
}

// Instanciando a classe cidadao e imprimindo no console
const cidadao = new Cidadao('Allan', 19, '00.000.000-0', '111.111.111-11');
console.log(cidadao);

// O método instanceof verifica se um objeto é ou não instância de uma determinada classe, retornando true caso seja e false caso não seja. Aqui estamos verificando se o objeto cidadao é instância da classe Cidadao. Se pedirmos para verificar se é instância da classe-pai Pessoa, veremos que o retorno também será true.
console.log(cidadao instanceof Pessoa);