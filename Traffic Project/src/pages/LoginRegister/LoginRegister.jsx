import React, { useState } from 'react';
import ‘../../styles/LoginRegister.css’;
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function LoginRegister() {
  const [action, setAction] = useState('');
  const navigate = useNavigate();

  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Sign Up logic goes here');
  };

  return (
    <div className="login-register-container">
      <div className="logo">Traffitor</div>
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Sign Up</a></p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form onSubmit={handleSignup}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required />
              <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to terms & conditions</label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
