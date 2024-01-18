import {incrementInBonus, incrementByAmount} from '../actions'

export function bonusReducer(state = { points: 0 }, action) {
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