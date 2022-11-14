import React from "react";
import "./Macarrao.css";

function Macarrao(){
    return(
        <div className="alimentoBox">
        <div className="favoritosBox">
            <h3>Macarrão</h3>
            <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                </img>
        </div>        
        <img src="/images/macarrao.png" alt="macarrao icon" width="300" height="300"> 
        </img>
        <h6>Também se aprecia um bom macarrão, cozido “al dente” e temperado de forma artesanal, nas versões molho de carne e queijo parmesão e ao "fungui".</h6>
    </div>
    )
};
export default Macarrao;