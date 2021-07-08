import React from "react";

class App extends React.Component {
  render() {
    return (
      // Quando há mais de um elemento a ser renderizado, devemos envolvê-lo por uma div, ou até mesmo com um fragmento, ou seja, uma tag "fantasma", conforme abaixo:
      <>
        <p>
          Meu primeiro parágrafo
        </p>
        <p>
          Meu segundo parágrafo
        </p>
        {/* Para usar o JavaScript dentro do nosso componente em React devemos colocá-lo entre chaves. */}
        <p>
          {new Date().toLocaleDateString('pt-br')}
        </p>
      </>
    );
  }
}
export default App;
