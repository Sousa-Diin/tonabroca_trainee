import React, { Component } from 'react';
import logo from '../../../assets/logo/logo_emakers2.png';

import '../CadastrarEnd/Endereco.css';

class Endereco extends Component {
  render() {
    return (
      <div className="endereco-container">
        
        <div className="cabecalho-endereco">
          <img src={logo} className="logo-endereco" alt="logo" />
          <h2>EmakersFood</h2>
        </div>

        <div className="form-endereco">

          <div className="dados-pessoais">
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
            <input type="submit" className="finalizar" name="finalizar" value="Finalizar"/>
          </div>

        </div>
      </div>
    );
  }
}

export default Endereco;