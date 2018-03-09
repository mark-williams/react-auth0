import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colours from '../style/colours';

const NavigationContainer = styled.div`
  margin: 0;
  background-color: ${colours.navigationBackground};
  display: flex;
  flex-direction: row;
  & ul {
    flex: 1;
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
const LinksContainer = styled.nav`
  flex: 1;
`;

const UserControls = styled.div`
    display: flex;
    flex: 1;
    flex-direaction: row;
    justify-content: flex-end;
    padding: 4px;
    margin: 0;
`;

const AuthButton = styled.button`
  background-color: hsl(122, 25%, 50%);
  color: hsl(0, 0%, 100%);
  border: 0;
  width: 4rem;
`;

const Navigation = ({onLogout}) => (
  <NavigationContainer>
    <LinksContainer>
      <ul>
        <li><NavLink exact activeClassName="active" to="/home">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/secure">Secure</NavLink></li>
      </ul>
    </LinksContainer>
    <UserControls>
      <AuthButton onClick={onLogout}>Logout</AuthButton>
    </UserControls>
  </NavigationContainer>
);

export default Navigation;


