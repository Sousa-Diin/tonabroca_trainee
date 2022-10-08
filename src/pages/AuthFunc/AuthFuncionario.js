import React, { useState } from 'react';

import './AuthFuncionario.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../components/Providers/auth';

export default function AuthFuncionario (props) {
    const { user } = React.useContext(AuthContext);
    console.log({user});

    const [permissao, setPermissao] = useState(false);

    const signIn = (e) => {
        if(props.email === 'func@teste' & '2121' === props.password /*& user.typeUser === 'coWork'*/){
            e.preventDefault();
            window.location.pathname = '/dadosFunc';
               
        }else{
            window.alert('Acesso negado!');

            props.setEmail('');
            props.setPassword('')
            setPermissao(!permissao);
            return false;
                
        }
            
    }
    
   
    return(
        <div className="container-auth-func">
            <Header/>
            <div className={props.showF ? "flex-autenticar" : "esconderDspF"}>
                <h1>Fazer Login</h1>
                <input className='email-login'value={props.email} onChange={(e) => props.setEmail( e.target.value)} type="email" placeholder="Email:"/>
                <input className='password-login' value={props.password} onChange={(e) => props.setPassword( e.target.value)} type="password" placeholder="Senha:"/>
                <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                <Button onClick={(e)=> signIn(e)} name="button-default">Entrar</Button>
                <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
            </div>
        </div>
    );

}

