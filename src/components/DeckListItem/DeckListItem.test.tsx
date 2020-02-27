import * as React from 'react';
import { shallow } from 'enzyme';
import DeckListItem from './DeckListItem';

describe('<DeckListItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<DeckListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
  