import React from 'react';
import { Redirect } from 'react-router-dom';

const Callback = () => {
  return (
    <Redirect to="/secure" />
  );
};

export default Callback;
