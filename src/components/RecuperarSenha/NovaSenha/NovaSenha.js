import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo_emakers2.png';
import '../NovaSenha/NovaSenha.css';

export default function NovaSenha(){
    return (
        <div className="container-new-password">
            <header className='nova-senha-header'>
                <img src={logo} className="nova-senha-img" alt="loglo da emmpresa"/>
                <h5>EmakersFood</h5>
            </header>

            <div className="nova-senha-main">
                <h4 className='title-new-password'>Digite a nova senha</h4>
                <input type="password" placeholder='  Nova senha'/>
                <input type="password" placeholder='  Confirme a senha'/>

                <button id='confirmar-senha'><Link id="link" to="/logar">Confirmar</Link></button>


            </div>
            
        </div>
    );

}