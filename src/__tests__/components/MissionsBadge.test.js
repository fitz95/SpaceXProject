import React from 'react';
import renderer from 'react-test-renderer';

import MissionsBadge from 'src/components/MissionsBadge';

describe('MissionsBadge', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer.create(<MissionsBadge isReserved />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for not reserved state', () => {
    const tree = renderer.create(<MissionsBadge isReserved={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
