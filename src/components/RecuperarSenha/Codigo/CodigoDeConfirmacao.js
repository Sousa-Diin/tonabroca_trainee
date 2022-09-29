import React from "react";
import '../Codigo/CodigoDeConfirmacao.css';
import { Link } from "react-router-dom";

import Button from '../../Button/Button'

import Header from '../../Header/Header';

export default function CodigoDeConfirmacao(){
    return(
    <div className="contenair-codigo">
        <Header/>
        <div className="codigo-main">
            <h4 className='title-new-password'>Digite o código enviado</h4>
            <input type="text" name="recuperar-senha"  placeholder=" Código"/>
            <div className="centraliza-button-link">
            <Link id="link"to='/novaSenha'><Button name="button-default">Continuar</Button></Link>
            <p ><Link id="codigo"to="/recuperarSenha" className="rev-cod-psw-confr" >Reenviar Código</Link></p>
            </div>
            
        </div>
    </div>
    );
}