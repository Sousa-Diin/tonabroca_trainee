import React, { Component } from 'react';

import './AuthFuncionario.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

class AuthFuncionario extends Component {
    
    render(){
        
        return(
            <div className="container-auth-func">
                <Header/>
                <div className="flex-autenticar">
                    <h1>Fazer Login</h1>
                    <input className='email-login' type="email" placeholder="Email:"/>
                    <input className='password-login' type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button >Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
                </div>
            </div>
        );
    }

}

export default AuthFuncionario;