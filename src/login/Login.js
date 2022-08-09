import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render(){
        return(
            <div className="container-login">
                <div className="container-autenticacao">
                     <h1>Deseja Logar Como?</h1>
                     <ul>
                        <li><a href="../src/CriarAcesso.js">Cliente</a></li>
                        <li>Funcionário </li>
                        <li>Administrador</li>
                        
                     </ul>
                </div>
                <div className="slogan">
                    <h1>EmakersFood</h1>
                    <h2>Matando sua fome!</h2>
                </div>
            </div>
        );
    }
}

export default Login;