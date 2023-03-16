import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='mes-logo1.png'
              text='MES Official Website'
              label='MERN'
              path='https://github.com/sagniksantra/mes2.2'
            />
            <CardItem
              src='stock.png'
              text='Event abc'
              label='Marketing'
              path='/register'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='stock.png'
              text='Event 123'
              label='Consulting'
              path='/register'
            />
            <CardItem
              src='stock.png'
              text='Event 456'
              label='Consulting'
              path='/register'
            />
            <CardItem
              src='stock.png'
              text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
              label='Genre/topic'
              path='/register'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
