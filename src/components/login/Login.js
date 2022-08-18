import React from 'react';

export default function Login (){
    
        return(
            <div className="container-login">
                <div className="container-autenticacao">
                     <h1>Deseja Logar Como?</h1>
                     <ul>
                        <li>Cliente</li>
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

