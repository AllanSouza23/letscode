import React from 'react';

export class App3 extends React.Component {
  constructor(props) {
    super(props);
    // O construtor é a única parte do nosso código que iniciamos um estado. Vale destacar que podemos sem problema algum alterar um estado sem necessáriamente comprometer o outro. Abaixo, modificamos o valor de nome, mas a idade permanece inalterada
    this.state = {nome: '', idade: 19};
  }

  // Para alterar um valor de estado, podemos escrever funções acionadas por algum evento
  changeName = (event) => {
    this.setState({nome: event.target.value})
  }

  render() {
    return (
      <>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          placeholder="Digite um nome"
          onChange={this.changeName}
          value={this.state.nome}
        />
        <p>Olá { this.state.nome }</p>
      </>
    );
  }
}