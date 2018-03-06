import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import auth0 from 'auth0-js';
import Home from './Home';
import Callback from './Callback';
import { authConfig } from '../config';
import AuthService from '../services/authService';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';


const AppContainer = styled.div`
  text-align: center
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 120px;
  padding: 20px;
  margin: 0;
  color: white;
`;

const AppTitle = styled.div`
  font-size: 1.5em;
`;


class App extends Component {
  authService = new AuthService();

  componentWillMount = () => {
    this.webAuth = new auth0.WebAuth({
      domain: authConfig.clientDomain,
      clientID: authConfig.clientId
    });
  }

  render() {
    return (
      <AppContainer>
        <Router>
          <Fragment>
            <AppHeader>
              <HeaderLogo />
              <AppTitle>Welcome!</AppTitle>
            </AppHeader>
            <Navigation />
            <Switch>
              <Route exact path="/" render={() => <Home auth={this.authService} />} />
              <Route exact path="/secure" render={() => <Fragment><h2>Secure Area</h2></Fragment>} />
              <Route path="/callback" render={(props) => <Callback auth={this.authService} {...props} />} />
            </Switch>
          </Fragment>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
