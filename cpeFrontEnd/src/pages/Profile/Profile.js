import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Header from "../../Components/Header/Header";
import { getUserId } from "../../services/auth";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userInfos, setUserInfo] = useState([]);
  const navigate = useNavigate();

  async function findById() {
    try {
      const userId = getUserId("@id");
      const response = await api.get("/user/" + userId);
      // console.log(response.data.data[0]);
      setUserInfo(response.data.data[0]);
    } catch (error) {
      console.warn(error);
    }
  }

  async function deleteAcc() {
    try {
      const userId = getUserId("@id");
      const response = await api.delete("/user/" + userId);
      alert("Conta excluída! Faça login em outro usuário.");
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    findById();
  }, []);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let normalDate = new Date(userInfos.birthdate).toLocaleString(
    "pt-BR",
    options,
    {
      timeZone: "UTC",
    }
  );
  console.log(normalDate);

  return (
    <div className="base">
      <Header />
      <div className="perfilBox">
        <div className="infoBox">
          <img
            src="/images/blank_picture.jpg"
            alt="perfil icon"
            width="266"
            height="259"
          ></img>
          <div className="informaçoespessoaisBox">
            <h3>{userInfos.name}</h3>
            <img
              src="/images/arroba.png"
              alt="arroba icon"
              width="25"
              height="25"
            ></img>
            <h3>{userInfos.email}</h3>
            <img
              src="/images/Bolinho.png"
              alt="bolo icon"
              width="25"
              height="25"
            ></img>
            <h3>{normalDate}.</h3>
          </div>
          <div className="perfilbuttons">
            <button type="button" onClick={deleteAcc}>
              EXCLUIR CONTA
            </button>
            <p></p>
          </div>
        </div>
        <div className="curiosidadeBox">
          <div className="nomeBox"></div>
          <div className="comidasFavoritasBox">
            <div className="escolhidosBox">
              <img
                src="/images/garfo.png"
                alt="garfo icon"
                width="25"
                height="25"
              ></img>
              <h2>Comidas Favoritas</h2>
            </div>
            <div className="perfilbuttons">
              {/* <button type="button">Polenta Frita</button> */}
              <h4>Polenta Frita</h4>
              <hr></hr>
              <h4>Capelleti</h4>
              <hr></hr>
              <h4>Linguiça</h4>
              <hr></hr>
            </div>
          </div>
          <div className="atracoesFavoritas">
            <div className="escolhidosBox">
              <img
                src="/images/icon-park-solid_fireworks.png"
                alt="fireworks icon"
                width="35"
                height="35"
              ></img>
              <h2>Atrações Favoritas</h2>
            </div>
            <div className="perfilbuttons">
              <h4>Casa</h4>
              <hr></hr>
              <h4>Eita!</h4>
              <hr></hr>
              <h4>Oras!</h4>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
