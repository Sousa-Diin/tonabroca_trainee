import React, { useState } from 'react'
import '../Pagamento/Pagamento.css'
import Header from '../../../components/Header/HeaderNav';
import Button from '../../../components/Button/Button';

export default function Pagamento() {
  const [app, setApp] = useState(true);
  const [entrega, setEntrega] = useState(true)

  const [pix, setPix] = useState(true);
  const [credit, setCredit] = useState(true)
  return (
    <main className='main-pagamentos'>
      <Header />
      <section className='section-endereco'>
        <h1 className='title-pag'>Entrega</h1>
        <div className="endereco-entrega" >
         <input placeholder='Rua Das Flores, 100, Centro' readOnly/> 
        </div>
      </section>
      <section >
        <h1 className='title-pag'>Pagamentos</h1>
        
        <div className='div-forma-pag'>
          <div className='div-forma-pag-child'>
            <Button name={app ? "button-pag" : 'button-pag-click'} onClick={() => setApp(!app)}>Pelo aplicativo</Button>
            <Button name={entrega ? "button-pag" : 'button-pag-click'} onClick={() => setEntrega(!entrega)}>Na Entrega</Button>
          </div>
        </div>
        <div className={!app ? "div-pag-app" : "none"}>
            
            <Button name={pix ? "button-pag" : 'button-pag-click'} onClick={() => setPix(!pix)}>Pix</Button>
            <Button name={credit ? "button-pag" : 'button-pag-click'} onClick={() => setCredit(!credit)}>Cartão de Credito</Button>
        </div>

        <div className={!pix ? "div-pag-pix" : "none"}>
          <input placeholder='Chave Pix'/>
        </div>
        <div className={!credit ? "div-pag-pix" : "none"}>
          <input placeholder='Final do Cartão'/>
        </div>
      </section>
      <footer style={{textAlign:"center", padding:"3%"}}>
        <Button onClick={() => {window.location.pathname = '/entrega'}} name='button-default'>Finalizar</Button>
      </footer>
    </main>
  )
}
