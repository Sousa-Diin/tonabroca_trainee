import React,{Component, Fragment} from 'react';
import '../Anuncios/Anuncios.css';

import img1 from '../../assets/logo/Pedido de Comida/carne.png';
import img3 from '../../assets/logo/Pedido de Comida/sushi.png';
import img4 from '../../assets/logo/Pedido de Comida/salada.png';
import img2 from '../../assets/logo/Pedido de Comida/batatas-fritas.png';

export default class Anuncios extends Component {

    render(){
        let img5 ,img6, img7 = img3;
        const imagens = [img1,img2,img3,img4,img5,img6, img1,img7];
        
        return(
            <Fragment>
                <div className="ped-div-anuncios">
                    {imagens.map(image => <img src={image} alt="img-anuncio" className="img-anu-ped"/>)}
                </div>
            </Fragment>
        );
    }
}