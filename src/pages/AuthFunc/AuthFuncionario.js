import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import './AuthFuncionario.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../components/Providers/auth';

export default function AuthFuncionario () {

   /* const navigate = useNavigate();

    const { user, logado, setLogado } = React.useContext(AuthContext);
    console.log({user});

    const [permissao, setPermissao] = useState(false);

    const signIn = (e) => {
        if(props.email === 'func@teste' & '2121' === props.password & user.typeUser === 'coWork'){
            e.preventDefault();
            setLogado(!logado);
            //window.location.pathname = '/dadosFunc';
            navigate("/dadosFunc");
               
        }else{
            window.alert('Acesso negado!');

            props.setEmail('');
            props.setPassword('')
            setPermissao(!permissao);
            return false;
                
        }
            
    }*/

    const { login, authenticated } = React.useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const permision ='coWorck';
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("sumbit", {email, password, permision});
        
        login(email, password, permision)
    } 
    
   
    return(
        <div className={true ?"container-auth-func": "esconderDspF"}>
            <Header/>
            <form className="flex-autenticar" onSubmit={handleSubmit}>
                <h1>Fazer Login</h1>
                <pre>{String(authenticated)}</pre>
                <input className='email-login'value={email} onChange={(e) => setEmail( e.target.value)} type="email" placeholder="Email:"/>
                <input className='password-login' value={password} onChange={(e) => setPassword( e.target.value)} type="password" placeholder="Senha:"/>
                <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                <Button  name="button-default">Entrar</Button>
                <h5>Não tem uma conta? <Link id="newpass" to="/obterAcesso" className='link'>Cadastre-se</Link></h5>
            </form>
        </div>
    );

}

