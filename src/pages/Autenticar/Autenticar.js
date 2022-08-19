import React, { Component } from 'react';

import './Autenticar.css';

class Autenticar extends Component {
    render(){
        return(
            <div className="container-autenticar">
                <div className="flex-autenticar">
                    <h1>Bem Vindo!</h1>
                    <input className='email' type="email" placeholder="Email:"/>
                    <input className='password' type="password" placeholder="Senha:"/>
                </div>
            </div>
        );
    }

}

export default Autenticar;