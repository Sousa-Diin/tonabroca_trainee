import React, { Component } from 'react';
import logo from './logo/logo_emakers2.png';
import './css/CriarAcesso.css';

class CriarAcesso extends Component {
  render() {
    return (
      <div className="flex-container">
        
        <div className="cabecalho">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EmakersFood</h2>
        </div>

        <div className="form-container">
          <div className="cria-login">
            <p className="App-intro">Vamos Criar seu Acesso!</p>
            <input type="email" className="email"placeholder="*Email completo:"/>
            <input type="password" className="senha"placeholder="*Senha:"/>
            <input type="password" className="senha"placeholder="*Confirmar senha:"/>
          </div>

          <div className="form-container">
            <p>Seus Dados Pessoais:</p>
            <input type="text" className="nome"placeholder="*Nome completo:"/>
            <input type="text" className="nascimento" placeholder="*Data de Nascimento:"/>
            <input type="charset" className="sexo" placeholder="*Sexo:"/>
            <input type="text" className="telefone"placeholder="*Telefone:"/>
          </div>
          
          <div id="proximo">
            <input type="submit" className="proximo" name="proximo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default CriarAcesso;