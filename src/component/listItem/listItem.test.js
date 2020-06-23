import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils';
import ListItem from './index';

const setUp = (props = {}) => shallow(<ListItem {...props} />);

describe('ListItem component', () => {
  describe('checking propTypes', () => {
    it('should not throw a warning', () => {
      const props = {
        title: 'Test title',
        description: 'test description',
      };
      const propsError = checkProps(ListItem, props);
      expect(propsError).toBeUndefined();
    });
  });
  describe(' component render', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: 'Test title',
        description: 'test description',
      };
      component = setUp(props);
    });

    it('should render without errors', () => {
      const listItem = findByTestAttr(component, 'listItemComponent');
      expect(listItem.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttr(component, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a description', () => {
      const description = findByTestAttr(
        component,
        'componentDescription',
      );
      expect(description.length).toBe(1);
    });
  });

  describe('should not render', () => {
    let component;
    beforeEach(() => {
      const props = {
        title: '',
        description: 'test description',
      };
      component = setUp(props);
    });

    it('component is not rendered', () => {
      const listItem = findByTestAttr(component, 'listItemComponent');
      expect(listItem.length).toBe(0);
    });
  });
});
