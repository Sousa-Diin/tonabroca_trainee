import React, { useContext } from 'react'
import { AuthContext } from '../Providers/auth';
import { listaMenu } from './ListaMenu';
import icon5 from '../../assets/logo/logout.png';
//import { useCart } from '../Providers/auth'

export default function Menu(props) {
  //const user  = useCart(); falta persistir no localStorage

  const { logout, user} = useContext(AuthContext)

  const handleLogout = () => {
      logout()
  }

  return (
    <div className={props.show ? "sidebar-menu" : "esconder"} >
          <h3 className="name-client">  Óla  { user.email }  </h3>  
            {listaMenu.map((menu) => {
              return(
                    <ul className='coluna-menu'>
                                      
                      <img  className="icons-menu" src={menu.icon } alt="icon-menu"/>
                      <li  onClick={() => {window.location.pathname = menu.link}} className='list-menu'>{menu.title}</li>
                      
                    </ul>
              );
            })}
            <ul className='coluna-menu'>
              <img  className="icons-menu" src={icon5} alt="icon-menu"/>
              <li className='list-menu' onClick={handleLogout}>Logout</li>
            </ul>
      </div>
  )
}
