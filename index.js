// multiple actions by switch case

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { amount: state.amount + 1 }
        case 'decrement':
            return { amount: state.amount - 1 }
        case 'incrementByAmount':
            return { amount: state.amount + action.payload }
        case 'decrementByAmount':
            return { amount: state.amount + action.payload }
        default:
            return state;
    }
}


const decrease = { type: 'decrement' }
const increase = { type: 'increment' }
const increaseByAmount = { type: 'incrementByAmount', payload: 100 }
const decreaseByAmount = { type: 'decrementByAmount', payload: 100 }

setInterval(() => {
    store.dispatch(increaseByAmount);
}, 3000);