import React from "react";
import '../../pages/Pedidos/Cardapio.css';

import Sidebar from "../../components/Header/HeaderNav";
import Anuncios from "../../components/Anuncios/Anuncios";
import { ListaProdutos } from "../../pages/Register/Produtos/ListaProdutos";
/*import icon_1 from '../../assets/logo/Pedido de Comida/dinheiro.png';
import icon_2 from '../../assets/logo/Pedido de Comida/entrega-rapida.png';
import logo_loja from '../../assets/logo/Pedido de Comida/loja-11.png';*/
import Produto from "../../components/Produto/Produto";

//import p1 from '../../assets/logo/Pedido de Comida/p1.png';
import { AuthContext } from "../../components/Providers/auth";


function Lojas () {

   const { user } = React.useContext(AuthContext);
   console.log({user});

    const produtos = ListaProdutos; 

    return (
            <main className="ped-cont-prod-main">
                <div className="ped-cont-nav-cab-div">
                    <Sidebar />
                    <Anuncios />
                </div>
                <div style={{ marginTop:'1%',backgroundColor:'rgba(0,0,0,.4)'}}>
                    <h1 >Carrosel de Anuncios</h1>
                </div>
               
                <div style={{display:'block',height:'100%', backgroundColor:'rgba(0,0,0,.4)' }}> 
                    <h2>Lojas</h2> 
                    <div  style={{marginTop:'-3%'}} className="ped-cont-list-prod" >
                    {produtos.map((produto, key) => {
                       
                        return(
                        <Produto produto={produto} />
                        )
                        
                    })} 
                    </div>                        
                </div>
                
                
            </main>
        );
        /*return(<p>Pedidos</p>)*/
    }
export default Lojas;