
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
//import {Switch, Route, Link} from 'react-router-dom';
import Login from './components/login/Login';
import CriarAcesso from './pages/CriarAcesso';
import Endereco from './pages/Endereco';
import CadastroFinalizado from './pages/CadastroFinalizado';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
               
                 <Route path='/logar' element={<Login/>}/>
                 <Route path='/obterAcesso' element={<CriarAcesso/>}/>
                 <Route path='/logradouro' element={<Endereco/>}/>
                 <Route path='/finalizar' element={<CadastroFinalizado/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;