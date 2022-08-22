import React from "react";
import { Link } from "react-router-dom";
import '../RecuperarSenha/RecuperarSenha.css';

import logo from '../../assets/logo/logo_emakers2.png';

export default function RecuperarSenha(){
    return (
        <main className="container-recuperar-senha">

            <header className="header-recuperacao">
                <img  src={logo} className="img-login" alt="logo"/>
                <h2 className="title-logo">EmakersFood</h2>
            </header>
            <div className="recuperar-senha">
                <h4 className='title-new-password'>Recuperação de senha</h4>
                <input type="text" name="recuperar-senha"  placeholder=" Email"/>
                <button><Link id="link"to="/codigoConfirmacao">Enviar Código</Link></button>
            </div>
        </main>
    );
}