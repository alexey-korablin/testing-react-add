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
    beforeEach(() => {
      const props = {
        buttonText: 'Example Text',
        emitEvent: () => {},
      };
      component = setUp(props);
    });

    it('should render a button', () => {
      const element = component.find(`button`);
      expect(element.length).toBe(1);
    });
  });
});
