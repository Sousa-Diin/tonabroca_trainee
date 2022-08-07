import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render(){
        return(
            <div className="container-login">
                <div className="container-autenticacao">
                     <h1>Deseja logar como </h1>
                     <ul>
                        <li>Cliente</li>
                        <li>Admin</li>
                        <li>Funcionario</li>
                     </ul>
                </div>
                <div className="slogan">
                    <h1>EmakersFood</h1>
                    <h2>matando sua fome!</h2>
                </div>
            </div>
        );
    }
}

export default Login;