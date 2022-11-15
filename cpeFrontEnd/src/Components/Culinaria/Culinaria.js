import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api"
import './Culinaria.css'
import { LoginContext } from "../../Context/LoginContext";


function Culinaria() {
    // const [viewProduct, setViewProduct] = useState();
    // const [products, setProducts] = useState();
    // const { token } = useContext(LoginContext);

    // useEffect(() => {
    //     if (token) {
    //       api
    //         .get("/product", {
    //           headers: {
    //             "Content-Type": "application/json",
    //             authorization: `Bearer ${token}`,
    //           },
    //         })
    //         .then((response) => {
    //           const data = response.data;
    
    //           setProducts(data);
    //         });
    //     }
    //   }, [token]);

    //   function handleClick(product) {
    //     setViewProduct(product);
    //   }
    
    //   function handleClose() {
    //     setViewProduct();
    //   }
    
    //   function handleSave(product) {
    //     const newProducts = [...products];
    
    //     let i = 0;
    //     for (i; i < products.length; i++) if (products[i].product_id === product.product_id) break;
    
    //     const fieldsToUpdate = { ...product };
    //     delete fieldsToUpdate.user_id;
    
    //     api.put(`/product/${product.product_id}`, fieldsToUpdate, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         authorization: `Bearer ${token}`,
    //       },
    //     });
    
    //     newProducts[i] = product;
    //     setProducts(newProducts);
    //   }
  
    // async function getProduct() {
    //     try {
    //         const response = await api.get("/product");
    //         // setProducts([...response])
    //         console.log(response.data);
    //     } catch (error) {
    //         console.warn(error);
    //     }
    // }
    // useEffect(() => {
    //     getProduct();
    // }, [])

    return (
        <div className="culinariaBox">
            <h2>Culinária</h2>
            <div className="culinariaDivisoes">
                <div className="alimentoBox">
                    <div className="favoritosBox">
                        <h3>Polenta</h3>
                        <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>
                    </div>        
                    <img src="/images/polenta frita.png" alt="polenta icon" width="300" height="300"> 
                    </img>
                    <h6>A polenta é o principal prato típico da Festa, seja frita, com molho, com ovo, com queijo, com linguiça e outras formas de se apreciar a saborosa iguaria, feita em fogões à lenha com cozimento lento para não queimar e dar paladar</h6>
                </div>
                <div className="alimentoBox">
                    <div className="favoritosBox">
                        <h3>Macarrão</h3>
                        <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>
                    </div>        
                    <img src="/images/macarrao.png" alt="macarrao icon" width="300" height="300"> 
                    </img>
                    <h6>Também se aprecia um bom macarrão, cozido “al dente” e temperado de forma artesanal, nas versões molho de carne e queijo parmesão e ao "fungui".</h6>
                </div>
                <div className="alimentoBox">
                    <div className="favoritosBox">
                        <h3>Linguiça</h3>
                        <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>
                    </div>            
                    <img src="/images/linguiça.png" alt="linguiça icon" width="300" height="300"> 
                    </img>
                    <h6>A linguiça suína é preparada do mesmo modo que nossos "Nonnos" nos ensinaram, bem como o frango frito que é temperado com muito carinho</h6>
                </div>
                <div className="alimentoBox">
                    <div className="favoritosBox">               
                        <h3>Capelleti</h3>
                        <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>    
                    </div>    
                    <img src="/images/capelleti.png" alt="capelleti icon" width="300" height="300"> 
                    </img>
                    <h6>O capeletti, ou agnoline é uma iguaria fina que revigora as forças após uma jornada de boa festa.
Temos diversas outras porções que agregam sabor ao paladar dos visitantes como um bom queijo, molhos, frango e outros quitutes encontrados no paiol do “Nonno” e na casa da “Nonna", tais como o "socol" e pães caseiros.</h6>
                </div>
            </div> 
        </div>
    )
};
export default Culinaria;