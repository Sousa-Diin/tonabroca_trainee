import React from 'react';
import logo from '../../../assets/logo/logo_emakers2.png';
import { AuthContext } from '../../../components/Providers/auth';

import '../CadastrarEnd/Endereco.css';
import Button from '../../../components/Button/Button'; 
import { Link } from 'react-router-dom';

const Endereco = () => {

 
  const {user, setUser, handleGravarUser} = React.useContext(AuthContext);
  console.log({user});
  
  const handleChangeForm = (e) => {
    //setUser({email: user.email, password:user.password, fullname:user.fullname, nasc:user.nasc, sexo:user.sexo, tell:user.tell })
    

    if(e.target.getAttribute('name') === 'Flogradouro'){
      setUser({lougradouro: e.target.value, bairro:user.bairro, numero:user.numero,complemento:user.complemento, cidade:user.cidade, cep:user.cep, estado:user.estado })
    }
    else if(e.target.getAttribute('name') === 'Fbairro'){
      setUser({lougradouro: user.lougradouro, bairro:e.target.bairro, numero:user.numero, complemento:user.complemento, cidade:user.cidade, cep:user.cep, estado:user.estado})
    }
    else if(e.target.getAttribute('name') === 'Fnumero'){
      setUser({lougradouro: user.lougradouro, bairro:user.bairro, numero:e.target.value, complemento:user.complemento, cidade:user.cidade, cep:user.cep, estado:user.estado })
    }
    else if(e.target.getAttribute('name') === 'Fcomplemento'){
      setUser({lougradouro: user.lougradouro, bairro:user.bairro, numero:user.numero, complemento:e.target.value, cidade:user.cidade, cep:user.cep, estado:user.estado })
    }
    else if(e.target.getAttribute('name') === 'Fcidade'){
      setUser({lougradouro: user.lougradouro, bairro:user.bairro, numero:user.numero, complemento:user.complemento, cidade:e.target.value, cep:user.cep, estado:user.estado })
    }
    else if(e.target.getAttribute('name') === 'Fcep'){
      setUser({lougradouro: user.lougradouro, bairro:user.bairro, numero:user.numero, complemento:user.complemento, cidade:user.cidade, cep:e.target.value, estado:user.estado });
    }
    else if(e.target.getAttribute('name') === 'Festado'){
      setUser({lougradouro: user.lougradouro, bairro:user.bairro, numero:user.numero, complemento:user.complemento, cidade:user.cidade, cep:user.cep, estado:e.target.value });
    }
    
    setUser({typeUser:'client'})
  }

  /*const handleFinalizar =()=> {
    window.location.pathname = '/finalizado';
  }*/

    return (
      <div className="container-endereco">
        
        <header>
          <img src={logo} className="img-login" alt="logo"/>
          <h2 className="title-logo">EmakersFood</h2>
        </header>

        <div  className="container-form">

          <div className="container-dados-pessoais">
            <p> Agora Nos Diga Seu Endereco </p>
            <input type="text" value={user.lougradouro} name="Flogradouro" onChange={(e) => handleChangeForm(e)} className="logradouro"placeholder="*Longradouro:"/>
            <div className='campo-endereco1'>
              <input type="text" value={user.bairro} name="Fbairro" onChange={(e) => handleChangeForm(e)} className="bairro" placeholder="*Bairro:"/>
              <input type="text" value={user.numero} name="Fnumero" onChange={(e) => handleChangeForm(e)}  className="numero" placeholder="*Número:"/>
            </div>
            <div className='campo-endereco2'>
              <input type="text" value={user.complemento} name="Fcomplemento" onChange={(e) => handleChangeForm(e)}  className="complemento"placeholder="*Complemento:"/>
              <input type="text" value={user.cidade} name="Fcidade" onChange={(e) => handleChangeForm(e)} className="cidade"placeholder="*Cidade:"/>
            </div>
            <div className='campo-endereco1'>
              <input type="text" value={user.cep} name="Fcep" onChange={(e) => handleChangeForm(e)} className="cep" placeholder="*Cep:"/>
              <input type="text" value={user.estado} name="Festado" onChange={(e) => handleChangeForm(e)}  className="estado" placeholder="*Estado:"/>
            </div>
            
          </div>

          <div id="finalizar">
          <Link to="/finalizado"><Button name="button-default" onClick={()=> handleGravarUser()}> Finalizar Cadastro </Button></Link>
          </div>
        </div>
      </div>
    );
  }


export default Endereco;