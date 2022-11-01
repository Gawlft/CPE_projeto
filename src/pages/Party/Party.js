import React from "react";
import "./Party.css";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

function Party(){
    return(
        <div>
            <Header/>
        <div className="festaContainer">
            <div className="festaMain">
                <h1>A Festa</h1>
                <div className="eventButtons">
                <button type="button">Estrutura Física</button>
                <p></p>
                <button type="button">2022</button>
                <p></p>
                <button type="button">Culinária</button>
                </div>
                <img src="/images/polentao.png" alt="Login icon">

                </img>

            </div>
        </div>
        </div>

    )
}
export default Party;