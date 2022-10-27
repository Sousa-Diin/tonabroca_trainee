import React,{Component, Fragment} from 'react';
import '../Anuncios/Anuncios.css';

import p16 from '../../assets/logo/promocao/p16.png';
import p21 from '../../assets/logo/promocao/p21.png';
import p31 from '../../assets/logo/promocao/p31.png';
import p41 from '../../assets/logo/promocao/p41.png';
import p51 from '../../assets/logo/promocao/p51.png';
import p61 from '../../assets/logo/promocao/p61.png';
import p71 from '../../assets/logo/promocao/p71.png';

export default class Promocao extends Component {

    render(){
    
        const imagens = [p16,p21,p31,p41,p51,p61, p71];
        
        return(
            <Fragment>
                <div className="store-div-anuncios">
                    {imagens.map(image => <img src={image} alt="img-promocao" className="img-anu-store"/>)}
                </div>
            </Fragment>
        );
    }
}