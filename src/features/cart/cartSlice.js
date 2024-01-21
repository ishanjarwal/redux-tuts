import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchItems, addItem, updateItem, deleteItem } from "./cartAPI";


const initialState = {
    items: []
}

export const fetchItemsAsync = createAsyncThunk(
    'items/fetchItems',
    async () => {
        const response = await fetchItems();
        return response.data;
    }
)

export const addItemAsync = createAsyncThunk(
    'items/addItems',
    async (item) => {
        const response = await addItem({ ...item, "qty": 1 });
        return response.data;
    }
)

export const updateItemAsync = createAsyncThunk(
    'items/updateItem',
    async ({ id, modified }) => {
        const response = await updateItem(id, modified);
        return response.data;
    }
)

export const deleteItemAsync = createAsyncThunk(
    'items/deleteItem',
    async (id) => {
        await deleteItem(id);
        return id;
    }
)

export const cartSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsAsync.pending, (state) => { state.status = 'loading' })
            .addCase(fetchItemsAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.items = action.payload
            })
            .addCase(addItemAsync.pending, (state) => { state.status = 'loading' })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.items.push(action.payload);
            })
            .addCase(updateItemAsync.pending, (state) => { state.status = 'loading' })
            .addCase(updateItemAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items.splice(index, 1, action.payload);
            })
            .addCase(deleteItemAsync.pending, (state) => { state.status = 'loading' })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                const index = state.items.findIndex(item => item.id === action.payload);
                state.items.splice(index, 1);
            })
    }
})

export default cartSlice.reducer