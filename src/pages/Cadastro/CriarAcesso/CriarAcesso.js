import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import '../CriarAcesso/CriarAcesso.css';

class CriarAcesso extends Component {
  render() {
    return (
      <div className="container-cadrastro">
        
        <Header />

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
          <div id="prox-tela-criar-cadastro">
            <Button type="button" className="proximo" name="proximo" value="Proximo">
            <Link to="/logradouro" className='link'>Próximo</Link></Button>
        </div>
         
        </div>
        
        
      </div>
    );
  }
}

export default CriarAcesso;