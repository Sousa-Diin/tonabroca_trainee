import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo_emakers2.png';
import '../CriarAcesso/CriarAcesso.css';

class CriarAcesso extends Component {
  render() {
    return (
      <div className="container-cadrastro">
        
        <header>
          <img src={logo} className="img-login" alt="logo"/>
          <h2 className="title-logo">EmakersFood</h2>
        </header>

        <div className="container-criar-login">

          <div className="cria-login">
            <p className="App-intro">Vamos Criar seu Acesso!</p>
            <input type="email" className="email"placeholder="*Email completo:"/>
            <div className='campo-criar-senha'>
              <input type="password" className="senha"placeholder="*Senha:"/>
              <input type="password" className="confirma-senha"placeholder="*Confirmar senha:"/>
            </div>
            
          </div>

          <div className="dados-pessoais">
            <p>Seus Dados Pessoais:</p>
            <input type="text" className="nome"placeholder="*Nome completo:"/>
            <div className='campo-dados-pessoais'>
              <input type="date" className="nascimento" placeholder="*Data de Nascimento:"/>
              <input type="charset" className="sexo" placeholder="*Sexo:"/>
              <input type="text" className="telefone"placeholder="*Telefone:"/>
            </div>
            
          </div> 
          <div id="proximo">
            <button type="button" className="proximo" name="proximo" value="Proximo">
            <Link to="/logradouro" className='link-proximo'>Próximo</Link></button>
        </div>
         
        </div>
        
        
      </div>
    );
  }
}

export default CriarAcesso;