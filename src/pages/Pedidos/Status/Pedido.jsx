import React, { useContext, useState } from 'react'
import '../Status/Pedido.css'
import Button from '../../../components/Button/Button'
import Header from '../../../components/Header/HeaderNav'
import ViewPrice from '../../../components/Prices/ViewPrice'
import { AuthContext } from '../../../components/Providers/auth'

export default function Pedido() {

  const { pedido, addPedido } = useContext(AuthContext);

  const cancelPedido = cart => () => {
    addPedido(cart) //criar hook cancel
    window.location.pathname = '/cancelar'
  }

  const aceitarPedido = cart => () => {
    //addPedido(cart)
    window.location.pathname = '/pagamentos'
  }

  const [detail, setDetail] = useState(false);

  return (
    <main>
        <Header />
        {Object.keys(pedido).map(key =>{
                //const total = (pedido.undefined.pedido.qtd * pedido.undefined.pedido.product.price);
                
              return(      
            <section>
            
                <div className='div-status-cancelar-pedido'> 
                    <h3 key={key} style={{marginLeft:'1.5%'}} >Pedido: {pedido.undefined.number}</h3>
                    <div className='div-status-detalhe-pedido'>
                        <ViewPrice name='black' type='text' value={'R$ ' + Number(pedido.undefined.value).toFixed(2).replace('.',',')} >{pedido.undefined.date + " " + pedido.undefined.hour}</ViewPrice>
                        <div className='div-status-cont-button'>
                            <h3 style={{cursor:'pointer'}} onClick={() => setDetail(!detail)}>Detalhes </h3>
                            <div className='div-status-button'>
                                <Button name='button-sidebar' onClick={aceitarPedido()}>Aceitar</Button>
                                <Button name='button-sidebar3' onClick={cancelPedido()}>Cancelar</Button> 
                            </div>
                        </div>
                    </div>
                    <h3 className={detail ? "show-detail" : "ride-detail"} >{JSON.stringify(pedido.undefined, null, 2)}</h3>
                </div>

                <section>
            
                <div className='div-status-cancelar-pedido'> 
                    <h3 key={key} style={{marginLeft:'1.5%'}} >Pedido: {pedido.undefined.number}</h3>
                    <div className='div-status-detalhe-pedido'>
                        <ViewPrice name='black' type='text' value={'R$ ' + Number(pedido.undefined.pedido).toFixed(2).replace('.',',')} >{pedido.undefined.date + " " + pedido.undefined.hour}</ViewPrice>
                        <div className='div-status-cont-button'>
                            <h3>Detalhes</h3>
                            <div className='div-status-button'>
                                <Button  disabled={true} name='button-sidebar2'>Cancelado</Button> 
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            </section>
                );
               })}
    </main>
  )
}
