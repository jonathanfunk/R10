import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combinedReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
}); 

const store = createStoreWithNavigation(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;