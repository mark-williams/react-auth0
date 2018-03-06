import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import auth0 from 'auth0-js';
import Home from './Home';
import Callback from './Callback';
import { authConfig } from '../config';
import AuthService from '../services/authService';
import HeaderLogo from './HeaderLogo';


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

const Navigation = styled.nav`
  margin: 0;
  background-color: hsl(240, 0%, 33%);
  color: hsl(0, 0%, 100%);
  & > ul {
    height: 40px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: horizontal;
    justify-content: flex-start;
    align-items:center;
    list-style: none;
    & > li {
      margin-left: 1rem;
      text-decoration: none;
      & a {
        text-decoration: none;
        color: hsl(0, 0%, 90%);
        &.active {
          border-bottom: 2px solid pink;
        }
        &:visited {
          color: hsl(0, 0%, 90%);
        }
        &:hover {
          color: white;
        }
      }
    }
  };
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
            <Navigation>
              <ul>
                <li><NavLink activeClassName="active" className="active" to="/">Home</NavLink></li>
                <li><NavLink to="/secure">Secure</NavLink></li>
              </ul>
            </Navigation>
            <Switch>
              <Route exact path="/" render={() => <Home auth={this.authService} />} />
              <Route path="/secure" render={() => <Fragment><h2>Secure Area</h2></Fragment>} />
              <Route path="/callback" render={(props) => <Callback auth={this.authService} {...props} />} />
            </Switch>
          </Fragment>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
