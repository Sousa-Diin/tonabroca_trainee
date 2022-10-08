import React, { useState } from 'react';
//import { useEffect, useState } from "react";
//import axios from "axios";
import './AuthAdmin.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';



export default function AuthAdmin(props) {

    const [permissao, setPermissao] = useState(false);

    const signIn = (e) => {
        if(props.email === 'admin@tonabroca' & '5151' === props.password /*& user.typeUser === 'admin'*/){
            e.preventDefault();
            window.location.pathname = '/buscarFunc';
               
        }else{
            window.alert('Acesso negado!');

            props.setEmail('');
            props.setPassword('')
            setPermissao(!permissao);
            return false;
                
        }
            
    }
    
    
        return(
            <div className={props.showA ? "container-auth-admin" : "esconderDspA"}>
                <Header/>
                <div className="flex-autenticar" >
                    <h1>Fazer Login Admin</h1>
                    <input className='email-login'value={props.email} onChange={(e) => props.setEmail( e.target.value)} type="email" placeholder="Email ou Matrícula:"/>
                    <input className='password-login'value={props.password} onChange={(e) => props.setPassword( e.target.value)}type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button onClick={(e)=>signIn(e)} name="button-default">Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
                </div>
            </div>
        );

}