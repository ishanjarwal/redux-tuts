import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import axios from 'axios'
import thunk from 'redux-thunk'

// declaring action types as constants
const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmt';
const init = 'init';

// creating a store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));


// creating a reducer
function reducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case inc:
            // wrong approach to change state (mutable state)
            // state.amount = state.amount+1
            // return state

            // correct way (immutable state)
            return { amount: state.amount + 1 };
        case dec:
            return { amount: state.amount - 1 };
        case incByAmt:
            return { amount: state.amount + action.payload.amount };
        case init:
            return { amount: action.payload.amount }
        default:
            return state; //default action
    }
}

// //getting the current global state
// console.log(store.getState());

// // send an action with dispatch
// store.dispatch({ type: "increment" });

// // getting the updated global state
// console.log(store.getState());

// task : store the history of state
// const history = [];

// store.subscribe(() => {
//     history.push(store.getState());
//     console.log(history)
// })

// setInterval(() => {
//     store.dispatch({ type: 'increment' });
// }, 2000);

// using middleware logger
// setInterval(() => {
//     store.dispatch({ type: 'increment' });
// }, 2000);

// other actions
// 1. decrement
// setInterval(() => {
//     store.dispatch({ type: 'decrement' });
// }, 2000);
// 2. incrementByAmt
// setInterval(() => {
//     store.dispatch({ type: incByAmt, payload: { amount: 100 } });
// }, 2000);

// Action Creators
function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmt(value) {
    return { type: incByAmt, payload: { amount: value } }
}

// calling with action creators
// setInterval(() => {
//     store.dispatch(incrementByAmt(1000))
// }, 2000);

// calling json-server api
// async function initUser() {
//     const { data } = await axios.get('http://localhost:3000/accounts/1')
//     console.log(data);
// }
// initUser();

// calling api with thunk middleware
// async function getUser(dispatch, getState) {
//     const { data } = await axios.get('http://localhost:3000/accounts/1')
//     dispatch(initUser(data.amount))
// }

// // action creator nothing else
// function initUser(value) {
//     return { type: init, payload: { amount: value } }
// }
// store.dispatch(getUser)

// getting userID in parameter :

// action creator nothing else
function initUser(value) {
    return { type: init, payload: { amount: value } }
}
function getUser(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
        console.log(data);
        dispatch(initUser(data.amount));
    }
}
store.dispatch(getUser(3));