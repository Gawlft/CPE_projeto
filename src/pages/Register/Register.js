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
                    <Form className="inputsleft">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="nome" placeholder="Nome Completo"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-mail"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNascimento">
                        <Form.Control type="data" placeholder="Data de Nascimento"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control type="endereço" placeholder="Endereço"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicBio">
                        <Form.Control type="descrição" placeholder="Descrição do Usuário
                        
                        "/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassWord">
                        <Form.Control type="senha" placeholder="Senha"/>
                    </Form.Group>

                    <Button className="btn-custom" variant="flat">Registre-se</Button>{' '}

                    </Form>
                </div>
            </div>
        </div>
    )

}
export default Register;