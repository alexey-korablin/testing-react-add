import React from 'react';
import { shallow } from 'enzyme';

import SharedButton from './index';
import { findByTestAttr, checkProps } from '../../../utils';

const setUp = (props = {}) => shallow(<SharedButton {...props} />);

describe('SharedButton component', () => {
  describe('Check propTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Text',
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Render', () => {
    let component;
    let mockFunck;
    beforeEach(() => {
      mockFunck = jest.fn();
      const props = {
        buttonText: 'Example Text',
        emitEvent: mockFunck,
      };
      component = setUp(props);
    });

    it('should render a button', () => {
      const element = component.find(`button`);
      expect(element.length).toBe(1);
    });

    it('should emit callback on click event', () => {
      const element = component.find(`button`);
      element.simulate('click');
      const callback = mockFunck.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
