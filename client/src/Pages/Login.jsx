import React, { useState , useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Components/UserContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const{setUserInfo}=useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/Login",{
            method:"POST",
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials: 'include',   //THis is used to save cookie (token) in react
        });
        if(response.ok){
          response.json().then(userInfo=>{
            setUserInfo(userInfo);
            setRedirect(true);
         
        })
      }
        else{
          alert('Wrong credentials');
        }
    }
    if(redirect){
      return <Navigate to={'/'}/>
    }
  return (
    <>
      <form className='reg-form' onSubmit={login}>
        <h1 style={{ color: 'orangered', textAlign: 'center' }}>Login</h1>
        <input type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Login