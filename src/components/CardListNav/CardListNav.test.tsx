import * as React from 'react';
import { shallow } from 'enzyme';
import CardListNav from './CardListNav';

describe('<CardListNav />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardListNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
  