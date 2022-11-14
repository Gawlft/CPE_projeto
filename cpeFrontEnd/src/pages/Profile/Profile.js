import React from "react";
import "./Profile.css";
import Header from "../../Components/Header/Header"


function Profile() {
    return (
        <div className="base">
            <Header />
            <div className="container">
            </div>
                <div className="usrname">
                    <h2>Nome Sobrenome</h2>
                    <div className="line">
                    </div>
                    </div>
                        <div className="profilepic">
                            <img src="/images/rainha.jpg" alt="profile">
                            </img>
                        </div>
                        <div className="info">
                            <div className="info-line"></div>
                            <span></span>
                            <div className="info-line"></div>
                            <span></span>
                            <div className="info-line"></div>
                        </div>
            </div>



    );
};

export default Profile;