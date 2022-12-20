import React, { useContext } from 'react'
import '../Status/Pedido.css'
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/HeaderNav'
import ViewPrice from '../../../components/Prices/ViewPrice'
import { AuthContext } from '../../../components/Providers/auth';

export default function CancelarPedido() {
    /*
    const date = new Date().toLocaleDateString();
    const hour = new Date().toLocaleTimeString();
*/
    const { pedido } = useContext(AuthContext);
    
  return (
    <main>
        <Header />
        <section className='section-status-pedido'>
            <h1 className='h1-status-pedido'>Pedidos</h1>
            <section>
                <div className='div-status-cancelar-pedido'> 
                    <h3 style={{marginLeft:'1.5%'}} >Pedido: 12354</h3>
                    <div className='div-status-detalhe-pedido'>
                        <ViewPrice name='black' type='text' value={'R$ ' + Number(79.65).toFixed(2).replace('.',',')} >{pedido.undefined.date + " " + pedido.undefined.hour}</ViewPrice>
                        <div className='div-status-cont-button'>
                            <h3>Detalhes</h3>
                                <div className='div-status-button'>
                                    <Button name='button-sidebar2'>Cancelar</Button>
                                </div>
                        </div>
                    </div>
                    
                </div>
                

            
                <pre>{JSON.stringify(pedido,null,2)}</pre>
            </section>
        </section>
      
    </main>
  )
}
