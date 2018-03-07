import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
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

const Navigation = () => (
  <NavigationContainer>
    <ul>
      <li><NavLink exact activeClassName="active" to="/home">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/secure">Secure</NavLink></li>
    </ul>
  </NavigationContainer>
);

export default Navigation;


