import React from 'react';
import '../Status/Message.css';

const Message = ({children, onClick, name, component}) => {

        return(
            <div className={ name }>
                 
                <div className="son-comp-phr"> 
                    <p onClick={onClick} className='phrase'>
                        {children}
                    </p>
                </div>
            </div>
        );

    
}
export default Message;