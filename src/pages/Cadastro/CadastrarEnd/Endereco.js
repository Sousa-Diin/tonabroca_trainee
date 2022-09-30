import React,{useState} from 'react';
import logo from '../../../assets/logo/logo_emakers2.png';
import { Link } from 'react-router-dom';

import '../CadastrarEnd/Endereco.css';
import Button from '../../../components/Button/Button'; 

const Endereco = () => {

  //const firstData = enviar;

  const [lougradouro, setLougradouro] = useState();
  const [bairro, setBairro] = useState();
  const [numero, setNumero] = useState();
  const [cep, setCep] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [complemento, setComplemento] = useState();
 

  const finalizarCadastro = (e) =>{
    e.preventDefault();
    const finaliza = {
        lougradouro, bairro, numero, cep, cidade, estado, complemento
      }

   // const allData = finaliza;
    console.log(finaliza)
  };


    return (
      <div className={name ? 'none' : "container-endereco"}>
        
        <header>
          <img src={logo} className="img-login" alt="logo"/>
          <h2 className="title-logo">EmakersFood</h2>
        </header>

        <div onSubmit={finalizarCadastro} className="container-form">

          <div className="container-dados-pessoais">
            <p> Agora Nos Diga Seu Endereco </p>
            <input type="text" value={lougradouro} onChange={(e) => setLougradouro(e.target.value)} className="logradouro"placeholder="*Longradouro:"/>
            <div className='campo-endereco1'>
              <input type="text" value={bairro} onChange={(e)=>setBairro(e.target.value)} className="bairro" placeholder="*Bairro:"/>
              <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)}  className="numero" placeholder="*Número:"/>
            </div>
            <div className='campo-endereco2'>
              <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)}  className="complemento"placeholder="*Complemento:"/>
              <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}  className="cidade"placeholder="*Cidade:"/>
            </div>
            <div className='campo-endereco1'>
              <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}  className="cep" placeholder="*Cep:"/>
              <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)}  className="estado" placeholder="*Estado:"/>
            </div>
            
          </div>

          <div id="finalizar">
          <Link to="/finalizado" ><Button name="button-default"> Finalizar Cadastro </Button></Link>
          </div>
        </div>
      </div>
    );
  }


export default Endereco;