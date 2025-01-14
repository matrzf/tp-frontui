import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://fauques.freeboxos.fr:3000/register', { username, password });
      console.log(response.data)
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='body-register'>
      <div className="register-container">
        <div className="form-register">
      <h2 className="h2-register">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-register">
        <label>
          <p className='title-register'>Username:</p> 
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        </div>
        <br />
        <div className="input-register">
        <label>
          <p className='title-register'>Password:</p> 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <br />
        <div className="term-conditions">
          <label><input type='checkbox' />I agree to the term and the conditions</label>
        </div>
        <br />
        <button className='button-register' type="submit">Register</button>
      </form>
      <div className="login-link">
      <p>
        Already have an account? <Link to="/login" className='link-login'>Login here</Link>
      </p>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Register;