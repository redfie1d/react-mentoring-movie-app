import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { movieListReducerInitialState } from 'utils/mocks';
import { configureMockStoreWithInitialState } from 'utils/testFunctions';

import Routes from 'Routes';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import SearchedMoviePage from 'pages/SearchedMoviePage/SearchedMoviePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const memoryRouterWrapper = (path) => {
  const store = configureMockStoreWithInitialState(
    movieListReducerInitialState
  );

  return mount(
    <MemoryRouter initialEntries={[path]}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MemoryRouter>
  );
};

describe('<Routes />', () => {
  it('should render HomePage by default', () => {
    const wrapper = memoryRouterWrapper('/');

    expect(wrapper.find(HomePage)).toHaveLength(1);
  });

  it('should render SearchedMoviePage', () => {
    const wrapper = memoryRouterWrapper('/search');

    expect(wrapper.find(SearchedMoviePage)).toHaveLength(1);
  });

  it('should render MovieDetailsPage', () => {
    const wrapper = memoryRouterWrapper('/film/424785');

    expect(wrapper.find(MovieDetailsPage)).toHaveLength(1);
  });

  it('should render ErrorPage for unknown route', () => {
    const wrapper = memoryRouterWrapper('/unknownRoute');

    expect(wrapper.find(ErrorPage)).toHaveLength(1);
  });
});
