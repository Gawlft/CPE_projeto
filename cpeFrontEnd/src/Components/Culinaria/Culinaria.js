import React, {useEffect, useState } from "react";
import api from "../../services/api"
import './Culinaria.css'


function Culinaria() {
    const [products, setProducts] = useState([]);

    async function getProduct() {
        try {
            const response = await api.get("/product");
            setProducts(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.warn(error);
        }
    }
    useEffect(() => {
        getProduct();
    }, [])
        return (
            
        <div className="culinariaBox">
                    <h2>Culinária</h2>
                    <div className="culinariaDivisoes">
          { 
          products.map( (product) => ( 
                        <><div className="alimentoBox">
                  <div className="favoritosBox">
                      <h3>{product.name}</h3>
                      <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20">
                      </img>
                  </div>
                  <img src={product.product_img}alt="polenta icon" width="300" height="300">
                  </img>
                  <h6>{product.description}</h6>
              </div></>
          ))}
                                    </div>
                                    </div>
        
      );
}
export default Culinaria;