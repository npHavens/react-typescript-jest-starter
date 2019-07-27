import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';


import Button from '../../../components/Button/Button';

import * as renderer from 'react-test-renderer';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<Button/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
