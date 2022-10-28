import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';
import '../CriarAcesso/CriarAcesso.css';
//import Endereco from '../CadastrarEnd/Endereco';
import api from '../../../services/api';
import { AuthContext } from '../../../components/Providers/auth';

export default function CriarAcesso () {

  document.title = 'Emakers Food - Cadastro';

  useEffect(()=> {
    api
    .get("createUser")
    .then((response)=>{
      console.log(response.data);
    })

  }, []);

  const {client, setClient} = React.useContext(AuthContext);
  console.log({user: client});

  const [confirma, setConfirma] = useState("")
  //console.log(confirma)
  
  const handleChangeForm = (e) => {
    
    if(e.target.getAttribute('name') === 'Femail'){
      setClient({email: e.target.value, password:client.password, fullname:client.fullname, nasc:client.nasc, sexo:client.sexo, tell:client.tell })
    }
    else if(e.target.getAttribute('name') === 'Fpassword' ){
        setClient({email: client.email, password:e.target.value, fullname:client.fullname, nasc:client.nasc, sexo:client.sexo, tell:client.tell })
      
    }
    else if(e.target.getAttribute('name') === 'Ffullname'){
      setClient({email: client.email, password:client.password, fullname:e.target.value, nasc:client.nasc, sexo:client.sexo, tell:client.tell })
    }
    else if(e.target.getAttribute('name') === 'Fnasc'){
      setClient({email: client.email, password:client.password, fullname:client.fullname, nasc:e.target.value, sexo:client.sexo, tell:client.tell })
    }
    else if(e.target.getAttribute('name') === 'Fsexo'){
      setClient({email: client.email, password:client.password, fullname:client.fullname, nasc:client.nasc, sexo:e.target.value, tell:client.tell })
    }
    else if(e.target.getAttribute('name') === 'Ftell'){
      setClient({email: client.email, password:client.password, fullname:client.fullname, nasc:client.nasc, sexo:client.sexo, tell:e.target.value });
    }
    
  }

 /* const handleConfirmaSenha =(e)=>{
    setConfirma(e.target.value);
    if(confirma === user.password){
      setUser({password:confirma})
    }else{
      setUser({password:'-1'});
    }

  }*/

    return (
      <div className="container-cadrastro">
        
        <Header />

        <form  className="container-criar-login">

          <div className="cria-login">
            <p className="App-intro">Vamos Criar seu Acesso!</p>
            <input type="email" value={client.email} name="Femail" onChange={(e) => handleChangeForm(e)}className="email"placeholder="*Email completo:"/>
            <div className='campo-criar-senha'>
              <input type="password" name="confirma" value={confirma} onChange={(e) => setConfirma(e.target.value)} className="senha"placeholder="*Senha:"/>
              <input type="password" name="Fpassword" value={client.password} onChange={(e) => handleChangeForm(e)}  className="confirma-senha"placeholder="*Confirmar senha:"/>
            </div>
            
          </div>

          <div className="dados-pessoais"> 
            <p>Seus Dados Pessoais:</p>
            <input type="text" value={client.fullname} name="Ffullname" onChange={(e) => handleChangeForm(e)} className="nome"placeholder="*Nome completo:"/>
            <div className='campo-dados-pessoais'>
              <input type="date" value={client.nasc} name="Fnasc" onChange={(e) => handleChangeForm(e)} className="nascimento" placeholder="*Data de Nascimento:"/>
              <input type="charset" value={client.sexo} name="Fsexo" onChange={(e) => handleChangeForm(e)} className="sexo" placeholder="*Sexo:"/>
              <input type="text" value={client.tell} name="Ftell" onChange={(e) => handleChangeForm(e)} className="telefone"placeholder="*Telefone:"/>
            </div>
          </div> 

          <div id="prox-tela-criar-cadastro">
          <Link to='/logradouro'>  <Button name="button-default" > Próximo </Button></Link>
          </div>
         
        </form>
        
        
       
        
      </div>
    );
  
}

/*<div className={!nextPage ? 'hide' : "container-cadrastro"}>
            <Endereco form={form} name={!nextPage}/>
        </div>
  */