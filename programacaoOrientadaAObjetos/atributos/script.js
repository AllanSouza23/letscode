// Quando estamos utilizando nosso construtor, nós precisamos encontrar um meio de filtrar os dados para não ocasionar um possível erro ao decorrer do programa. Em geral, utilizamos as estruturas condicionais para impedir que algum dado que não queremos seja incluso dentro de nossos objetos.

class Quadrado {
  constructor(base, altura) {
    // A função isNaN verifica se um valor é numérico ou não. Já o throw é um erro que podemos disparar com alguma informação para alertar o usuário e evitar que o programa tenha uma continuidade e venha a gerar problemas. O operador || significa o operador lógico ou, que retorna true caso pelo menos uma das condições seja verdadeira (caso todas as condições sejam falsas, retorna false). Também temos o operador && que significa and, que retorna true apenas se todas as condições forem verdadeiras (caso contrário, retorna false).
    if (isNaN(base) || isNaN(altura)) throw "Informação inválida: Não é um número!";
    this.base = base;
    this.altura = altura;
    // Podemos também querer ter parâmetros opcionais, definindo-os como undefined
    this.cor = undefined;
  }
}

// const quadrado = new Quadrado('11', 'doze'); // Esta declaração aciona o throw e dispara o erro, já que ambos os valores passados como parâmetro não são do tipo numérico.
const quadrado = new Quadrado(11, 12); // Já esta declaração passa por nossa verificação sem qualquer erro, pois ambos são do tipo numérico.
quadrado.cor = 'blue';
console.log(quadrado);