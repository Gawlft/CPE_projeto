import React from "react";
import "./Footer.css";

function Footer(){

    return(
        <div className="footerBox">
            <div className="divisoesfooterBox">
                <div className="namesFooter">
                <h6>EQUIPE</h6>
                <p>Pedro Cosme</p>
                <p>Maria Eduarda Lamounier</p>
                <p>Valentina Santos</p>
                <p>Maria Bernardes</p>
                </div>
            </div>
            <div className="divisoesfooterBox">
                <img src="/images/enderço.png" alt="endereço icon" width="15" height="15">
                    </img>
                <p>Universidade Federal de Minas Gerais</p>
                <p>Belo Horizonte, Minas Gerais</p>
                <p>Brasil</p>
            </div>
            <div className="divisoesfooterBox">
                <div className="midiaBox">
                    <img src="/images/Instagram.png" alt="instagram icon" width="15" height="15">
                        </img>
                    <p>@instagram</p>
                </div>
                <div className="midiaBox">
                    <img src="/images/Youtube.png" alt="youtube icon" width="15" height="15">
                        </img>
                    <p>CanalYoutube</p>
                </div>
                <div className="midiaBox">
                    <img src="/images/Telefone.png" alt="telefone icon" width="15" height="15">
                        </img>
                    <p>31 XXXXX - XXXX</p>
                </div>
            </div>
        </div>
    )    
}
export default Footer;