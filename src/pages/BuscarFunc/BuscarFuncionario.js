import React, { useState } from "react";
import Header from '.././../components/Header/Header';
import '../BuscarFunc/BuscarFuncionario.css';

import Button from '../../components/Button/Button';
import Message from "../../components/Status/Message";
import funcionarioDAO from "../DadosUsers/funcionarioDAO";

export default function BuscarFuncionario(){

    document.title = 'Emakers Food - search';

    const [show, setShow] = useState(true);

    const [busca, setBusca] = useState('');
    console.log(busca)

    const [employee, setEmployee] = useState ({
        name:'Emakers Solucoes Inteligentes',
        matricula:'787890',
        id:'222222',

    })

    const handleAccessEnable =()=>{
        if(busca === employee.id || busca === employee.matricula){
            window.location.pathname = '/dadosFunc';
        }
        else{
            
           // window.alert('Funcionario não encontrado');
            setBusca('');
            setShow(!show)
            
        }
    }

    return (
        <div>
            <div className={ show ? "container-busca-func" : "none"}>
                <Header />
                <div className="container-campo-busca">
                    <h2 className="title-busca">Buscar Funcionário</h2>
                    <input type="text" value={busca} onChange={(e)=> setBusca(e.target.value)} id="buscar-funcionario" placeholder="Digite o nome ou matrícula do Funcionário"/>   
                </div>

                <aside className="img-busca">
                    <Button onClick={handleAccessEnable} name="button-default">  pesquisar</Button>
                </aside>
            
                <funcionarioDAO employee={employee} setEmployee={setEmployee}/>
            </div>

         <Message name={!show} onClick={() => {window.location.pathname = './buscarFunc'}}>Funcionario não encontrado</Message>
        </div>
        
    );
}