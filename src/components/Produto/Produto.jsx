import React from 'react';
import  produto  from '../../pages/Register/Produtos/ListaProdutos'

export default function Produto (){
    
    return(
        <main className='cont-prin-prod'>
            
            <header className='son-img-info-prod'>
                <img src={produto.image} alt="image-product"/>
                <div className='son-info-prod'>
                    <h3>{produto.useState.title}</h3>
                    <p>R$ {produto.price}</p>
                </div>
            </header>
            <footer className='son-desc-prod'>
                <span>Descricão: {produto.describe}</span>
            </footer>
        </main>
    );
}
