import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import App2 from './components/App2';
// import { App3 } from './components/App3';
// import { App4 } from './components/App4';
// import { App5 } from './components/App5';
import { Lista, Item } from './components/Lista';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* As props são passadas como atributos de uma tag/componente no React */}
    {/* <App2 title="Título">
      Conteúdo
    </App2>
    <App2 title="Título 2">
      Conteúdo 2
    </App2> */}
    {/* Primeiros usos de estado em React */}
    {/* <App3></App3> */}
    {/* Renderização condicional em React */}
    {/* <App4></App4> */}
    {/* Estudando ciclo de vida de componentes em React */}
    {/* <App5></App5> */}
    {/* Renderização de listas */}
    <Lista>
      <Item key={5} id={5} completo={false}>Teste1</Item>
      <Item key={6} id={6} completo={true}>Teste2</Item>
    </Lista>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
