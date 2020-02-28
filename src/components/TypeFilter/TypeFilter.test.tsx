import * as React from 'react';
import { shallow } from 'enzyme';
import TypeFilter from './TypeFilter';

describe('<TypeFilter />', () => {
  test('renders', () => {
    const wrapper = shallow(<TypeFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
  