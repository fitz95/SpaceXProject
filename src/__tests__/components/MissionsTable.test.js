import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import MissionsTable from 'src/components/MissionsTable';
import store from 'src/redux/store';

describe('MissionsTable', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionsTable />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
