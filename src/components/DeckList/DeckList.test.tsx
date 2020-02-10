import * as React from 'react';
import { shallow } from 'enzyme';
import DeckList from './DeckList';

describe('<DeckList />', () => {
  test('renders', () => {
    const wrapper = shallow(<DeckList />);
    expect(wrapper).toMatchSnapshot();
  });
});
  