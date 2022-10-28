import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import './AuthClient.css';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../components/Providers/auth';



export default function AuthClient  () {

    //const { user, logado, setLogado} = React.useContext(AuthContext);
    //console.log({user});

    const { login, authenticated } = React.useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    

    const permision ='client';

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("sumbit", {email, password,permision});
       
        login(email, password, permision)
    } 

    return(
         
            <div className={true? "container-autenticar" : " esconderDspC"}>
                <Cabecalho/>
                    
                <form className="flex-autenticar" onSubmit={handleSubmit} >
                    <h1>Bem Vindo!</h1>
                    <pre>{String(authenticated)}</pre>
                    <input className='email-login'  name="login" value={email} onChange={(e) => setEmail( e.target.value)} type="email" placeholder="Email:"/>
                    <input className='password-login' name="senha" value={password} onChange={(e) => setPassword( e.target.value)} type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button  name="button-default">Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
                </form>
            </div>
    );
}

