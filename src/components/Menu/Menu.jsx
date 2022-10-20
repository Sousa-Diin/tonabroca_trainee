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
 

    export const Menu = [
        {
            icon: pedido,
            title: "Pedidos",
            link: '/pedidos',
        },
        {
            icon: cupom,
            title: "Cupons",
            link: '/cupons',
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
 /*   (

        <div className={ props.menu ? "sidebar-menu" : "esconder"}>  
        <h3 className="name-client">Óla  usuario </h3>  
        {listaMenu.map((menu) => {
            return(
                <ul className='coluna-menu'>
                    
                    <img  className="icons-menu" src={menu.icon } alt="icon-menu"/>
                    <li  onClick={() => {window.location.pathname = menu.link}} className='list-menu'>{menu.title}</li>
                </ul>
            );
        })}
    </div>
    );
}*/