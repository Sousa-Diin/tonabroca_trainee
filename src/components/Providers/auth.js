import React, { useState } from 'react'
import api from '../../services/api'

export const AuthContext = React.createContext({})

export const AuthProvider = (props)=> {

    const [user, setUser]  = useState(
        {
        name:'',
        email: '',
        password:'',
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

    /*const listUser =()=>{
        user.map( (key, value)=>(
            {key}= value.email {value.email}
        ))
    }*/

    const handleGravaUser=()=> {
         api.post('/register/client','ClientController.store', ...user);
    }

    return(
        <AuthContext.Provider value={{user, setUser, handleGravaUser}}>

            {props.children}

        </AuthContext.Provider>
    );
}

