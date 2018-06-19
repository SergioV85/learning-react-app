import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './app';
import { createLocalStore } from './store';

const { history, store } = createLocalStore();

const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
const root = document.querySelector('#root');
hydrate(Application, root);
