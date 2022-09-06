import React from 'react';
import { Provider } from 'react-redux';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import {
  movieListReducerInitialState,
  getMovieListSuccessState,
} from 'utils/mocks';

import {
  configureMockStoreWithInitialState,
  simulateOnChange,
} from 'utils/testFunctions';

import AddMovieForm from './addMovieForm';

const renderAddMovieForm = () => {
  const store = configureMockStoreWithInitialState(
    movieListReducerInitialState
  );

  return render(
    <Provider store={store}>
      <AddMovieForm />
    </Provider>
  );
};

describe('<AddMovieForm />', () => {
  it('submitting empty inputs should show validations', async () => {
    const { getByText, getByTestId } = renderAddMovieForm();

    fireEvent.click(getByText('SUBMIT'));

    await waitFor(() => {
      expect(getByTestId('titleError')).not.toBe(null);
      expect(getByTestId('titleError').textContent).toBe('Required');
      expect(getByTestId('taglineError')).not.toBe(null);
      expect(getByTestId('taglineError').textContent).toBe('Required');
      expect(getByTestId('release_dateError')).not.toBe(null);
      expect(getByTestId('release_dateError').textContent).toBe('Required');
      expect(getByTestId('poster_pathError')).not.toBe(null);
      expect(getByTestId('poster_pathError').textContent).toBe('Required');
      expect(getByTestId('genresError')).not.toBe(null);
      expect(getByTestId('genresError').textContent).toBe(
        'Select at least one genre to proceed'
      );
      expect(getByTestId('overviewError')).not.toBe(null);
      expect(getByTestId('overviewError').textContent).toBe('Required');
      expect(getByTestId('runtimeError')).not.toBe(null);
      expect(getByTestId('runtimeError').textContent).toBe('Required');
    });
  });

  it('submitting empty inputs and clicking reset should reset all validations', async () => {
    const { getByText, queryByTestId } = renderAddMovieForm();

    fireEvent.click(getByText('SUBMIT'));
    fireEvent.click(getByText('RESET'));

    await waitFor(() => {
      expect(queryByTestId('titleError')).toBe(null);
      expect(queryByTestId('taglineError')).toBe(null);
      expect(queryByTestId('release_dateError')).toBe(null);
      expect(queryByTestId('poster_pathError')).toBe(null);
      expect(queryByTestId('genresError')).toBe(null);
      expect(queryByTestId('overviewError')).toBe(null);
      expect(queryByTestId('runtimeError')).toBe(null);
    });
  });

  it('test invalid date', async () => {
    const { getByPlaceholderText, getByTestId } = renderAddMovieForm();

    const dateInput = getByPlaceholderText('Select Date');

    simulateOnChange(dateInput, 'invalid date');
    fireEvent.blur(dateInput);

    await waitFor(() => {
      expect(getByTestId('release_dateError')).not.toBe(null);
      expect(getByTestId('release_dateError').textContent).toBe('Required');
    });
  });

  it('test invalid url', async () => {
    const { getByPlaceholderText, getByTestId } = renderAddMovieForm();

    const urlInput = getByPlaceholderText('Movie URL here');

    simulateOnChange(urlInput, 'http://www.');
    fireEvent.blur(urlInput);

    await waitFor(() => {
      expect(getByTestId('poster_pathError')).not.toBe(null);
      expect(getByTestId('poster_pathError').textContent).toBe(
        'Please input a valid URL'
      );
    });
  });

  it('test submitting valid inputs', async () => {
    const {
      getByLabelText,
      getByPlaceholderText,
      queryByTestId,
    } = renderAddMovieForm();

    const titleInput = getByPlaceholderText('Title here');
    const taglineInput = getByPlaceholderText('Tagline here');
    const releaseDateInput = getByPlaceholderText('Select Date');
    const urlInput = getByPlaceholderText('Movie URL here');
    const genreInput = getByLabelText('GENRE');
    const overviewInput = getByPlaceholderText('Overview here');
    const runtimeInput = getByPlaceholderText('Runtime here');

    simulateOnChange(titleInput, getMovieListSuccessState.movieList.title);
    simulateOnChange(taglineInput, getMovieListSuccessState.movieList.tagline);
    simulateOnChange(
      releaseDateInput,
      getMovieListSuccessState.movieList.release_date
    );
    simulateOnChange(urlInput, getMovieListSuccessState.movieList.poster_path);

    simulateOnChange(genreInput, getMovieListSuccessState.movieList.genres);

    simulateOnChange(
      overviewInput,
      getMovieListSuccessState.movieList.overview
    );
    simulateOnChange(runtimeInput, getMovieListSuccessState.movieList.runtime);

    await waitFor(() => {
      expect(queryByTestId('titleError')).toBe(null);
      expect(queryByTestId('taglineError')).toBe(null);
      expect(queryByTestId('release_dateError')).toBe(null);
      expect(queryByTestId('poster_pathError')).toBe(null);
      expect(queryByTestId('genresError')).toBe(null);
      expect(queryByTestId('overviewError')).toBe(null);
      expect(queryByTestId('runtimeError')).toBe(null);
    });
  });

  // it('should close modal and dispatch AddMovie when submitting valid inputs', async () => {
  //   const store = configureMockStoreWithInitialState(
  //     movieListReducerInitialState
  //   );

  //   render(
  //     <Provider store={store}>
  //       <AddMovieForm />
  //     </Provider>
  //   );
  //   fireEvent.click(screen.getByText('SUBMIT'));
  // });
});
