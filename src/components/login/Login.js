import React from 'react';
import '../login/Login.css';
//import { AuthContext } from '../Providers/auth';

export default function Login (){

    document.title = 'Emakers Food - authenticação';
    localStorage.removeItem("user");
 return(
            <section>
                <div className={true ? "container-login" : "escondeLogin"}>
                    <div className="container-autenticacao">
                        
                        <h1>Deseja Logar Como?</h1>
                        <ul>
                            <li onClick={()=>{window.location.pathname = '/autenticarCliente'}} className='list-login' id="cliente" name="cliente">Cliente</li>
                            <li onClick={()=>{window.location.pathname = '/authFunc'}} className='list-login'>Funcionário</li>
                            <li onClick={()=>{window.location.pathname = '/authAdmin'}} className='list-login'>Administrador</li> 
                        </ul>
                    </div>

                    <div className="container-slogan">
                        <h1>EmakersFood</h1>
                        <h2>Matando sua fome!</h2>
                    </div>
                </div>
 
            </section>
           
        );
   
}