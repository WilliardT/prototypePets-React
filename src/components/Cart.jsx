import React from 'react';

// props передаем с базы данных


function Cart({ handleChose, chose }) {
  return (
    <div 
    onClick={handleChose} 
    className={chose ? 'cartChose' : 'cart'}
    >
      <div className='text'>
        <p>Сказочное заморское яство</p>
        <h2>Нямушка</h2>
        <h3>c рыбой</h3>
        <p>10 порций</p>
        <p>мышь в подарок</p>
        <div className='kg'>0.5 кг</div>
      </div>
    </div>
  )
}

export default Cart;