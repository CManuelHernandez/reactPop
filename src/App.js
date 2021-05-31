import React from 'react';
import ProtoTypes from 'prop-types';
import './App.css';

import { LoginPage, PrivateRoute } from './components/auth';

import { CreateNewAddPage, AddDetailPage, AddListPage, Page404 } from './components/adverts'
import { Switch, Route, Redirect } from 'react-router';


import { useRouteMatch } from "react-router-dom";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => setIsLogged(false);

  const match = useRouteMatch("/advert/:id")

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          {({ history }) => (
            <LoginPage onLogin={handleLogin} history={history}/>
          )}
        </Route>
        <PrivateRoute isLogged={isLogged} path="/advert/new">
          <CreateNewAddPage isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRoute>
        <PrivateRoute  isLogged={isLogged} path="/advert/:id">
            <AddDetailPage match={match} isLogged={isLogged} onLogout={handleLogout}/> 
        </PrivateRoute> 
        <PrivateRoute isLogged={isLogged} exact path="/adverts">     
          <AddListPage isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="/adverts" />
        </Route>
        <Route path="/404">
          <Page404 isLogged={isLogged} onLogout={handleLogout} />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: ProtoTypes.bool.isRequired,
};

export default App;
