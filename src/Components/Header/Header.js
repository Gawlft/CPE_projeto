import React from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <div className= "container">
        <ul className="navbar1">
            <img 
                    src= "/images/pol_icon 1.png" alt = "Login icon">
                </img>
            <li><a href="http://localhost:3000/home">Home</a></li>
            <li><a href="http://localhost:3000/party">A festa</a></li>

        </ul>
        <span></span>
        <span></span>
            <Button variant="secondary" className="register-bttn">Registre-se</Button>{' '}
            <span></span>
            <Button variant="success" className="login-bttn">Login</Button>{' '}
        </div>
    )
};
export default Header;
