import React, { Component} from 'react';
//import { useEffect, useState } from "react";
//import axios from "axios";
import './AuthAdmin.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';



class AuthAdmin extends React.Component {
    state = {
        login: "",
        senha: "",
    };

    constructor(props){
        super(props);
    
    }

    handleChange(event){
        this.setState({login: event.target.value});
    }

    render(){
        return(
            <div className="container-auth-admin">
                <Header/>
                <div className="flex-autenticar" >
                    <h1>Fazer Login Admin</h1>
                    <input className='email-login' value={this.state.value} onChange={this.handleChange}type="email" placeholder="Email ou Matrícula:"/>
                    <input className='password-login' value={this.state.value}type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button>Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
                </div>
            </div>
        );
    }

}

export default AuthAdmin;