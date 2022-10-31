import React from "react";
import "./Profile.css";
import Header from "../../Components/Header/Header"


function Profile() {
    return (
        <div className="base">
            <Header />
            <div className="container">
                <div className="usrname">
                    <h2>Nome Sobrenome</h2>
                    <div className="line">
                        <div className="profilepic">
                            <img src="/images/rainha.jpg" alt="profile">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Profile;