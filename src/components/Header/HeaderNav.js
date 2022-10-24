import React, { useState } from 'react'
import  '../Header/Header.css'

import logar from '../../assets/logo/Pedido de Comida/sombra-de-usuario-masculino.png';
import carrinho from '../../assets/logo/Pedido de Comida/carrinho-de-compras.png';
import logo from '../../assets/logo/logo_emakers2.png';
import Menu from '../Menu/Menu';
import BuyCart from '../BuyCart/BuyCart';
//import { AuthContext } from '../Providers/auth';

function Sidebar() {

  const [cart, setCart] = useState(false);
  const [menu, setMenu] = useState(false);
  //const [addProdutoCar, setAddProdutoCar] = useState(false);
  const [entrega] = useState(6.9);
  let total ;

  const [qtdProduto, setQtdProduto] = useState(0);
  const [pricePedido, setPricePedido] = useState (0);

  const showCart = () => {
      setMenu(false);
      setCart(!cart);
  }

  const showMenu = () => {
    setCart(false);
      setMenu(!menu);
  }
  /*const showAddProduto = (produto) => {
      setQtdProduto(0); // se tirar da erro (NaN)
      setAddProdutoCar(!addProdutoCar);
      setPricePedido(produto.price);
    
  }

  /*const handleIncrementaQtd = () => {
      let incrementa = qtdProduto + 1;
      setQtdProduto(incrementa);
    }

  /* const handleDecrementaQtd = () =>{
        var decrementa = qtdProduto - 1;
        if (qtdProduto > 0){
            setQtdProduto(decrementa);
        }
    }*/

  function calcularSubtotal (price) {
      
      total = qtdProduto * price;
      return total;
  }

  function calcularTotal (){
      return total + entrega;
  }

  //const product = useContext(AuthContext);

  return (
    <main>
                  
      <header className='header-logo-container'>
            <div style={{
              display:'flex',
              flexDirection: 'row',
              left:'5%',
              width:'50%',
              justifyContent:'flex-end'}}>
              <img src={logo} className="header-logo-img" alt="logo"/>
              <h2 className="header-logo-title">EmakersFood</h2>
            </div>
            <div className="ped-aba-search-nav">
              <input id="input-pedido" type="text"/>
              <img onClick={ showMenu } src={logar} className="img-ped" alt="imade-menu" />
              <img onClick={ showCart } src={carrinho} className="img-ped" alt="imade-carrinho-de-compra"/>
                  <span onClick={showCart} className="qtd-ped">{qtdProduto}</span>                            
            </div>
      </header>
        
      <Menu show={menu}/>
      <BuyCart 
      cart={cart}
      setCart={setCart}
      showCart={showCart}
      qtdProduto={qtdProduto}
      pricePedido={pricePedido}
      calcularTotal={calcularTotal}
      calcularSubtotal={calcularSubtotal}
      setPricePedido={setPricePedido}
      setQtdProduto={setQtdProduto}
      
      />
                    
    </main>
    
  )
}

export default Sidebar;