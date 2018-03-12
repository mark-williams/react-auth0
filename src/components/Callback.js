import React from 'react';
import PropTypes from 'prop-types';

const Callback = (props) => {
  const { auth, location, history } = props;

  // if (/access_token|id_token|error/.test(location.hash)) {
  //   auth.handleAuthentication(history);
  // }

  return (
    <h2>Logging on...</h2>
  );
};

Callback.propTypes = {
  auth: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Callback;
