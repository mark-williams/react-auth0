import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import Callback from './Callback';

const ProtectedRoute = ({ auth, ...rest }) => {
  if (auth.isAuthenticated()) {
    return <Route {...rest} />;
  }

  return <Redirect to="/home" />;
};

ProtectedRoute.propTypes = {
  auth: PropTypes.object
};

const Routes = ({ auth }) => (
  <Switch>
    <Route exact path="/home" render={() => <Home auth={auth} />} />
    <ProtectedRoute exact path="/secure" render={() => <Fragment><h2>Secure Area</h2></Fragment>} auth={auth} />
    <Route path="/callback" render={(props) => <Callback auth={auth} {...props} />} />
    <Route render={() => <Home auth={auth} />} />
  </Switch>
);

Routes.propTypes = {
  auth: PropTypes.object
};

export default Routes;
