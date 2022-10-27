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

  const {user, setUser} = React.useContext(AuthContext);
  console.log({user});

  const [confirma, setConfirma] = useState("")
  //console.log(confirma)
  
  const handleChangeForm = (e) => {
    
    if(e.target.getAttribute('name') === 'Femail'){
      setUser({email: e.target.value, password:user.password, fullname:user.fullname, nasc:user.nasc, sexo:user.sexo, tell:user.tell })
    }
    else if(e.target.getAttribute('name') === 'Fpassword' ){
        setUser({email: user.email, password:e.target.value, fullname:user.fullname, nasc:user.nasc, sexo:user.sexo, tell:user.tell })
      
    }
    else if(e.target.getAttribute('name') === 'Ffullname'){
      setUser({email: user.email, password:user.password, fullname:e.target.value, nasc:user.nasc, sexo:user.sexo, tell:user.tell })
    }
    else if(e.target.getAttribute('name') === 'Fnasc'){
      setUser({email: user.email, password:user.password, fullname:user.fullname, nasc:e.target.value, sexo:user.sexo, tell:user.tell })
    }
    else if(e.target.getAttribute('name') === 'Fsexo'){
      setUser({email: user.email, password:user.password, fullname:user.fullname, nasc:user.nasc, sexo:e.target.value, tell:user.tell })
    }
    else if(e.target.getAttribute('name') === 'Ftell'){
      setUser({email: user.email, password:user.password, fullname:user.fullname, nasc:user.nasc, sexo:user.sexo, tell:e.target.value });
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
            <input type="email" value={user.email} name="Femail" onChange={(e) => handleChangeForm(e)}className="email"placeholder="*Email completo:"/>
            <div className='campo-criar-senha'>
              <input type="password" name="confirma" value={confirma} onChange={(e) => setConfirma(e.target.value)} className="senha"placeholder="*Senha:"/>
              <input type="password" name="Fpassword" value={user.password} onChange={(e) => handleChangeForm(e)}  className="confirma-senha"placeholder="*Confirmar senha:"/>
            </div>
            
          </div>

          <div className="dados-pessoais"> 
            <p>Seus Dados Pessoais:</p>
            <input type="text" value={user.fullname} name="Ffullname" onChange={(e) => handleChangeForm(e)} className="nome"placeholder="*Nome completo:"/>
            <div className='campo-dados-pessoais'>
              <input type="date" value={user.nasc} name="Fnasc" onChange={(e) => handleChangeForm(e)} className="nascimento" placeholder="*Data de Nascimento:"/>
              <input type="charset" value={user.sexo} name="Fsexo" onChange={(e) => handleChangeForm(e)} className="sexo" placeholder="*Sexo:"/>
              <input type="text" value={user.tell} name="Ftell" onChange={(e) => handleChangeForm(e)} className="telefone"placeholder="*Telefone:"/>
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