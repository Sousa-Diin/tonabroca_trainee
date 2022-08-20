import React from "react";
import '../Codigo/CodigoDeConfirmacao.css';
import { Link } from "react-router-dom";

import logo from '../../../assets/logo/logo_emakers2.png';

export default function CodigoDeConfirmacao(){
    return(
    <div className="contenair-codigo">
        <div className="codigo-header">
            <img src={logo} className="codigo-img" alt="loglo da emmpresa"/>
            <h5>EmakersFood</h5>
        </div>
        <div className="codigo-main">
            <h4 className="title-codigo">Digite o código enviado</h4>
            <input type="text" name="recuperar-senha"  placeholder=" Código"/>
            <button><Link to="/codigoConfirmacao">Continuar</Link></button>
            <p><Link to="/recuperarSenha">Reenviar Código</Link></p>
        </div>
    </div>
    );
}