import React from 'react';
import { Link } from 'react-router-dom';
import '../login/Login.css';

export default function Login (){
    
        return(
            <div className="container-login">
                <div className="container-autenticacao">
                     <h1>Deseja Logar Como?</h1>
                     <ul>
                        <li><Link to="/autenticarCliente">Cliente</Link></li>
                        <li><Link to="/">Funcionário</Link></li>
                        <li><Link to="/">Administrador</Link></li>
                        
                     </ul>
                </div>
                <div className="container-slogan">
                    <h1>EmakersFood</h1>
                    <h2>Matando sua fome!</h2>
                </div>
            </div>
        );
   
}

