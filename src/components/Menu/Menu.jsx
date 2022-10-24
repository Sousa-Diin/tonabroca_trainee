import React from 'react'
import { listaMenu } from './ListaMenu';

export default function Menu(props) {
  return (
    <div className={props.show ? "sidebar-menu" : "esconder"} >
          <h3 className="name-client">Óla user.name </h3>  
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
