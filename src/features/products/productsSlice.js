import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const initialState = {
    products: []
}

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchproducts',
    async () => {
        const response = await fetchProducts();
        return response.data
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.products = action.payload
            })
    }
})


export default productsSlice.reducer