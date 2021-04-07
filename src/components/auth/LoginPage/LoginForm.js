import React from 'react';
import './LoginForm.css';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';


function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials] = React.useState({
      email: '',
      password: '',
    });
  
    const handleChange = event => {
      setCredentials(oldCredentials => ({
        ...oldCredentials,
        [event.target.name]: event.target.value,
        }));
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      onSubmit(credentials);
    };
  
    const { email, password } = credentials;
  
    return (
      <form className="loginForm" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="email"
          label="Email :"
          className="loginForm-field"
          value={email}
          // onChange={handleEmailChange}
          onChange={handleChange}
        />
        <FormField
          type="password"
          name="password"
          label="Password :"
          className="loginForm-field"
          value={password}
          // onChange={handlePasswordChange}
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="loginForm-submit"
          variant="primary"
          disabled={isLoading || !email || !password}
        >
          Log in
        </Button>
      </form>
    );
  }
  
  export default LoginForm;
