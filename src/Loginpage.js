// src/Login.js
import React, { useState } from 'react';
import './Loginpage';
import {Link} from 'react-router-dom';
const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <body>
        <div class="page">
      <h2 class="heading">Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <br/>
        <button class="" type="button" onClick={handleLogin}><Link to='Signinpage'>If new,register now!</Link></button>
        <button type='button'><Link to='Homepage'>Login</Link></button>
      </form>
    </div>
    </body>
    
  );
};

export default Loginpage;
