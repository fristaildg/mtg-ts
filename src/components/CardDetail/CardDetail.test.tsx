import * as React from 'react';
import { shallow } from 'enzyme';
import CardDetail from './CardDetail';

describe('<CardDetail />', () => {
  test('renders', () => {
    const wrapper = shallow(<CardDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
  