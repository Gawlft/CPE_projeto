import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api"
import './Atracoes.css'
import { LoginContext } from "../../Context/LoginContext";


function Atracoes() {
    /*const [viewAttraction, setViewAttraction] = useState();
    const [attractions, setAttractions] = useState();
    const { token } = useContext(LoginContext);

    useEffect(() => {
        if (token) {
          api
            .get("/attraction", {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              const data = response.data;
    
              setAttractions(data);
            });
        }
      }, [token]);

      function handleClick(attraction) {
        setViewAttraction(attraction);
      }
    
      function handleClose() {
        setViewAttraction();
      }
    
      function handleSave(attraction) {
        const newAttractions = [...attractions];
    
        let i = 0;
        for (i; i < attractions.length; i++) if (attractions[i].attraction_id === attraction.attraction_id) break;
    
        const fieldsToUpdate = { ...attraction };
        delete fieldsToUpdate.user_id;
    
        api.put(`/product/${attraction.attraction_id}`, fieldsToUpdate, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
    
        newAttractions[i] = attraction;
        setAttractions(newAttractions);
      }
  
    async function getAttraction() {
        try {
            const response = await api.get("/attraction");
            // setAttractions([...response])
            console.log(response.data);
        } catch (error) {
            console.warn(error);
        }
    }
    useEffect(() => {
        getAttraction();
    }, [])*/

    return(
      <div className="atracoesBox">
            <h2>Atrações</h2>
            <div className="atracoesDivisoes">
                <div className="atracaoBox">
                    <img src="/images/cozinha.png" alt="cozinha icon" width="400" height="300"> 
                    </img>
                    <div className="textBox">
                      <div className="favoritosBox">
                          <h3>Cozinha: onde bate o coração da festa</h3>
                          <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>
                      </div>        
            
                     <h6>Desde a primeira Festa da Polenta, em 1979, a cozinha vem evoluindo, com aquisições de utensílios e aprimoramento na sua organização e no treino dos voluntários, cada vez mais capacitados para produzir com qualidade e em quantidade.

Num trabalho que começa na quinta-feira que antecede a Festa e só termina na segunda-feira, quando todos os utensílios estão limpos e guardados, a equipe da cozinha produz macarrão, molho, carne de frango frita, e o prato típico.

Em 2011, o prato típico passou para bandejas fechadas, mais higiênicas e céleres no preparo e transporte, fator que otimizou o trabalho na cozinha.</h6>

                    </div>
                </div>
                
                
                <div className="atracaoBox">
                    <img src="/images/tombo.png" alt="tombo icon" width="400" height="300"> 
                    </img>
                    <div className = "textBox">
                      <div className="favoritosBox">
                        <h3>O Tombo da Polenta</h3>
                          <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>
                      </div>        
                     <h6>O 'Tombo da Polenta Gigante', foi um alívio para a cozinha, pois são preparados mais de 1.200 quilos de polenta por vez, abastecendo a cozinha na versão mole e dura para fritar. O tombo da polenta, já foi para o Guinness Book de 2008, e é um ponto atrativo da Festa. Foi criado a partir da ideia do Presidente Tarcísio José Caliman.</h6>
                    </div>
                </div>
                <div className="atracaoBox">
                    <img src="/images/paiol.png" alt="paiol icon" width="400" height="300"> 
                    </img>
                    <div className="textBox">
                      <div className="favoritosBox">
                          <h3>Paiol do Nonno</h3>
                          <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>
                      </div>            
                      <h6>A linguiça suína é preparada do mesmo modo que nossos "Nonnos" nos ensinaram, bem como o frango frito que é temperado com muito carinhoDesde 2016 a Casa do Vinho está entre as novidades oferecidas ao público da Festa da Polenta.  O espaço oferece uma carta de vinho bem completa, com diversas opções de uvas como cabernet, primitivo, syrat e carmeneres.</h6> 
                    </div>
                </div>
                
                
                <div className="atracaoBox">
                    <img src="/images/casa da nonna.png" alt="nonna icon" width="400" height="300"> 
                    </img>
                    <div className = "textBox">
                      <div className="favoritosBox">               
                          <h3>Casa da Nonna: Histórias, bordados e quitudes</h3>
                          <img src="/images/cbranco.png" alt="coraçao icon" width="20" height="20"> 
                            </img>    
                    </div>    
                      <h6>O Paiol do “Nonno” recria o passado ao reproduzir no ambiente da Festa da Polenta um pouco do dia a dia da vida rural, em especial a rotina dos homens trabalhando na roça e no entorno da casa da família.  Além de utensílios, ferramentas e diversas peças antigas, o espaço oferece delícias da culinária típica, como torresmo, caldo de cana e diversas porções.

Ferramentas como machado, “grupião”, foice e cangalha faziam parte da rotina de antigamente e hoje adornam e contam um pouco da história do lugar. Expostas no Paiol do “Nonno”, essas e outras ferramentas encantam pela funcionalidade.</h6>

                    </div>
                </div>
            </div> 
        </div>
    )
    };

    export default Atracoes ;