import React from 'react';
import ReactDOM from 'react-dom';
//리덕스
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//리덕스 스토어를 연결해준다
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));