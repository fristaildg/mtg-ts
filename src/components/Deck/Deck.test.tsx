import * as React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('<Deck />', () => {
  test('renders', () => {
    const wrapper = shallow(<Deck />);
    expect(wrapper).toMatchSnapshot();
  });
});
  