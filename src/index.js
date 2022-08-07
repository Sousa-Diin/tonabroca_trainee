import React from 'react';
import ReactDOM from 'react-dom';
import CadastroFinalizado from './CadastroFinalizado';
import CriarAcesso from './CriarAcesso';
import Endereco from './Endereco';
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
/*
ReactDOM.render(
  <CadastroFinalizado />,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <Login />,
  document.getElementById('root')
);