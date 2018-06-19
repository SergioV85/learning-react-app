import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root.reducer';

export interface IExtWindow extends Window {
  __PRELOADED_STATE__: any;
}

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const createLocalStore = (url = '/', data = {}) => {
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url],
      })
    : createBrowserHistory();

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  );

  // Do we have preloaded state available? Great, save it.
  const initialState = !isServer
    ? (window as IExtWindow).__PRELOADED_STATE__
    : data;

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete (window as IExtWindow).__PRELOADED_STATE__;
  }

  // Create the store
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers,
  );

  return {
    history,
    store,
  };
};
