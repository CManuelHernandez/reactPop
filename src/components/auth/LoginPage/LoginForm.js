import React from 'react';
import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials] = React.useState({
      email: '',
      password: '',
    });
  
    const handleChange = event => {
      setCredentials(oldCredentials => {
        const newCredentials = {
          ...oldCredentials,
          [event.target.name]: event.target.value,
        };
        return newCredentials;
      });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      onSubmit(credentials);
    };
  
    const { email: username, password } = credentials;
  
    return (
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          label="phone, email or username"
          className="loginForm-field"
          value={username}
          // onChange={handleUsernameChange}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={password}
          // onChange={handlePasswordChange}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="loginForm-submit"
          variant="primary"
          disabled={isLoading || !username || !password}
        >
          Log in
        </button>
      </form>
    );
  }
  
  export default LoginForm;
