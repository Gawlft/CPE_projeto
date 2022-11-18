import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../../services/api";
import { login } from "../../services/auth";
// import { LoginContext } from "../../Context/LoginContext";
import "./RegisterBox.css";

function RegisterBox() {
  const [name, setName] = useState();
  const [birthdate, setBirthdate] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user", {
        name,
        email,
        birthdate,
        password,
      });
      alert("Registrado com sucesso! Seja bem-vindo!");
      login(response.data.AccessToken);
      navigate("/profile");
    } catch (error) {
      console.warn(error);
      alert(error.message);
    }
  }
  return (
    // {/* <div> */}
    <div className="register-box">
      <img src="/images/login_icon.png" alt="Login icon"></img>
      <div className="grid-containerRegister">
        <p></p>
        <Form className="inputsLeft">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Nome Completo"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNascimento">
            <Form.Control
              type="data"
              placeholder="Data de Nascimento"
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassWord">
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <Button
        className="btn-customRegister"
        variant="flat"
        onClick={handleRegister}
      >
        Registre-se
      </Button>{" "}
    </div>
    // </div>
  );
}
export default RegisterBox;
