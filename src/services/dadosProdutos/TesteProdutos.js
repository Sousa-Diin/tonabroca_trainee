import React, { useState } from 'react';

import Produtos from '../../pages/Register/Produtos/Produtos';
import { AddProdutos } from '../../pages/Register/Produtos/AddProdutos';

export const TesteProdutos = () => {
    const[produtos, setProdutos] = useState([
        {
            title: "Prato 14",
            image: "",
            price: 29.45,
            describe: "arroz, feijão, bife e bata-frita",
        },
        {
            title: "Hot filadelfia",
            image: "",
            price: 29.45,
            describe: "14 pedacos, 1 molho e 2 unidades de shusay",
        },
        {
            title: "napolitana",
            image: "",
            price: 39.45,
            describe: "queijo, frango, azeitona e bacon",
        },
        {
            title: "acai supleme",
            image: "",
            price: 19.10,
            describe: "450ml, leite-pó, granola e banana",
        },
       
    ]);

    const handleProdutoAddition = (umProduto) => {
        const newProduto = [
            ...produtos,
            {
                title: umProduto.title,
                image: umProduto.image,
                price: umProduto.price,
                describe: umProduto.describe,
            },
        ];

        setProdutos(newProduto);
    }
}