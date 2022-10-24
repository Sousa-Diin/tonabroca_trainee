import React from 'react';
import  '../Header/Header.css'
import logo from '../../assets/logo/logo_emakers2.png';
//import { AuthContext } from '../Providers/auth';

const Cabecalho = () => {
    //const cart = useContext(AuthContext);
    return (
        <header className='header-logo-container'>
            <img src={logo} className="header-logo-img" alt="logo"/>
            <h2 className="header-logo-title">EmakersFood</h2>
        </header>
    );
};
export default Cabecalho;