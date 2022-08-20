import React, { Component } from 'react';
import logo from '../../../assets/logo/logo_emakers2.png';
import { Link } from 'react-router-dom';

import '../CadastrarEnd/Endereco.css';

class Endereco extends Component {
  render() {
    return (
      <div className="container-endereco">
        
        <header>
          <img src={logo} className="img-login" alt="logo"/>
          <h2 className="title-logo">EmakersFood</h2>
        </header>

        <div className="container-form">

          <div className="container-dados-pessoais">
            <p> Agora Nos Diga Seu Endereco </p>
            <input type="text" className="logradouro"placeholder="*Longradouro:"/>
            <input type="text" className="bairro" placeholder="*Bairro:"/>
            <input type="text" className="numero" placeholder="*Número:"/>
            <input type="text" className="complemento"placeholder="*Complemento:"/>
            <input type="text" className="cidade"placeholder="*Cidade:"/>
            <input type="text" className="cep" placeholder="*Cep:"/>
            <input type="text" className="estado" placeholder="*Estado:"/>
          </div>

          <div id="finalizar">
            <button type="button" className="finalizar" name="finalizar" value="Finalizar">
            <Link to="/finalizado" className="title-finalizar">Finalizar Cadastro</Link></button>
          </div>
          <script>
            
          </script>

        </div>
      </div>
    );
  }
}

export default Endereco;