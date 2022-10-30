import React from 'react';
import Message from '../../../components/Status/Message';

export default  function CadastroFinalizado (){

    return(
        <Message name='cont-comp-sts-mess' onClick={() => {window.location.pathname = '/'}}>Cadastro Finalizado Com Sucesso!</Message>
    );
}

