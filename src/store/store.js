import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  appR: appReducer,
});

const logger = store => next => (action) => {
  console.log('[Middleware] dispatching', action);
  const result = next(action);
  console.log('[Middleware] next state', store.getState());
  return result;
};

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
