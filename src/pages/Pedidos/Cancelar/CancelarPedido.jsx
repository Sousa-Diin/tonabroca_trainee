import React, { useContext } from 'react'
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/HeaderNav'
import ViewPrice from '../../../components/Prices/ViewPrice'
import { AuthContext } from '../../../components/Providers/auth';

export default function CancelarPedido() {
    let sub = 45;
    const date = new Date().toLocaleDateString();
    const hour = new Date().toLocaleTimeString();

    const { pedido } = useContext(AuthContext);
    
  return (
    <main>
        <Header />
        <section style={{display:"flex", width:"100%", flexFlow:"column wrap"}}>
            <h1 style={{marginBottom:'2%'}}>Pedidos</h1>
            <section>
                <div style={{display:"flex", width:"100%", flexFlow:"row wrap",alignContent:'center'}}> 
                    <h3>Pedido: 12354</h3>
                    <div style={{display:"flex", width:"90%"}}>
                        <ViewPrice name='black' type='text' value={'R$ ' + Number(sub).toFixed(2).replace('.',',')} >{date + " " + hour}</ViewPrice>
                        <div style={{display:"flex", width:"90%", flexFlow:"row nowrap",alignItems:'center'}}>
                            <h3>Detalhes</h3>
                            <Button name='button-sidebar2'>Cancelar</Button>
                        </div>
                       </div>
                    
                </div>
                

                <pre>Pedido: 00350</pre>
                <pre>Pedido: 01360</pre>
                
            </section>
            <pre>{JSON.stringify(pedido,null,2)}</pre>
        </section>
      
    </main>
  )
}
