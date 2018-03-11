import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Routes from './Routes';
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

  onLogin = () => {
    this.authService.authorize();
  }

  onLogout = () => {
    this.authService.logout();
  }

  render() {
    const isLoggedIn = this.authService.isAuthenticated();
    const userName = isLoggedIn ? this.authService.getUserName() : '';
    return (
      <AppContainer>
        <Router>
          <Fragment>
            <AppHeader>
              <HeaderLogo />
              <AppTitle>Welcome!</AppTitle>
            </AppHeader>
            <Navigation isLoggedIn={isLoggedIn} userName={userName} onLogin={this.onLogin} onLogout={this.onLogout} />
            <Routes auth={this.authService} />
          </Fragment>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
