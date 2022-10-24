import React from 'react'
import ViewPrice from '../Prices/ViewPrice'
import Button from '../Button/Button'
import { AuthContext } from '../Providers/auth'

export default function BuyCart(props) {
const product = React.useContext(AuthContext);
  return (
        <main className={props.cart ? "sidebar active" : "sidebar"}>
          <section className="sep-pag-ped">
              <h3> Óla  user.name   seu pedido em Loja : </h3>
                  <ViewPrice value={'R$ ' + product.cart.price} name="black" type="numero">{product.cart.qtd + ' x ' + product.cart.desc}</ViewPrice>
                  <div className="sidebar-item-row">
                    <div className="nav-button"></div><Button name="button-default">Editar</Button> <div className="nav-button"></div><Button name="button-default">Remover</Button><div className="nav-button"></div>
                            
                  </div>

                  <section>
                      <ViewPrice value={'R$ ' + props.calcularSubtotal(35.7)} name="black" type="text">Subtotal</ViewPrice>
                      <ViewPrice value={'R$ ' + props.entrega} name="black" type="text">Taxa de Entrega</ViewPrice>
                      <ViewPrice value={'R$ ' + props.calcularTotal()} name="red" type="text">Total</ViewPrice>
                  </section>
                  <pre>{JSON.stringify(product.cart,null,3)}</pre>

          </section>
                        
                  <footer className="sidebar-item-row">
                    <Button onClick={() => props.showCart(false)} name="button-sidebar" >Continuar <br/> Comprando</Button> <Button name="button-sidebar2" >Finalizar<br/>Pedido</Button>
                  </footer>
        </main>
  )
}
