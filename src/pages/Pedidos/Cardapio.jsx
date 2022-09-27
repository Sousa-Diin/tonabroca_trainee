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


function Cardapio () {

   const [sidebar, setSidebar] = useState(false);
   const [addProdutoCar, setAddProdutoCar] = useState(false);
   const [entrega] = useState(6);
   //const [price] = useState(0.0);
   const [horas] = useState(0);
   const [min] = useState(0);
   const [qtdProduto, setQtdProduto] = useState(1);

    
    const showSidebar = () => setSidebar(!sidebar);

    const showAddProduto = () => {
        setQtdProduto(0);
        setAddProdutoCar(!addProdutoCar);
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

    const capturaItem = event => {
        if(event.id === ListaProdutos.length){
            alert(event.id);
        }
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
                                                        
                        </div>
                    </nav>
                    <aside className={sidebar ? "sidebar active" : "sidebar"}>
                        <p>Sidebar</p>
                        <div className="sidebar-item-row">
                            <div className="nav-button"></div><Button >Editar</Button> <div className="nav-button"></div><Button>Remover</Button><div className="nav-button"></div>
                        </div>
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
                
                    {ListaProdutos.map((val,key) => {
                        return(
                            <div onClick={showAddProduto} className="produtos">
                                <picture className="container-picture">
                                    <img  alt="foto de comida" className="container-img" key={key} src={val.image}/>
                                    <aside className="container-aside">
                                        <h3 key={key.id}>{val.title}</h3>
                                        <span className="price" key={key}>R$ {val.price}</span>
                                    </aside>
                                </picture>
                                <span className="container-descricao" key={key}>{val.describe}</span>
                            </div>
                         );
                    })}                              
              
                    
                    
                    <div className={addProdutoCar ? 'cont-abs-add-pro-show' : 'cont-abs-add-pro-hide'} >
                            <img className="cont-ped-add-prod-img" src={p1} alt="imagem-produto" />
                            <aside className="cont-ped-info">
                                <div className="cont-ped-desc">
                                    <h4>Prato 2</h4>
                                    <button onClick={() => setAddProdutoCar(false)} className="cont-img-btn-fech"><img src={fechar} alt="img-logout" className="cont-img-btn-fech"/></button>
                                </div>
                                <span>Descricão:</span>

                                <div className="cont-son-control-ped" >
                                    <div className="cont-son-qtd-ped">
                                        <button id="less-qtd" onClick={handleDecrementaQtd}> - </button>
                                        <input id="tot-qtd" value={qtdProduto}  readOnly/>
                                        <button id="more-qtd" onClick={handleIncrementaQtd}> + </button>
                                    </div>
                                    <Button>Adicionar</Button>
                                </div>
                                    
                            </aside>
                                
                        </div>
                    
                </div>

              
                
                
            </main>
        );
    }
export default Cardapio;