import { Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./services/api";
import React from "react";
import Router from "./router";

function App(){
    
    const [user, setUser] = useState();
    
    useEffect(()=>{
        api
        .get("/buscarFunc")
        .then((Response) => setUser(Response.data))
        .catch((error) => {
            console.error("ops! ocorreu um erro" + error);
        });
    },[]);

    return (
        <Router/>
    );
}

export default App;