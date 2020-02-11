import * as React from 'react';
import { shallow } from 'enzyme';
import DecksPage from './DecksPage';

describe('<DecksPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<DecksPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
  