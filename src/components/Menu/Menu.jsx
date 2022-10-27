import React from 'react'
import { listaMenu } from './ListaMenu';
import { useCart } from '../Providers/auth'

export default function Menu(props) {
  const cart  = useCart();
  return (
    <div className={props.show ? "sidebar-menu" : "esconder"} >
          <h3 className="name-client">  Óla  {cart.user.name }  </h3>  
            {listaMenu.map((menu) => {
              return(
                    <ul className='coluna-menu'>
                                      
                      <img  className="icons-menu" src={menu.icon } alt="icon-menu"/>
                      <li  onClick={() => {window.location.pathname = menu.link}} className='list-menu'>{menu.title}</li>
                    </ul>
              );
            })}
      </div>
  )
}
