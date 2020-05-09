import * as React from 'react';
import { shallow } from 'enzyme';
import NameFilter from './NameFilter';

describe('<NameFilter />', () => {
  test('renders', () => {
    const wrapper = shallow(<NameFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
  