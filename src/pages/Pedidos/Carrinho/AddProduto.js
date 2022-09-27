import React from "react";

import '../Carrinho/AddProduto.css';


export default class AddProduto extends React.Component{
   
    render(){
        return(
            <div className={"cont-abs-add-pro" + this.props.classeSecundaria}>{this.state.div}
                       
            </div>
        );
    }
}