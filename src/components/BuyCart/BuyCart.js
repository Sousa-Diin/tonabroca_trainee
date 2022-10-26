import React, { useState } from 'react'
import ViewPrice from '../Prices/ViewPrice'
import Button from '../Button/Button'
import { AuthContext, useCart } from '../Providers/auth'
import ViewAddProduto from '../Produto/ViewAddProduto';

export default function BuyCart(props) {

const cart = useCart();
const {subTotal, total } = React.useContext(AuthContext) ;

const [ride, setRide] = useState(false);

  return (
    
        <main className={props.cart ? "sidebar active" : "sidebar"}>
          <section className="sep-pag-ped">
              <h3> Óla  user.name   seu pedido em Loja : </h3>
                  <ViewPrice value={'R$ ' + cart.cart.price} name="black" type="numero">{cart.cart.qtd + ' x ' + cart.cart.title}</ViewPrice>
                  <div className="sidebar-item-row">
                    <div  className="nav-button"></div><Button name="button-default" onClick={()=> setRide(!ride)}>Editar</Button> <div className="nav-button"></div><Button name="button-default" >Remover</Button><div className="nav-button"></div>
                    <ViewAddProduto ride={ride} setRide={setRide} cart={cart}/>        
                  </div>

                  <section>
                      <ViewPrice value={'R$ ' + subTotal} name="black" type="text">Subtotal</ViewPrice>
                      <ViewPrice value={'R$ ' + props.entrega} name="black" type="text">Taxa de Entrega</ViewPrice>
                      <ViewPrice value={'R$ ' + total} name="red" type="text">Total</ViewPrice>
                     
                  </section>
                  

          </section>
                        
                  <footer className="sidebar-item-row">
                    <Button onClick={() => props.showCart(false)} name="button-sidebar" >Continuar <br/> Comprando</Button> <Button onClick={()=>{window.location.pathname = '/cart'}} name="button-sidebar2" >Finalizar<br/>Pedido</Button>
                  </footer>
        </main>
  )
}
