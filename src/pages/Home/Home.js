import React from "react";
import "./Home.css";
import {useNavigate } from "react-router-dom";

function Home(){
    let  navigate  = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button
            onClick={() => {
                navigate("/profile");
                navigate.goBack();
            }}
            >
                Profile
            </button>
        </div>
    );
};

export default Home;