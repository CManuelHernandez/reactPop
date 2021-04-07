import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import './LoginPage.css';

function LoginPage({ onLogin }) {
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const isLogged = React.useRef(false);
  
    const resetError = () => setError(null);

    React.useEffect(() => {
      if (isLogged.current) {
        onLogin();
      }
    }, [isLogged.current, onLogin]);
  
    const handleSubmit = async credentials => {
      resetError();
      setIsLoading(true);
      try {
        await login(credentials);
        isLogged.current = true;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="loginPage">
        <h1 className="loginPage-title">Log in to ReactPoP</h1>
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
