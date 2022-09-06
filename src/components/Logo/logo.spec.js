import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Logo from './logo';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<Logo />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Logo />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render Homepage when clicked', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    wrapper.find('span').simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
