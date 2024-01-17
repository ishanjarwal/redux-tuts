// action creators

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger.default));

const increment = 'increment';
const decrement = 'decrement';
const incrementByAmount = 'incrementByAmount';
const decrementByAmount = 'decrementByAmount';


function reducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case increment:
            return { amount: state.amount + 1 }
        case decrement:
            return { amount: state.amount - 1 }
        case incrementByAmount:
            return { amount: state.amount + action.payload }
        case decrementByAmount:
            return { amount: state.amount + action.payload }
        default:
            return state;
    }
}


function decrease() { return { type: decrement } }
function increase() { return { type: increment } }
function increaseByAmount(payload) { return { type: incrementByAmount, payload: payload } }
function decreaseByAmount(payload) { return { type: decrementByAmount, payload: payload } }

setInterval(() => {
    store.dispatch(increaseByAmount(500));
}, 3000);