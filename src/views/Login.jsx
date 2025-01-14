import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://fauques.freeboxos.fr:3000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='body-login'>
      <div className="login-container">
        <div className="form-login">
      <h2 className='h2-login'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-login'>
        <label>
          <p className='title-input'>Username:</p> 
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        </div>
        <br />
        <div className='input-login'>
        <label>
          <p className='title-input'>Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <br />
        <button className='button-login' type="submit">Login</button>
      </form>
      <div className="register-link">
      <p>Don't have an account? <Link to="/register" className='link-register'>Register here</Link></p>
      </div> 
        </div>
      </div>
    </div>
  );
}

export default Login;