
import React from "react";
import { BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
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
import Cart from "./pages/Cart/Cart";
import { AuthContext } from "./components/Providers/auth";
/* LINE 29*/

function Router(){
    const ClientRoute = ({children}) => {
        const { logado, user } = React.useContext(AuthContext)
        if(!logado & user.typeUser ==='client'){
            return <Navigate to="/" />
        }

        return children;
    };

    const CoWorkRoute = ({children}) => {
        const { logado, user } = React.useContext(AuthContext)
        if(!logado & user.typeUser ==='coWoker'){
            return <Navigate to="/" />
        }

        return children;
    };

    const AdminRoute = ({children}) => {
        const { logado, user } = React.useContext(AuthContext)
        if(!logado & user.typeUser ==='admin'){
            return <Navigate to="/" />
        }

        return children;
    };

    return(
        <BrowserRouter>
            <Routes>
               
                 <Route path='/' element={<Login/>}/>
                 <Route exact path='/obterAcesso' element={<CriarAcesso/>}/>
                 <Route path='/logradouro' element={<Endereco/>}/>
                 <Route path='/finalizado' element={<CadastroFinalizado/>}/>
                 <Route path='/done' element={<Message/>}/>
                 <Route path='/autenticarCliente' element={<AuthClient/>}/>
                 <Route path='/recuperarSenha' element={<RecuperarSenha/>}/>
                 <Route path='/codigoConfirmacao' element={<CodigoDeConfirmacao/>}/>
                 <Route path='/novaSenha' element={<NovaSenha/>}/>
                 <Route path='/authAdmin' element={<AuthAdmin/>}/>
                 <Route path='/authFunc' element={<AuthFuncionario/>}/>
                 <Route path='/buscarFunc' element={
                    <AdminRoute>
                        <BuscarFuncionario/>
                    </AdminRoute>}/>

                 <Route path='/dadosFunc' element={
                 <CoWorkRoute>
                    <DadosFuncionario/>
                 </CoWorkRoute>}/>

                 <Route exact path='/pedidos' element={
                 <ClientRoute>
                    <Cardapio/>
                 </ClientRoute>}/>

                 <Route path='/cart' element={
                    
                        <Cart/>
                    
                 }/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default Router;