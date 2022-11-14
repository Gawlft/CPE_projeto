import React from "react";
import "./Polenta.css";

function Polenta(){
    return(
        <div className="alimentoBox">
        <div className="favoritosBox">
            <h3>Polenta</h3>
            <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                </img>
        </div>        
        <img src="/images/polenta frita.png" alt="polenta icon" width="300" height="300"> 
        </img>
        <h6>A polenta é o principal prato típico da Festa, seja frita, com molho, com ovo, com queijo, com linguiça e outras formas de se apreciar a saborosa iguaria, feita em fogões à lenha com cozimento lento para não queimar e dar paladar</h6>
    </div>
    )
};
export default Polenta;