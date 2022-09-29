import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import '../CriarAcesso/CriarAcesso.css';

export default function CriarAcesso () {

  const  [dataClient, setDataField] = useState( 
    {
      email: "",
      password: "",
      fullName: "",
      nascimento: 0,
      sex: '',
      tell: '',
    }
  );

  const handleGraverDataUser = (e) => {
    e.preventDefault();
    const data = {
      ...dataClient
    }

    console.log(data);
  }

    return (
      <div className="container-cadrastro">
        
        <Header />

        <form onSubmit={handleGraverDataUser} className="container-criar-login">

          <div className="cria-login">
            <p className="App-intro">Vamos Criar seu Acesso!</p>
            <input type="email" value={dataClient.email} onChange={(e) => setDataField(e.target.value).email}className="email"placeholder="*Email completo:"/>
            <div className='campo-criar-senha'>
              <input type="password" className="senha"placeholder="*Senha:"/>
              <input type="password" value={dataClient.password} onChange={(e) => setDataField(e.target.value).password} className="confirma-senha"placeholder="*Confirmar senha:"/>
            </div>
            
          </div>

          <div className="dados-pessoais">
            <p>Seus Dados Pessoais:</p>
            <input type="text" value={dataClient.fullName} onChange={(e) => setDataField(e.target.value).fullName} className="nome"placeholder="*Nome completo:"/>
            <div className='campo-dados-pessoais'>
              <input type="date" value={dataClient.nascimento} className="nascimento" placeholder="*Data de Nascimento:"/>
              <input type="charset" value={dataClient.sex} className="sexo" placeholder="*Sexo:"/>
              <input type="text" value={dataClient.tell} className="telefone"placeholder="*Telefone:"/>
            </div>
            
          </div> 
          <div id="prox-tela-criar-cadastro">
            <Link type="submit" to="/logradouro" ><Button name="button-default"> Próximo </Button></Link>
          </div>
         
        </form>
        
        
      </div>
    );
  
}

