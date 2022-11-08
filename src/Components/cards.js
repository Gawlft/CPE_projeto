import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fotos de Eventos Anteriores
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tombo.png'
            />
            
            <CardItem
              src='images/cozinha.png'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/Desfile.jpg'
        
            />
            <CardItem
              src='images/danca.jpg'
              
            />
            <CardItem
              src='images/panelaco.png'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
