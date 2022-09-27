import React from "react";
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


class Cardapio extends React.Component {
    

    constructor()
    {
        super();
        this.state = {
            busca: "",
            price: 0.0,
            horas:'00',
            min:'00',
            qtdProduto: 3,
            classDiv: 'show',
           
        }
        
       // this.handleChangeLogar = this.handleChangeLogar.bind(this);
       this.handleIncrementaQtd = this.handleIncrementaQtd.bind(this);
       this.handleDecrementaQtd = this.handleDecrementaQtd.bind(this);
    
    }
   
    handleIncrementaQtd () {
        this.setState.qtdProduto =+ 1;
    }  

    handleDecrementaQtd() {
        this.setState.qtdProduto =- 1;
    }  

    handleChange(){
        console.log("me apertou");
    }
        
    alterarEstado(){
        var estado;

        if(this.state.classDiv === 'show'){
            estado = 'hide';
        }else{
            estado = 'show';
        }
        this.setState({
            classdiv : estado
        });
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

                    {ListaProdutos.map((val,key) => {
                        return(
                            <div className="produtos">
                                <picture className="container-picture">
                                    <img className="container-img" key={key} src={val.image}/>
                                    <aside className="container-aside">
                                        <h3 key={key}>{val.title}</h3>
                                        <span className="price" key={key}>R$ {val.price}</span>
                                    </aside>
                                </picture>
                                <span className="container-descricao" key={key}>{val.describe}</span>
                            </div>
                         );
                    })}
                    
                    
                        <div className="cont-abs-add-pro" >
                            <img className="cont-ped-add-prod-img" src={p1} alt="imagem-produto" />
                            <aside className="cont-ped-info">
                                <div className="cont-ped-desc">
                                    <h4>Prato 2</h4>
                                    <button className="cont-img-btn-fech"><img src={fechar} alt="img-logout" className="cont-img-btn-fech"/></button>
                                </div>
                                <span>Descricão:</span>

                                <div className="cont-son-control-ped" >
                                    <div className="cont-son-qtd-ped">
                                        <button id="less-qtd" > - </button>
                                        <input id="tot-qtd" value={this.state.qtdProduto}  readOnly/>
                                        <button id="more-qtd" onClick={this.handleIncrementaQtd}> + </button>
                                    </div>
                                    <Button>Adicionar</Button>
                                </div>
                                    
                            </aside>
                                
                        </div>
                    
                </div>

              
                
                
            </main>
        );
    }
}
export default Cardapio;