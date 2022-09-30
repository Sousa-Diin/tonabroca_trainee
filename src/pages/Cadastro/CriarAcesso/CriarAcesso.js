import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import '../CriarAcesso/CriarAcesso.css';
import Endereco from '../CadastrarEnd/Endereco';

export default function CriarAcesso () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [nascimento, setNascimento] = useState();
  const [sexo, setSexo] = useState();
  const [telefone, setTelefone] = useState();

  const [nextPage, setNextPage] = useState(false);

  const handleGravarDataUser = (e) => {
    e.preventDefault();
    const data = [{
      email, password, fullName, nascimento, sexo, telefone
    }];

    console.log(data);
  }

  

  const handleTogglePage = () => setNextPage(!nextPage);

    return (
      <div className={nextPage ? 'none' : "container-cadrastro"}>
        
        <Header />

        <form onSubmit={handleGravarDataUser} className="container-criar-login">

          <div className="cria-login">
            <p className="App-intro">Vamos Criar seu Acesso!</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}className="email"placeholder="*Email completo:"/>
            <div className='campo-criar-senha'>
              <input type="password" className="senha"placeholder="*Senha:"/>
              <input type="password" value={password} onChange={(e) => setPassword(e.target).password} className="confirma-senha"placeholder="*Confirmar senha:"/>
            </div>
            
          </div>

          <div className="dados-pessoais"> 
            <p>Seus Dados Pessoais:</p>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="nome"placeholder="*Nome completo:"/>
            <div className='campo-dados-pessoais'>
              <input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} className="nascimento" placeholder="*Data de Nascimento:"/>
              <input type="charset" value={sexo} onChange={(e) => setSexo(e.target.value)} className="sexo" placeholder="*Sexo:"/>
              <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="telefone"placeholder="*Telefone:"/>
            </div>
            
          </div> 
          <div id="prox-tela-criar-cadastro">
            <Link type="submit" to="/logradouro" ><Button name="button-default" onClick={() => handleTogglePage(true)}> Próximo </Button></Link>
          </div>
         
        </form>
        <div className={!nextPage ? 'hide' : "container-cadrastro"}>
            <Endereco name={nextPage} />
        </div>
       
        
      </div>
    );
  
}

