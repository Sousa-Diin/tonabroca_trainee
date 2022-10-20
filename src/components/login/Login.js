import React, { useState } from 'react';

import AuthAdmin from '../../pages/AuthAdmin/AuthAdmin';
import AuthClient from '../../pages/AuthClient/AuthClient';
import AuthFuncionario from '../../pages/AuthFunc/AuthFuncionario';
import '../login/Login.css';
import { AuthContext } from '../Providers/auth';

export default function Login (){

    const { user, authenticated } = React.useContext(AuthContext);
    console.log(user)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const [change, setChange] = useState(true);

    const [viewC, setViewC] = useState(false);
    const [viewF, setViewF] = useState(false);
    const [viewA, setViewA] = useState(false);

    const handleClickCe = () => {
        
        setChange(!change);
        setViewC(!viewC);
       // setUser({typeUser:'client'});
       
        
    }

    const handleClickFu = () => {
        
        setChange(!change);
        setViewF(!viewF);
       // setUser({typeUser:'coWork'});
    }

    const handleClickAd = () => {
        
        setChange(!change);
        setViewA(!viewA);
       // setUser({typeUser:'admin'});
    }
    
        return(
            <section>
                <div className={change ? "container-login" : "escondeLogin"}>
                    <div className="container-autenticacao">
                        
                        <h1>Deseja Logar Como?</h1>
                        <ul>
                            <li onClick={handleClickCe} className='list-login' id="cliente" name="cliente">Cliente</li>
                            <li onClick={handleClickFu} className='list-login'>Funcionário</li>
                            <li onClick={handleClickAd} className='list-login'>Administrador</li> 
                        </ul>
                    </div>

                    <div className="container-slogan">
                        <h1>EmakersFood</h1>
                        <h2>Matando sua fome!</h2>
                    </div>
                </div>

                <section className={ viewC ? 'showViewC' : 'hideViewC' }>
                    <AuthClient
                        show={viewC} 
                        email={email} password={password} 
                        setEmail={setEmail} setPassword={setPassword}
                        authenticated={authenticated}
                        
                    />
                </section>

                <section className={ viewF ? 'showViewF' : 'hideViewF' }>
                    <AuthFuncionario  
                        showF={viewF}
                        email={email} password={password} 
                        setEmail={setEmail} setPassword={setPassword} 
                    />
                </section>   

                <section className={ viewA ? 'showViewA' : 'hideViewA' }>
                    <AuthAdmin 
                        showA={viewA}
                        email={email} password={password} 
                        setEmail={setEmail} setPassword={setPassword}
                    /> 
                </section>
                
            </section>
           
        );
   
}

