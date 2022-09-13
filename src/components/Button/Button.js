import React from 'react';


import '../Button/Button.css';

const Button = ({children, onClick}) => {
    return (
        <button className="button" type="submit" onClick={onClick}>
            { children }
        </button>
    );
}
export default Button;