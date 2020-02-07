import * as React from 'react';
import { shallow } from 'enzyme';
import LeftMenu from './LeftMenu';

describe('<LeftMenu />', () => {
  test('renders', () => {
    const wrapper = shallow(<LeftMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
  