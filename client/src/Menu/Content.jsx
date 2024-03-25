import React from 'react'
import Menucard from '../Menucard'

const Content = () => {
  return (
    <>
    <div className='content'>

        <h3 style={{color:'#908E9B'}}>Check Out</h3>
        <h1 style={{color:'rgb(255, 68, 0)'}}>Our Best Sellers</h1>
    </div>
    <div className='menu'>
       <Menucard/>
    </div>
    <footer className='footer' >
        &copy; 2024 All rights reserved
    </footer>
    </>
  )
}

export default Content