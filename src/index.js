import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects)
    yield takeEvery('DELETE_PROJECTS', deleteProjects)
    yield takeEvery('POST_PROJECTS', postProjects)
}

function* deleteProjects(action) {
    try {
        yield call(axios.delete, `/api/projects/${action.payload}`)
        yield dispatch({type: 'FETCH_PROJECTS'})
    } catch(error) {
        console.log(error);
    }
}

function* fetchProjects() {
    try {
        const projectResponse = yield call(axios.get, '/api/projects')
        yield dispatch('SET_PROJECTS', projectResponse.data)
    } catch(error) {
        console.log(error);
    }
}

function* postProjects(action) {
    try {
        yield call(axios.post, '/api/projects', action.payload)
        yield dispatch({type: 'FETCH_PROJECTS'})
    } catch(error) {
        console.log(error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const isAuthenticated = (state = false, action) => {
    switch(action.type){
        case 'SET_ADMIN':
        state = action.payload
            return state;
        default:
            return state;
    }
}

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
        isAuthenticated,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
