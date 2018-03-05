import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Callback = (props) => {
  const { auth } = props;
  auth.authenticate();

  return (
    auth.isAuthenticated ? <Redirect to="/secure" /> : <div>Error logging in!</div>
  );
};

Callback.propTypes = {
  auth: PropTypes.object
};

export default Callback;
