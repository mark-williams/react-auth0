import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  login = () => {
    const { auth } = this.props;
    auth.authorize({ responseType: 'token', redirectUri: 'http://localhost:3000/callback' });
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

Home.propTypes = {
  auth: PropTypes.object
};

export default Home;
