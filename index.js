// asynchronous operations and thunk

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import { thunk } from 'redux-thunk'

const init = 'init';
const increment = 'increment';
const decrement = 'decrement';
const incrementByAmount = 'incrementByAmount';
const decrementByAmount = 'decrementByAmount';

const store = createStore(reducer, applyMiddleware(logger.default, thunk));



function reducer(state, action) {
    switch (action.type) {
        case init:
            return { amount: action.payload }
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

function initUser(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch({ type: init, payload: data.amount })
    }
}
function decrease() { return { type: decrement } }
function increase() { return { type: increment } }
function increaseByAmount(payload) { return { type: incrementByAmount, payload: payload } }
function decreaseByAmount(payload) { return { type: decrementByAmount, payload: payload } }

store.dispatch(initUser(3));
