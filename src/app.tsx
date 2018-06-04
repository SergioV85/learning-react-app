import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import './styles.scss';

import MoviesStoreContainer from './components/movies-container';
import { rootReducer } from './reducers/root.reducer';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const store = createStore(
  persistedReducer as any,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MoviesStoreContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
