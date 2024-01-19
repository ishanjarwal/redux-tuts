import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    amount: 10 ,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1; // immutability from immer
        },
        decrement: (state) => {
            state.amount -= 1;
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        }

    }
})

// action creators are exported
export const { increment, decrement, incrementByAmount } = accountSlice.actions
export default accountSlice.reducer