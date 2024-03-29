import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import '../NovaSenha/NovaSenha.css';
import Button from '../../Button/Button';

export default function NovaSenha(){
    return (
        <div className="container-new-password">
            <Header/>

            <div className="nova-senha-main">
                <h4 className='title-new-password'>Digite a nova senha</h4>
                <input type="password" placeholder='  Nova senha'/>
                <input type="password" placeholder='  Confirme a senha'/>

                <div className='new-pass-ajus'>
                    <Link id="link" to="/"><Button name="button-default">Confirmar</Button></Link>
                </div>

            </div>
            
        </div>
    );

}