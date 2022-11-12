import React from "react";
import "./Register.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import RegisterBox from "../../Components/RegisterBox/RegisterBox";


function Register() {
    return (
        <div className="registerPage">
            <Header />
            <div className="registerContainer">
                <RegisterBox/>
        
                </div>
            <Footer />
        </div>
        
    )
};
export default Register;