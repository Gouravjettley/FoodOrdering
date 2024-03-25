import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {

  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:5000/Profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:5000/Logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;

  return (
    <header>
      <p><NavLink to="/">Foodies</NavLink></p>
      <nav className="navbar navbar-expand-lg ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {username && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Menu">Menu</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <a className='logout' onClick={logout}>Logout</a>
            {/* <p className='username'>Hi,{username}</p> */}
            </>
        )}
        {
          !username && (
            <>
              <NavLink to="/Login" >Login</NavLink>
              <NavLink to="/Register" className="register">Register</NavLink>
            </>
          )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header