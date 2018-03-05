import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Callback = (props) => {
  const { auth, location, history } = props;

  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication(history);
  }

  return (
    auth.isAuthenticated ? <Redirect to="/secure" /> : <div>Error logging in!</div>
  );
};

Callback.propTypes = {
  auth: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Callback;
