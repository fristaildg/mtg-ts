import * as React from 'react';
import { shallow } from 'enzyme';
import DeckListItemNew from './DeckListItemNew';

describe('<DeckListItemNew />', () => {
  test('renders', () => {
    const wrapper = shallow(<DeckListItemNew />);
    expect(wrapper).toMatchSnapshot();
  });
});
  