import React, { useState, useContext } from 'react'
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
    

    const addCart = product => {
        setCart((old) => {
            let qtd = 0;
            if(old[product.id]){
                qtd = old[product.id].qtd;
            }
            return{
                ...old,
                [product.id] : {
                    qtd : qtd + 1,
                    product,
                },
                
            }
        })
    }


    const logout = ()=>{
        console.log("logout");
    }

    return(
        <AuthContext.Provider value={{ 
            logado, setLogado, logout,
             user, setUser,handleFilterUser, 
             handleGravaUser, cart, addCart, 
             setCart}}
        >

            {props.children}

        </AuthContext.Provider>
    );
}


export const useCart = ()=>{
    const cart = useContext(AuthContext);
    return cart;
}


