import React from "react";
import Button from 'react-bootstrap/Button';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img
                    src="/images/pol_icon 1.svg" alt="Plenta icon">
            </img>
            <Button variant="primary">Home</Button>{' '}
            <Button variant="light">A Festa</Button>{' '}
            <span></span>
            {/* <div className="header-right">
                <img
                    src="/images/pol_icon 1.svg" alt="Plenta icon">
                </img>
                <Button variant="primary">Home</Button>{' '}
                <Button variant="light">A Festa</Button>{' '}
            </div> */}
        </div>
    )
};
export default Header;
