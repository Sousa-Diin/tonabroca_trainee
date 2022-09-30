import React from "react";
import Header from '.././../components/Header/Header';
import '../BuscarFunc/BuscarFuncionario.css';
import { Link } from "react-router-dom";

import Button from '../../components/Button/Button';

export default function BuscarFuncionario(){
    return (
        <div className="container-busca-func">
            <Header />
            <div className="container-campo-busca">
                <h2 className="title-busca">Buscar Funcionário</h2>
                <input type="text" id="buscar-funcionario" placeholder="Digite o nome ou matrícula do Funcionário"/>   
            </div>

            <aside className="img-busca">
                <Link to="/dadosFunc" className="pesquisar"><Button name="button-default">  pesquisar</Button></Link>
            </aside>
        </div>
    );
}