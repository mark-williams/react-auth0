import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import auth0 from 'auth0-js';
import Routes from './Routes';
import { authConfig } from '../config';
import AuthService from '../services/authService';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import colours from '../style/colours';


const AppContainer = styled.div`
  text-align: center
`;

const AppHeader = styled.header`
  background-color: ${colours.headerBackground};
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

  onLogout = () => {
    this.authService.logout();
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
            <Navigation onLogout={this.onLogout} />
            <Routes auth={this.authService} />
          </Fragment>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
