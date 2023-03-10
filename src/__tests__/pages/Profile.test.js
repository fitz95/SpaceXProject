import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from 'src/redux/store';
import Profile from 'src/pages/Profile';

describe('Profile', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
