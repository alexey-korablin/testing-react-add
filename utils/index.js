import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../src/reducer';
import { middlewares } from '../src/createStore';

export const findByTestAttr = (component, attr) =>
  component.find(`[data-testid="${attr}"]`);

export const checkProps = (component, expectedProps) =>
  checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );

export const testStore = (initialaState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(rootReducer, initialaState);
};
