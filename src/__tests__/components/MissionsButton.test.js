import React from 'react';
import renderer from 'react-test-renderer';

import MissionsButton from 'src/components/MissionsButton';

describe('MissionsButton', () => {
  const onClick = () => {};

  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(<MissionsButton isReserved onClick={onClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for not reserved state', () => {
    const tree = renderer
      .create(<MissionsButton isReserved={false} onClick={onClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
