import React, { useState } from 'react'

const Register = () => {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    async function register(e){
        e.preventDefault();
       const response = await fetch("http://localhost:5000/Register",{
            method:"POST",
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
        });

        if(response.status === 200){
            alert('Register Successfully');
        }
        else{
            alert('Register fail');
        }
    }
  return (
    <>
    <form className='reg-form' onSubmit={register}>
    <h1 style={{color:'orangered',textAlign:'center'}}>Register</h1>
        <input type="text" 
               placeholder='Username'
               value={username}
               onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" 
               placeholder='Password'
               value={password}
               onChange={(e)=>setPassword(e.target.value)} />
        <button>Submit</button>
    </form>
    </>
  )
}

export default Register