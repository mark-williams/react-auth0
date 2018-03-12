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
  state = {
    isLoggedOn: false
  };

  componentWillMount = () => {
    if (this.authService.isAuthenticated()) {
      this.setState({ isLoggedOn: true });
      return;
    }
    
    if (/access_token|id_token|error/.test(window.location.hash)) {
      this.authService
        .handleAuth()
        .then(() => {
          this.setState({ isLoggedOn: true });
        });
    }
  }

  onLogin = () => {
    this.authService.authorize();
  }

  onLogout = () => {
    this.authService.logout();
  }

  render() {
    const userName = this.state.isLoggedOn ? this.authService.getUserName() : '';

    return (
      <AppContainer>
        <Router>
          <Fragment>
            <AppHeader>
              <HeaderLogo />
              <AppTitle>Welcome!</AppTitle>
            </AppHeader>
            <Navigation isLoggedIn={this.state.isLoggedOn} userName={userName} onLogin={this.onLogin} onLogout={this.onLogout} />
            <Routes auth={this.authService} />
          </Fragment>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
