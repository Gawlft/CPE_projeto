import React from "react";
import "./Party.css";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Culinaria from "../../Components/Culinaria/Culinaria"
import Atracoes from "../../Components/Atracoes/Atracoes"



function Party() {
    return (
        <div>
            <Header />
            <div className="festaContainer">
                <div className="festaMain">
                    <h1>A Festa</h1>
                    <div className="eventButtons">
                        <button type="button">Atrações</button>
                        <p></p>
                        <button type="button">2022</button>
                        <p></p>
                        <button type="button">Culinária</button>
                    </div>

                </div>
                <div className="imgPolentao">
                    <img src="/images/polentao.png" alt="Login icon" width="700" height="500">
                    </img>
                </div>
            </div>
            <Atracoes/>
            <div className="BoxEvento">
                <div className="Evento">
                    <h2>2022</h2>
                </div>
                <img src="/images/2022.png" alt="2022 icon">
                </img>
                <Culinaria />
            </div>
            <Footer />
        </div>

    )
};

export default Party;