import React from "react";
import logo from '.././../assets/logo/logo_emakers2.png';
import img from '../../assets/logo/search_func.png';
import '../BuscarFunc/BuscarFuncionario.css';
import { Link } from "react-router-dom";

export default function BuscarFuncionario(){
    return (
        <div className="container-busca-func">
            <header className="container-header">
                <img src={logo} alt="logo-empresa"/>
                <h2>EmakersFood</h2>
            </header>
            <div className="container-campo-busca">
                <h2 className="title-busca">Busacar Funcionário</h2>
                <input type="text" id="buscar-funcionario" placeholder=" Digite o nome ou matrícula do Funcionário"/>
                <button type="button" id="pesquisar" value="Pesquisar">
                <Link to="/dadosFunc" className="pesquisar">Pesquisar</Link></button>
            </div>
            <aside className="img-busca"> <img src={img} alt="lupa de pesquisa"/></aside>
        </div>
    );
}