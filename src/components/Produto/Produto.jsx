import React from 'react';
//import '../Produto/Produto.css'

export default function Produto ({produto}, {showAddProduto}){
    return(
           <div onClick={() => showAddProduto()} className="produtos">
                <picture className="container-picture">
                    <img  alt="foto de comida" className="container-img" src={produto.image}/>
                    <aside className="container-aside">
                        <h3 id="titleProduto"  >{produto.title}</h3>
                            <span className="price" >R$ {produto.price}</span>
                    </aside>
                </picture>
                <span className="container-descricao" >{produto.describe}</span>
            </div>
    );
}
