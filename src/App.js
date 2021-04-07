import React from 'react';
import ProtoTypes from 'prop-types';
import './App.css';

import { LoginPage } from './components/auth';

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
        {/* <Route path="/advert/:advertId" component={AdvertDetailPage} /> */}
        <Route path="/advert/new" component={CreateNewAddPage}>
          <CreateNewAddPage isLogged={isLogged} onLogout={handleLogout} />
        </Route>
        <Route path="/advert/:id" component={AddDetailPage} >
            <AddDetailPage match={match} isLogged={isLogged} onLogout={handleLogout}/> 
        </Route> 
        <Route path="/login">
          {() =>
            isLogged ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />
          }
        </Route>
        <Route exact path="/">
          <AddListPage isLogged={isLogged} onLogout={handleLogout} />
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
