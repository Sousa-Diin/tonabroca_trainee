import React,{ useEffect, useState } from "react";
import './Cardapio.css';

import api from "../../services/api";
import Sidebar from "../../components/Header/HeaderNav";
import Anuncios from "../../components/Anuncios/Anuncios";
import { ListaProdutos } from "../Register/Produtos/ListaProdutos";
import icon_1 from '../../assets/logo/Pedido de Comida/dinheiro.png';
import icon_2 from '../../assets/logo/Pedido de Comida/entrega-rapida.png';
import logo_loja from '../../assets/logo/Pedido de Comida/loja-11.png';
import Produto from "../../components/Produto/Produto";

import p1 from '../../assets/logo/Pedido de Comida/p1.png';
import fechar from '../../assets/logo/Pedido de Comida/img-fechar.png';
import { AuthContext } from "../../components/Providers/auth";
import ViewAddProduto from "../../components/Produto/ViewAddProduto";
//import Users from "../Register/Users/Users";


function Cardapio () {

   const { user, cart, setCart } = React.useContext(AuthContext);
   console.log({user});

   const [addProdutoCar, setAddProdutoCar] = useState(false);
   const [entrega] = useState(6.9);
   const [horas] = useState(0);
   const [min] = useState(0);
   const [qtdProduto, setQtdProduto] = useState(0);

   const [apiProdutos, setApiProdutos] = useState(
        {"titlePedido": "",
         "imagaPedido": "",
         "describePedido": "",
         "pricePedido": 0.0,
        }
    )

   const [titlePedido] = useState ("title-produto");
   const [imagaPedido] = useState (p1);
   const [describePedido] = useState ("alguma descricão");
   const [pricePedido, setPricePedido] = useState (0);

    const produtos = ListaProdutos; 

    useEffect(()=> {
        api
        .get("createUser")
        .then(({data})=>{
          setApiProdutos(data);
          console.log(apiProdutos);
        })
    
        //eslint-disable-next-line-react-hooks/exhaustive-deps
    }, []);

    const showAddProduto = (produto) => {
        setQtdProduto(0); // se tirar da erro (NaN)
        setAddProdutoCar(!addProdutoCar);
        setPricePedido(produto.price);
       
    }
    

    const handleIncrementaQtd = () => {
        let incrementa = cart.qtd + 1;
        setCart({qtd:incrementa});
    }

    const handleDecrementaQtd = () =>{
        var decrementa = cart.qtd - 1;
        if (cart.qtd > 0){
            setCart({qtd:decrementa});
            setQtdProduto(decrementa);
        }
    }

        return (
            <main className="ped-cont-prod-main">
                <div className="ped-cont-nav-cab-div">
                <Sidebar />
                <Anuncios />
                <div className="ped-name-store-entrega">
                        <aside className="aside-logo-store">
                            <img className="logo-loja" src={logo_loja} alt="logo-store"/> 
                            <h2>Restaurante <br/> Food e Drinks </h2>
                        </aside>

                        <div className="container-info-pedido"> 
                            <figure className="figure-info-op">
                                <img src={icon_1} className="img-pedido" alt="img-dinheiro"/> <span className="legenda-pedido">Pedido mínimo <br/> R$ {entrega}</span>
                            </figure>

                            <figure className="figure-info-op">
                                <img src={icon_2} className="img-pedido" alt="img-moto"/> <span className="legenda-pedido">Entrega <br/>{horas} horas - {min} min</span>
                            </figure>
                        </div>
                    </div>
                </div>
               
                <div className="ped-cont-list-prod">  
                    {produtos.map((produto) => (
                        <Produto produto={produto} showAddProduto={showAddProduto}/>
                        
                        ))
                    }                         
                </div>             
                <ViewAddProduto 
                    fechar={fechar}
                    qtdProduto={qtdProduto}
                    addProdutoCar={addProdutoCar}
                    imagaPedido={imagaPedido}
                    setAddProdutoCar={setAddProdutoCar}
                    titlePedido={titlePedido}
                    pricePedido={pricePedido}
                    describePedido={describePedido}
                    handleDecrementaQtd={handleDecrementaQtd}
                    handleIncrementaQtd={handleIncrementaQtd}
                    cart={cart}
                    setCart={setCart}
                /> 
                
                
            </main>
        );
    }
export default Cardapio;