import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import authService from '../services/authService';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../services/authService');
authService.mockImplementation(() => {
  return { isAuthenticated: () => (false) };
});

describe('App component', () => {
  it('tests', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });

  it('renders login button if user not authenticated', () => {
    const wrapper = mount(<App />);
    const loginButton = wrapper.find('button');

    expect(loginButton.length).toBe(1);
  });

  it('does not render login button if user is authenticated', () => {
    authService.mockImplementation(() => {
      return { isAuthenticated: () => (true) };
    });
    const wrapper = mount(<App />);
    const loginButton = wrapper.find('button');

    expect(loginButton.length).toBe(0);
  });
});
