import React from "react";
import './Cardapio.css'

import Header from '../../components/Header/Header'
import Anuncios from "../../components/Anuncios/Anuncios";

import logar from '../../assets/logo/Pedido de Comida/sombra-de-usuario-masculino.png';
import carrinho from '../../assets/logo/Pedido de Comida/carrinho-de-compras.png';
import icon_1 from '../../assets/logo/Pedido de Comida/dinheiro.png';
import icon_2 from '../../assets/logo/Pedido de Comida/entrega-rapida.png';
import logo_loja from '../../assets/logo/Pedido de Comida/loja-11.png';


class Cardapio extends React.Component {
    

    constructor()
    {
        super();
        this.state = {
            busca: "",
            price: parseFloat('00','00'),
            horas:'00',
            min:'00',
           
        }
        
       // this.handleChangeLogar = this.handleChangeLogar.bind(this);
        
    }
    

    render(){
       
        return (
            <main className="ped-cont-prod-main">
                <div className="ped-cont-nav-cab-div">
                    <nav className="cabecalho">
                        <Header className="logo-emakers"/>
                        <div className="ped-aba-search-nav">
                            <input id="input-pedido" type="text"/>
                            <img  src={logar} className="img-ped" alt="imade-login" />
                            <img src={carrinho} className="img-ped" alt="imade-carrinho-de-compra"/>
                        </div>
                    </nav>
                    <Anuncios />
                    <div className="ped-name-store-entrega">
                        <aside className="aside-logo-store">
                            <img className="logo-loja" src={logo_loja} alt="logo-store"/> 
                            <h2>Restaurante <br/> Food e Drinks </h2>
                        </aside>

                        <div className="container-info-pedido"> 
                            <figure className="figure-info-op">
                                <img src={icon_1} className="img-pedido" alt="img-dinheiro"/> <span className="legenda-pedido">Pedido mínimo <br/> R$ {this.state.price}</span>
                            </figure>

                            <figure className="figure-info-op">
                                <img src={icon_2} className="img-pedido" alt="img-moto"/> <span className="legenda-pedido">Entrega <br/>{this.state.horas} horas - {this.state.min} min</span>
                            </figure>
                        </div>
                    </div>
                </div>
                

                <div className="ped-cont-list-prod">
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    <h3 className="produtos">Produto</h3>
                    
                    
                </div>
                
                
            </main>
        );
    }
}
export default Cardapio;