import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import { movieListReducerInitialState } from 'utils/mocks';
import { configureMockStoreWithInitialState } from 'utils/testFunctions';

import SearchMovieHeader from './searchMovieHeader';

const store = configureMockStoreWithInitialState(movieListReducerInitialState);

describe('<SearchMovieHeader />', () => {
  it('should render without crashing', () => {
    shallow(<SearchMovieHeader />);
  });

  it('should render Add Movie Modal when Add Movie button is clicked', () => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
    const wrapper = mount(
      <Provider store={store}>
        <SearchMovieHeader />
      </Provider>
    );
    const addMovieBtn = wrapper.findWhere((node) => {
      return node.type() === 'button' && node.text() === '+ADD MOVIE';
    });
    addMovieBtn.simulate('click');
    expect(wrapper.find({ 'data-testid': 'close' }).exists()).toBe(true);
  });
});
