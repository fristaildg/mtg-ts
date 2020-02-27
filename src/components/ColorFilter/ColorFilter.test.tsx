import * as React from 'react';
import { shallow } from 'enzyme';
import ColorFilter from './ColorFilter';

describe('<ColorFilter />', () => {
  test('renders', () => {
    const wrapper = shallow(<ColorFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
  