import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

// Create the saga middlware 
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
  )

  // Then run saga
  sagaMiddleware.run(rootSaga);
  return { store }
}

export default configureStore;