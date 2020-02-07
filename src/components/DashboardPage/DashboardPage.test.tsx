import * as React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from './DashboardPage';

describe('<DashboardPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
  