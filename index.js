// handling async states and errors

import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import { thunk } from 'redux-thunk'


const increment = 'accounts/increment';
const decrement = 'accounts/decrement';
const incrementByAmount = 'accounts/incrementByAmount';
const decrementByAmount = 'accounts/decrementByAmount';

const getUserPending = 'getUserPending';
const getUserSuccess = 'getUserSuccess';
const getUserFailed = 'getUserFailed';


const store = createStore(accountReducer, applyMiddleware(logger.default, thunk));


// reducer 1
function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case getUserPending:
            return { ...state, pending: true }
        case getUserSuccess:
            return { amount: action.payload }
        case getUserFailed:
            return { ...state, error: action.error }
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


// action creators
function decrease() { return { type: decrement } }
function increase() { return { type: increment } }
function increaseByAmount(payload) { return { type: incrementByAmount, payload: payload } }
function decreaseByAmount(payload) { return { type: decrementByAmount, payload: payload } }
function gettingUserPending() { return { type: getUserPending } }
function gettingUserSuccess(payload) { return { type: getUserSuccess, payload: payload } }
function gettingUserFailed(error) { return { type: getUserFailed, error: error } }


function initUser(id) {
    return async (dispatch, getState) => {
        const url = `http://localhost:3000/accounts/${id}`;
        try {
            dispatch(gettingUserPending());
            const { data } = await axios.get(url);
            dispatch(gettingUserSuccess(data.amount))
        } catch (error) {
            dispatch(gettingUserFailed(error.message))
        }
    }
}

// affects both reducers' state because action is same
store.dispatch(initUser(1));


