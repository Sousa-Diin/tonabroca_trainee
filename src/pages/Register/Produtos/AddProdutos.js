import React, { useState } from 'react';

export const AddProdutos = ({handleProdutoAddition}) => {
    const [inputProduto, setInputProduto] = useState([{
        title: "",
        image: "",
        price: 0.0,
        describe: "",
    }]);
}