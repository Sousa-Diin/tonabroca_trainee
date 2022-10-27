import React  from 'react';
import '../Lojas/store.css'
import { useCart } from '../Providers/auth';

export default function Store ({loja}){

    const cart = useCart();
    
    const openProduto = produto => () => {
        cart.openStore(produto);
        window.location.pathname = '/pedidos'
    }

    return(
        // 17 - {JSON.stringify(loja.produtos,null,3)}
           <div onClick={openProduto(loja.produtos)} className="lojas">
            
                <picture className="container-picture">
                    <img  alt="foto de comida" className="container-img" src={loja.image}/>
                    <aside className="container-aside-loja">
                        <h3 id="titleProduto"  >{loja.title}</h3>
                            <span className="avaliacao" >{loja.avaliacao}</span>
                    </aside>
                </picture>
                
            </div>
    );
}