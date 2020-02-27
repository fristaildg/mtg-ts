import * as React from 'react';
import { shallow } from 'enzyme';
import LoadingOverlay from './LoadingOverlay';

describe('<LoadingOverlay />', () => {
  test('renders', () => {
    const wrapper = shallow(<LoadingOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
  