import React from "react";
import logo from '.././../assets/logo/logo_emakers2.png';
import '../DadosUsers/funcionarioDAO.css';

export default function funcionarioDAO(){
    return (
        <div className="container-dados-func">
            <header className="container-header">
                <img src={logo} alt="logo-empresa"/>
                <h2>EmakersFood</h2>
            </header>
            <div className="container-dados-busca">
                <h2 className="title-busca">Funcionário</h2>
                <input type="text" id="dados-funcionario" placeholder="Nome completo do funcionário pesquisado"/>
                <h2 className="title-busca">O que deseja fazer:</h2>
                <ul className="opcoes">
                <li>Consulta Dados</li>
                <li>Atualiza Dados</li>
                <li>Excluir Funcionário</li>
                </ul>
                <input type="button" id="proximo" value="Proximo" />
            </div>
            
        </div>
    );
}