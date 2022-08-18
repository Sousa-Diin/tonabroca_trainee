import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
import { BrowserRouter } from 'react-router-dom';

//import CadastroFinalizado from '../src/pages/CadastroFinalizado';
//import CriarAcesso from '../src/pages/CriarAcesso';
/*import Autenticar from '../src/pages/Autenticar';
import Endereco from '../src/pages/Endereco';
import Login from '../src/components/login/Login';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  
  document.getElementById('root')
);

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
);
ReactDOM.render(
  <Autenticar />,
  document.getElementById('root')
);*/