import React from 'react';
import ProtoTypes from 'prop-types';
import './App.css';

import { LoginPage } from './components/auth';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from './components/adverts';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      {isLogged ? (
        <AdvertsPage isLogged={isLogged} onLogout={handleLogout}/>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}



      {/* <LoginPage />
      <AdvertsPage />
      <AdvertDetailPage />
      <NewAdvertPage /> */}
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: ProtoTypes.bool.isRequired,
};

export default App;
