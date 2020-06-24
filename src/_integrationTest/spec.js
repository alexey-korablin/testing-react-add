import moxios from 'moxios';

import { testStore } from '../../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Example title 1',
        description: 'Example text',
      },
      {
        title: 'Example title 2',
        description: 'Example text',
      },
      {
        title: 'Example title 3',
        description: 'Example text',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expectedState(newState.posts).toBe(expectedState);
    });
  });
});
