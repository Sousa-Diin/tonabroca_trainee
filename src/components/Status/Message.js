import React from 'react';
import '../Status/Message.css';

const Message = ({children}) => {

        return(
            <div className="cont-comp-sts-mess"> 
                <div className="son-comp-phr"> 
                    <p className='phrase'>
                        {children}
                    </p>
                </div>
            </div>
        );

    
}
export default Message;