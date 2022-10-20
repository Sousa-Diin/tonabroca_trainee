import React from 'react';
import '../Status/Message.css';

const Message = ({children, onClick, name}) => {

        return(
            <div className={ name ? "cont-comp-sts-mess" : " none"}> 
                <div className="son-comp-phr"> 
                    <p onClick={onClick} className='phrase'>
                        {children}
                    </p>
                </div>
            </div>
        );

    
}
export default Message;