import React from 'react'
import Header from '../../../../components/Header/Header'
import '../PedidoFinalizado/Finalizado.css'
import Feliz from '../../../../assets/logo/pag/feliz.png'

export default function Pedidofinalizado() {
  return (
    <main className='status-ped-finalizado'>
        <Header />
        <section onClick={() => {window.location.pathname = '/'}} className='section-back-ground'>
            <h1 className='title-pedido-finalizado'>Pedido Realizado Com Sucesso!!</h1>
            <img style={{width:'40%', height:'70%'}} src={Feliz} alt='ico-happy'/>
        </section>
    </main>
  )
}
