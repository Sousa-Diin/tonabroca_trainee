import React from 'react';
import Message from '../../../components/Status/Message';

export default  function CadastroFinalizado (){

    return(
        <Message name={true} onClick={() => {window.location.pathname = '/'}}>Cadastro Finalizado Com Sucesso!</Message>
    );
}

