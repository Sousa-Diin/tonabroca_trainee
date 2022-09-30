import React from 'react';
import { Link } from 'react-router-dom';
import '../login/Login.css';

export default function Login (){
    
        return(
            <div className="container-login">
                <div className="container-autenticacao">
                     <h1>Deseja Logar Como?</h1>
                     <ul>
                        <li className='list-login'><Link id="cliente" className="auth" name="cliente" to="/autenticarCliente">Cliente</Link></li>
                        <li className='list-login'><Link id="funcionario" className="auth" name="funcionario" to="/authFunc">Funcionário</Link></li>
                        <li className='list-login'><Link id="admin" className="auth" name="administrador" to="/authAdmin">Administrador</Link></li> 
                     </ul>
                </div>
                <div className="container-slogan">
                    <h1>EmakersFood</h1>
                    <h2>Matando sua fome!</h2>
                </div>
            </div>
        );
   
}

