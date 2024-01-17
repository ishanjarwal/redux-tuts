import { createStore } from 'redux'

// creating the store
const store = createStore(reducer);

// creating the reducer 
function reducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { amount: state.amount + 1 }
        default:
            return state;
    }
}

// checking global state
// console.log(store.getState());

// creating an action
const increase = { type: 'increment' }

// sending action to store with dispatch method
store.dispatch(increase);

// rechecking global state
// console.log(store.getState());

// store.subscribe calls whenever the state changes
// store.subscribe takes a callback
// store.subscribe(() => {
//     console.log(store.getState());
// })
// setInterval(() => {
//     store.dispatch(increase);
// }, 1000);

// checking the history
const history = [];
store.subscribe(() => {
    history.push(store.getState());
    console.log(history);
})

setInterval(() => {
    store.dispatch(increase);
}, 2000);