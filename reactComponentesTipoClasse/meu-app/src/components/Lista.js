import React from 'react';

export class Lista extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      // Primeiro exemplo de lista a ser renderizada
      // items: [
      //   "item1",
      //   "item2",
      //   "item3",
      //   "item4"
      // ]
      
      // Segundo exemplo de lista a ser renderizada
      items: [
        {id: 1, nome: 'item1', completo: false},
        {id: 2, nome: 'item2', completo: false},
        {id: 3, nome: 'item3', completo: true},
        {id: 4, nome: 'item4', completo: false}
      ]
    }
  }

  render() {
    return (
      <>
        {/* Primeiro exemplo de renderização de listas */}
        {/* <ul>
          { this.state.items.map((item, indice) => <li key={ indice }>{item}</li>) }
        </ul> */}

        <ul>
          {this.state.items.map((item) => (<Item key={item.id} completo={item.completo}>{item.nome}</Item>) )}
          {React.Children.map(this.props.children, child => child.type == Item ? child : null)}
        </ul>
      </>
    );
  }
}

export class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textDecoration = this.props.completo ? 'line-through' : 'none';
    return (
      <>
        <li data-id={this.props.id} style={{textDecoration}}>
          {this.props.children}
        </li>
      </>
    );
  }
}