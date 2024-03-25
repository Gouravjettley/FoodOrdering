import React, { useContext, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import { UserContext } from './UserContext';

const Navbar = () => {
    const{userInfo,setUserInfo}=useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/Profile',{
          credentials:'include',
        }).then(response=>{
          response.json().then(userInfo=>{
           setUserInfo(userInfo);
          });
        });
    },[]);
  
    function logout(){
      fetch('http://localhost:5000/Logout',{
        credentials:'include',
        method:'POST',
      });
      setUserInfo(null);
    }
    const username = userInfo?.username;
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <NavLink className="header" to="/">FOODIES</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {username && (
                        <> 
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/Menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink>
                    </li>
                    {/* <div className='username'>Hi,{username}</div> */}
                    <a className='logout' onClick={logout}>Logout</a>
                    </>
                    )}
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     {!username && (
                    <>
                     <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="register nav-link active " aria-current="page" to="/Register">Register</NavLink>
                        </li>
                    </>
                     )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar