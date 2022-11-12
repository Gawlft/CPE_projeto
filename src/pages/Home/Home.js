import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Cards from "../../Components/Cards/Cards"
import MotivationBox from "../../Components/MotivationBox/MotivationBox";

function Home(){
    return(
      <div>
        <Header/>
        <div className= 'home-container'>
        {<img src= '/tombodapolenta.jpg'/>}
        <h1>FESTA DA POLENTA</h1>
        <p>Desde 1979 fazendo historia</p>
      </div>
      <Cards/>
      <MotivationBox/>
      <Footer/>
      </div>
    )
}
export default Home;

