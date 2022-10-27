import React, { useState } from 'react'
import ViewPrice from '../Prices/ViewPrice'
import Button from '../Button/Button'
import { useCart } from '../Providers/auth'
import ViewAddProduto from '../Produto/ViewAddProduto';

export default function BuyCart(props) {

const cart = useCart();

const [ride, setRide] = useState(false);
let sub = 0;
let quatity = 0;

  return (
    
        <main className={props.cart ? "sidebar active" : "sidebar"}>
          <div style={{display:'none'}}>
            {Object.keys(cart.cart).map(key =>{
              const product = cart.cart[key]
              quatity += product.qtd;
              sub += (product.product.price * product.qtd)
              return 0;
            })}
          </div>
         
          
          <section className="sep-pag-ped">
          <h3> Óla  {cart.user.name}   seu pedido em Loja : </h3>
          <ViewPrice value={'UN  ' + quatity} name="black" type="numero">Restaurante <br/> Food & Drink</ViewPrice>
                  <div className="sidebar-item-row">
                    <div  className="nav-button"></div><Button name="button-default" onClick={()=> setRide(!ride)}>Editar</Button> <div className="nav-button"></div><Button name="button-default" >Remover</Button><div className="nav-button"></div>
                    <ViewAddProduto ride={ride} setRide={setRide} cart={cart}/>   
                  </div>

                  <section>
                      <ViewPrice value={'R$ ' + Number(sub).toFixed(2)} name="black" type="text">Subtotal</ViewPrice>
                      <ViewPrice value={'R$ ' + props.entrega} name="black" type="text">Taxa de Entrega</ViewPrice>
                      <ViewPrice value={'R$ ' + (sub + props.entrega)} name="red" type="text">Total</ViewPrice>
                     
                  </section>

          </section>
                        
                  <footer className="sidebar-item-row">
                    <Button onClick={() => props.showCart(false)} name="button-sidebar" >Continuar <br/> Comprando</Button> <Button onClick={()=>{window.location.pathname = '/cart'}} name="button-sidebar2" >Finalizar<br/>Pedido</Button>
                  </footer>
        </main>
  )
}
//24    
