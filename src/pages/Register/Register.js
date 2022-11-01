import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"


function Register(){
    return(
        <div>
            <Header/>
            <div className="register-box">
                <div className="containerRegister">
                <img
                        src="/images/login_icon.png" alt="Login icon">
                    </img>
                    <p></p>
                    <Form className="inputs">
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome Completo</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="senha">
                            </Form.Control>
                            </Form.Group>
                            </Form.Group>

                    </Form>
                </div>
            </div>
        </div>
    )

}
export default Register;