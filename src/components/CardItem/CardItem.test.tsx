import * as React from 'react';
import { shallow } from 'enzyme';
import CardItem from './CardItem';

describe('<CardItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
  