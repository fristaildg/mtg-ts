import * as React from 'react';
import { shallow } from 'enzyme';
import CardListItem from './CardListItem';

describe('<CardListItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
  