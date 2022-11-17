import React, { useEffect, useState } from "react";
import api from "../../services/api"
import './Atracoes.css'


function Atracoes() {
  const [attractions, setAttractions] = useState([]);

  async function getAttraction() {
      try {
          const response = await api.get("/attraction");
          setAttractions(response.data.data);
          console.log(response.data.data);
      } catch (error) {
          console.warn(error);
      }
  }
  useEffect(() => {
      getAttraction();
  }, [])

  return (

    <div className="atracoesBox">
    <h2>Atrações</h2>
    <div className="atracoesDivisoes">
  
      {attractions.map( (attraction) => (
        <div className="atracaoBox">
        <img src={attraction.attraction_img} alt="cozinha icon" width="400" height="300"> 
        </img>
        <div className="textBox">
          <div className="favoritosBox">
              <h3>{attraction.name}</h3>
              <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                </img>
          </div>        

         <h6>{attraction.description}</h6>

        </div>
    </div>
      ))}
          </div>
          </div>
)}
export default Atracoes;