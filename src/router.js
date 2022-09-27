
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
//import {Switch, Route, Link} from 'react-router-dom';
import Login from './components/login/Login';
import CriarAcesso from './pages/Cadastro/CriarAcesso/CriarAcesso';
import Endereco from './pages/Cadastro/CadastrarEnd/Endereco';
import CadastroFinalizado from './pages/Cadastro/DoneCadastro/CadastroFinalizado'
import AuthClient from "./pages/AuthClient/AuthClient";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";
import CodigoDeConfirmacao from "./components/RecuperarSenha/Codigo/CodigoDeConfirmacao";
import NovaSenha from "./components/RecuperarSenha/NovaSenha/NovaSenha";
import AuthAdmin from "./pages/AuthAdmin/AuthAdmin";
import AuthFuncionario from "./pages/AuthFunc/AuthFuncionario";
import BuscarFuncionario from "./pages/BuscarFunc/BuscarFuncionario";
import DadosFuncionario from "./pages/DadosUsers/funcionarioDAO";
import Cardapio from "./pages/Pedidos/Cardapio";
import Message from "./components/Status/Message";
import AddProduto from "./pages/Pedidos/Carrinho/AddProduto";
/* LINE 29*/

function Router(){
    return(
        <BrowserRouter>
            <Routes>
               
                 <Route path='/' element={<Login/>}/>
                 <Route path='/obterAcesso' element={<CriarAcesso/>}/>
                 <Route path='/logradouro' element={<Endereco/>}/>
                 <Route path='/finalizado' element={<CadastroFinalizado/>}/>
                 <Route path='/done' element={<Message/>}/>
                 <Route path='/autenticarCliente' element={<AuthClient/>}/>
                 <Route path='/recuperarSenha' element={<RecuperarSenha/>}/>
                 <Route path='/codigoConfirmacao' element={<CodigoDeConfirmacao/>}/>
                 <Route path='/novaSenha' element={<NovaSenha/>}/>
                 <Route path='/authAdmin' element={<AuthAdmin/>}/>
                 <Route path='/authFunc' element={<AuthFuncionario/>}/>
                 <Route path='/buscarFunc' element={<BuscarFuncionario/>}/>
                 <Route path='/dadosFunc' element={<DadosFuncionario/>}/>
                 <Route path='/pedidos' element={<Cardapio/>}/>
                 <Route path='/addProduto' element={<AddProduto/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;