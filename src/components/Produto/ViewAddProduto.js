import React, { useContext } from 'react'
import Button from '../Button/Button'
import '../../components/Produto/Produto.css'
import { AuthContext } from '../Providers/auth'

export default function ViewAddProduto(props) {

    const cart = useContext(AuthContext);

    const add =()=>{
        cart.addCart({
            desc:'Prato 95',
            priceProduto:45.90,
            qtdProduto:1,
        })
    }
  return (
    <div className={true ? 'cont-abs-add-pro-show': "cont-abs-add-pro-hide"} >
        <img className="cont-ped-add-prod-img" src={props.imagaPedido} alt="imagem-produto" />
        <aside className="cont-ped-info">
            <div className="cont-ped-desc">
                <h4>{props.titlePedido}</h4>
                    <button onClick={() => props.setAddProdutoCar(false)} className="cont-img-btn-fech"><img src={props.fechar} alt="img-logout" className="cont-img-btn-fech"/></button>
            </div>
            <span>Descricão: {props.describePedido}</span>
            <div className="cont-son-control-ped" >
                <div className="cont-son-qtd-ped">
                    <button id="less-qtd" onClick={props.handleDecrementaQtd}> - </button>
                    <input id="tot-qtd" value={props.cart.qtd}  readOnly/>
                    <button id="more-qtd" onClick={props.handleIncrementaQtd}> + </button>
                </div>
                <Button onClick={add} name="button-default">Adicionar</Button>
            </div>
                                    
        </aside>
                                
    </div>
  )
}
