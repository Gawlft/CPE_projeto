import React from "react";
import "./RegisterBox.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterBox() {
    return (

        // {/* <div> */}
        <div className="register-box">
            <img
                src="/images/login_icon.png" alt="Login icon">
            </img>
            <div className="grid-containerRegister">
                <p></p>
                <Form className="inputsLeft">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="nome" placeholder="Nome Completo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNascimento">
                        <Form.Control type="data" placeholder="Data de Nascimento" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control type="endereço" placeholder="Endereço" />
                    </Form.Group>



                </Form>
                <Form className="inputsRight">
                    <Form.Group className="mb-3" controlId="formBasicBio">

                        <Form.Control type="descrição" placeholder="Descrição do Usuário" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassWord">
                        <Form.Control type="senha" placeholder="Senha" />
                    </Form.Group>
                </Form>

                <div className="dropdown">
                    <button class="dropbtn">Comidas Favoritas</button>
                    <div class="dropdown-content">
                        <a href="#">Polenta</a>
                        <a href="#">Macarrão</a>
                        <a href="#">Linguiça</a>
                        <a href="#">Capeletti</a>
                    </div>
                </div>

                <div className="dropdownAtt">
                    <button class="dropbtnAtt">Atrações Favoritas</button>
                    <div class="dropdown-contentAtt">
                        <a href="#">Casa da Nonna</a>
                        <a href="#">Tombo da Polenta</a>
                        <a href="#">Paiol do Nonno</a>
                    </div>
                </div>
            </div>
            <Button className="btn-customRegister" variant="flat">Registre-se</Button>{' '}
        </div>
        // </div>


    );
};
export default RegisterBox;