import * as React from 'react';
import { shallow } from 'enzyme';
import CardListFilters from './CardListFilters';

describe('<CardListFilters />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardListFilters />);
    expect(wrapper).toMatchSnapshot();
  });
});
  