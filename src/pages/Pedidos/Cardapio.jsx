import React from "react";
import Header from '../../components/Header/Header'
import './Cardapio.css'

import logar from '../../assets/logo/Pedido de Comida/sombra-de-usuario-masculino.png';
import carrinho from '../../assets/logo/Pedido de Comida/carrinho-de-compras.png';

import ImageAndPhrase from "../../components/ImagePhrase/ImageAndPhrase";
import Anuncios from "../../components/Anuncios/Anuncios";

class Cardapio extends React.Component {

    constructor(props)
    {
        super(props);
        
    }

   handleChangeLogar = () => {
    alert('logando');
   }

    render(){
        return (
            <main className="ped-cont-prod-main">
                <nav className="cabecalho">
                    <Header className="logo-emakers"/>
                    <div className="ped-aba-search-nav">
                        <input id="input-pedido" type="text"/>
                        <img  src={logar} className="img-ped" alt="imade-login"
                        />
                        <img src={carrinho} className="img-ped" alt="imade-carrinho-de-compra"/>
                    </div>
                </nav>
                <Anuncios />
                <div className="ped-name-store-entrega">
                    <img alt="logo-store"/> <h2>Restaurante <br></br>Food e Drinks </h2>
                    <aside className="info-ped"> 
                        <img alt="img-moeda"/> <span>Pedido mínimo R$ 0,00</span>
                        <img alt="img-moto"/> <span></span>
                    </aside>
                </div>
                
            </main>
        );
    }
}
export default Cardapio;