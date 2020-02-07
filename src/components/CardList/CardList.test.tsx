import * as React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('<CardList />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper).toMatchSnapshot();
  });
});
  