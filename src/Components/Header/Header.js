import React from "react";
import Button from 'react-bootstrap/Button';
import "./Header.css";

function Header(){
    return(
    <div className="header">
        <div class="header-right">
        <Button variant="primary">Home</Button>{' '}
        <Button variant="light">A Festa</Button>{' '}
        </div>
    </div>
    )
};
export default Header;
