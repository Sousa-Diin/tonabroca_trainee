import React, { useState } from 'react'
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

    const [cart, setCart] = useState({
        desc:'prato 002',
        price:36.7,
        qtd:1,
    });

    const addCart = product => {
        setCart(old => ({
            ...old,
            [product.id] : product
        }))
    }

    const logout = ()=>{
        console.log("logout");
    }

    return(
        <AuthContext.Provider value={{ 
            logado, setLogado, logout,
             user, setUser,handleFilterUser, 
             handleGravaUser, cart, addCart}}
        >

            {props.children}

        </AuthContext.Provider>
    );
}

