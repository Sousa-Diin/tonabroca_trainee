import React from 'react';
import '../login/Login.css';
//import { AuthContext } from '../Providers/auth';

export default function Login (){

    document.title = 'Emakers Food - authenticação';
    //const { login } = React.useContext(AuthContext);
    //console.log(user)

/*
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sumbit", {email, password});

        login(email, password)
    } 

    
    const [change, setChange] = useState(true);

    const [viewC, setViewC] = useState(false);
    const [viewF, setViewF] = useState(false);
    const [viewA, setViewA] = useState(false);

    const handleClickCe = () => {
        
        setChange(!change);
        setViewC(!viewC);
       // setUser({typeUser:'client'});
       
        
    }

    const handleClickFu = () => {
        
        setChange(!change);
        setViewF(!viewF);
       // setUser({typeUser:'coWork'});
    }

    const handleClickAd = () => {
        
        setChange(!change);
        setViewA(!viewA);
       // setUser({typeUser:'admin'});
    }*/
    
        return(
            <section>
                <div className={true ? "container-login" : "escondeLogin"}>
                    <div className="container-autenticacao">
                        
                        <h1>Deseja Logar Como?</h1>
                        <ul>
                            <li onClick={()=>{window.location.pathname = '/autenticarCliente'}} className='list-login' id="cliente" name="cliente">Cliente</li>
                            <li onClick={()=>{window.location.pathname = '/authFunc'}} className='list-login'>Funcionário</li>
                            <li onClick={()=>{window.location.pathname = '/authAdmin'}} className='list-login'>Administrador</li> 
                        </ul>
                    </div>

                    <div className="container-slogan">
                        <h1>EmakersFood</h1>
                        <h2>Matando sua fome!</h2>
                    </div>
                </div>

             
                
            </section>
           
        );
   
}

/*   <section className={ viewC ? 'showViewC' : 'hideViewC' }>
                    <AuthClient
                        show={viewC} 
                        email={email} password={password} 
                        setEmail={setEmail} setPassword={setPassword}
                        authenticated={authenticated}
                        handleSubmit={handleSubmit}
                    
                    />
                </section>

                <section className={ viewF ? 'showViewF' : 'hideViewF' }>
                    <AuthFuncionario  
                        showF={viewF}
                        email={email} password={password} 
                        setEmail={setEmail} setPassword={setPassword} 
                    />
                </section>   

                <section className={ viewA ? 'showViewA' : 'hideViewA' }>
                    <AuthAdmin 
                        showA={viewA}
                        email={email} password={password} 
                        setEmail={setEmail} setPassword={setPassword}
                    /> 
                </section>
                */