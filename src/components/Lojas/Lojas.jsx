import React from "react";
import '../../pages/Pedidos/Cardapio.css';
import '../Lojas/store.css'

import Sidebar from "../../components/Header/HeaderNav";
import Anuncios from "../../components/Anuncios/Anuncios";
/*import icon_1 from '../../assets/logo/Pedido de Comida/dinheiro.png';
import icon_2 from '../../assets/logo/Pedido de Comida/entrega-rapida.png';
import logo_loja from '../../assets/logo/Pedido de Comida/loja-11.png';*/
import Store from "../../components/Lojas/store";

//import p1 from '../../assets/logo/Pedido de Comida/p1.png';
import { AuthContext } from "../../components/Providers/auth";
import { ListaLojas } from "../../pages/Register/Lojas/ListaLojas";
import Promocao from "../Anuncios/Promocao";


function Lojas () {

   const { user } = React.useContext(AuthContext);
   console.log({user});

    const lojas = ListaLojas; 

    return (
            <main className="ped-cont-prod-main">
                <div className="ped-cont-nav-cab-div">
                    <Sidebar />
                    <Anuncios />                
                </div>
                <Promocao />
                <div > 
                    <h1 style={{margin:'.6%',font:'bond',fontSize:'60px'}}>Lojas</h1> 
                    <div className="ped-cont-list-prod-store" >
                    {lojas.map((loja) => {                       
                        return(                            
                            <Store loja={loja} />                         
                        )   
                    })} 
                    </div> 
                                        
                </div>               
           </main>
        );
        /*return(<p>Pedidos</p>)*/
    }
export default Lojas;