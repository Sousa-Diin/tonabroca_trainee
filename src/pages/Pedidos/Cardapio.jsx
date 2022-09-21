import React from "react";
import Header from '../../components/Header/Header'
import './Cardapio.css'

import logar from '../../assets/logo/Pedido de Comida/sombra-de-usuario-masculino.png';
import carrinho from '../../assets/logo/Pedido de Comida/carrinho-de-compras.png';

import img1 from '../../assets/logo/Pedido de Comida/carne.png';
import img3 from '../../assets/logo/Pedido de Comida/sushi.png';
import img4 from '../../assets/logo/Pedido de Comida/salada.png';
import img2 from '../../assets/logo/Pedido de Comida/batatas-fritas.png';

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
                
                <div className="ped-div-anuncios">
                    <img src={img1} alt="img-1" className="img-anu-ped"/>
                    <img alt="img-2" className="img-anu-ped"/>
                    <img src={img2} alt="img-3" className="img-anu-ped"/>
                    <img alt="img-4" className="img-anu-ped"/>
                    <img src={img3} alt="img-5" className="img-anu-ped"/>
                    <img alt="img-6" className="img-anu-ped"/>
                    <img src={img4} alt="img-7" className="img-anu-ped"/>
                </div>
                <div className="ped-name-store-entrega">
                    <img alt="logo-store"/> <h2>Restaurante <br></br>Food e Drinks </h2>
                    <aside className="info-ped"> 
                        <img/> <span/> 
                    </aside>
                </div>
            </main>
        );
    }
}
export default Cardapio;