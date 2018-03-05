import React, { Fragment } from 'react';

class Home extends React.Component {
  login = () => {
    this.props.lock.authorize({ responseType: 'token', redirectUri: 'http://localhost:3000/callback' });
  }

  render = () => {
    return (
      <Fragment>
        <h1>Home</h1>
        <p>Welcome - here's the application home</p>
        <button onClick={this.login}>Login</button>
      </Fragment>
    );
  }
}

export default Home;
