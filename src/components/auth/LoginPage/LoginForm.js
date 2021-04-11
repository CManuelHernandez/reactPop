import React from 'react';
import './LoginForm.css';

import { Button, FormField, Checkbox } from '../../shared';


function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials] = React.useState({
      email: '',
      password: '',
      remember: false,
    });
  
    const handleChange = event => {
      setCredentials(oldCredentials => ({
        ...oldCredentials,
        [event.target.name]: event.target.type === 'remember' 
        ? 
        event.target.checked : event.target.value
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
          onChange={handleChange}
        />
        <FormField
          type="password"
          name="password"
          label="Password :"
          className="loginForm-field"
          value={password}
          onChange={handleChange}
        />
         <Checkbox 
         className={'checkbox'}
         name={'remember'}
         text={'Remember Sesion'}
         type={'checkbox'}
         disabled={!credentials.email || !credentials.password}
         checked={credentials.remember}
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
