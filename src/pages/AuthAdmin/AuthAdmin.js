import React, { Component } from 'react';

import './AuthAdmin.css';
import logo from '../../assets/logo/logo_emakers2.png';
import { Link } from 'react-router-dom';

class AuthAdmin extends Component {
    render(){
        return(
            <div className="container-auth-admin">
                <header>
                    <img src={logo} className="img-login" alt="logo"/>
                    <h2 className="title-logo">EmakersFood</h2>
                </header>
                <div className="flex-autenticar">
                    <h1>Fazer Login Admin</h1>
                    <input className='email-login' type="email" placeholder="Email ou Matrícula:"/>
                    <input className='password-login' type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <input className="entrar-login" type="submit" value="Entrar"/>
                    <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso">Cadastre-se</Link></h5>
                </div>
            </div>
        );
    }

}

export default AuthAdmin;