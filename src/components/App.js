import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import auth0 from 'auth0-js';
import Home from './Home';
import Callback from './Callback';
import { authConfig } from '../config';
import AuthService from '../services/authService';
import logo from '../assets/logo.svg';
import './App.css';


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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home auth={this.authService} />} />
            <Route path="/secure" render={() => <Fragment><h2>Secure Area</h2></Fragment>} />
            <Route path="/callback" render={(props) => <Callback auth={this.authService} {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
