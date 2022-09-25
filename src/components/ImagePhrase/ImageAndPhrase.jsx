import React, {Component, Fragment } from 'react';
import '../ImagePhrase/ImageAndPhrase.css';
import icon_1 from '../../assets/logo/Pedido de Comida/entrega-rapida.png';

export default class ImageAndPhrase extends Component{
   
    render(){
        
        return(
            <Fragment>
                <div>
                    <img alt="icon" src={icon_1}/>
                    <h3>Pedido</h3>
                </div>
                
            </Fragment>
        );
    }
}