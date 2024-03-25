import React from 'react';
import menu from '../Api/Api';

const Menu = () => {
  return (
    <>
      <h1 style={{color:'orangered', margin:'20px'}}>What's in your mind ?</h1>
      <div className='menuapi'>{

        menu.map((data) => (

          <div className='menu-card'>
            <img src={data.img} alt="img" />
            <h4 style={{ margin: '7px' }}>{data.title}</h4>
            <p style={{ fontSize: '12px', color: '#56560', margin: '7px' }}>{data.description}</p>
            <button className='btn3'>Add to cart ₹{data.price}</button>
          </div>
        ))}
      </div>
    </>

  )
}

export default Menu