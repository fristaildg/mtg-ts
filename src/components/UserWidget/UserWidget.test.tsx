import * as React from 'react';
import { shallow } from 'enzyme';
import UserWidget from './UserWidget';

describe('<UserWidget />', () => {
  test('renders', () => {
    const wrapper = shallow(<UserWidget />);
    expect(wrapper).toMatchSnapshot();
  });
});
  