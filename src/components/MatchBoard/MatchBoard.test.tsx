import * as React from 'react';
import { shallow } from 'enzyme';
import MatchBoard from './MatchBoard';

describe('<MatchBoard />', () => {
  test('renders', () => {
    const wrapper = shallow(<MatchBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
  