import React from 'react';
import { Link } from 'react-router-dom';
import Message from '../../../components/Status/Message';

export default  CadastroFinalizado  =>{

    return(
        <Link to='/' ><button ><Message>Cadastro Finalizado Com Sucesso!</Message></button></Link>
    );
}

