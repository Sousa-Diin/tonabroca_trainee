import React,{ useState } from "react";
import './Cardapio.css'

import Header from '../../components/Header/Header';
import Anuncios from "../../components/Anuncios/Anuncios";
import { ListaProdutos } from "../Register/Produtos/ListaProdutos";
import logar from '../../assets/logo/Pedido de Comida/sombra-de-usuario-masculino.png';
import carrinho from '../../assets/logo/Pedido de Comida/carrinho-de-compras.png';
import icon_1 from '../../assets/logo/Pedido de Comida/dinheiro.png';
import icon_2 from '../../assets/logo/Pedido de Comida/entrega-rapida.png';
import logo_loja from '../../assets/logo/Pedido de Comida/loja-11.png';


import Button from '../../components/Button/Button';
import p1 from '../../assets/logo/Pedido de Comida/p1.png';
import fechar from '../../assets/logo/Pedido de Comida/img-fechar.png';
import ViewPrice from "../../components/Prices/ViewPrice";


function Cardapio () {

   const [sidebar, setSidebar] = useState(false);
   const [addProdutoCar, setAddProdutoCar] = useState(false);
   const [entrega] = useState(6.9);
   const [horas] = useState(0);
   const [min] = useState(0);
   const [qtdProduto, setQtdProduto] = useState();
   //const [qtdPedido, setQtdPedido] = useState(0);
   let total ;

   const [titlePedido] = useState ("title-produto");
   const [imagaPedido] = useState (p1);
   const [describePedido] = useState ("alguma descricão");
   const [pricePedido, setPricePedido] = useState (0);

    const produtos = ListaProdutos; 

    const showSidebar = () => setSidebar(!sidebar);

    const showAddProduto = (produto) => {
        setQtdProduto(0); // se tirar da erro (NaN)
        setAddProdutoCar(!addProdutoCar);
        setPricePedido(produto.price);
       
    }
    

    const handleIncrementaQtd = () => {
        let incrementa = qtdProduto + 1;
        setQtdProduto(incrementa);
    }

    const handleDecrementaQtd = () =>{
        var decrementa = qtdProduto - 1;
        if (qtdProduto > 0){
            setQtdProduto(decrementa);
        }
    }

    function calcularSubtotal (price) {
        
        total = qtdProduto * price;
        return total;
    }

    function calcularTotal (){
        return total + entrega;
    }

       
        return (
            <main className="ped-cont-prod-main">
                <div className="ped-cont-nav-cab-div">
                    <nav className="cabecalho">
                        <Header className="logo-emakers"/>
                        <div className="ped-aba-search-nav">
                            <input id="input-pedido" type="text"/>
                            <img  src={logar} className="img-ped" alt="imade-login" />
                            <img onClick={showSidebar} src={carrinho} className="img-ped" alt="imade-carrinho-de-compra"/>
                                <span onClick={showSidebar} className="qtd-ped">{qtdProduto}</span>                            
                        </div>
                    </nav>

                    <aside className={sidebar ? "sidebar active" : "sidebar"}>
                        <section className="sep-pag-ped">
                            <p>Seu pedido</p>
                            <ViewPrice value={'R$ ' + {pricePedido}} name="black" type="numero">{qtdProduto} x Prato 1</ViewPrice>
                            <div className="sidebar-item-row">
                                <div className="nav-button"></div><Button name="button-default">Editar</Button> <div className="nav-button"></div><Button name="button-default">Remover</Button><div className="nav-button"></div>
                            
                            </div>

                            <section>
                                <ViewPrice value={'R$ ' + calcularSubtotal(35.23)} name="black" type="text">Subtotal</ViewPrice>
                                <ViewPrice value={'R$ ' + entrega} name="black" type="text">Taxa de Entrega</ViewPrice>
                                <ViewPrice value={'R$ ' + calcularTotal()} name="red" type="text">Total</ViewPrice>
                            </section>

                        </section>
                        
                        <footer className="sidebar-item-row">
                        <Button name="button-sidebar" onClick={() => showSidebar(false)}>Continuar <br/> Comprando</Button> <Button name="button-sidebar2">Finalizar<br/>Pedido</Button>
                        </footer>
                    </aside>

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
                
                    {produtos.map((produto) => {
                        return(
                            <div onClick={(produto) => showAddProduto()} className="produtos">
                                <picture className="container-picture">
                                    <img  alt="foto de comida" className="container-img" src={produto.image}/>
                                    <aside className="container-aside">
                                        <h3 id="titleProduto"  >{produto.title}</h3>
                                        <span className="price" >R$ {produto.price}</span>
                                    </aside>
                                </picture>
                                <span className="container-descricao" >{produto.describe}</span>
                            </div>
                         );
                    })}                              
              
                    
                    
                    <div className={addProdutoCar ? 'cont-abs-add-pro-show' : 'cont-abs-add-pro-hide'} >
                            <img className="cont-ped-add-prod-img" src={imagaPedido} alt="imagem-produto" />
                            <aside className="cont-ped-info">
                                <div className="cont-ped-desc">
                                    <h4>{titlePedido}</h4>
                                    <button onClick={() => setAddProdutoCar(false)} className="cont-img-btn-fech"><img src={fechar} alt="img-logout" className="cont-img-btn-fech"/></button>
                                </div>
                                <span>Descricão: {describePedido}</span>
                                <div className="cont-son-control-ped" >
                                    <div className="cont-son-qtd-ped">
                                        <button id="less-qtd" onClick={handleDecrementaQtd}> - </button>
                                        <input id="tot-qtd" value={qtdProduto}  readOnly/>
                                        <button id="more-qtd" onClick={handleIncrementaQtd}> + </button>
                                    </div>
                                    <Button name="button-default">Adicionar</Button>
                                </div>
                                    
                            </aside>
                                
                        </div>
                    
                </div>

              
                
                
            </main>
        );
    }
export default Cardapio;