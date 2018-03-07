import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../services/authService', () => {
  return jest.fn().mockImplementation(() => {
    return { isAuthenticated: () => (false) };
  });
});

describe('App component', () => {
  it('tests', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });

  it('renders login if user not authenticated', () => {
    const wrapper = mount(<App />);
    const loginButton = wrapper.find('button');

    expect(loginButton.length).toBe(1);
  });
});
