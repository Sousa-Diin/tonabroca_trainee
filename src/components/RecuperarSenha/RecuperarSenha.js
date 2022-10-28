import React from "react";
import { Link } from "react-router-dom";
import '../RecuperarSenha/RecuperarSenha.css';
import Button from "../Button/Button";

import Header from '../Header/Header';

export default function RecuperarSenha(){
    document.title = 'Emakers Food - recuperar-senha';
    return (
        <main className="container-recuperar-senha">

            <Header/>
            <div className="recuperar-senha">
                <h4 className='title-new-password'>Recuperação de senha</h4>
                <input type="text" name="recuperar-senha"  placeholder=" Email"/>
                <Link id="link"to="/codigoConfirmacao"><Button name="button-default">Enviar Código</Button></Link>
            </div>
        </main>
    );
}