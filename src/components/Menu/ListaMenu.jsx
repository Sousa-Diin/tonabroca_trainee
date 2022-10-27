//import React from 'react';

//import {IconName} from "react-icons/hi";
import icon1 from '../../assets/logo/pedido.png';
import icon2 from '../../assets/logo/cupom.png';
import icon3 from '../../assets/logo/chat.png';
import icon4 from '../../assets/logo/pagamento.png';
import icon5 from '../../assets/logo/logout.png';
import icon6 from '../../assets/logo/date-person.png';
import icon7 from '../../assets/logo/adress.png';


let pedido = icon1,
    cupom = icon2, 
    chat = icon3,
    pagamentos = icon4, 
    adress = icon7,
    data = icon6,
    logout = icon5;
 

    export const listaMenu = [
        {
            icon: pedido,
            title: "Pedidos",
            link: '/cart',
        },
        {
            icon: cupom,
            title: "Cupons",
            link: '/store',
        },
        {
            icon: pagamentos,
            title: "Pagamentos",
            link: '/pagamentos',
        },
        {
            icon: data,
            title: "Meus Dados",
            link: '/dadosFunc',
        },
        {
            icon: adress,
            title: "Endereco",
            link: '/logradouro',
        },
        {
            icon: chat,
            title: "Chats",
            link: '/chat',
        },
        {
            icon: logout,
            title: "Sair",
            link: '/',
        },
        
    ];