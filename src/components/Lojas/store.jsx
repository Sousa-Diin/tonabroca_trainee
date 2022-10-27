import React  from 'react';
import '../Lojas/store.css'
//import { useCart } from '../Providers/auth';

export default function Store ({loja}){

    //const store = useCart();
    

    return(
           <div onClick={()=> {window.location.pathname = '/pedidos'}} className="lojas">
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