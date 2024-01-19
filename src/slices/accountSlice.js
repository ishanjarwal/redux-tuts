import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount: 0,
}

export const initUser = createAsyncThunk(
    'account/getUser',
    async (id, thunkAPI) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
        return data.amount
    }
)

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

    },
    extraReducers: (builder) => {
        builder.addCase(initUser.fulfilled, (state, action) => {
            state.amount = action.payload; //immer makes immutable
            state.pending = false;
        }).addCase(initUser.pending, (state, action) => {
            state.pending = true;
        }).addCase(initUser.rejected, (state, action) => {
            state.error = action.error.message
            state.pending = false;
        })
    }
})

// action creators are exported
export const { increment, decrement, incrementByAmount } = accountSlice.actions
export default accountSlice.reducer