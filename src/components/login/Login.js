import React from 'react';
import { Link } from 'react-router-dom';
import '../login/Login.css';

export default function Login (){
    
        return(
            <div className="container-login">
                <div className="container-autenticacao">
                     <h1>Deseja Logar Como?</h1>
                     <ul>
                        <li><Link id="auth" name="cliente" to="/autenticarCliente">Cliente</Link></li>
                        <li><Link id="auth" name="funcionario" to="/authFunc">Funcionário</Link></li>
                        <li><Link id="auth" name="administrador" to="/authAdmin">Administrador</Link></li>
                        
                     </ul>
                </div>
                <div className="container-slogan">
                    <h1>EmakersFood</h1>
                    <h2>Matando sua fome!</h2>
                </div>
            </div>
        );
   
}

