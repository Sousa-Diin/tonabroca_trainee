import React from "react";
import Header from '../../components/Header/Header'
import '../DadosUsers/funcionarioDAO.css';
import Button from '../../components/Button/Button';

export default function funcionarioDAO(){
    return (
        <div className="container-dados-func">
            <Header />
            <div className="container-dados-busca">
               
                    <h2 className="title-busca">Funcionário</h2>
                    <input type="text" id="dados-funcionario" placeholder="Nome completo do funcionário pesquisado" readOnly/>
             
                
                <div className="option-func-dao">
                    <h2 className="title-busca">O que deseja fazer:</h2>
                    <ul className="ul">
                        
                        <input type="checkbox" id="insertion" />
                        <label htmlFor="insertion" id="label">Cadastrar Funcionário</label>
                        <input type="checkbox" id="query" />
                        <label htmlFor="query" id="label">Consultar Dados</label>
                        <input type="checkbox" id="update"/>
                        <label htmlFor="update">Atualizar Dados</label>
                        <input type="checkbox" id="delete"/>
                        <label htmlFor="delete">Excluir Funcionário</label>
                    </ul>        
               
                </div>
                <div className="btn-busca"> 
                    <Button >Proximo</Button>
                </div>
                
            </div>
            
        </div>
    );
}