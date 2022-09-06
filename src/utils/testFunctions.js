import { fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const simulateOnChange = async (input, dataToChangeTo) => {
  fireEvent.change(input, {
    target: {
      value: dataToChangeTo,
    },
  });
};

const configureMockStoreWithInitialState = (initialState) => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(initialState);
  return store;
};

export { simulateOnChange, configureMockStoreWithInitialState };
