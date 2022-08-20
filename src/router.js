
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
//import {Switch, Route, Link} from 'react-router-dom';
import Login from './components/login/Login';
import CriarAcesso from './pages/Cadastro/CriarAcesso/CriarAcesso';
import Endereco from './pages/Cadastro/CadastrarEnd/Endereco';
import CadastroFinalizado from './pages/Cadastro/DoneCadastro/CadastroFinalizado'
import Autenticar from "./pages/Autenticar/Autenticar";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";
import CodigoDeConfirmacao from "./components/RecuperarSenha/Codigo/CodigoDeConfirmacao";
import NovaSenha from "./components/RecuperarSenha/NovaSenha/NovaSenha";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
               
                 <Route path='/logar' element={<Login/>}/>
                 <Route path='/obterAcesso' element={<CriarAcesso/>}/>
                 <Route path='/logradouro' element={<Endereco/>}/>
                 <Route path='/finalizado' element={<CadastroFinalizado/>}/>
                 <Route path='/autenticarCliente' element={<Autenticar/>}/>
                 <Route path='/recuperarSenha' element={<RecuperarSenha/>}/>
                 <Route path= '/codigoConfirmacao' element={<CodigoDeConfirmacao/>}/>
                 <Route path='/novaSenha' element={<NovaSenha/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;