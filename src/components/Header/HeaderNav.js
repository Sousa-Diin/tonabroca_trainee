import React, { useState } from 'react'
import  '../Header/Header.css'

import logar from '../../assets/logo/Pedido de Comida/sombra-de-usuario-masculino.png';
import carrinho from '../../assets/logo/Pedido de Comida/carrinho-de-compras.png';
import logo from '../../assets/logo/logo_emakers2.png';
import Menu from '../Menu/Menu';
import BuyCart from '../BuyCart/BuyCart';
import { useCart } from '../Providers/auth';

function Sidebar() {


  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const [entrega] = useState(6.9);
  

  const showCart = () => {
      setMenu(false);
      setCart(!cart);
      
  }

  const showMenu = () => {
    setCart(false);
      setMenu(!menu);
  }

  const product = useCart();

  //const itemsCount = Object.keys(product.cart).length;
  const itemsCount = Object.keys(product.cart).reduce((prev,curr) => {
    return prev + product.cart[curr].qtd;
    
  }, 0)

  return (
    <main>
                  
      <header className='header-logo-container'>
            <div style={{
              display:'flex',
              flexDirection: 'row',
              width:'50%',
              justifyContent:'flex-end',}}>
              <img src={logo} className="header-logo-img" alt="logo"/>
              <h2 className="header-logo-title">EmakersFood</h2>
            </div>
            <div className="ped-aba-search-nav">
              <input id="input-pedido" type="text"/>
              <img onClick={ showMenu } src={logar} className="img-ped" alt="imade-menu" />
              <img onClick={ showCart } src={carrinho} className="img-ped" alt="imade-carrinho-de-compra"/>
                  <span onClick={showCart} className="qtd-ped">{itemsCount > 0 && <span>{itemsCount}</span>}</span>                            
            </div>
      </header>
      
      <Menu show={menu}/>
      <BuyCart 
      cart={cart}
      setCart={setCart}
      showCart={showCart}
      entrega={entrega}
      
      />
                    
    </main>
    
  )
}

export default Sidebar;
/*
 <Menu show={menu}/>
 <BuyCart 
      cart={cart}
      setCart={setCart}
      showCart={showCart}
      entrega={entrega}
      
      />
*/