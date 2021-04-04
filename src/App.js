import React from 'react';
import './App.css';

import { LoginPage } from './components/auth';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from './components/adverts';

function App() {

  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="App">
      {isLogged ? (
        <AdvertsPage isLogged={isLogged} />
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

export default App;
