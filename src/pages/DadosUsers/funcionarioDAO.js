import React from "react";
import Header from '../../components/Header/Header'
import '../DadosUsers/funcionarioDAO.css';
import Button from '../../components/Button/Button';
//import { AuthContext } from "../../components/Providers/auth";

export default function funcionarioDAO(props){
    //const [nomeBuscado, setNomeBuscado] = useState('')
    //const {produto} = React.useContext(AuthContext)
    return (
        <div className="container-dados-func">
            <Header />
            <div className="container-dados-busca">
               
                    <h2 className="title-busca">Funcionário</h2>
               
                    <input type="search" id="dados-funcionario" value={props.employee} readOnly/>
             
                
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
                    <p>{ props.name}</p>     
               
                </div>
                <div className="btn-busca"> 
                    <Button name="button-default">Proximo</Button>
                </div>
                
            </div>
            
        </div>
    );
}