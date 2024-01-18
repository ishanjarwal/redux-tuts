import { getUserFailed, getUserPending, getUserSuccess, increment, decrement, incrementByAmount, decrementByAmount } from '../actions/'

export function accountReducer(state = { amount: 0 }, action) {
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