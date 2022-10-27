import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";


function Login(){
    return (
        <div className="base">
            <div className="login-box">
            <div className="container">
                <img 
                    src= "/images/login_icon.png" alt = "Login icon">
                </img>
                <p></p>
                <Form className="inputs">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="rei_da_polenta@gmail.com"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="eu_amo_polenta"/>
                    </Form.Group>
                </Form>
                <p></p>
                <p></p>
                <p></p>
                <Button className="btn-custom" variant="flat">Entrar</Button>{' '}
                </div>

            </div>
        </div>
    );
};
export default Login;