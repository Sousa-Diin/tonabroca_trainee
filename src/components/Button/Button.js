import React from 'react';


import '../Button/Button.css';

const Button = ({children, onClick, name}) => {
    return (
        <button className={ name } type="submit" onClick={ onClick }>
            { children }
        </button>
    );
}
export default Button;