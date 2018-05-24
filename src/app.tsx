import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './styles.scss';

import MoviesStoreContainer from './components/movies-container';
import { rootReducer } from './reducers/root.reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

render(
  <Provider store={store}>
    <MoviesStoreContainer />
  </Provider>,
  document.getElementById('root'),
);
