import * as React from 'react';
import { shallow } from 'enzyme';
import DeckHeader from './DeckHeader';

describe('<DeckHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<DeckHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
  