import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import './styles.scss';

import MoviesStoreContainer from './components/movies-container';
import { rootReducer } from './reducers/root.reducer';

const store = createStore(
  rootReducer,
  devToolsEnhancer({
    name: 'React Learning App',
  }),
);

render(
  <Provider store={store}>
    <MoviesStoreContainer />
  </Provider>,
  document.getElementById('root'),
);
