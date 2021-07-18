import React from 'react';

export class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {nome: '', linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: ''};

    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }

    this.changeName = (event) => {
      this.setState({nome: event.target.value});
    }

    this.changeSelect = (event) => {
      this.setState({linguagem: event.target.value});
    }

    this.changeRadio = (event) => {
      this.setState({tipo: event.target.value});
    }

    this.changeCheckbox = (event) => {
      this.setState({dedico: event.target.checked});
    }

    this.changeBio = (event) => {
      this.setState({bio: event.target.value});
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nome">Nome: <input type="text" name="nome" value={this.state.nome} onChange={this.changeName}/></label>
          <br />
          <label htmlFor="LinguagemFavorita">
            Linguagem Favorita
            <select value={this.state.linguagem} onChange={this.changeSelect}>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
            </select>
          </label>
          <br />
          <label htmlFor="Sou">
            Sou:
            <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} calue="programador"/> Programador
            <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante"/> Estudante
          </label>
          <br />
          <label>
            <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox}/> Dedico 8 horas semanais aos estudos
          </label>
          <br />
          <label>
            Bio: 
            <textarea cols="50" value={this.state.bio} onChange={this.changeBio}></textarea>
          </label>
          <br />
          <input type="submit" value="Salvar"/>
        </form>
      </>
    );
  }
}