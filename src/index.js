import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'tailwindcss/dist/tailwind.min.css';
import './index.scss';
import {createStore, compose as origCompose, applyMiddleware} from 'redux';
import {rootReducer} from "./reducers";
import {Provider} from "react-redux";
import {save, load, combineLoads} from "redux-localstorage-simple";
import {routerMiddleware} from 'connected-react-router';
import saga from './saga';
import createSagaMiddleware from 'redux-saga';
import history from "./history";

const sagaMiddleware = createSagaMiddleware();
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;
const store = createStore(
    rootReducer(history),
    combineLoads(
        load({
          states: ['activities'],
          namespace: 'domicilio'
        })
    ),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
            save({
              states: ['activities'],
              namespace: 'domicilio',
              debounce: 500
            })
        )
    )
);
sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
      <App history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
