import React, { useState } from 'react';

import './AuthClient.css';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/Header';
import Button from '../../components/Button/Button';
//import api from '../../services/api';


export default function AuthClient  () {
    let newCargo = 'cliente';
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cargo, setCargo] = useState("");

    const handleGravaUser = async (e) => {
        e.preventDefault();
        const data = {
            email, password, cargo
        }
        
        setCargo(newCargo);
       // const response = await api.post("/obterAcesso", data);
        console.log(data);
        
        
    };

    

    return(
        <div className="container-autenticar">
            <Cabecalho/>
                
            <form className="flex-autenticar" onSubmit={handleGravaUser}>
                <h1>Bem Vindo!</h1>
                
                <input className='email-login' name="login" value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Email:"/>
                <input className='password-login' name="senha" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha:"/>
                <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                <Button >Entrar</Button>
                <h5>Não tem uma conta? <Link id="newpass" name="cadastrar" to="/obterAcesso" className='link'>
                Cadastre-se</Link></h5>
            </form>
        </div>
    );
    
}

