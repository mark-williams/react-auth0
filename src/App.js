import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import auth0 from 'auth0-js';
import Home from './Home';
import logo from './logo.svg';
import './App.css';

const CLIENT_ID = 'gbfAXSmOKKHvBOdv49KHQv6Hd0TWbSmY';
const CLIENT_DOMAIN = 'mark-williams.eu.auth0.com';

const Callback = () => {
  return (
    <Redirect to="/secure" />
  );
};

class App extends Component {
  componentWillMount = () => {
    this.webAuth = new auth0.WebAuth({
      domain: CLIENT_DOMAIN,
      clientID: CLIENT_ID
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
            <Route exact path="/" render={() => <Home lock={this.webAuth} />} />
            <Route path="/secure" render={() => <Fragment><h2>Secure Area</h2></Fragment>} />
            <Route path="/callback" component={Callback} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
