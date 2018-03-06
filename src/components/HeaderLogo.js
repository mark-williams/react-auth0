import React from 'react';
import logo from '../assets/logo.svg';
import styled, { keyframes } from 'styled-components';

const rotate360 =  keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinningLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const HeaderLogo = () => (
  <SpinningLogo src={logo} className="App-logo" alt="logo" />
);

export default HeaderLogo;

