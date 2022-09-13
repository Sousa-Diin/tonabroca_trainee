import React from 'react';
import Button from '../Button/Button';
import './Auth.css';

const Atutenticar = ({element, onClick}) => {
    return (
        <main className='auth-container' onClick={onClick}>
           
            <input/>
            <input/>
            <Button> {element}</Button>
        </main>
    );

};
export default Atutenticar;