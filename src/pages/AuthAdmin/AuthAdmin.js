import React, { useState } from 'react';
//import { useEffect, useState } from "react";
//import axios from "axios";
import './AuthAdmin.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Providers/auth';



export default function AuthAdmin() {
/*
    const [permissao, setPermissao] = useState(false);

    const signIn = (e) => {
        if(props.email === 'admin@tonabroca' & '5151' === props.password /*& user.typeUser === 'admin'){*/
         /*   e.preventDefault();
            window.location.pathname = '/buscarFunc';
               
        }else{
            window.alert('Acesso negado!');

            props.setEmail('');
            props.setPassword('')
            setPermissao(!permissao);
            return false;
                
        }
            
    }*/
    const { login, authenticated } = React.useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const permision ='admin';
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("sumbit - admin", {email, password, permision});
        
        login(email, password, permision )
    } 
    
    
    
        return(
            <div className={true ? "container-auth-admin" : "esconderDspA"}>
                <Header/>
                <form className="flex-autenticar" onSubmit={handleSubmit} >
                    <h1>Fazer Login Admin</h1>
                    <pre>{String(authenticated)}</pre>
                    <input className='email-login'value={email} onChange={(e) => setEmail( e.target.value)} type="email" placeholder="Email ou Matrícula:"/>
                    <input className='password-login'value={password} onChange={(e) => setPassword( e.target.value)}type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button  name="button-default">Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
                </form>
            </div>
        );

}