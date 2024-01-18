// multiple reducers

import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import { thunk } from 'redux-thunk'

const init = 'accounts/init';
const increment = 'accounts/increment';
const decrement = 'accounts/decrement';
const incrementByAmount = 'accounts/incrementByAmount';
const decrementByAmount = 'accounts/decrementByAmount';

const incrementInBonus = 'bonus/incrementInBonus';


const store = createStore(combineReducers({
    accounts: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default, thunk));


// reducer 1
function accountReducer(state = { amount: 0 }, action) {
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

// reducer 2
function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incrementInBonus:
            return { points: state.points + 1 }
        case incrementByAmount:
            if (action.payload >= 100)
                return { points: state.points + 1 }
        default:
            return state
    }
}


// action creators
function decrease() { return { type: decrement } }
function increase() { return { type: increment } }
function increaseByAmount(payload) { return { type: incrementByAmount, payload: payload } }
function decreaseByAmount(payload) { return { type: decrementByAmount, payload: payload } }
function increaseBonus() { return { type: incrementInBonus } }

// affects both reducers' state because action is same
store.dispatch(increaseBonus());


