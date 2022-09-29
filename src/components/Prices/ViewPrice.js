import React from 'react';
import '../Prices/ViewPrice.css';

const ViewPrice = ({children, value, name, type}) =>{
    return(
        <div className={name}>
            <span className={(name === "red") ? "view-title-span-red" : "view-title-span-black"}>{children}</span>
            <input className={(name === "red") ? "view-price-input-red" : "view-price-input-black"} type={type} value={value} readOnly />
        </div>
    );
}
export default ViewPrice;