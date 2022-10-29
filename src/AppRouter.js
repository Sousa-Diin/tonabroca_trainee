
import React, { useContext } from "react";
import {
     BrowserRouter as Router,
     Navigate,
     Route, 
     Routes,
    } from "react-router-dom";

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
import ItemLoja from "./pages/ItemLoja/ItemLoja";
//import { AuthContext, AuthProvider } from "./components/Providers/auth";
import Lojas from "./components/Lojas/Lojas";
import { AuthContext } from "./components/Providers/auth";
/* LINE 29*/

const AppRouter =() => {
    const Private = ({children}) => {
        const { authenticated, loding } = useContext(AuthContext);

        if(loding){
            return <Message>Carregando...</Message>
        }

        if(!authenticated){
            return <Navigate to='/' />
        }
        return children;
    }

    return(
        <Router>
            <Routes>
               
                 <Route exact path='/' element={<Login/>}/>
                 <Route exact path='/obterAcesso' element={<CriarAcesso/>}/>
                 <Route exact path='/logradouro' element={<Endereco/>}/>
                 <Route exact path='/finalizado' element={<CadastroFinalizado/>}/>
                 <Route exact path='/done' element={<Message/>}/>
                 <Route exact path='/autenticarCliente' element={<AuthClient/>}/>
                 <Route exact path='/recuperarSenha' element={<RecuperarSenha/>}/>
                 <Route exact path='/codigoConfirmacao' element={<CodigoDeConfirmacao/>}/>
                 <Route exact path='/novaSenha' element={<NovaSenha/>}/>
                 <Route exact path='/authAdmin' element={<AuthAdmin/>}/>
                 <Route exact path='/authFunc' element={<AuthFuncionario/>}/>
                 <Route exact path='/buscarFunc' element={<BuscarFuncionario/>}/>
                 <Route exact path='/dadosFunc' element={<Private><DadosFuncionario/></Private>}/>
                 <Route exact path='/pedidos' element={<Private><Cardapio/></Private>}/>
                 <Route exact path='/compras' element={<Private><ItemLoja/></Private> }/>
                 <Route exact path='/store' element={<Private><Lojas/></Private>}/>
                
            </Routes>
        </Router>
    );
}

export default AppRouter;