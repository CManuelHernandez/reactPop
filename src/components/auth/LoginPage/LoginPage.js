import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import './LoginPage.css';

function LoginPage({ onLogin }) {
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
  
    const resetError = () => setError(null);
  
    const handleSubmit = async credentials => {
      try {
        setIsLoading(true);
        setError(null);
        await login(credentials);
        onLogin();
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="loginPage">
        <h1 className="loginPage-title">Log in to ReactPo</h1>
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
        {error && (
          <div onClick={resetError} className="loginPage-error">
            {error.message}
          </div>
        )}
      </div>
    );
  }
  
  export default LoginPage;
