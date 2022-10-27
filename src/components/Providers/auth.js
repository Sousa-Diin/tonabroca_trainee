import React, { useState, useContext, useEffect } from 'react'
import api from '../../services/api'
//import produto from './product'

export const AuthContext = React.createContext({})

export const AuthProvider = (props)=> {


    const [user, setUser]  = useState(
        {
            id: '',
            name:'emakers',
            email: '',
            password:'3131',
            typeUser:'client',
            fullname:"",
            nasc:"",
            sexo:"",
            tell:"99988-2134",
            lougradouro:"",
            bairro:'',
            numero:'', 
            cep:'', 
            cidade:'',
            estado:'',
            complemento:'',

        },
        {
            name:'',
            email: '',
            password:'',
            typeUser:'coWork',
            fullname:"",
            nasc:"",
            sexo:"",
            tell:"99988-2134",
            lougradouro:"",
            bairro:'',
            numero:'', 
            cep:'', 
            cidade:'',
            estado:'',
            complemento:'',
        },
        {
            name:'emakers',
            email: '',
            password:'',
            typeUser:'admin',
            fullname:"",
            nasc:"",
            sexo:"",
            tell:"99988-2134",
            lougradouro:"",
            bairro:'',
            numero:'', 
            cep:'', 
            cidade:'',
            estado:'',
            complemento:'',
        },
    )

    function handleFilterUser(e){
        const userFiltered = user.filter ((usuario) =>{
            return usuario.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
        return userFiltered;
    }

    

    const handleGravaUser = ()=> {
         api.post('/register/client','ClientController.store', ...user);

    }


    const [logado, setLogado] = useState(false)

    /*const login = () =>{

    }*/

    const [cart, setCart] = useState({});

    const [store, setStore] = useState({});

    useEffect(()=>{
        const cartStorage = window.localStorage.getItem('cart')
        if(cartStorage){
            setCart(JSON.parse(cartStorage))
        }
    },[])
    

    const addCart = product => {
        setCart((old) => {
            let qtd = 0;
            if(old[product.id]){
                qtd = old[product.id].qtd;
            }
            const newCart = {
                ...old,
                [product.id] : {
                    qtd : qtd + 1,
                    product,
                },
                
            }

            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        })
    }


    const removeItem = product => {
        setCart((old) => {
            let qtd = 0;
            if(old[product.id]){
                qtd = old[product.id].qtd;
            }
            const newCart = {
                ...old,
                [product.id] : {
                    qtd : qtd - 1,
                    product,
                },
                
            }

            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        })
    }

    const removeCart = (productId) => {
        setCart((old) => {
            const newCart = { }
            Object.keys(old).forEach(id =>{
                if(id !== productId){
                    newCart[id] = old[id];
                }
            })
            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        })
    }


    const logout = ()=>{
        console.log("logout");
    }

    

    const openStore = produto => () => {
        setStore((old) => {
            let qtd = 0;
            if(old[produto.id]){
                qtd = old[produto.id].qtd;
            }
            const newCart = {
                ...old,
                [produto.id] : {
                    qtd : qtd + 1,
                    produto,
                },
                
            }

            window.localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        })
        
    }

    

    return(
        <AuthContext.Provider value={{ 
            logado, setLogado, logout,
             user, setUser,handleFilterUser, 
             handleGravaUser, cart, addCart, 
             setCart, removeCart,removeItem, 
             store, openStore}}
        >

            {props.children}

        </AuthContext.Provider>
    );
}


export const useCart = ()=>{
    const cart = useContext(AuthContext);
    return cart;
}




