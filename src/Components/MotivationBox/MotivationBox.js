import React from 'react';
import './MotivationBox.css';
import MotivationBoxItem from './MotivationBoxItem';

function MotivationBox() {
  return (
    <div className='box'>
      <h1>Motivação do Evento </h1>
      <div className='box__container'>
        <div className='box__wrapper'>
          
          <div className='box__items'>
            <MotivationBoxItem
              src='images/Festa da Polenta.jpg'
              text = 'A Festa da Polenta é organizada e executada por cerca de 1.500 voluntários distribuídos em diversas equipes. Desde a criação, em 1979, a festa mantem seu cunho filantrópico e após o evento, realiza-se uma Assembleia Pública, na qual a diretoria presta contas e submete o evento a uma avaliação, quando é definida a distribuição de parte dos recursos arrecadados para as entidades filantrópicas do município, bem como a própria Afepol, que mantém projetos culturais e promove eventos que reverenciam a cultura do imigrante italiano.'
              
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MotivationBox;