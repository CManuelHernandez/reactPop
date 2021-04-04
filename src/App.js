import React from 'react';
import ProtoTypes from 'prop-types';
import './App.css';

import { LoginPage } from './components/auth';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from './components/adverts';
import { Switch, Route, Redirect } from 'react-router';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/advert/:advertId" component={AdvertDetailPage} />
        <Route path="/tweet" component={NewAdvertPage} />
        <Route path="/login">
          {() =>
            isLogged ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />
          }
        </Route>
        <Route exact path="/">
          <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />
        </Route>
        <Route path="/404">
          <div
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            404 | Not found page
          </div>
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>



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
