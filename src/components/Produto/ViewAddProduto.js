import React from 'react'
import '../../components/Produto/Produto.css'
import { useCart } from '../Providers/auth'
import close from '../../assets/logo/Pedido de Comida/img-fechar.png'

export default function ViewAddProduto(props) {

    const cart = useCart();

    const add = produto => () => {
        cart.addCart(produto);
    }

    const remove = produto => () => {
        cart.removeItem(produto)
    }


  return (
    <div className={props.ride ? 'cont-abs-add-pro-show': "cont-abs-add-pro-hide"} >
        {Object.keys(cart.cart).map(key =>{
            const product = cart.cart[key]                      
                        
            return(
                <div className='cont-alt-ped-body'>
                    <img className="cont-ped-add-prod-img" src={product.product.image} alt="imagem-produto" />
                    <aside className="cont-ped-info">
                        <h4 className='title'>{product.product.title}</h4>
                            
                        <div className="cont-son-control-ped" >
                            <div className="cont-son-qtd-ped">
                                <button id="less-qtd" onClick={remove(product.product)}> - </button>
                                <input id="tot-qtd" value={product.qtd}  readOnly/>
                                <button id="more-qtd" onClick={add(product.product)}> + </button>
                            </div>
                        </div>
                                                
                    </aside>
                   
                </div>
         )
    })}
        <button onClick={()=> props.setRide(false)} className="cont-img-btn-fech"><img src={close} alt="img-logout" className="cont-img-btn-fech"/></button>                         
    </div>
  )
}
