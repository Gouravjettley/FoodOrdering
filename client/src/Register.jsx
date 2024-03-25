import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    async function register(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/register", {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('successful')
        }
        else {
            alert('wrong')
        }


    }
    return (
        <form className='register' onSubmit={register}>
            <input type="text"
                placeholder='Enter your Name'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input type="email"
                placeholder='Enter your Email'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <input type="password"
                placeholder='Enter your Password'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default Register