import React from 'react';
import ReactDOM from 'react-dom';
import CadastroFinalizado from '../src/pages/CadastroFinalizado';
import CriarAcesso from '../src/pages/CriarAcesso';
import Autenticar from '../src/login/Autenticar';
import Endereco from '../src/pages/Endereco';
import Login from '../src/login/Login';
import './index.css';


ReactDOM.render(
  <CriarAcesso />,
  document.getElementById('root')
);
/*
ReactDOM.render(
  <Endereco />,
  document.getElementById('root')
);

ReactDOM.render(
  <CadastroFinalizado />,
  document.getElementById('root')
);

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);*/
ReactDOM.render(
  <Autenticar />,
  document.getElementById('root')
);