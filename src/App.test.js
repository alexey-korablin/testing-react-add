import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, testStore } from '../utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

describe('App component', () => {
  let component;

  beforeEach(() => {
    const initialState = [
      {
        title: 'Example title',
        body: 'Some text',
      },
      {
        title: 'Example title',
        body: 'Some text',
      },
      {
        title: 'Example title',
        body: 'Some text',
      },
    ];

    component = setUp(initialState);
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'appComponent');
    expect(wrapper.length).toBe(1);
  });
});
