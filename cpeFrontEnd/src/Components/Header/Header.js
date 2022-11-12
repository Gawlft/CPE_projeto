import React from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <div className="containerHeader">
            <ul className="navbar1">
                <img
                    src="/images/pol_icon 1.png" alt="Login icon">
                </img>
                <div className="opts">
                    <li><a href="http://localhost:3000/home">Home</a></li>
                    <li><a href="http://localhost:3000/party">A festa</a></li>
                </div>
                <div className="buttons">
                    <Button variant="secondary" className="register-bttn">Registre-se</Button>{' '}
                    <span></span>
                    <Button variant="success" className="login-bttn">Login</Button>{' '}
                </div>
            </ul>
        </div>
    )
};
export default Header;
