import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components'
import auth0 from 'auth0-js';
import Home from './Home';
import Callback from './Callback';
import { authConfig } from '../config';
import AuthService from '../services/authService';
import logo from '../assets/logo.svg';
import './App.css';

const AppContainer = styled.div`
  text-align: center
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
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
        <AppHeader>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </AppHeader>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home auth={this.authService} />} />
            <Route path="/secure" render={() => <Fragment><h2>Secure Area</h2></Fragment>} />
            <Route path="/callback" render={(props) => <Callback auth={this.authService} {...props} />} />
          </Switch>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
