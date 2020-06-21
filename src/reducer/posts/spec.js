import { types } from '../../actions/types';
import postsReducer from '../posts/reducer';

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should return new state if receiving type', () => {
    const posts = [
      { title: 'post 1' },
      { title: 'post 2' },
      { title: 'post 3' },
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
