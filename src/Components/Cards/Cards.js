import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fotos de Eventos Anteriores </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tombo.png'
              text = 'O Tombo da Polenta (2018)'
              
              
            />
            <CardItem
              src='images/cozinha.png'
              text='Cozinha do Evento (2017)' 
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/desfile.jpg'
              text= ' Desfile (2016) '
              
            />
            <CardItem
              src='images/festa.jpg'
              text='Publico Festival (2015)'
              
            />
            <CardItem
              src='images/grupodedanca.jpg'
              text= "Grupo de Dança Típico (2014)"
              
            />
             <CardItem
              src='images/publico.jpg'
              text= "Tombo da Polenta (2014)"
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;