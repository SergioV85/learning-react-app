import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import './styles.scss';

import { Footer } from './components/footer/footer.component';
import MovieDetailsContainer from './components/movie-details-container';
import MoviesStoreContainer from './components/movies-container';
import { NotFoundPage } from './components/not-found-page/not-found.component';
import SearchPanelContainer from './components/search-panel-container';
import StatusBarStoreContainer from './components/status-bar-container';
import { rootReducer } from './reducers/root.reducer';

const history = createBrowserHistory();
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const store = createStore(
  connectRouter(history)(persistedReducer as any),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className='c-page'>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact={true} path='/'>
              <div>
                <SearchPanelContainer />
                <StatusBarStoreContainer />
                <MoviesStoreContainer />
              </div>
            </Route>
            <Route path='/search'>
              <div>
                <SearchPanelContainer />
                <StatusBarStoreContainer />
                <MoviesStoreContainer />
              </div>
            </Route>
            <Route path='/film/:id'>
              <div>
                <MovieDetailsContainer />
                <StatusBarStoreContainer />
                <MoviesStoreContainer />
              </div>
            </Route>
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
        <Footer />
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
