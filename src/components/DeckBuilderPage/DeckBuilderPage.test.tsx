import * as React from 'react';
import { shallow } from 'enzyme';
import DeckBuilderPage from './DeckBuilderPage';

describe('<DeckBuilderPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<DeckBuilderPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
  