import React   from 'react';
import './ItemLoja.css'

import { useCart } from '../../components/Providers/auth';
import HeaderNav from '../../components/Header/HeaderNav'
import ViewPrice from '../../components/Prices/ViewPrice';
import Button from '../../components/Button/Button';
import lixeira from '../../assets/logo/Pedido de Comida/lixeira_pedido.png'

export default function Cart (){

    document.title = 'Emakers Food - finalizar pedido';
    let entrega = 6.9;
    const cart = useCart();

    const remove = id => ()=>{
        cart.removeCart(id)
    }


    let subtotal = 0;
    let total  = 0;
 

    
    return(
        <div  className="container-cart">
            <HeaderNav />

            <main className='body-cart'>
            <section className='child-cart-pedidos'>
                <h2>Pedido</h2>
                <div className='child-cart-pedidos'>
                {Object.keys(cart.cart).map(key =>{
                        const product = cart.cart[key]
                        
                        subtotal += (product.qtd * product.product.price); 
                        total = subtotal ;
                        return(
                            <div  style={{backgroundColor:'#fff', color:'#000'}} className="produtos">
                                <picture style={{backgroundColor:'#fff'}} className="container-picture">
                                    <img  alt="foto de comida" className="container-img" src={product.product.image}/>
                                    <aside className="container-aside">
                                        <h3 id="titleProduto"  >{product.product.title}</h3>
                                            <span className="price" >R$ {product.product.price}</span> 
                                            <pre style={{marginTop:'-12%', marginLeft:'21%'}}>{'UN  ' + product.qtd}</pre>
                                    </aside>

                                    <img onClick={remove(key)} style={{width:'9%', height:'23%',}} src={lixeira} alt='btn-cancel' />
                                </picture>
                                <span className="container-descricao" >{product.product.describe}</span>
                            </div>
                            
                        )
                    })}
                </div>
                    
            </section>
                <aside className='aside-child-cart-info-ped'>
                    <div className='cart-info-alt-ped'>
                        <div className="cont-child-qtd-ped">
                            <button id="less-qtd-ped" > - </button>
                            <input id="tot-qtd-ped" value={cart.cart.qtd}  readOnly/>
                            <button id="more-qtd-ped" > + </button>
                           
                        </div>
                        <img style={{width:'35%', height:'43%',marginRight:'26%',}} src={lixeira} alt='btn-cancel' />
                        
                        <pre >{'R$ ' + subtotal} </pre>
                    </div>
                    <section className='section-child-price-ped'>
                        <ViewPrice value={'R$ ' + Number(subtotal).toFixed(2).replace('.',',')} name="black" type="text">Subtotal</ViewPrice>
                        <ViewPrice value={'R$ ' + Number(entrega).toFixed(2).replace('.',',')} name="black" type="text">Taxa de Entrega</ViewPrice>
                        <ViewPrice value={'R$ ' + Number(total + entrega).toFixed(2).replace('.',',')} name="red" type="text">Total</ViewPrice>
                    </section>

                </aside>
                
            </main>   
            <footer className='footer-button-finalizar'>
                <Button name='button-default'>Finalizar Pedido</Button>
            </footer>
              
        </div>
    );
   /*return(
        <p>Entrou</p>
    )*/

    
}
