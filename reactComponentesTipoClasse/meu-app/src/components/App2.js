import React from "react";

class App2 extends React.Component {
  // Props é nada mais que um objeto JavaScript. Desta forma, devemos usar chaves para acessar seus valores.
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <div id="title">{ this.props.title }</div>
        {/* O parâmetro children permite que seja usado o conteúdo entre as tags do componente */}
        <div id="text">{ this.props.children }</div>
      </div>
    );
  }
}
export default App2;
