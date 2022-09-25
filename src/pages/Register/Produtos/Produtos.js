import React from 'react';
import { Produto } from '../../../components/Produto/Produto';

const Produtos = ({produtos}) => {
    return(
        <div>
            {produtos.map((produto) => (
                <Produto produto = {produto} />
            ))}
        </div>
    );
    
}
export default Produtos;