import * as React from 'react';
import { shallow } from 'enzyme';
import Stage from './Stage';

describe('<Stage />', () => {
  test('renders', () => {
    const wrapper = shallow(<Stage />);
    expect(wrapper).toMatchSnapshot();
  });
});
  