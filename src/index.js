import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';
import createSagaMiddleware from 'redux-saga';
import './index.css'

const sagaMiddleware = createSagaMiddleware();

const middlewareList= process.env.NODE_ENV === 'development' ?
[sagaMiddleware, logger] :
[sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
)

sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

