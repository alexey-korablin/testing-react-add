import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './reducer';

const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore,
);

export const store = createStoreWithMiddleware(RootReducer);
