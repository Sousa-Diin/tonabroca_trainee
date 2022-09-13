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
            <Button><Link id="link"to='/novaSenha'>Continuar</Link></Button>
            <h7><Link id="codigo"to="/recuperarSenha" className='link'>Reenviar Código</Link></h7>
        </div>
    </div>
    );
}