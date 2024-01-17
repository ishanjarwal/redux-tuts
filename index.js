// use of logger middleware

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { amount: state.amount + 1 }
        default:
            return state;
    }
}


const increase = { type: 'increment' }

setInterval(() => {
    store.dispatch(increase);
}, 2000);