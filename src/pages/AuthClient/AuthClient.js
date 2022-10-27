import React from 'react';
import { useNavigate } from 'react-router-dom';

import './AuthClient.css';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../components/Providers/auth';



export default function AuthClient  (props) {

    const { user, logado, setLogado} = React.useContext(AuthContext);
    console.log({user});

    const navigate = useNavigate();

   // const [permissao, setPermissao] = useState(false);

    const signIn = (e) => {
        if(props.email === 'dinho@dev' & '3131' === props.password & user.typeUser === 'client'){
            e.preventDefault();
           // window.location.pathname = '/pedidos';
           setLogado(!logado);
            navigate('/store');   
        }else{
            window.alert('Acesso negado!');

            props.setEmail('');
            props.setPassword('')
           // setPermissao(!permissao);
            return false; 
                
        }
            
    }
    
    return(
         
            <div className={props.show ? "container-autenticar" : " esconderDspC"}>
                <Cabecalho/>
                    
                <form className="flex-autenticar" onSubmit={(e) => props.handleGravaUser(e)}>
                    <h1>Bem Vindo!</h1>
                    <p>{String(logado)}</p>
                    <input className='email-login'  name="login" value={props.email} onChange={(e) => props.setEmail( e.target.value)} type="email" placeholder="Email:"/>
                    <input className='password-login' name="senha" value={props.password} onChange={(e) => props.setPassword( e.target.value)} type="password" placeholder="Senha:"/>
                    <h5><Link id="newpass" to="/recuperarSenha">Esqueci minha senha</Link></h5>
                    <Button onClick={(e) => signIn(e)} name="button-default">Entrar</Button>
                    <h5>Não tem uma conta? <Link id="newpass" name="cadastrar" to="/obterAcesso" className='link'>
                    Cadastre-se</Link></h5>
                </form>
            </div>
    );
}

