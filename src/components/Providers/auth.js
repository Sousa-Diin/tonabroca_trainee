import React, { useState, useContext, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
//import produto from './product'

export const AuthContext = React.createContext({})

export const AuthProvider = (props)=> {


    //const navigate = useNavigate();
    const [client, setClient]  = useState(
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
    )

    const [user, setUser] = useState(null);

    const addUser = user => {
        setUser((old) => {
            let qtd = 0;
            if(old[user.id]){
                qtd = old[user.id].qtd;
            }
            const newUser = {
                ...old,
                [user.id] : {
                    qtd : qtd + 1,
                    user,
                },
                
            }

            window.localStorage.setItem('user-1', JSON.stringify(newUser));
            return newUser;
        })
    }

    const [loding, setLodig] = useState(true);

    console.log("user", user)
// recuperacao de user
    useEffect(() => {

        const loggedUser = localStorage.getItem('user');

        if(loggedUser){
            setUser(JSON.parse(loggedUser))
        }
        setLodig(false);
    },[])

    const login = (email, password, permision) =>{

        // api criar session

        const loggedClient = {
            id:'123',
            email,
        };
        const loggedAdmin = {
            id:'789',
            email,
        };
        const loggedCoWorck = {
            id:'456',
            email,
        };



        if(password === "secret" & permision === "client"){
            setUser(loggedClient)
            console.log("login client", {email, password, permision});
            localStorage.setItem("user", JSON.stringify(loggedClient));
            window.location.pathname = '/store'
           // navigate('/store');
        }
        else if(password === "funcionario" & permision === "coWorck"){
            setUser(loggedCoWorck)
            console.log("login coWorck", {email, password, permision});
            localStorage.setItem("user", JSON.stringify(loggedCoWorck));
            window.location.pathname = '/buscarFunc'
        }
        else if(password === "admin" & permision === "admin"){
            setUser(loggedAdmin)
            console.log("login admin", {email, password, permision});
            localStorage.setItem("user", JSON.stringify(loggedAdmin));
            window.location.pathname = '/pagamentos'
        }
        else{
            window.alert('Acesso Negado!')
            window.location.pathname = '/'
        }
    }

    const logout = ()=>{
        console.log("logout");
        localStorage.removeItem('user')
        setUser(null);
        window.location.pathname = '/'
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
                    qtd : qtd > 0 ? qtd - 1: qtd,
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

    const removeAllCart = () => {
        localStorage.removeItem('cart');
        setCart({});
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

    const [pedido, setPedido] = useState({});
    const [historyPedido, setHistoryPedido] = useState(100);

    useEffect(()=>{
        const pedidoStorage = window.localStorage.getItem('pedido')
        if(pedidoStorage){
            setPedido(JSON.parse(pedidoStorage))
        }
    },[])
    

    const addPedido = pedido => {
        setPedido((old) => {

            let number = historyPedido;
            const date = new Date().toLocaleDateString();
            const hour = new Date().toLocaleTimeString();

            if(old[pedido.id]){
                number = old[pedido.id].number;
            }
            const newPedido = {
                ...old,
                [pedido.id] : {
                    ...pedido,
                    number : number + 10,
                    date,
                    hour,
                  
                },
                
            }

            setHistoryPedido((old) => {
                const newHistoryPedido = {
                    ...old,
                    [old.id] : {
                        number : number,            
                    },
                    
                }
                return newHistoryPedido;
            });
            window.localStorage.setItem('pedido', JSON.stringify(newPedido));
            return newPedido;
        })
        window.localStorage.removeItem('cart');
    }


    

    return(
        <AuthContext.Provider value={{ 
            logado, setLogado, logout,
             authenticated: !!user,user,
             setUser,handleFilterUser, 
             handleGravaUser, cart, addCart, 
             setCart, removeCart,removeItem, 
             store, openStore, login,
            client, setClient, loding,
            removeAllCart, addUser, addPedido,
        pedido}}
        >

            {props.children}

        </AuthContext.Provider>
    );
}


export const useCart = ()=>{
    const cart = useContext(AuthContext);
    return cart;
}




