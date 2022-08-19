import React, { Component } from 'react';

import './Autenticar.css';
import logo from '../../assets/logo/logo_emakers2.png';
import { Link } from 'react-router-dom';

class Autenticar extends Component {
    render(){
        return(
            <div className="container-autenticar">
                <header>
                    <img src={logo} className="img-login" alt="logo"/>
                    <h2 className="title-logo">EmakersFood</h2>
                </header>
                <div className="flex-autenticar">
                    <h1>Bem Vindo!</h1>
                    <input className='email-login' type="email" placeholder="Email:"/>
                    <input className='password-login' type="password" placeholder="Senha:"/>
                    <h5><Link to="/Home">Esqueci minha senha</Link></h5>
                    <input className="entrar-login" type="submit" value="Entrar"/>
                    <h6><Link to="/obterAcesso">Não tem uma conta? Cadastre-se</Link></h6>
                </div>
            </div>
        );
    }

}

export default Autenticar;