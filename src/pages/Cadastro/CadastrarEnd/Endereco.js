import React from 'react';
import logo from '../../../assets/logo/logo_emakers2.png';
import { AuthContext } from '../../../components/Providers/auth';

import '../CadastrarEnd/Endereco.css';
import Button from '../../../components/Button/Button'; 
//import { Link } from 'react-router-dom';

const Endereco = () => {

 
  const {client, setClient, addUser} = React.useContext(AuthContext);
  console.log({client});
  
  const handleChangeForm = (e) => {
    //setUser({email: user.email, password:user.password, fullname:user.fullname, nasc:user.nasc, sexo:user.sexo, tell:user.tell })
    

    if(e.target.getAttribute('name') === 'Flogradouro'){
      setClient({lougradouro: e.target.value, bairro:client.bairro, numero:client.numero,complemento:client.complemento, cidade:client.cidade, cep:client.cep, estado:client.estado })
    }
    else if(e.target.getAttribute('name') === 'Fbairro'){
      setClient({lougradouro: client.lougradouro, bairro:e.target.bairro, numero:client.numero, complemento:client.complemento, cidade:client.cidade, cep:client.cep, estado:client.estado})
    }
    else if(e.target.getAttribute('name') === 'Fnumero'){
      setClient({lougradouro: client.lougradouro, bairro:client.bairro, numero:e.target.value, complemento:client.complemento, cidade:client.cidade, cep:client.cep, estado:client.estado })
    }
    else if(e.target.getAttribute('name') === 'Fcomplemento'){
      setClient({lougradouro: client.lougradouro, bairro:client.bairro, numero:client.numero, complemento:e.target.value, cidade:client.cidade, cep:client.cep, estado:client.estado })
    }
    else if(e.target.getAttribute('name') === 'Fcidade'){
      setClient({lougradouro: client.lougradouro, bairro:client.bairro, numero:client.numero, complemento:client.complemento, cidade:e.target.value, cep:client.cep, estado:client.estado })
    }
    else if(e.target.getAttribute('name') === 'Fcep'){
      setClient({lougradouro: client.lougradouro, bairro:client.bairro, numero:client.numero, complemento:client.complemento, cidade:client.cidade, cep:e.target.value, estado:client.estado });
    }
    else if(e.target.getAttribute('name') === 'Festado'){
      setClient({lougradouro: client.lougradouro, bairro:client.bairro, numero:client.numero, complemento:client.complemento, cidade:client.cidade, cep:client.cep, estado:e.target.value });
    }
    
   // setClient({lougradouro: client.lougradouro, bairro:client.bairro, numero:client.numero, complemento:client.complemento, cidade:client.cidade, cep:client.cep, estado:client.estado, typeUser:'client'})
  }

  /*const handleFinalizar =()=> {
    window.location.pathname = '/finalizado';
  }*/

  /*const create = user => () => {
    addUser(user);
  }*/

  const handleSubmit = (e) => {
        
    e.preventDefault();
    console.log("Create", {client});
    addUser(client);
    window.location.pathname = '/finalizado'
} 


    return (
      <div className="container-endereco">
        
        <header>
          <img src={logo} className="img-login" alt="logo"/>
          <h2 className="title-logo">EmakersFood</h2>
        </header>

        <form  className="container-form" onSubmit={handleSubmit}>

          <div className="container-dados-pessoais">
            <p> Agora Nos Diga Seu Endereco </p>
            <input type="text" value={client.lougradouro} name="Flogradouro" onChange={(e) => handleChangeForm(e)} className="logradouro"placeholder="*Longradouro:"/>
            <div className='campo-endereco1'>
              <input type="text" value={client.bairro} name="Fbairro" onChange={(e) => handleChangeForm(e)} className="bairro" placeholder="*Bairro:"/>
              <input type="text" value={client.numero} name="Fnumero" onChange={(e) => handleChangeForm(e)}  className="numero" placeholder="*Número:"/>
            </div>
            <div className='campo-endereco2'>
              <input type="text" value={client.complemento} name="Fcomplemento" onChange={(e) => handleChangeForm(e)}  className="complemento"placeholder="*Complemento:"/>
              <input type="text" value={client.cidade} name="Fcidade" onChange={(e) => handleChangeForm(e)} className="cidade"placeholder="*Cidade:"/>
            </div>
            <div className='campo-endereco1'>
              <input type="text" value={client.cep} name="Fcep" onChange={(e) => handleChangeForm(e)} className="cep" placeholder="*Cep:"/>
              <input type="text" value={client.estado} name="Festado" onChange={(e) => handleChangeForm(e)}  className="estado" placeholder="*Estado:"/>
            </div>
            
          </div>

          <div id="finalizar">
          <Button name="button-default" > Finalizar Cadastro </Button>
          </div>
        </form>
      </div>
    );
  }


export default Endereco;