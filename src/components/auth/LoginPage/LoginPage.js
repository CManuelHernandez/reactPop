import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import { useHistory, useLocation } from 'react-router';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);
  const firstTime = React.useRef(true);
  
  const resetError = React.useCallback(() => setError(), []);
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };

      history.replace(from);
    }
  });

  React.useEffect(() => {
    if (firstTime) {
      firstTime.current = false;
    }
  });
  
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
