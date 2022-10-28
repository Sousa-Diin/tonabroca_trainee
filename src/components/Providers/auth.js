import React, { useState, useContext, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
//import produto from './product'

export const AuthContext = React.createContext({})

export const AuthProvider = (props)=> {


    //const navigate = useNavigate();
    /*const [user, setUser]  = useState(
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
    )*/

    const [user, setUser] = useState(null);
    console.log("user", user)

    const login = (email, password, permision) =>{

        if(password === "secret" & permision === "client"){
            setUser({id: "123", name: email, email})
            console.log("login client", {email, password, permision});
            window.location.pathname = '/store'
           // navigate('/store');
        }
        else if(password === "funcionario" & permision === "coWorck"){
            setUser({id: "789", email})
            console.log("login coWorck", {email, password, permision});
            window.location.pathname = '/buscarFunc'
        }
        else if(password === "admin" & permision === "admin"){
            setUser({id: "456", email})
            console.log("login admin", {email, password, permision});
            window.location.pathname = '/pagamentos'
        }
        else{
            window.alert('Acesso Negado!')
            window.location.pathname = '/'
        }
    }

    const logout = ()=>{
        console.log("logout");
        setUser(null);
    }


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
             authenticated: !!user,user,
             setUser,handleFilterUser, 
             handleGravaUser, cart, addCart, 
             setCart, removeCart,removeItem, 
             store, openStore, login,}}
        >

            {props.children}

        </AuthContext.Provider>
    );
}


export const useCart = ()=>{
    const cart = useContext(AuthContext);
    return cart;
}




