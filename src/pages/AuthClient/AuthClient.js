import React, { Component } from 'react';

import './AuthClient.css';
//import API from '../../services/api';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/Header';
import Button from '../../components/Button/Button';


export default class AuthClient extends React.Component {
   
    
    handleChangeLogin = event => {
        this.setState({login: event.target.value});
        
    }

    handleChangeSenha = event => {
        this.setState({senha: event.target.value});
    }

    handleOnClick = event => {
        event.preventDefault();
        
        const user = {
            login : this.state.login,
            senha : this.state.senha
            
        };
        /*useEffect(() => {
        //API.post(`http://localhost:5000`, {user})
            axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                /*.catch((error) => {
                        console.error("ops! ocorreu um erro" + error);
                }

                //.then((response) => setUser(response.data))
        }    
*/
    }

    render(){
        return(
            <div className="container-autenticar">
                <Cabecalho/>
                    
                <div className="flex-autenticar" onSubmit={this.handleOnClick}>
                    <h1>Bem Vindo!</h1>
                    
                    <input className='email-login' name="login" onChange={this.handleChangeLogin} type="email" placeholder="Email:"/>
                    <input className='password-login' name="senha" onChange={this.handleChangeSenha} type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button >Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" name="cadastrar" to="/obterAcesso" className='link'>
                    Cadastre-se</Link></h5>
                </div>
            </div>
        );
    }

}
