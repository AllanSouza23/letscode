import React from 'react';

export class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome: undefined, txtNome: ''}
  }

  changeTxtName = (event) => {
    this.setState({txtNome: event.target.value})
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome});
  }

  render() {
    const renderForm = () => {
      return (
        <>
          <label htmlFor="nome">Nome: </label>
          <input 
            type="text"
            placeholder="Digite aqui um nome"
            onChange={ this.changeTxtName }
            value={ this.state.txtNome }
          />
          <button onClick={ this.persistName }>
            Salvar
          </button>
        </> 
      );
    }
    const renderText = () => {
      return (
        <>      
          <p>Olá, { this.state.nome }</p>
        </>
    );
    }
    return !this.state.nome ? renderForm() : renderText();
  }
}