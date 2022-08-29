import React, { Component } from 'react';

import './Autenticar.css';
import logo from '../../assets/logo/logo_emakers2.png';
import { Link } from 'react-router-dom';

class Autenticar extends Component {
    state = {
        email: "",
        password: ""
    }
    
    txtEmail = (event) =>{
        this.setState({email:event.target.value})
    }

    txtPassword = (event) =>{
        this.setState({password:event.target.value})
    }

    entrar = () =>{
        const dados ={
            email : this.state.email,
            password : this.state.password
            
        }

        const requestOptions = { // Cria cabeçalho
            method : 'POST',
            headers: {
                'Content-Type' : 'application/JSON'
            },
            body : JSON.stringify(dados)
        };

        const url = 'http://localhost: 8080' // Cria url
        

        fetch (url,requestOptions) // Chama WebServer
            //promise
            .then(console.log('Enviado'))
            .catch(erro => console.log(erro));
        
    }

    render(){
        return(
            <div className="container-autenticar">
                <header>
                    <img src={logo} className="img-login" alt="logo"/>
                    <h2 className="title-logo">EmakersFood</h2>
                </header>
                <div className="flex-autenticar">
                    <h1>Bem Vindo!</h1>
                    <input className='email-login' name="login" value={this.state.login} onChange={this.txtEmail} type="email" placeholder="Email:"/>
                    <input className='password-login' name="senha" value={this.state.password}onChange={this.txtPassword} type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <input className="entrar-login" type="submit" onClick={() => this.entrar()} value="Entrar"/>
                    <h5>Não tem uma conta? <Link id="newpass" name="cadastrar" to="/obterAcesso">
                    Cadastre-se</Link></h5>
                </div>
            </div>
        );
    }

}

export default Autenticar;