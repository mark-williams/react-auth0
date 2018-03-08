import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colours from '../style/colours';

const NavigationContainer = styled.nav`
  margin: 0;
  background-color: ${colours.navigationBackground};
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
        color: ${colours.navigationItem};
        &.active {
          border-bottom: 2px solid ${colours.navigationActive};
        }
        &:visited {
          color: ${colours.navigationItem};
        }
        &:hover {
          color: ${colours.navigationItemEmphasis};
        }
      }
    }
  };
`;

const Navigation = () => (
  <NavigationContainer>
    <ul>
      <li><NavLink exact activeClassName="active" to="/home">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/secure">Secure</NavLink></li>
    </ul>
  </NavigationContainer>
);

export default Navigation;


